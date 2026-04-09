#!/usr/bin/env tsx
/**
 * SDK Manifest Generator
 *
 * Introspects the Speakeasy-generated SDK source code and produces
 * sdk-manifest.json — a machine-readable mapping from HTTP operations
 * (METHOD /path) to SDK module names and method names.
 *
 * This manifest is consumed by the Wistia CLI code generator to
 * auto-derive SDK call sites without hardcoded mappings.
 *
 * Usage: npx tsx scripts/generate-manifest.ts
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, basename } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SDK_DIR = join(ROOT, "src", "sdk");
const FUNCS_DIR = join(ROOT, "src", "funcs");
const OUTPUT = join(ROOT, "sdk-manifest.json");

interface ManifestEntry {
  sdkModule: string;
  sdkMethod: string;
}

interface Manifest {
  version: string;
  generatedAt: string;
  operations: Record<string, ManifestEntry>;
}

// Step 1: Parse sdk.ts to get getter names and their class types
function parseSdkClass(): Map<string, string> {
  const sdkSrc = readFileSync(join(SDK_DIR, "sdk.ts"), "utf8");
  const getterToClass = new Map<string, string>();

  // Match: get <name>(): <ClassName> {
  const getterRegex = /get (\w+)\(\): (\w+) \{/g;
  let match;
  while ((match = getterRegex.exec(sdkSrc)) !== null) {
    getterToClass.set(match[1]!, match[2]!);
  }
  return getterToClass;
}

// Step 2: For each SDK module class, extract method names and their func imports
function parseModuleClass(
  filePath: string,
): Array<{ method: string; funcName: string }> {
  const src = readFileSync(filePath, "utf8");
  const methods: Array<{ method: string; funcName: string }> = [];

  // Extract func imports: import { funcName, ... } from "../funcs/funcName.js";
  const funcImports = new Map<string, string>();
  const importRegex = /import \{ (\w+)[^}]*\} from "\.\.\/funcs\/(\w+)\.js"/g;
  let match;
  while ((match = importRegex.exec(src)) !== null) {
    funcImports.set(match[1]!, match[2]!);
  }

  // Find all async method positions, then extract each method's body
  const asyncMethodStarts: Array<{ name: string; index: number }> = [];
  const asyncRegex = /\basync (\w+)\(/g;
  while ((match = asyncRegex.exec(src)) !== null) {
    asyncMethodStarts.push({ name: match[1]!, index: match.index });
  }

  for (let i = 0; i < asyncMethodStarts.length; i++) {
    const start = asyncMethodStarts[i]!;
    const end = asyncMethodStarts[i + 1]?.index ?? src.length;
    const methodBody = src.slice(start.index, end);

    const unwrapMatch = methodBody.match(/unwrapAsync\(\s*(\w+)\(/);
    if (unwrapMatch) {
      const funcCallName = unwrapMatch[1]!;
      const funcFileName = funcImports.get(funcCallName);
      if (funcFileName) {
        methods.push({ method: start.name, funcName: funcFileName });
      }
    }
  }

  return methods;
}

// Step 3: Parse a func file to extract HTTP method and path
function parseFuncFile(
  funcFileName: string,
): { httpMethod: string; path: string } | null {
  const filePath = join(FUNCS_DIR, `${funcFileName}.ts`);
  let src: string;
  try {
    src = readFileSync(filePath, "utf8");
  } catch {
    return null;
  }

  // Extract path from: pathToFunc("/some/path/{param}") — may be single or multi-line
  const pathRegex = /const path = pathToFunc\(\s*"([^"]+)"/g;
  let pathMatch;
  let apiPath: string | null = null;
  while ((pathMatch = pathRegex.exec(src)) !== null) {
    apiPath = pathMatch[1]!;
  }

  // Extract HTTP method from: method: "GET",
  const methodRegex = /method: "(\w+)"/;
  const methodMatch = src.match(methodRegex);

  if (!apiPath || !methodMatch) {
    return null;
  }

  return { httpMethod: methodMatch[1]!, path: apiPath };
}

// Step 4: Map class names to their file names
function classNameToFile(): Map<string, string> {
  const mapping = new Map<string, string>();
  const sdkFiles = readdirSync(SDK_DIR).filter(
    (f) => f.endsWith(".ts") && f !== "sdk.ts" && f !== "index.ts",
  );

  for (const file of sdkFiles) {
    const src = readFileSync(join(SDK_DIR, file), "utf8");
    const classMatch = src.match(/export class (\w+) extends ClientSDK/);
    if (classMatch) {
      mapping.set(classMatch[1]!, file);
    }
  }
  return mapping;
}

// Main
function main(): void {
  console.log("SDK Manifest Generator");
  console.log("======================\n");

  // Read package version
  const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
  const version: string = pkg.version;

  // Step 1: Get SDK class structure
  const getterToClass = parseSdkClass();
  console.log(`Found ${getterToClass.size} SDK modules in sdk.ts`);

  // Step 2: Map class names to files
  const classToFile = classNameToFile();

  // Step 3: Build the manifest
  const operations: Record<string, ManifestEntry> = {};
  let totalOps = 0;

  function addModuleMethods(
    sdkModulePath: string,
    className: string,
  ): void {
    const fileName = classToFile.get(className);
    if (!fileName) {
      console.warn(`  Warning: No file found for class ${className}`);
      return;
    }

    const filePath = join(SDK_DIR, fileName);
    const methods = parseModuleClass(filePath);

    for (const { method, funcName } of methods) {
      const httpInfo = parseFuncFile(funcName);
      if (!httpInfo) {
        console.warn(
          `  Warning: Could not parse func ${funcName} for ${sdkModulePath}.${method}()`,
        );
        continue;
      }

      const key = `${httpInfo.httpMethod} ${httpInfo.path}`;

      // When multiple SDK methods map to the same HTTP operation (e.g.,
      // create vs createMultipart for different content types), prefer the
      // non-multipart variant since that's what CLI consumers use.
      const existing = operations[key];
      if (existing && method.toLowerCase().includes("multipart")) {
        continue;
      }

      operations[key] = { sdkModule: sdkModulePath, sdkMethod: method };
      totalOps++;
    }

    // Check for nested sub-resource getters (e.g., channels.channelEpisodes)
    const src = readFileSync(filePath, "utf8");
    const nestedGetterRegex = /get (\w+)\(\): (\w+) \{/g;
    let nestedMatch;
    while ((nestedMatch = nestedGetterRegex.exec(src)) !== null) {
      const nestedGetterName = nestedMatch[1]!;
      const nestedClassName = nestedMatch[2]!;
      if (classToFile.has(nestedClassName)) {
        addModuleMethods(
          `${sdkModulePath}.${nestedGetterName}`,
          nestedClassName,
        );
      }
    }
  }

  for (const [getterName, className] of getterToClass) {
    addModuleMethods(getterName, className);
  }

  const manifest: Manifest = {
    version,
    generatedAt: new Date().toISOString(),
    operations,
  };

  writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\nGenerated sdk-manifest.json with ${totalOps} operations`);
  console.log(`SDK version: ${version}`);

  // Validation: print any operations without clean names
  let verbose = 0;
  for (const [key, entry] of Object.entries(operations)) {
    if (
      entry.sdkMethod.length > 20 ||
      entry.sdkMethod.includes(entry.sdkModule.charAt(0).toUpperCase())
    ) {
      console.warn(`  Verbose: ${key} → ${entry.sdkModule}.${entry.sdkMethod}()`);
      verbose++;
    }
  }
  if (verbose > 0) {
    console.warn(
      `\n⚠ ${verbose} operations have verbose method names — consider adding overlay entries`,
    );
  }
}

main();

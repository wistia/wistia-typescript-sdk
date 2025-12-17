import { SDK_METADATA } from "../lib/config.js";
import {
  BeforeRequestHook,
  BeforeRequestContext
} from "./types.js";

/**
 * Converts the OpenAPI doc version from SDK_METADATA to the API version header format.
 * Converts a version like "2025.11.0" to "2025-11".
 */
function getApiVersion(): string {
  const version = SDK_METADATA.openapiDocVersion;
  const parts = version.split(".");

  if (parts.length >= 2) {
    return `${parts[0]}-${parts[1]}`;
  } else {
    console.log("version not found, falling back to 2025-11");
  }

  return "2025-11";
}

// Cache the API version at module load time (only calculated once)
const API_VERSION = getApiVersion();

export class AddVersionHeaderHook implements BeforeRequestHook {
  beforeRequest(_hookCtx: BeforeRequestContext, request: Request): Request {
    request.headers.append("X-Wistia-API-Version", API_VERSION);
    return request;
  }
}

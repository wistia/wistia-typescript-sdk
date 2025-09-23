# GitHub Actions CI/CD

This repository uses GitHub Actions for continuous integration and deployment.

## Workflows

### 🧪 Integration Tests (`test-integration.yaml`)
- **Triggers**: Pull requests, pushes to main, manual dispatch, and as a reusable workflow
- **Purpose**: Runs comprehensive integration tests against the Wistia API
- **Requirements**: `WISTIA_API_KEY` secret must be set in repository settings
- **Features**:
  - Tests both built JavaScript and TypeScript versions
  - Installs ffmpeg for video generation
  - Gracefully skips tests if API key is not available (e.g., for forks)
  - Uploads test artifacts on failure

### 📦 Publish (`sdk_publish.yaml`)
- **Triggers**: Pushes to main (when `.speakeasy/gen.lock` changes), manual dispatch
- **Purpose**: Publishes the SDK to npm after successful integration tests
- **Dependencies**: Requires integration tests to pass first
- **Uses**: Speakeasy's publish workflow with pre-test validation

### 🔄 Generate (`sdk_generation.yaml`)
- **Triggers**: Scheduled daily, workflow dispatch, PR labels
- **Purpose**: Generates SDK updates using Speakeasy
- **Uses**: Speakeasy's generation workflow

## Required Secrets

Set these in your repository settings (`Settings` → `Secrets and variables` → `Actions`):

- `WISTIA_API_KEY`: Your Wistia API key for integration tests
- `NPM_TOKEN`: NPM token for publishing
- `SPEAKEASY_API_KEY`: Speakeasy API key for SDK generation

## Local Development

The integration tests can be run locally:

```bash
# Set up environment
cp .env.example .env
# Edit .env and add your WISTIA_API_KEY

# Run tests
npm test                 # TypeScript version
npm run test:built       # Built JavaScript version (requires npm run build first)
npm run test:watch       # Watch mode for development
```

## Test Features

- **Comprehensive Coverage**: Tests all major SDK operations
- **Real API Integration**: Makes actual calls to Wistia API
- **Automatic Cleanup**: Cleans up all test resources
- **Temporary Files**: Uses system temp directory, no file pollution
- **Self-Contained**: Each test run is isolated with timestamp prefixes

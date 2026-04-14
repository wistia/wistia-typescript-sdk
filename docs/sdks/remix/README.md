# Remix

## Overview

### Available Operations

* [postRemixes](#postremixes) - Create Remix
* [getRemixesRemixHashedId](#getremixesremixhashedid) - Get Remix
* [postRemixesRemixHashedIdContinue](#postremixesremixhashedidcontinue) - Continue Remix
* [postRemixesRemixHashedIdExport](#postremixesremixhashedidexport) - Export Remix
* [getRemixAccountStatus](#getremixaccountstatus) - Get Remix Account Status

## postRemixes

Start a new video remix job. The remix is processed asynchronously — poll
the show endpoint to check status and get preview URLs when ready.

Remix uses AI to analyze video transcripts and create edited versions
(highlight reels, trailers, cut-downs, etc.) based on your instructions.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/remixes" method="post" path="/remixes" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.remix.postRemixes({
    mediaHashedIds: [
      "abc123",
      "def456",
    ],
    instructions: "Create a 60-second highlight reel focusing on the product demo section",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { remixPostRemixes } from "@wistia/wistia-api-client/funcs/remixPostRemixes.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await remixPostRemixes(wistia, {
    mediaHashedIds: [
      "abc123",
      "def456",
    ],
    instructions: "Create a 60-second highlight reel focusing on the product demo section",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("remixPostRemixes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostRemixesRequest](../../models/operations/postremixesrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostRemixesResponse](../../models/operations/postremixesresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.PostRemixesUnauthorizedError        | 401                                        | application/json                           |
| errors.PostRemixesUnprocessableEntityError | 422                                        | application/json                           |
| errors.PostRemixesInternalServerError      | 500                                        | application/json                           |
| errors.WistiaDefaultError                  | 4XX, 5XX                                   | \*/\*                                      |

## getRemixesRemixHashedId

Get the current status of a remix job. When the status reaches
"edit_tree_generated", preview URLs are included in the response.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all folder and media data
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/remixes/{remixHashedId}" method="get" path="/remixes/{remixHashedId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.remix.getRemixesRemixHashedId({
    remixHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { remixGetRemixesRemixHashedId } from "@wistia/wistia-api-client/funcs/remixGetRemixesRemixHashedId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await remixGetRemixesRemixHashedId(wistia, {
    remixHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("remixGetRemixesRemixHashedId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRemixesRemixHashedIdRequest](../../models/operations/getremixesremixhashedidrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetRemixesRemixHashedIdResponse](../../models/operations/getremixesremixhashedidresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.GetRemixesRemixHashedIdUnauthorizedError   | 401                                               | application/json                                  |
| errors.GetRemixesRemixHashedIdNotFoundError       | 404                                               | application/json                                  |
| errors.GetRemixesRemixHashedIdInternalServerError | 500                                               | application/json                                  |
| errors.WistiaDefaultError                         | 4XX, 5XX                                          | \*/\*                                             |

## postRemixesRemixHashedIdContinue

Submit a follow-up edit to an existing remix. Creates a new remix version
in the same conversation. The previous remix is preserved and can be
referenced later.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/remixes/{remixHashedId}/continue" method="post" path="/remixes/{remixHashedId}/continue" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.remix.postRemixesRemixHashedIdContinue({
    remixHashedId: "<id>",
    requestBody: {
      instructions: "Cut the intro and add background music",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { remixPostRemixesRemixHashedIdContinue } from "@wistia/wistia-api-client/funcs/remixPostRemixesRemixHashedIdContinue.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await remixPostRemixesRemixHashedIdContinue(wistia, {
    remixHashedId: "<id>",
    requestBody: {
      instructions: "Cut the intro and add background music",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("remixPostRemixesRemixHashedIdContinue failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostRemixesRemixHashedIdContinueRequest](../../models/operations/postremixesremixhashedidcontinuerequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostRemixesRemixHashedIdContinueResponse](../../models/operations/postremixesremixhashedidcontinueresponse.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.PostRemixesRemixHashedIdContinueUnauthorizedError        | 401                                                             | application/json                                                |
| errors.PostRemixesRemixHashedIdContinueNotFoundError            | 404                                                             | application/json                                                |
| errors.PostRemixesRemixHashedIdContinueUnprocessableEntityError | 422                                                             | application/json                                                |
| errors.PostRemixesRemixHashedIdContinueInternalServerError      | 500                                                             | application/json                                                |
| errors.WistiaDefaultError                                       | 4XX, 5XX                                                        | \*/\*                                                           |

## postRemixesRemixHashedIdExport

Export a completed remix to a folder in your account. Triggers the full
render pipeline. The remix must have reached "edit_tree_generated" status.

If no folder_id is provided, the remix is exported to the source media's folder.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/remixes/{remixHashedId}/export" method="post" path="/remixes/{remixHashedId}/export" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.remix.postRemixesRemixHashedIdExport({
    remixHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { remixPostRemixesRemixHashedIdExport } from "@wistia/wistia-api-client/funcs/remixPostRemixesRemixHashedIdExport.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await remixPostRemixesRemixHashedIdExport(wistia, {
    remixHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("remixPostRemixesRemixHashedIdExport failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostRemixesRemixHashedIdExportRequest](../../models/operations/postremixesremixhashedidexportrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostRemixesRemixHashedIdExportResponse](../../models/operations/postremixesremixhashedidexportresponse.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.PostRemixesRemixHashedIdExportUnauthorizedError        | 401                                                           | application/json                                              |
| errors.PostRemixesRemixHashedIdExportNotFoundError            | 404                                                           | application/json                                              |
| errors.PostRemixesRemixHashedIdExportUnprocessableEntityError | 422                                                           | application/json                                              |
| errors.PostRemixesRemixHashedIdExportInternalServerError      | 500                                                           | application/json                                              |
| errors.WistiaDefaultError                                     | 4XX, 5XX                                                      | \*/\*                                                         |

## getRemixAccountStatus

Check the current account's remix credit usage and limits.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all folder and media data
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/remix_account_status" method="get" path="/remix_account_status" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.remix.getRemixAccountStatus();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { remixGetRemixAccountStatus } from "@wistia/wistia-api-client/funcs/remixGetRemixAccountStatus.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await remixGetRemixAccountStatus(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("remixGetRemixAccountStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetRemixAccountStatusResponse](../../models/operations/getremixaccountstatusresponse.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.GetRemixAccountStatusUnauthorizedError   | 401                                             | application/json                                |
| errors.GetRemixAccountStatusInternalServerError | 500                                             | application/json                                |
| errors.WistiaDefaultError                       | 4XX, 5XX                                        | \*/\*                                           |
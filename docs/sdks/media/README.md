# Media

## Overview

### Available Operations

* [getMedias](#getmedias) - List Media
* [getMediasMediaHashedId](#getmediasmediahashedid) - Show Media
* [putMediasMediaHashedId](#putmediasmediahashedid) - Update Media
* [deleteMediasMediaHashedId](#deletemediasmediahashedid) - Delete Media
* [postMediasMediaHashedIdCopy](#postmediasmediahashedidcopy) - Copy Media
* [putMediasMediaHashedIdSwap](#putmediasmediahashedidswap) - Swap Media
* [getMediasMediaHashedIdStats](#getmediasmediahashedidstats) - Show Media Aggregated Stats
* [postMediasMediaHashedIdTranslate](#postmediasmediahashedidtranslate) - Translate Media
* [putMediasArchive](#putmediasarchive) - Archive Media
* [putMediasMove](#putmediasmove) - Move Media
* [putMediasRestore](#putmediasrestore) - Restore Media
* [putMediasCopy](#putmediascopy) - Bulk Copy Media

## getMedias

Lists the media belonging to the account. This endpoint can also be used to
do a batch fetch based off of the hashed id.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all folder and media data
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias" method="get" path="/medias" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.getMedias({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaGetMedias } from "@wistia/wistia-api-client/funcs/mediaGetMedias.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaGetMedias(wistia, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaGetMedias failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasRequest](../../models/operations/getmediasrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasResponse[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetMediasBadRequestError     | 400                                 | application/json                    |
| errors.GetMediasUnauthorizedError   | 401                                 | application/json                    |
| errors.GetMediasInternalServerError | 500                                 | application/json                    |
| errors.WistiaDefaultError           | 4XX, 5XX                            | \*/\*                               |

## getMediasMediaHashedId

Fetches a single media by its hashed id.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all folder and media data
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaHashedId}" method="get" path="/medias/{mediaHashedId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.getMediasMediaHashedId({
    mediaHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaGetMediasMediaHashedId } from "@wistia/wistia-api-client/funcs/mediaGetMediasMediaHashedId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaGetMediasMediaHashedId(wistia, {
    mediaHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaGetMediasMediaHashedId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaHashedIdRequest](../../models/operations/getmediasmediahashedidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaHashedIdResponse](../../models/operations/getmediasmediahashedidresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.GetMediasMediaHashedIdUnauthorizedError   | 401                                              | application/json                                 |
| errors.GetMediasMediaHashedIdNotFoundError       | 404                                              | application/json                                 |
| errors.GetMediasMediaHashedIdInternalServerError | 500                                              | application/json                                 |
| errors.WistiaDefaultError                        | 4XX, 5XX                                         | \*/\*                                            |

## putMediasMediaHashedId

Updates the attributes on a media.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaHashedId}" method="put" path="/medias/{mediaHashedId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.putMediasMediaHashedId({
    mediaHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaPutMediasMediaHashedId } from "@wistia/wistia-api-client/funcs/mediaPutMediasMediaHashedId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaPutMediasMediaHashedId(wistia, {
    mediaHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaPutMediasMediaHashedId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaHashedIdRequest](../../models/operations/putmediasmediahashedidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaHashedIdResponse](../../models/operations/putmediasmediahashedidresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.PutMediasMediaHashedIdBadRequestError     | 400                                              | application/json                                 |
| errors.PutMediasMediaHashedIdUnauthorizedError   | 401                                              | application/json                                 |
| errors.PutMediasMediaHashedIdNotFoundError       | 404                                              | application/json                                 |
| errors.PutMediasMediaHashedIdInternalServerError | 500                                              | application/json                                 |
| errors.WistiaDefaultError                        | 4XX, 5XX                                         | \*/\*                                            |

## deleteMediasMediaHashedId

Deletes a media.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/medias/{mediaHashedId}" method="delete" path="/medias/{mediaHashedId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.deleteMediasMediaHashedId({
    mediaHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaDeleteMediasMediaHashedId } from "@wistia/wistia-api-client/funcs/mediaDeleteMediasMediaHashedId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaDeleteMediasMediaHashedId(wistia, {
    mediaHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaDeleteMediasMediaHashedId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMediasMediaHashedIdRequest](../../models/operations/deletemediasmediahashedidrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteMediasMediaHashedIdResponse](../../models/operations/deletemediasmediahashedidresponse.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.DeleteMediasMediaHashedIdUnauthorizedError   | 401                                                 | application/json                                    |
| errors.DeleteMediasMediaHashedIdNotFoundError       | 404                                                 | application/json                                    |
| errors.DeleteMediasMediaHashedIdInternalServerError | 500                                                 | application/json                                    |
| errors.WistiaDefaultError                           | 4XX, 5XX                                            | \*/\*                                               |

## postMediasMediaHashedIdCopy

This endpoint copies a media and its assets to a destination folder (defaults to source media).

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/medias/{mediaHashedId}/copy" method="post" path="/medias/{mediaHashedId}/copy" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.postMediasMediaHashedIdCopy({
    mediaHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaPostMediasMediaHashedIdCopy } from "@wistia/wistia-api-client/funcs/mediaPostMediasMediaHashedIdCopy.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaPostMediasMediaHashedIdCopy(wistia, {
    mediaHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaPostMediasMediaHashedIdCopy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostMediasMediaHashedIdCopyRequest](../../models/operations/postmediasmediahashedidcopyrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostMediasMediaHashedIdCopyResponse](../../models/operations/postmediasmediahashedidcopyresponse.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.PostMediasMediaHashedIdCopyBadRequestError     | 400                                                   | application/json                                      |
| errors.PostMediasMediaHashedIdCopyUnauthorizedError   | 401                                                   | application/json                                      |
| errors.PostMediasMediaHashedIdCopyNotFoundError       | 404                                                   | application/json                                      |
| errors.MethodNotAllowedError                          | 405                                                   | application/json                                      |
| errors.PostMediasMediaHashedIdCopyInternalServerError | 500                                                   | application/json                                      |
| errors.WistiaDefaultError                             | 4XX, 5XX                                              | \*/\*                                                 |

## putMediasMediaHashedIdSwap

Swap one media with another media. This operation queues a background job to replace the original media with the replacement media while preserving the original media's hashed ID and URLs.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaHashedId}/swap" method="put" path="/medias/{mediaHashedId}/swap" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.putMediasMediaHashedIdSwap({
    mediaHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaPutMediasMediaHashedIdSwap } from "@wistia/wistia-api-client/funcs/mediaPutMediasMediaHashedIdSwap.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaPutMediasMediaHashedIdSwap(wistia, {
    mediaHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaPutMediasMediaHashedIdSwap failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaHashedIdSwapRequest](../../models/operations/putmediasmediahashedidswaprequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaHashedIdSwapResponse](../../models/operations/putmediasmediahashedidswapresponse.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.PutMediasMediaHashedIdSwapBadRequestError     | 400                                                  | application/json                                     |
| errors.PutMediasMediaHashedIdSwapUnauthorizedError   | 401                                                  | application/json                                     |
| errors.PutMediasMediaHashedIdSwapNotFoundError       | 404                                                  | application/json                                     |
| errors.PutMediasMediaHashedIdSwapInternalServerError | 500                                                  | application/json                                     |
| errors.WistiaDefaultError                            | 4XX, 5XX                                             | \*/\*                                                |

## getMediasMediaHashedIdStats

Aggregated tracking statistics for a video embedded on your site.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all folder and media data
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaHashedId}/stats" method="get" path="/medias/{mediaHashedId}/stats" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.getMediasMediaHashedIdStats({
    mediaHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaGetMediasMediaHashedIdStats } from "@wistia/wistia-api-client/funcs/mediaGetMediasMediaHashedIdStats.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaGetMediasMediaHashedIdStats(wistia, {
    mediaHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaGetMediasMediaHashedIdStats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaHashedIdStatsRequest](../../models/operations/getmediasmediahashedidstatsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaHashedIdStatsResponse](../../models/operations/getmediasmediahashedidstatsresponse.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.GetMediasMediaHashedIdStatsBadRequestError     | 400                                                   | application/json                                      |
| errors.GetMediasMediaHashedIdStatsUnauthorizedError   | 401                                                   | application/json                                      |
| errors.GetMediasMediaHashedIdStatsNotFoundError       | 404                                                   | application/json                                      |
| errors.GetMediasMediaHashedIdStatsInternalServerError | 500                                                   | application/json                                      |
| errors.WistiaDefaultError                             | 4XX, 5XX                                              | \*/\*                                                 |

## postMediasMediaHashedIdTranslate

Translates the transcript for a media.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/medias/{mediaHashedId}/translate" method="post" path="/medias/{mediaHashedId}/translate" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.postMediasMediaHashedIdTranslate({
    mediaHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaPostMediasMediaHashedIdTranslate } from "@wistia/wistia-api-client/funcs/mediaPostMediasMediaHashedIdTranslate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaPostMediasMediaHashedIdTranslate(wistia, {
    mediaHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaPostMediasMediaHashedIdTranslate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostMediasMediaHashedIdTranslateRequest](../../models/operations/postmediasmediahashedidtranslaterequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostMediasMediaHashedIdTranslateResponse](../../models/operations/postmediasmediahashedidtranslateresponse.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.PostMediasMediaHashedIdTranslateBadRequestError          | 400                                                             | application/json                                                |
| errors.PostMediasMediaHashedIdTranslateUnauthorizedError        | 401                                                             | application/json                                                |
| errors.PostMediasMediaHashedIdTranslateNotFoundError            | 404                                                             | application/json                                                |
| errors.PostMediasMediaHashedIdTranslateUnprocessableEntityError | 422                                                             | application/json                                                |
| errors.PostMediasMediaHashedIdTranslateInternalServerError      | 500                                                             | application/json                                                |
| errors.WistiaDefaultError                                       | 4XX, 5XX                                                        | \*/\*                                                           |

## putMediasArchive

This method accepts a list of up to 100 medias to archive per request. It processes requests asynchronously and will return a background_job_status object rather than the typical Media response object. Note that webinar medias and Soapbox videos imported to Wistia before September 1, 2023 cannot be archived.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/archive" method="put" path="/medias/archive" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.putMediasArchive({
    hashedIds: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaPutMediasArchive } from "@wistia/wistia-api-client/funcs/mediaPutMediasArchive.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaPutMediasArchive(wistia, {
    hashedIds: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaPutMediasArchive failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasArchiveRequest](../../models/operations/putmediasarchiverequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasArchiveResponse](../../models/operations/putmediasarchiveresponse.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.PutMediasArchiveUnauthorizedError        | 401                                             | application/json                                |
| errors.PutMediasArchiveForbiddenError           | 403                                             | application/json                                |
| errors.PutMediasArchiveUnprocessableEntityError | 422                                             | application/json                                |
| errors.PutMediasArchiveInternalServerError      | 500                                             | application/json                                |
| errors.WistiaDefaultError                       | 4XX, 5XX                                        | \*/\*                                           |

## putMediasMove

Move one or many media to a different folder and optionally to a specific subfolder.
Max 100 media per request, and max 10 requests in 5 minutes.
Note: this is a different rate limit than applies to the rest of the api!

If a subfolder_id is provided, media will be moved to that subfolder. The subfolder
must belong to the specified folder.

Returns a Background Job as the move is async.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/move" method="put" path="/medias/move" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.putMediasMove({
    hashedIds: [
      "<value 1>",
      "<value 2>",
    ],
    folderId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaPutMediasMove } from "@wistia/wistia-api-client/funcs/mediaPutMediasMove.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaPutMediasMove(wistia, {
    hashedIds: [
      "<value 1>",
      "<value 2>",
    ],
    folderId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaPutMediasMove failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMoveRequest](../../models/operations/putmediasmoverequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMoveResponse](../../models/operations/putmediasmoveresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.PutMediasMoveBadRequestError     | 400                                     | application/json                        |
| errors.PutMediasMoveUnauthorizedError   | 401                                     | application/json                        |
| errors.PutMediasMoveNotFoundError       | 404                                     | application/json                        |
| errors.PutMediasMoveInternalServerError | 500                                     | application/json                        |
| errors.WistiaDefaultError               | 4XX, 5XX                                | \*/\*                                   |

## putMediasRestore

Restores archived medias to your account. This method accepts a list of up to 100 medias to restore per request. It processes requests asynchronously and will return a background_job_status object rather than the typical Media response object. Your account must have access to the Archiving feature to use this method.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/restore" method="put" path="/medias/restore" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.putMediasRestore({
    hashedIds: [],
    folderId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaPutMediasRestore } from "@wistia/wistia-api-client/funcs/mediaPutMediasRestore.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaPutMediasRestore(wistia, {
    hashedIds: [],
    folderId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaPutMediasRestore failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasRestoreRequest](../../models/operations/putmediasrestorerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasRestoreResponse](../../models/operations/putmediasrestoreresponse.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.PutMediasRestoreUnauthorizedError        | 401                                             | application/json                                |
| errors.PutMediasRestoreForbiddenError           | 403                                             | application/json                                |
| errors.PutMediasRestoreNotFoundError            | 404                                             | application/json                                |
| errors.PutMediasRestoreUnprocessableEntityError | 422                                             | application/json                                |
| errors.PutMediasRestoreInternalServerError      | 500                                             | application/json                                |
| errors.WistiaDefaultError                       | 4XX, 5XX                                        | \*/\*                                           |

## putMediasCopy

This method accepts a list of medias to copy to a destination folder. It processes requests asynchronously and will return a background_job_status object rather than the typical Media response object.

Each media will be duplicated and the copy will be placed in the specified destination folder. The original media files will not be affected.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/copy" method="put" path="/medias/copy" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.putMediasCopy({
    hashedIds: [
      "<value 1>",
    ],
    folderId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaPutMediasCopy } from "@wistia/wistia-api-client/funcs/mediaPutMediasCopy.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaPutMediasCopy(wistia, {
    hashedIds: [
      "<value 1>",
    ],
    folderId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaPutMediasCopy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasCopyRequest](../../models/operations/putmediascopyrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasCopyResponse](../../models/operations/putmediascopyresponse.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.PutMediasCopyUnauthorizedError        | 401                                          | application/json                             |
| errors.PutMediasCopyUnprocessableEntityError | 422                                          | application/json                             |
| errors.PutMediasCopyInternalServerError      | 500                                          | application/json                             |
| errors.WistiaDefaultError                    | 4XX, 5XX                                     | \*/\*                                        |
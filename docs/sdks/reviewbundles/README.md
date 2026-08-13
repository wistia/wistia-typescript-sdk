# ReviewBundles

## Overview

### Available Operations

* [getReviewBundles](#getreviewbundles) - List Review Bundles
* [postReviewBundles](#postreviewbundles) - Create Review Bundle
* [deleteReviewBundlesReviewBundleHashedId](#deletereviewbundlesreviewbundlehashedid) - Delete Review Bundle

## getReviewBundles

Lists review bundles belonging to an account. This endpoint can also be used to
do a batch fetch based off of the hashed id, or to find the bundles that include
a given media or any media from a folder.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all folder and media data
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/review_bundles" method="get" path="/review_bundles" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.reviewBundles.getReviewBundles();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { reviewBundlesGetReviewBundles } from "@wistia/wistia-api-client/funcs/reviewBundlesGetReviewBundles.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await reviewBundlesGetReviewBundles(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reviewBundlesGetReviewBundles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetReviewBundlesRequest](../../models/operations/getreviewbundlesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetReviewBundlesResponse[]](../../models/.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GetReviewBundlesBadRequestError     | 400                                        | application/json                           |
| errors.GetReviewBundlesUnauthorizedError   | 401                                        | application/json                           |
| errors.GetReviewBundlesForbiddenError      | 403                                        | application/json                           |
| errors.GetReviewBundlesInternalServerError | 500                                        | application/json                           |
| errors.WistiaDefaultError                  | 4XX, 5XX                                   | \*/\*                                      |

## postReviewBundles

Creates a review bundle from a set of existing media, producing a single link
that can be shared for review. The media to include are specified by their hashed
IDs and must already belong to the account. The media can come from any folder.
Review Bundles are limited to 25 media.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/review_bundles" method="post" path="/review_bundles" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.reviewBundles.postReviewBundles({
    mediaHashedIds: [
      "abc123",
    ],
    name: "My Review Bundle Title",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { reviewBundlesPostReviewBundles } from "@wistia/wistia-api-client/funcs/reviewBundlesPostReviewBundles.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await reviewBundlesPostReviewBundles(wistia, {
    mediaHashedIds: [
      "abc123",
    ],
    name: "My Review Bundle Title",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reviewBundlesPostReviewBundles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostReviewBundlesRequest](../../models/operations/postreviewbundlesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostReviewBundlesResponse](../../models/operations/postreviewbundlesresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.PostReviewBundlesUnauthorizedError        | 401                                              | application/json                                 |
| errors.PostReviewBundlesForbiddenError           | 403                                              | application/json                                 |
| errors.PostReviewBundlesUnprocessableEntityError | 422                                              | application/json                                 |
| errors.PostReviewBundlesInternalServerError      | 500                                              | application/json                                 |
| errors.WistiaDefaultError                        | 4XX, 5XX                                         | \*/\*                                            |

## deleteReviewBundlesReviewBundleHashedId

Permanently deletes a review bundle, identified by its hashed id. This removes
the bundle and its shared review link; the media it contained are not deleted.
This action cannot be undone.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/review_bundles/{reviewBundleHashedId}" method="delete" path="/review_bundles/{reviewBundleHashedId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.reviewBundles.deleteReviewBundlesReviewBundleHashedId({
    reviewBundleHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { reviewBundlesDeleteReviewBundlesReviewBundleHashedId } from "@wistia/wistia-api-client/funcs/reviewBundlesDeleteReviewBundlesReviewBundleHashedId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await reviewBundlesDeleteReviewBundlesReviewBundleHashedId(wistia, {
    reviewBundleHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reviewBundlesDeleteReviewBundlesReviewBundleHashedId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteReviewBundlesReviewBundleHashedIdRequest](../../models/operations/deletereviewbundlesreviewbundlehashedidrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteReviewBundlesReviewBundleHashedIdResponse](../../models/operations/deletereviewbundlesreviewbundlehashedidresponse.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.DeleteReviewBundlesReviewBundleHashedIdUnauthorizedError   | 401                                                               | application/json                                                  |
| errors.DeleteReviewBundlesReviewBundleHashedIdForbiddenError      | 403                                                               | application/json                                                  |
| errors.DeleteReviewBundlesReviewBundleHashedIdNotFoundError       | 404                                                               | application/json                                                  |
| errors.DeleteReviewBundlesReviewBundleHashedIdInternalServerError | 500                                                               | application/json                                                  |
| errors.WistiaDefaultError                                         | 4XX, 5XX                                                          | \*/\*                                                             |
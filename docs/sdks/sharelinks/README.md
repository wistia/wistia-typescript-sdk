# ShareLinks

## Overview

### Available Operations

* [get](#get) - Show share link
* [update](#update) - Update share link
* [delete](#delete) - Delete share link

## get

Fetches the share link for a single media. If the media does not have a
share link yet, one is created on first request with a default
visibility derived from the parent folder.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaId}/share_link" method="get" path="/medias/{mediaId}/share_link" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.shareLinks.get({
    mediaId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { shareLinksGet } from "@wistia/wistia-api-client/funcs/shareLinksGet.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await shareLinksGet(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("shareLinksGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaIdShareLinkRequest](../../models/operations/getmediasmediaidsharelinkrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaIdShareLinkResponse](../../models/operations/getmediasmediaidsharelinkresponse.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.GetMediasMediaIdShareLinkUnauthorizedError   | 401                                                 | application/json                                    |
| errors.GetMediasMediaIdShareLinkForbiddenError      | 403                                                 | application/json                                    |
| errors.GetMediasMediaIdShareLinkNotFoundError       | 404                                                 | application/json                                    |
| errors.GetMediasMediaIdShareLinkInternalServerError | 500                                                 | application/json                                    |
| errors.WistiaDefaultError                           | 4XX, 5XX                                            | \*/\*                                               |

## update

Updates the share link for a single media. If the media does not have a
share link yet, one is created with the supplied visibility.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaId}/share_link" method="put" path="/medias/{mediaId}/share_link" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.shareLinks.update({
    mediaId: "<id>",
    requestBody: {
      visibility: "unlocked",
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
import { shareLinksUpdate } from "@wistia/wistia-api-client/funcs/shareLinksUpdate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await shareLinksUpdate(wistia, {
    mediaId: "<id>",
    requestBody: {
      visibility: "unlocked",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("shareLinksUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaIdShareLinkRequest](../../models/operations/putmediasmediaidsharelinkrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaIdShareLinkResponse](../../models/operations/putmediasmediaidsharelinkresponse.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.PutMediasMediaIdShareLinkBadRequestError     | 400                                                 | application/json                                    |
| errors.PutMediasMediaIdShareLinkUnauthorizedError   | 401                                                 | application/json                                    |
| errors.PutMediasMediaIdShareLinkForbiddenError      | 403                                                 | application/json                                    |
| errors.PutMediasMediaIdShareLinkNotFoundError       | 404                                                 | application/json                                    |
| errors.PutMediasMediaIdShareLinkInternalServerError | 500                                                 | application/json                                    |
| errors.WistiaDefaultError                           | 4XX, 5XX                                            | \*/\*                                               |

## delete

Deletes the share link for a media, revoking the URL. A new share link
can be created later with a fresh URL by calling the show or update
endpoint again.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/medias/{mediaId}/share_link" method="delete" path="/medias/{mediaId}/share_link" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  await wistia.shareLinks.delete({
    mediaId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { shareLinksDelete } from "@wistia/wistia-api-client/funcs/shareLinksDelete.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await shareLinksDelete(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("shareLinksDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMediasMediaIdShareLinkRequest](../../models/operations/deletemediasmediaidsharelinkrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.DeleteMediasMediaIdShareLinkUnauthorizedError   | 401                                                    | application/json                                       |
| errors.DeleteMediasMediaIdShareLinkForbiddenError      | 403                                                    | application/json                                       |
| errors.DeleteMediasMediaIdShareLinkNotFoundError       | 404                                                    | application/json                                       |
| errors.DeleteMediasMediaIdShareLinkInternalServerError | 500                                                    | application/json                                       |
| errors.WistiaDefaultError                              | 4XX, 5XX                                               | \*/\*                                                  |
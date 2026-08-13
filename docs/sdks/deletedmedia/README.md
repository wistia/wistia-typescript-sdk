# DeletedMedia

## Overview

### Available Operations

* [getDeletedMedia](#getdeletedmedia) - List Deleted Media
* [postDeletedMediaRestore](#postdeletedmediarestore) - Restore Deleted Media

## getDeletedMedia

Lists media that has been soft-deleted and is still inside the account's
restore window. Media is listed only while it can still be restored — 30 days
on most plans, 14 on free plans. After which it is permanently purged.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all folder and media data
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/deleted_media" method="get" path="/deleted_media" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.deletedMedia.getDeletedMedia();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { deletedMediaGetDeletedMedia } from "@wistia/wistia-api-client/funcs/deletedMediaGetDeletedMedia.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await deletedMediaGetDeletedMedia(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deletedMediaGetDeletedMedia failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDeletedMediaRequest](../../models/operations/getdeletedmediarequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetDeletedMediaResponse[]](../../models/.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.GetDeletedMediaBadRequestError     | 400                                       | application/json                          |
| errors.GetDeletedMediaUnauthorizedError   | 401                                       | application/json                          |
| errors.GetDeletedMediaForbiddenError      | 403                                       | application/json                          |
| errors.GetDeletedMediaInternalServerError | 500                                       | application/json                          |
| errors.WistiaDefaultError                 | 4XX, 5XX                                  | \*/\*                                     |

## postDeletedMediaRestore

Restores one or more soft-deleted media. By default each media returns to the
folder it was deleted from; pass folder_id to restore them into a specific
folder instead. Only media still inside the restore window can be recovered.
The restore runs asynchronously and the response includes a background job
status.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Upload and view media
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/deleted_media/restore" method="post" path="/deleted_media/restore" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.deletedMedia.postDeletedMediaRestore({
    mediaHashedIds: [
      "abc123",
    ],
    folderId: "folder123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { deletedMediaPostDeletedMediaRestore } from "@wistia/wistia-api-client/funcs/deletedMediaPostDeletedMediaRestore.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await deletedMediaPostDeletedMediaRestore(wistia, {
    mediaHashedIds: [
      "abc123",
    ],
    folderId: "folder123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deletedMediaPostDeletedMediaRestore failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostDeletedMediaRestoreRequest](../../models/operations/postdeletedmediarestorerequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostDeletedMediaRestoreResponse](../../models/operations/postdeletedmediarestoreresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.PostDeletedMediaRestoreBadRequestError     | 400                                               | application/json                                  |
| errors.PostDeletedMediaRestoreUnauthorizedError   | 401                                               | application/json                                  |
| errors.PostDeletedMediaRestoreForbiddenError      | 403                                               | application/json                                  |
| errors.PostDeletedMediaRestoreInternalServerError | 500                                               | application/json                                  |
| errors.WistiaDefaultError                         | 4XX, 5XX                                          | \*/\*                                             |
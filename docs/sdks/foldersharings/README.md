# FolderSharings

## Overview

### Available Operations

* [getFoldersFolderIdSharings](#getfoldersfolderidsharings) - List Folder Sharings
* [postFoldersFolderIdSharings](#postfoldersfolderidsharings) - Create Folder Sharing
* [getFoldersFolderIdSharingsSharingId](#getfoldersfolderidsharingssharingid) - Show Folder Sharing
* [putFoldersFolderIdSharingsSharingId](#putfoldersfolderidsharingssharingid) - Update Folder Sharing
* [deleteFoldersFolderIdSharingsSharingId](#deletefoldersfolderidsharingssharingid) - Delete Folder Sharing

## getFoldersFolderIdSharings

Lists the sharings of contacts and contact groups on a folder.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all data
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/folders/{folderId}/sharings" method="get" path="/folders/{folderId}/sharings" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.folderSharings.getFoldersFolderIdSharings({
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
import { folderSharingsGetFoldersFolderIdSharings } from "@wistia/wistia-api-client/funcs/folderSharingsGetFoldersFolderIdSharings.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await folderSharingsGetFoldersFolderIdSharings(wistia, {
    folderId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("folderSharingsGetFoldersFolderIdSharings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFoldersFolderIdSharingsRequest](../../models/operations/getfoldersfolderidsharingsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetFoldersFolderIdSharingsResponse[]](../../models/.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.GetFoldersFolderIdSharingsUnauthorizedError   | 401                                                  | application/json                                     |
| errors.GetFoldersFolderIdSharingsInternalServerError | 500                                                  | application/json                                     |
| errors.WistiaDefaultError                            | 4XX, 5XX                                             | \*/\*                                                |

## postFoldersFolderIdSharings

Creates a new sharing object for a folder by specifying the email of the person to share with and other optional parameters.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/folders/{folderId}/sharings" method="post" path="/folders/{folderId}/sharings" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.folderSharings.postFoldersFolderIdSharings({
    folderId: "<id>",
    requestBody: {
      sharing: {
        with: "Katrine83@hotmail.com",
        requirePassword: false,
        canShare: false,
        canDownload: false,
        canUpload: false,
      },
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
import { folderSharingsPostFoldersFolderIdSharings } from "@wistia/wistia-api-client/funcs/folderSharingsPostFoldersFolderIdSharings.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await folderSharingsPostFoldersFolderIdSharings(wistia, {
    folderId: "<id>",
    requestBody: {
      sharing: {
        with: "Katrine83@hotmail.com",
        requirePassword: false,
        canShare: false,
        canDownload: false,
        canUpload: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("folderSharingsPostFoldersFolderIdSharings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostFoldersFolderIdSharingsRequest](../../models/operations/postfoldersfolderidsharingsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostFoldersFolderIdSharingsResponse](../../models/operations/postfoldersfolderidsharingsresponse.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.PostFoldersFolderIdSharingsUnauthorizedError   | 401                                                   | application/json                                      |
| errors.PostFoldersFolderIdSharingsInternalServerError | 500                                                   | application/json                                      |
| errors.WistiaDefaultError                             | 4XX, 5XX                                              | \*/\*                                                 |

## getFoldersFolderIdSharingsSharingId

Retrieves the details of a specific sharing object for a given folder.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all data
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/folders/{folderId}/sharings/{sharingId}" method="get" path="/folders/{folderId}/sharings/{sharingId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.folderSharings.getFoldersFolderIdSharingsSharingId({
    folderId: "<id>",
    sharingId: 616202,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { folderSharingsGetFoldersFolderIdSharingsSharingId } from "@wistia/wistia-api-client/funcs/folderSharingsGetFoldersFolderIdSharingsSharingId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await folderSharingsGetFoldersFolderIdSharingsSharingId(wistia, {
    folderId: "<id>",
    sharingId: 616202,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("folderSharingsGetFoldersFolderIdSharingsSharingId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFoldersFolderIdSharingsSharingIdRequest](../../models/operations/getfoldersfolderidsharingssharingidrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetFoldersFolderIdSharingsSharingIdResponse](../../models/operations/getfoldersfolderidsharingssharingidresponse.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.GetFoldersFolderIdSharingsSharingIdUnauthorizedError   | 401                                                           | application/json                                              |
| errors.GetFoldersFolderIdSharingsSharingIdNotFoundError       | 404                                                           | application/json                                              |
| errors.GetFoldersFolderIdSharingsSharingIdInternalServerError | 500                                                           | application/json                                              |
| errors.WistiaDefaultError                                     | 4XX, 5XX                                                      | \*/\*                                                         |

## putFoldersFolderIdSharingsSharingId

Updates a sharing on a folder.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/folders/{folderId}/sharings/{sharingId}" method="put" path="/folders/{folderId}/sharings/{sharingId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.folderSharings.putFoldersFolderIdSharingsSharingId({
    folderId: "<id>",
    sharingId: "<id>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { folderSharingsPutFoldersFolderIdSharingsSharingId } from "@wistia/wistia-api-client/funcs/folderSharingsPutFoldersFolderIdSharingsSharingId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await folderSharingsPutFoldersFolderIdSharingsSharingId(wistia, {
    folderId: "<id>",
    sharingId: "<id>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("folderSharingsPutFoldersFolderIdSharingsSharingId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutFoldersFolderIdSharingsSharingIdRequest](../../models/operations/putfoldersfolderidsharingssharingidrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutFoldersFolderIdSharingsSharingIdResponse](../../models/operations/putfoldersfolderidsharingssharingidresponse.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.PutFoldersFolderIdSharingsSharingIdUnauthorizedError   | 401                                                           | application/json                                              |
| errors.PutFoldersFolderIdSharingsSharingIdNotFoundError       | 404                                                           | application/json                                              |
| errors.PutFoldersFolderIdSharingsSharingIdInternalServerError | 500                                                           | application/json                                              |
| errors.WistiaDefaultError                                     | 4XX, 5XX                                                      | \*/\*                                                         |

## deleteFoldersFolderIdSharingsSharingId

Deletes a sharing on a folder.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/folders/{folderId}/sharings/{sharingId}" method="delete" path="/folders/{folderId}/sharings/{sharingId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.folderSharings.deleteFoldersFolderIdSharingsSharingId({
    folderId: "<id>",
    sharingId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { folderSharingsDeleteFoldersFolderIdSharingsSharingId } from "@wistia/wistia-api-client/funcs/folderSharingsDeleteFoldersFolderIdSharingsSharingId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await folderSharingsDeleteFoldersFolderIdSharingsSharingId(wistia, {
    folderId: "<id>",
    sharingId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("folderSharingsDeleteFoldersFolderIdSharingsSharingId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteFoldersFolderIdSharingsSharingIdRequest](../../models/operations/deletefoldersfolderidsharingssharingidrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteFoldersFolderIdSharingsSharingIdResponse](../../models/operations/deletefoldersfolderidsharingssharingidresponse.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.DeleteFoldersFolderIdSharingsSharingIdUnauthorizedError   | 401                                                              | application/json                                                 |
| errors.DeleteFoldersFolderIdSharingsSharingIdNotFoundError       | 404                                                              | application/json                                                 |
| errors.DeleteFoldersFolderIdSharingsSharingIdInternalServerError | 500                                                              | application/json                                                 |
| errors.WistiaDefaultError                                        | 4XX, 5XX                                                         | \*/\*                                                            |
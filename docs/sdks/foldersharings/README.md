# FolderSharings

## Overview

### Available Operations

* [list](#list) - List Folder Sharings
* [create](#create) - Create Folder Sharing
* [get](#get) - Show Folder Sharing
* [update](#update) - Update Folder Sharing
* [delete](#delete) - Delete Folder Sharing

## list

Lists the sharings of contacts and contact groups on a folder.

## Requires api token with one of the following permissions
```
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/folders/{folderId}/sharings" method="get" path="/folders/{folderId}/sharings" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.folderSharings.list({
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
import { folderSharingsList } from "@wistia/wistia-api-client/funcs/folderSharingsList.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await folderSharingsList(wistia, {
    folderId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("folderSharingsList failed:", res.error);
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

## create

Creates a new sharing object for a folder by specifying the email of the person to share with and other optional parameters.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/folders/{folderId}/sharings" method="post" path="/folders/{folderId}/sharings" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.folderSharings.create({
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
import { folderSharingsCreate } from "@wistia/wistia-api-client/funcs/folderSharingsCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await folderSharingsCreate(wistia, {
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
    console.log("folderSharingsCreate failed:", res.error);
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
| errors.PostFoldersFolderIdSharingsForbiddenError      | 403                                                   | application/json                                      |
| errors.PostFoldersFolderIdSharingsInternalServerError | 500                                                   | application/json                                      |
| errors.WistiaDefaultError                             | 4XX, 5XX                                              | \*/\*                                                 |

## get

Retrieves the details of a specific sharing object for a given folder.

## Requires api token with one of the following permissions
```
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/folders/{folderId}/sharings/{sharingId}" method="get" path="/folders/{folderId}/sharings/{sharingId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.folderSharings.get({
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
import { folderSharingsGet } from "@wistia/wistia-api-client/funcs/folderSharingsGet.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await folderSharingsGet(wistia, {
    folderId: "<id>",
    sharingId: 616202,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("folderSharingsGet failed:", res.error);
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

## update

Updates a sharing on a folder.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/folders/{folderId}/sharings/{sharingId}" method="put" path="/folders/{folderId}/sharings/{sharingId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.folderSharings.update({
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
import { folderSharingsUpdate } from "@wistia/wistia-api-client/funcs/folderSharingsUpdate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await folderSharingsUpdate(wistia, {
    folderId: "<id>",
    sharingId: "<id>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("folderSharingsUpdate failed:", res.error);
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

## delete

Deletes a sharing on a folder.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/folders/{folderId}/sharings/{sharingId}" method="delete" path="/folders/{folderId}/sharings/{sharingId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.folderSharings.delete({
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
import { folderSharingsDelete } from "@wistia/wistia-api-client/funcs/folderSharingsDelete.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await folderSharingsDelete(wistia, {
    folderId: "<id>",
    sharingId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("folderSharingsDelete failed:", res.error);
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
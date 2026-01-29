# Subfolders

## Overview

### Available Operations

* [getFoldersFolderIdSubfolders](#getfoldersfolderidsubfolders) - List Subfolders
* [postFoldersFolderIdSubfolders](#postfoldersfolderidsubfolders) - Create Subfolder
* [getFoldersFolderIdSubfoldersSubfolderId](#getfoldersfolderidsubfolderssubfolderid) - Show Subfolder
* [putFoldersFolderIdSubfoldersSubfolderId](#putfoldersfolderidsubfolderssubfolderid) - Update Subfolder
* [deleteFoldersFolderIdSubfoldersSubfolderId](#deletefoldersfolderidsubfolderssubfolderid) - Delete Subfolder
* [deleteFoldersFolderIdSubfoldersBulkDelete](#deletefoldersfolderidsubfoldersbulkdelete) - Bulk Delete Subfolders

## getFoldersFolderIdSubfolders

Lists subfolders in a specific folder.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all folder and media data
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/folders/{folderId}/subfolders" method="get" path="/folders/{folderId}/subfolders" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.getFoldersFolderIdSubfolders({
    folderId: "abc123def4",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { subfoldersGetFoldersFolderIdSubfolders } from "@wistia/wistia-api-client/funcs/subfoldersGetFoldersFolderIdSubfolders.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersGetFoldersFolderIdSubfolders(wistia, {
    folderId: "abc123def4",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersGetFoldersFolderIdSubfolders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFoldersFolderIdSubfoldersRequest](../../models/operations/getfoldersfolderidsubfoldersrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetFoldersFolderIdSubfoldersResponse[]](../../models/.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.GetFoldersFolderIdSubfoldersBadRequestError     | 400                                                    | application/json                                       |
| errors.GetFoldersFolderIdSubfoldersUnauthorizedError   | 401                                                    | application/json                                       |
| errors.GetFoldersFolderIdSubfoldersNotFoundError       | 404                                                    | application/json                                       |
| errors.GetFoldersFolderIdSubfoldersInternalServerError | 500                                                    | application/json                                       |
| errors.WistiaDefaultError                              | 4XX, 5XX                                               | \*/\*                                                  |

## postFoldersFolderIdSubfolders

Creates a new subfolder within a folder. The subfolder will be created with the next available position.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/folders/{folderId}/subfolders" method="post" path="/folders/{folderId}/subfolders" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.postFoldersFolderIdSubfolders({
    folderId: "abc123def4",
    requestBody: {
      name: "Marketing Videos",
      description: "Collection of all marketing and promotional videos",
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
import { subfoldersPostFoldersFolderIdSubfolders } from "@wistia/wistia-api-client/funcs/subfoldersPostFoldersFolderIdSubfolders.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersPostFoldersFolderIdSubfolders(wistia, {
    folderId: "abc123def4",
    requestBody: {
      name: "Marketing Videos",
      description: "Collection of all marketing and promotional videos",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersPostFoldersFolderIdSubfolders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostFoldersFolderIdSubfoldersRequest](../../models/operations/postfoldersfolderidsubfoldersrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostFoldersFolderIdSubfoldersResponse](../../models/operations/postfoldersfolderidsubfoldersresponse.md)\>**

### Errors

| Error Type                                              | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| errors.PostFoldersFolderIdSubfoldersUnauthorizedError   | 401                                                     | application/json                                        |
| errors.PostFoldersFolderIdSubfoldersNotFoundError       | 404                                                     | application/json                                        |
| errors.PostFoldersFolderIdSubfoldersInternalServerError | 500                                                     | application/json                                        |
| errors.WistiaDefaultError                               | 4XX, 5XX                                                | \*/\*                                                   |

## getFoldersFolderIdSubfoldersSubfolderId

Retrieves detailed information about a specific subfolder, including all media contained within it.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all folder and media data
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/folders/{folderId}/subfolders/{subfolderId}" method="get" path="/folders/{folderId}/subfolders/{subfolderId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.getFoldersFolderIdSubfoldersSubfolderId({
    folderId: "abc123def4",
    subfolderId: "xyz789ghi0",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { subfoldersGetFoldersFolderIdSubfoldersSubfolderId } from "@wistia/wistia-api-client/funcs/subfoldersGetFoldersFolderIdSubfoldersSubfolderId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersGetFoldersFolderIdSubfoldersSubfolderId(wistia, {
    folderId: "abc123def4",
    subfolderId: "xyz789ghi0",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersGetFoldersFolderIdSubfoldersSubfolderId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFoldersFolderIdSubfoldersSubfolderIdRequest](../../models/operations/getfoldersfolderidsubfolderssubfolderidrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetFoldersFolderIdSubfoldersSubfolderIdResponse](../../models/operations/getfoldersfolderidsubfolderssubfolderidresponse.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.GetFoldersFolderIdSubfoldersSubfolderIdUnauthorizedError   | 401                                                               | application/json                                                  |
| errors.GetFoldersFolderIdSubfoldersSubfolderIdNotFoundError       | 404                                                               | application/json                                                  |
| errors.GetFoldersFolderIdSubfoldersSubfolderIdInternalServerError | 500                                                               | application/json                                                  |
| errors.WistiaDefaultError                                         | 4XX, 5XX                                                          | \*/\*                                                             |

## putFoldersFolderIdSubfoldersSubfolderId

Updates a subfolder's name and/or description. 

Retrieves detailed information about a specific subfolder, including all media contained within it.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/folders/{folderId}/subfolders/{subfolderId}" method="put" path="/folders/{folderId}/subfolders/{subfolderId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.putFoldersFolderIdSubfoldersSubfolderId({
    folderId: "abc123def4",
    subfolderId: "xyz789ghi0",
    requestBody: {
      name: "Updated Marketing Videos",
      description: "Updated collection of marketing materials",
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
import { subfoldersPutFoldersFolderIdSubfoldersSubfolderId } from "@wistia/wistia-api-client/funcs/subfoldersPutFoldersFolderIdSubfoldersSubfolderId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersPutFoldersFolderIdSubfoldersSubfolderId(wistia, {
    folderId: "abc123def4",
    subfolderId: "xyz789ghi0",
    requestBody: {
      name: "Updated Marketing Videos",
      description: "Updated collection of marketing materials",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersPutFoldersFolderIdSubfoldersSubfolderId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutFoldersFolderIdSubfoldersSubfolderIdRequest](../../models/operations/putfoldersfolderidsubfolderssubfolderidrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutFoldersFolderIdSubfoldersSubfolderIdResponse](../../models/operations/putfoldersfolderidsubfolderssubfolderidresponse.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.PutFoldersFolderIdSubfoldersSubfolderIdUnauthorizedError   | 401                                                               | application/json                                                  |
| errors.PutFoldersFolderIdSubfoldersSubfolderIdNotFoundError       | 404                                                               | application/json                                                  |
| errors.PutFoldersFolderIdSubfoldersSubfolderIdInternalServerError | 500                                                               | application/json                                                  |
| errors.WistiaDefaultError                                         | 4XX, 5XX                                                          | \*/\*                                                             |

## deleteFoldersFolderIdSubfoldersSubfolderId

Deletes a subfolder from a folder. All media files in the subfolder will be moved to the folder's root level.

The subfolder is soft-deleted and may be recoverable through other means, but is no longer accessible via the API.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/folders/{folderId}/subfolders/{subfolderId}" method="delete" path="/folders/{folderId}/subfolders/{subfolderId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.deleteFoldersFolderIdSubfoldersSubfolderId({
    folderId: "abc123def4",
    subfolderId: "xyz789ghi0",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { subfoldersDeleteFoldersFolderIdSubfoldersSubfolderId } from "@wistia/wistia-api-client/funcs/subfoldersDeleteFoldersFolderIdSubfoldersSubfolderId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersDeleteFoldersFolderIdSubfoldersSubfolderId(wistia, {
    folderId: "abc123def4",
    subfolderId: "xyz789ghi0",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersDeleteFoldersFolderIdSubfoldersSubfolderId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteFoldersFolderIdSubfoldersSubfolderIdRequest](../../models/operations/deletefoldersfolderidsubfolderssubfolderidrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteFoldersFolderIdSubfoldersSubfolderIdResponse](../../models/operations/deletefoldersfolderidsubfolderssubfolderidresponse.md)\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.DeleteFoldersFolderIdSubfoldersSubfolderIdUnauthorizedError   | 401                                                                  | application/json                                                     |
| errors.DeleteFoldersFolderIdSubfoldersSubfolderIdNotFoundError       | 404                                                                  | application/json                                                     |
| errors.DeleteFoldersFolderIdSubfoldersSubfolderIdInternalServerError | 500                                                                  | application/json                                                     |
| errors.WistiaDefaultError                                            | 4XX, 5XX                                                             | \*/\*                                                                |

## deleteFoldersFolderIdSubfoldersBulkDelete

This method accepts a list of subfolders to delete. It processes requests asynchronously and will return a background_job_status object. All media files in each deleted subfolder will be moved to the folder's root level.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/folders/{folderId}/subfolders/bulk_delete" method="delete" path="/folders/{folderId}/subfolders/bulk_delete" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.deleteFoldersFolderIdSubfoldersBulkDelete({
    folderId: "abc123def4",
    requestBody: {
      hashedIds: [
        "<value 1>",
        "<value 2>",
      ],
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
import { subfoldersDeleteFoldersFolderIdSubfoldersBulkDelete } from "@wistia/wistia-api-client/funcs/subfoldersDeleteFoldersFolderIdSubfoldersBulkDelete.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersDeleteFoldersFolderIdSubfoldersBulkDelete(wistia, {
    folderId: "abc123def4",
    requestBody: {
      hashedIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersDeleteFoldersFolderIdSubfoldersBulkDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteFoldersFolderIdSubfoldersBulkDeleteRequest](../../models/operations/deletefoldersfolderidsubfoldersbulkdeleterequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteFoldersFolderIdSubfoldersBulkDeleteResponse](../../models/operations/deletefoldersfolderidsubfoldersbulkdeleteresponse.md)\>**

### Errors

| Error Type                                                               | Status Code                                                              | Content Type                                                             |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| errors.DeleteFoldersFolderIdSubfoldersBulkDeleteUnauthorizedError        | 401                                                                      | application/json                                                         |
| errors.DeleteFoldersFolderIdSubfoldersBulkDeleteNotFoundError            | 404                                                                      | application/json                                                         |
| errors.DeleteFoldersFolderIdSubfoldersBulkDeleteUnprocessableEntityError | 422                                                                      | application/json                                                         |
| errors.DeleteFoldersFolderIdSubfoldersBulkDeleteInternalServerError      | 500                                                                      | application/json                                                         |
| errors.WistiaDefaultError                                                | 4XX, 5XX                                                                 | \*/\*                                                                    |
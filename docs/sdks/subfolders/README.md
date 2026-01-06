# Subfolders

## Overview

### Available Operations

* [list](#list) - Subfolder List
* [create](#create) - Create Subfolder
* [get](#get) - Show Subfolder
* [update](#update) - Update Subfolder
* [deleteSubfolder](#deletesubfolder) - Delete Subfolder

## list

Use this endpoint to request a list of subfolders in a specific project. This request supports paging and sorting.

## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
Read all project and video data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/projects/{projectId}/subfolders" method="get" path="/projects/{projectId}/subfolders" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.list({
    projectId: "abc123def4",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { subfoldersList } from "@wistia/wistia-api-client/funcs/subfoldersList.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersList(wistia, {
    projectId: "abc123def4",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProjectsProjectIdSubfoldersRequest](../../models/operations/getprojectsprojectidsubfoldersrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetProjectsProjectIdSubfoldersResponse[]](../../models/.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.GetProjectsProjectIdSubfoldersUnauthorizedError   | 401                                                      | application/json                                         |
| errors.GetProjectsProjectIdSubfoldersNotFoundError       | 404                                                      | application/json                                         |
| errors.GetProjectsProjectIdSubfoldersInternalServerError | 500                                                      | application/json                                         |
| errors.WistiaDefaultError                                | 4XX, 5XX                                                 | \*/\*                                                    |

## create

Create a new subfolder within a project. The subfolder will be created with the next available position.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/projects/{projectId}/subfolders" method="post" path="/projects/{projectId}/subfolders" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.create({
    projectId: "abc123def4",
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
import { subfoldersCreate } from "@wistia/wistia-api-client/funcs/subfoldersCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersCreate(wistia, {
    projectId: "abc123def4",
    requestBody: {
      name: "Marketing Videos",
      description: "Collection of all marketing and promotional videos",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostProjectsProjectIdSubfoldersRequest](../../models/operations/postprojectsprojectidsubfoldersrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostProjectsProjectIdSubfoldersResponse](../../models/operations/postprojectsprojectidsubfoldersresponse.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.PostProjectsProjectIdSubfoldersUnauthorizedError   | 401                                                       | application/json                                          |
| errors.PostProjectsProjectIdSubfoldersNotFoundError       | 404                                                       | application/json                                          |
| errors.PostProjectsProjectIdSubfoldersInternalServerError | 500                                                       | application/json                                          |
| errors.WistiaDefaultError                                 | 4XX, 5XX                                                  | \*/\*                                                     |

## get

Retrieve detailed information about a specific subfolder, including all media files contained within it.

## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
Read all project and video data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/projects/{projectId}/subfolders/{subfolderId}" method="get" path="/projects/{projectId}/subfolders/{subfolderId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.get({
    projectId: "abc123def4",
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
import { subfoldersGet } from "@wistia/wistia-api-client/funcs/subfoldersGet.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersGet(wistia, {
    projectId: "abc123def4",
    subfolderId: "xyz789ghi0",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProjectsProjectIdSubfoldersSubfolderIdRequest](../../models/operations/getprojectsprojectidsubfolderssubfolderidrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetProjectsProjectIdSubfoldersSubfolderIdResponse](../../models/operations/getprojectsprojectidsubfolderssubfolderidresponse.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.GetProjectsProjectIdSubfoldersSubfolderIdUnauthorizedError   | 401                                                                 | application/json                                                    |
| errors.GetProjectsProjectIdSubfoldersSubfolderIdNotFoundError       | 404                                                                 | application/json                                                    |
| errors.GetProjectsProjectIdSubfoldersSubfolderIdInternalServerError | 500                                                                 | application/json                                                    |
| errors.WistiaDefaultError                                           | 4XX, 5XX                                                            | \*/\*                                                               |

## update

Update a subfolder's name and/or description. 

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/projects/{projectId}/subfolders/{subfolderId}" method="put" path="/projects/{projectId}/subfolders/{subfolderId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.update({
    projectId: "abc123def4",
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
import { subfoldersUpdate } from "@wistia/wistia-api-client/funcs/subfoldersUpdate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersUpdate(wistia, {
    projectId: "abc123def4",
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
    console.log("subfoldersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutProjectsProjectIdSubfoldersSubfolderIdRequest](../../models/operations/putprojectsprojectidsubfolderssubfolderidrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutProjectsProjectIdSubfoldersSubfolderIdResponse](../../models/operations/putprojectsprojectidsubfolderssubfolderidresponse.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.PutProjectsProjectIdSubfoldersSubfolderIdUnauthorizedError   | 401                                                                 | application/json                                                    |
| errors.PutProjectsProjectIdSubfoldersSubfolderIdNotFoundError       | 404                                                                 | application/json                                                    |
| errors.PutProjectsProjectIdSubfoldersSubfolderIdInternalServerError | 500                                                                 | application/json                                                    |
| errors.WistiaDefaultError                                           | 4XX, 5XX                                                            | \*/\*                                                               |

## deleteSubfolder

Delete a subfolder from a project. All media files in the subfolder will be moved to the project's root level.

The subfolder is soft-deleted and may be recoverable through other means, but is no longer accessible via the API.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/projects/{projectId}/subfolders/{subfolderId}" method="delete" path="/projects/{projectId}/subfolders/{subfolderId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.deleteSubfolder({
    projectId: "abc123def4",
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
import { subfoldersDeleteSubfolder } from "@wistia/wistia-api-client/funcs/subfoldersDeleteSubfolder.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersDeleteSubfolder(wistia, {
    projectId: "abc123def4",
    subfolderId: "xyz789ghi0",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersDeleteSubfolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteProjectsProjectIdSubfoldersSubfolderIdRequest](../../models/operations/deleteprojectsprojectidsubfolderssubfolderidrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteProjectsProjectIdSubfoldersSubfolderIdResponse](../../models/operations/deleteprojectsprojectidsubfolderssubfolderidresponse.md)\>**

### Errors

| Error Type                                                             | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.DeleteProjectsProjectIdSubfoldersSubfolderIdUnauthorizedError   | 401                                                                    | application/json                                                       |
| errors.DeleteProjectsProjectIdSubfoldersSubfolderIdNotFoundError       | 404                                                                    | application/json                                                       |
| errors.DeleteProjectsProjectIdSubfoldersSubfolderIdInternalServerError | 500                                                                    | application/json                                                       |
| errors.WistiaDefaultError                                              | 4XX, 5XX                                                               | \*/\*                                                                  |
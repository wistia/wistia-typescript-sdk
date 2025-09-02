# Subfolders
(*subfolders*)

## Overview

### Available Operations

* [getProjectsProjectIdSubfolders](#getprojectsprojectidsubfolders) - Subfolder List
* [postProjectsProjectIdSubfolders](#postprojectsprojectidsubfolders) - Create Subfolder
* [getProjectsProjectIdSubfoldersSubfolderId](#getprojectsprojectidsubfolderssubfolderid) - Show Subfolder
* [putProjectsProjectIdSubfoldersSubfolderId](#putprojectsprojectidsubfolderssubfolderid) - Update Subfolder
* [deleteProjectsProjectIdSubfoldersSubfolderId](#deleteprojectsprojectidsubfolderssubfolderid) - Delete Subfolder

## getProjectsProjectIdSubfolders

Use this endpoint to request a list of subfolders in a specific project. This request supports paging and sorting.

## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
Read all project and video data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/projects/{project-id}/subfolders" method="get" path="/projects/{project-id}/subfolders" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.getProjectsProjectIdSubfolders({
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
import { subfoldersGetProjectsProjectIdSubfolders } from "@wistia/wistia-api-client/funcs/subfoldersGetProjectsProjectIdSubfolders.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersGetProjectsProjectIdSubfolders(wistia, {
    projectId: "abc123def4",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersGetProjectsProjectIdSubfolders failed:", res.error);
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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[models.Subfolder[]](../../models/.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.FourHundredAndOneError                      | 401                                                | application/json                                   |
| errors.GetProjectsProjectIdSubfoldersNotFoundError | 404                                                | application/json                                   |
| errors.FiveHundredError                            | 500                                                | application/json                                   |
| errors.WistiaDefaultError                          | 4XX, 5XX                                           | \*/\*                                              |

## postProjectsProjectIdSubfolders

Create a new subfolder within a project. The subfolder will be created with the next available position.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/projects/{project-id}/subfolders" method="post" path="/projects/{project-id}/subfolders" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.postProjectsProjectIdSubfolders({
    projectId: "abc123def4",
    subfolderInput: {
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
import { subfoldersPostProjectsProjectIdSubfolders } from "@wistia/wistia-api-client/funcs/subfoldersPostProjectsProjectIdSubfolders.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersPostProjectsProjectIdSubfolders(wistia, {
    projectId: "abc123def4",
    subfolderInput: {
      name: "Marketing Videos",
      description: "Collection of all marketing and promotional videos",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersPostProjectsProjectIdSubfolders failed:", res.error);
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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[models.Subfolder](../../models/subfolder.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.FourHundredAndOneError                       | 401                                                 | application/json                                    |
| errors.PostProjectsProjectIdSubfoldersNotFoundError | 404                                                 | application/json                                    |
| errors.FiveHundredError                             | 500                                                 | application/json                                    |
| errors.WistiaDefaultError                           | 4XX, 5XX                                            | \*/\*                                               |

## getProjectsProjectIdSubfoldersSubfolderId

Retrieve detailed information about a specific subfolder, including all media files contained within it.

## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
Read all project and video data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/projects/{project-id}/subfolders/{subfolder-id}" method="get" path="/projects/{project-id}/subfolders/{subfolder-id}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.getProjectsProjectIdSubfoldersSubfolderId({
    projectId: "abc123def4",
    subfolderId: "xyz789ghi0",
    descriptionFormat: "markdown",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { subfoldersGetProjectsProjectIdSubfoldersSubfolderId } from "@wistia/wistia-api-client/funcs/subfoldersGetProjectsProjectIdSubfoldersSubfolderId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersGetProjectsProjectIdSubfoldersSubfolderId(wistia, {
    projectId: "abc123def4",
    subfolderId: "xyz789ghi0",
    descriptionFormat: "markdown",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersGetProjectsProjectIdSubfoldersSubfolderId failed:", res.error);
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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[models.SubfolderWithMedia](../../models/subfolderwithmedia.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.FourHundredAndOneError                                 | 401                                                           | application/json                                              |
| errors.GetProjectsProjectIdSubfoldersSubfolderIdNotFoundError | 404                                                           | application/json                                              |
| errors.FiveHundredError                                       | 500                                                           | application/json                                              |
| errors.WistiaDefaultError                                     | 4XX, 5XX                                                      | \*/\*                                                         |

## putProjectsProjectIdSubfoldersSubfolderId

Update a subfolder's name and/or description. 

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/projects/{project-id}/subfolders/{subfolder-id}" method="put" path="/projects/{project-id}/subfolders/{subfolder-id}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.putProjectsProjectIdSubfoldersSubfolderId({
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
import { subfoldersPutProjectsProjectIdSubfoldersSubfolderId } from "@wistia/wistia-api-client/funcs/subfoldersPutProjectsProjectIdSubfoldersSubfolderId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersPutProjectsProjectIdSubfoldersSubfolderId(wistia, {
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
    console.log("subfoldersPutProjectsProjectIdSubfoldersSubfolderId failed:", res.error);
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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[models.Subfolder](../../models/subfolder.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.FourHundredAndOneError                                 | 401                                                           | application/json                                              |
| errors.PutProjectsProjectIdSubfoldersSubfolderIdNotFoundError | 404                                                           | application/json                                              |
| errors.FiveHundredError                                       | 500                                                           | application/json                                              |
| errors.WistiaDefaultError                                     | 4XX, 5XX                                                      | \*/\*                                                         |

## deleteProjectsProjectIdSubfoldersSubfolderId

Delete a subfolder from a project. All media files in the subfolder will be moved to the project's root level.

The subfolder is soft-deleted and may be recoverable through other means, but is no longer accessible via the API.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/projects/{project-id}/subfolders/{subfolder-id}" method="delete" path="/projects/{project-id}/subfolders/{subfolder-id}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.subfolders.deleteProjectsProjectIdSubfoldersSubfolderId({
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
import { subfoldersDeleteProjectsProjectIdSubfoldersSubfolderId } from "@wistia/wistia-api-client/funcs/subfoldersDeleteProjectsProjectIdSubfoldersSubfolderId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await subfoldersDeleteProjectsProjectIdSubfoldersSubfolderId(wistia, {
    projectId: "abc123def4",
    subfolderId: "xyz789ghi0",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subfoldersDeleteProjectsProjectIdSubfoldersSubfolderId failed:", res.error);
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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[models.Subfolder](../../models/subfolder.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.FourHundredAndOneError                                    | 401                                                              | application/json                                                 |
| errors.DeleteProjectsProjectIdSubfoldersSubfolderIdNotFoundError | 404                                                              | application/json                                                 |
| errors.FiveHundredError                                          | 500                                                              | application/json                                                 |
| errors.WistiaDefaultError                                        | 4XX, 5XX                                                         | \*/\*                                                            |
# ProjectSharings
(*projectSharings*)

## Overview

### Available Operations

* [getProjectsProjectIdSharings](#getprojectsprojectidsharings) - Project Sharing List
* [postProjectsProjectIdSharings](#postprojectsprojectidsharings) - Project Sharing Create
* [getProjectsProjectIdSharingsSharingId](#getprojectsprojectidsharingssharingid) - Project Sharing Show
* [putProjectsProjectIdSharingsSharingId](#putprojectsprojectidsharingssharingid) - Project Sharing Update
* [deleteProjectsProjectIdSharingsSharingId](#deleteprojectsprojectidsharingssharingid) - Project Sharing Delete

## getProjectsProjectIdSharings

A sharing is an object that links either a contact or a contact group to a project, including information about the contacts' permissions to that project.
Retrieve a list of all sharings for a given project. Supports paging and sorting.

## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/projects/{project-id}/sharings" method="get" path="/projects/{project-id}/sharings" -->
```typescript
import { Wistia } from "wistia";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.projectSharings.getProjectsProjectIdSharings({
    projectId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "wistia/core.js";
import { projectSharingsGetProjectsProjectIdSharings } from "wistia/funcs/projectSharingsGetProjectsProjectIdSharings.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await projectSharingsGetProjectsProjectIdSharings(wistia, {
    projectId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectSharingsGetProjectsProjectIdSharings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProjectsProjectIdSharingsRequest](../../models/operations/getprojectsprojectidsharingsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProjectSharingDetail[]](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.FourHundredAndOneError | 401                           | application/json              |
| errors.FiveHundredError       | 500                           | application/json              |
| errors.WistiaDefaultError     | 4XX, 5XX                      | \*/\*                         |

## postProjectsProjectIdSharings

Create a new sharing object for a project by specifying the email of the person to share with and other optional parameters.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/projects/{project-id}/sharings" method="post" path="/projects/{project-id}/sharings" -->
```typescript
import { Wistia } from "wistia";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.projectSharings.postProjectsProjectIdSharings({
    projectId: "<id>",
    createProjectSharing: {
      sharing: {
        with: "Darien64@yahoo.com",
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
import { WistiaCore } from "wistia/core.js";
import { projectSharingsPostProjectsProjectIdSharings } from "wistia/funcs/projectSharingsPostProjectsProjectIdSharings.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await projectSharingsPostProjectsProjectIdSharings(wistia, {
    projectId: "<id>",
    createProjectSharing: {
      sharing: {
        with: "Darien64@yahoo.com",
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
    console.log("projectSharingsPostProjectsProjectIdSharings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostProjectsProjectIdSharingsRequest](../../models/operations/postprojectsprojectidsharingsrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostProjectsProjectIdSharingsResponse](../../models/operations/postprojectsprojectidsharingsresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.FourHundredAndOneError | 401                           | application/json              |
| errors.FiveHundredError       | 500                           | application/json              |
| errors.WistiaDefaultError     | 4XX, 5XX                      | \*/\*                         |

## getProjectsProjectIdSharingsSharingId

Retrieve the details of a specific sharing object for a given project.

## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/projects/{project-id}/sharings/{sharing-id}" method="get" path="/projects/{project-id}/sharings/{sharing-id}" -->
```typescript
import { Wistia } from "wistia";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.projectSharings.getProjectsProjectIdSharingsSharingId({
    projectId: "<id>",
    sharingId: 176565,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "wistia/core.js";
import { projectSharingsGetProjectsProjectIdSharingsSharingId } from "wistia/funcs/projectSharingsGetProjectsProjectIdSharingsSharingId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await projectSharingsGetProjectsProjectIdSharingsSharingId(wistia, {
    projectId: "<id>",
    sharingId: 176565,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectSharingsGetProjectsProjectIdSharingsSharingId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProjectsProjectIdSharingsSharingIdRequest](../../models/operations/getprojectsprojectidsharingssharingidrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProjectSharingDetail](../../models/projectsharingdetail.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.FourHundredAndOneError  | 401                            | application/json               |
| errors.FourHundredAndFourError | 404                            | application/json               |
| errors.FiveHundredError        | 500                            | application/json               |
| errors.WistiaDefaultError      | 4XX, 5XX                       | \*/\*                          |

## putProjectsProjectIdSharingsSharingId

Update a sharing on a project.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/projects/{project-id}/sharings/{sharing-id}" method="put" path="/projects/{project-id}/sharings/{sharing-id}" -->
```typescript
import { Wistia } from "wistia";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.projectSharings.putProjectsProjectIdSharingsSharingId({
    projectId: "<id>",
    sharingId: "<id>",
    updateSharingRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "wistia/core.js";
import { projectSharingsPutProjectsProjectIdSharingsSharingId } from "wistia/funcs/projectSharingsPutProjectsProjectIdSharingsSharingId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await projectSharingsPutProjectsProjectIdSharingsSharingId(wistia, {
    projectId: "<id>",
    sharingId: "<id>",
    updateSharingRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectSharingsPutProjectsProjectIdSharingsSharingId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutProjectsProjectIdSharingsSharingIdRequest](../../models/operations/putprojectsprojectidsharingssharingidrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProjectSharingSchema](../../models/projectsharingschema.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.FourHundredAndOneError  | 401                            | application/json               |
| errors.FourHundredAndFourError | 404                            | application/json               |
| errors.FiveHundredError        | 500                            | application/json               |
| errors.WistiaDefaultError      | 4XX, 5XX                       | \*/\*                          |

## deleteProjectsProjectIdSharingsSharingId

Delete a sharing on a project.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/projects/{project-id}/sharings/{sharing-id}" method="delete" path="/projects/{project-id}/sharings/{sharing-id}" -->
```typescript
import { Wistia } from "wistia";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.projectSharings.deleteProjectsProjectIdSharingsSharingId({
    projectId: "<id>",
    sharingId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "wistia/core.js";
import { projectSharingsDeleteProjectsProjectIdSharingsSharingId } from "wistia/funcs/projectSharingsDeleteProjectsProjectIdSharingsSharingId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await projectSharingsDeleteProjectsProjectIdSharingsSharingId(wistia, {
    projectId: "<id>",
    sharingId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("projectSharingsDeleteProjectsProjectIdSharingsSharingId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteProjectsProjectIdSharingsSharingIdRequest](../../models/operations/deleteprojectsprojectidsharingssharingidrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProjectSharingSchema](../../models/projectsharingschema.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.FourHundredAndOneError  | 401                            | application/json               |
| errors.FourHundredAndFourError | 404                            | application/json               |
| errors.FiveHundredError        | 500                            | application/json               |
| errors.WistiaDefaultError      | 4XX, 5XX                       | \*/\*                          |
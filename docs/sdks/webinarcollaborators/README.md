# WebinarCollaborators

## Overview

### Available Operations

* [list](#list) - List Webinar Collaborators
* [create](#create) - Create Webinar Collaborator
* [delete](#delete) - Delete Webinar Collaborator

## list

Lists the collaborators (contacts and contact groups) that have been granted producer access to a webinar.

Results are scoped to what the authenticated user is allowed to see: account owners, managers, and the webinar's producers see all collaborators; everyone else sees an empty list.

## Requires api token with one of the following permissions
```
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/webinars/{webinarId}/collaborators" method="get" path="/webinars/{webinarId}/collaborators" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.webinarCollaborators.list({
    webinarId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { webinarCollaboratorsList } from "@wistia/wistia-api-client/funcs/webinarCollaboratorsList.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await webinarCollaboratorsList(wistia, {
    webinarId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webinarCollaboratorsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWebinarsWebinarIdCollaboratorsRequest](../../models/operations/getwebinarswebinaridcollaboratorsrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetWebinarsWebinarIdCollaboratorsResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.GetWebinarsWebinarIdCollaboratorsBadRequestError     | 400                                                         | application/json                                            |
| errors.GetWebinarsWebinarIdCollaboratorsUnauthorizedError   | 401                                                         | application/json                                            |
| errors.GetWebinarsWebinarIdCollaboratorsNotFoundError       | 404                                                         | application/json                                            |
| errors.GetWebinarsWebinarIdCollaboratorsInternalServerError | 500                                                         | application/json                                            |
| errors.WistiaDefaultError                                   | 4XX, 5XX                                                    | \*/\*                                                       |

## create

Invites a collaborator (producer) to a webinar by specifying their email address. Creates a new contact if one doesn't exist with that email. Note that viewers cannot be webinar collaborators.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/webinars/{webinarId}/collaborators" method="post" path="/webinars/{webinarId}/collaborators" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.webinarCollaborators.create({
    webinarId: "<id>",
    requestBody: {
      email: "jim@wistia.com",
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
import { webinarCollaboratorsCreate } from "@wistia/wistia-api-client/funcs/webinarCollaboratorsCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await webinarCollaboratorsCreate(wistia, {
    webinarId: "<id>",
    requestBody: {
      email: "jim@wistia.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webinarCollaboratorsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostWebinarsWebinarIdCollaboratorsRequest](../../models/operations/postwebinarswebinaridcollaboratorsrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostWebinarsWebinarIdCollaboratorsResponse](../../models/operations/postwebinarswebinaridcollaboratorsresponse.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.PostWebinarsWebinarIdCollaboratorsBadRequestError     | 400                                                          | application/json                                             |
| errors.PostWebinarsWebinarIdCollaboratorsUnauthorizedError   | 401                                                          | application/json                                             |
| errors.PostWebinarsWebinarIdCollaboratorsNotFoundError       | 404                                                          | application/json                                             |
| errors.PostWebinarsWebinarIdCollaboratorsInternalServerError | 500                                                          | application/json                                             |
| errors.WistiaDefaultError                                    | 4XX, 5XX                                                     | \*/\*                                                        |

## delete

Removes a collaborator's producer access to a webinar.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/webinars/{webinarId}/collaborators/{id}" method="delete" path="/webinars/{webinarId}/collaborators/{id}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.webinarCollaborators.delete({
    webinarId: "<id>",
    id: 428246,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { webinarCollaboratorsDelete } from "@wistia/wistia-api-client/funcs/webinarCollaboratorsDelete.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await webinarCollaboratorsDelete(wistia, {
    webinarId: "<id>",
    id: 428246,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webinarCollaboratorsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteWebinarsWebinarIdCollaboratorsIdRequest](../../models/operations/deletewebinarswebinaridcollaboratorsidrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteWebinarsWebinarIdCollaboratorsIdResponse](../../models/operations/deletewebinarswebinaridcollaboratorsidresponse.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.DeleteWebinarsWebinarIdCollaboratorsIdUnauthorizedError   | 401                                                              | application/json                                                 |
| errors.DeleteWebinarsWebinarIdCollaboratorsIdNotFoundError       | 404                                                              | application/json                                                 |
| errors.DeleteWebinarsWebinarIdCollaboratorsIdInternalServerError | 500                                                              | application/json                                                 |
| errors.WistiaDefaultError                                        | 4XX, 5XX                                                         | \*/\*                                                            |
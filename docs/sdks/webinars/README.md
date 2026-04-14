# Webinars

## Overview

### Available Operations

* [list](#list) - List Webinars
* [create](#create) - Create Webinar
* [get](#get) - Show Webinar
* [update](#update) - Update Webinar
* [delete](#delete) - Delete Webinar

## list

Lists webinars belonging to the account. This endpoint can also be used to
do a batch fetch based off of the hashed id.

## Requires api token with one of the following permissions
```
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/webinars" method="get" path="/webinars" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.webinars.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { webinarsList } from "@wistia/wistia-api-client/funcs/webinarsList.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await webinarsList(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webinarsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWebinarsRequest](../../models/operations/getwebinarsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetWebinarsResponse[]](../../models/.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GetWebinarsUnauthorizedError   | 401                                   | application/json                      |
| errors.GetWebinarsForbiddenError      | 403                                   | application/json                      |
| errors.GetWebinarsInternalServerError | 500                                   | application/json                      |
| errors.WistiaDefaultError             | 4XX, 5XX                              | \*/\*                                 |

## create

Creates a new webinar.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/webinars" method="post" path="/webinars" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.webinars.create({
    title: "Wellness Session: Coping with Outie Memories",
    description: "A comprehensive session on managing work-life balance",
    scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
    eventDuration: 60,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { webinarsCreate } from "@wistia/wistia-api-client/funcs/webinarsCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await webinarsCreate(wistia, {
    title: "Wellness Session: Coping with Outie Memories",
    description: "A comprehensive session on managing work-life balance",
    scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
    eventDuration: 60,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webinarsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostWebinarsRequest](../../models/operations/postwebinarsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostWebinarsResponse](../../models/operations/postwebinarsresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.PostWebinarsUnauthorizedError        | 401                                         | application/json                            |
| errors.PostWebinarsForbiddenError           | 403                                         | application/json                            |
| errors.PostWebinarsUnprocessableEntityError | 422                                         | application/json                            |
| errors.PostWebinarsInternalServerError      | 500                                         | application/json                            |
| errors.WistiaDefaultError                   | 4XX, 5XX                                    | \*/\*                                       |

## get

Returns the webinar associated with the hashed id.

## Requires api token with one of the following permissions
```
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/webinars/{id}" method="get" path="/webinars/{id}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.webinars.get({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { webinarsGet } from "@wistia/wistia-api-client/funcs/webinarsGet.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await webinarsGet(wistia, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webinarsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWebinarsIdRequest](../../models/operations/getwebinarsidrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetWebinarsIdResponse](../../models/operations/getwebinarsidresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.GetWebinarsIdUnauthorizedError   | 401                                     | application/json                        |
| errors.GetWebinarsIdForbiddenError      | 403                                     | application/json                        |
| errors.GetWebinarsIdInternalServerError | 500                                     | application/json                        |
| errors.WistiaDefaultError               | 4XX, 5XX                                | \*/\*                                   |

## update

Updates an existing webinar.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/webinars/{id}" method="put" path="/webinars/{id}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.webinars.update({
    id: "<id>",
    requestBody: {
      webinar: {
        title: "Updated Webinar Title",
        description: "Updated webinar description",
        scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
        eventDuration: 90,
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
import { webinarsUpdate } from "@wistia/wistia-api-client/funcs/webinarsUpdate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await webinarsUpdate(wistia, {
    id: "<id>",
    requestBody: {
      webinar: {
        title: "Updated Webinar Title",
        description: "Updated webinar description",
        scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
        eventDuration: 90,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webinarsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutWebinarsIdRequest](../../models/operations/putwebinarsidrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutWebinarsIdResponse](../../models/operations/putwebinarsidresponse.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.PutWebinarsIdUnauthorizedError        | 401                                          | application/json                             |
| errors.PutWebinarsIdForbiddenError           | 403                                          | application/json                             |
| errors.PutWebinarsIdUnprocessableEntityError | 422                                          | application/json                             |
| errors.PutWebinarsIdInternalServerError      | 500                                          | application/json                             |
| errors.WistiaDefaultError                    | 4XX, 5XX                                     | \*/\*                                        |

## delete

Deletes an existing webinar.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/webinars/{id}" method="delete" path="/webinars/{id}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.webinars.delete({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { webinarsDelete } from "@wistia/wistia-api-client/funcs/webinarsDelete.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await webinarsDelete(wistia, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webinarsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteWebinarsIdRequest](../../models/operations/deletewebinarsidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteWebinarsIdResponse](../../models/operations/deletewebinarsidresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.DeleteWebinarsIdUnauthorizedError   | 401                                        | application/json                           |
| errors.DeleteWebinarsIdForbiddenError      | 403                                        | application/json                           |
| errors.DeleteWebinarsIdInternalServerError | 500                                        | application/json                           |
| errors.WistiaDefaultError                  | 4XX, 5XX                                   | \*/\*                                      |
# WebinarRegistrations

## Overview

### Available Operations

* [getWebinarsWebinarIdRegistrations](#getwebinarswebinaridregistrations) - List Webinar Registrations
* [create](#create) - Create Webinar Registration

## getWebinarsWebinarIdRegistrations

Retrieve a paginated list of registrations for a webinar. Returns contact
information, attendance status, engagement metrics, and attribution data
for each registrant.

Pagination uses cursor-based pagination with a `page_info` object in the
response rather than per-record cursors. Use `page_info.end_cursor` as
the `cursor` parameter to fetch the next page.

## Requires api token with one of the following permissions
```
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/webinars/{webinarId}/registrations" method="get" path="/webinars/{webinarId}/registrations" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.webinarRegistrations.getWebinarsWebinarIdRegistrations({
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
import { webinarRegistrationsGetWebinarsWebinarIdRegistrations } from "@wistia/wistia-api-client/funcs/webinarRegistrationsGetWebinarsWebinarIdRegistrations.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await webinarRegistrationsGetWebinarsWebinarIdRegistrations(wistia, {
    webinarId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webinarRegistrationsGetWebinarsWebinarIdRegistrations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWebinarsWebinarIdRegistrationsRequest](../../models/operations/getwebinarswebinaridregistrationsrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetWebinarsWebinarIdRegistrationsResponse](../../models/operations/getwebinarswebinaridregistrationsresponse.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.GetWebinarsWebinarIdRegistrationsUnauthorizedError   | 401                                                         | application/json                                            |
| errors.GetWebinarsWebinarIdRegistrationsForbiddenError      | 403                                                         | application/json                                            |
| errors.GetWebinarsWebinarIdRegistrationsNotFoundError       | 404                                                         | application/json                                            |
| errors.GetWebinarsWebinarIdRegistrationsInternalServerError | 500                                                         | application/json                                            |
| errors.WistiaDefaultError                                   | 4XX, 5XX                                                    | \*/\*                                                       |

## create

Register a person for a webinar by providing their email, first name, and last name.

This endpoint generates a unique visitor key and returns a personalized webinar URL for the registrant.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/webinars/{webinarId}/registrations" method="post" path="/webinars/{webinarId}/registrations" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.webinarRegistrations.create({
    webinarId: "<id>",
    requestBody: {
      email: "john.doe@example.com",
      firstName: "John",
      lastName: "Doe",
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
import { webinarRegistrationsCreate } from "@wistia/wistia-api-client/funcs/webinarRegistrationsCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await webinarRegistrationsCreate(wistia, {
    webinarId: "<id>",
    requestBody: {
      email: "john.doe@example.com",
      firstName: "John",
      lastName: "Doe",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webinarRegistrationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostWebinarsWebinarIdRegistrationsRequest](../../models/operations/postwebinarswebinaridregistrationsrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostWebinarsWebinarIdRegistrationsResponse](../../models/operations/postwebinarswebinaridregistrationsresponse.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.PostWebinarsWebinarIdRegistrationsUnauthorizedError        | 401                                                               | application/json                                                  |
| errors.PostWebinarsWebinarIdRegistrationsForbiddenError           | 403                                                               | application/json                                                  |
| errors.PostWebinarsWebinarIdRegistrationsNotFoundError            | 404                                                               | application/json                                                  |
| errors.PostWebinarsWebinarIdRegistrationsUnprocessableEntityError | 422                                                               | application/json                                                  |
| errors.PostWebinarsWebinarIdRegistrationsInternalServerError      | 500                                                               | application/json                                                  |
| errors.WistiaDefaultError                                         | 4XX, 5XX                                                          | \*/\*                                                             |
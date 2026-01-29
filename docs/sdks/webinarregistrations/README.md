# WebinarRegistrations

## Overview

### Available Operations

* [postWebinarsWebinarIdRegistrations](#postwebinarswebinaridregistrations) - Create Webinar Registration

## postWebinarsWebinarIdRegistrations

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
  const result = await wistia.webinarRegistrations.postWebinarsWebinarIdRegistrations({
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
import { webinarRegistrationsPostWebinarsWebinarIdRegistrations } from "@wistia/wistia-api-client/funcs/webinarRegistrationsPostWebinarsWebinarIdRegistrations.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await webinarRegistrationsPostWebinarsWebinarIdRegistrations(wistia, {
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
    console.log("webinarRegistrationsPostWebinarsWebinarIdRegistrations failed:", res.error);
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
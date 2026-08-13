# PushDevices

## Overview

### Available Operations

* [create](#create) - Register Push Device
* [delete](#delete) - Unregister Push Device

## create

Registers a push notification device token for the current contact. Used by
the Wistia desktop app to receive activity notifications (new comments and
views) for media created via the app. Re-registering an existing
token updates its registration in place.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/devices" method="post" path="/devices" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.pushDevices.create({
    deviceToken: "6a41c6f2e5b1d3f4a7c8e9b0d1f2a3c4e5b6d7f8a9c0b1d2e3f4a5b6c7d8e9f0",
    bundleId: "com.wistia.glass",
    environment: "production",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { pushDevicesCreate } from "@wistia/wistia-api-client/funcs/pushDevicesCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await pushDevicesCreate(wistia, {
    deviceToken: "6a41c6f2e5b1d3f4a7c8e9b0d1f2a3c4e5b6d7f8a9c0b1d2e3f4a5b6c7d8e9f0",
    bundleId: "com.wistia.glass",
    environment: "production",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pushDevicesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostDevicesRequest](../../models/operations/postdevicesrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostDevicesResponse](../../models/operations/postdevicesresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.PostDevicesBadRequestError     | 400                                   | application/json                      |
| errors.PostDevicesUnauthorizedError   | 401                                   | application/json                      |
| errors.PostDevicesForbiddenError      | 403                                   | application/json                      |
| errors.PostDevicesInternalServerError | 500                                   | application/json                      |
| errors.WistiaDefaultError             | 4XX, 5XX                              | \*/\*                                 |

## delete

Unregisters a push notification device token for the current contact, so no
further activity notifications are delivered to that device.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/devices/{deviceToken}" method="delete" path="/devices/{deviceToken}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.pushDevices.delete({
    deviceToken: "6a41c6f2e5b1d3f4a7c8e9b0d1f2a3c4e5b6d7f8a9c0b1d2e3f4a5b6c7d8e9f0",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { pushDevicesDelete } from "@wistia/wistia-api-client/funcs/pushDevicesDelete.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await pushDevicesDelete(wistia, {
    deviceToken: "6a41c6f2e5b1d3f4a7c8e9b0d1f2a3c4e5b6d7f8a9c0b1d2e3f4a5b6c7d8e9f0",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pushDevicesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteDevicesDeviceTokenRequest](../../models/operations/deletedevicesdevicetokenrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteDevicesDeviceTokenResponse](../../models/operations/deletedevicesdevicetokenresponse.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.DeleteDevicesDeviceTokenUnauthorizedError   | 401                                                | application/json                                   |
| errors.DeleteDevicesDeviceTokenForbiddenError      | 403                                                | application/json                                   |
| errors.DeleteDevicesDeviceTokenNotFoundError       | 404                                                | application/json                                   |
| errors.DeleteDevicesDeviceTokenInternalServerError | 500                                                | application/json                                   |
| errors.WistiaDefaultError                          | 4XX, 5XX                                           | \*/\*                                              |
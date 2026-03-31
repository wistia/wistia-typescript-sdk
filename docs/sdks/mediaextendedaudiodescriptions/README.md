# MediaExtendedAudioDescriptions

## Overview

### Available Operations

* [getMediaExtendedAudioDescriptions](#getmediaextendedaudiodescriptions) - List Media Extended Audio Descriptions
* [getMediaExtendedAudioDescriptionsId](#getmediaextendedaudiodescriptionsid) - Show Media Extended Audio Description
* [deleteMediaExtendedAudioDescriptionsId](#deletemediaextendedaudiodescriptionsid) - Delete Media Extended Audio Description
* [postMediaExtendedAudioDescriptionsOrder](#postmediaextendedaudiodescriptionsorder) - Order Extended Audio Description
* [getMediaExtendedAudioDescriptionsOrderStatusId](#getmediaextendedaudiodescriptionsorderstatusid) - Get Order Status

## getMediaExtendedAudioDescriptions

Lists all extended audio descriptions belonging to the account. Supports pagination and sorting.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/media_extended_audio_descriptions" method="get" path="/media_extended_audio_descriptions" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.mediaExtendedAudioDescriptions.getMediaExtendedAudioDescriptions();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptions } from "@wistia/wistia-api-client/funcs/mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptions.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptions(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediaExtendedAudioDescriptionsRequest](../../models/operations/getmediaextendedaudiodescriptionsrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediaExtendedAudioDescriptionsResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.GetMediaExtendedAudioDescriptionsUnauthorizedError   | 401                                                         | application/json                                            |
| errors.GetMediaExtendedAudioDescriptionsInternalServerError | 500                                                         | application/json                                            |
| errors.WistiaDefaultError                                   | 4XX, 5XX                                                    | \*/\*                                                       |

## getMediaExtendedAudioDescriptionsId

Retrieves a single extended audio description by its hashed id, including download links.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/media_extended_audio_descriptions/{id}" method="get" path="/media_extended_audio_descriptions/{id}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.mediaExtendedAudioDescriptions.getMediaExtendedAudioDescriptionsId({
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
import { mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptionsId } from "@wistia/wistia-api-client/funcs/mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptionsId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptionsId(wistia, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptionsId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediaExtendedAudioDescriptionsIdRequest](../../models/operations/getmediaextendedaudiodescriptionsidrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediaExtendedAudioDescriptionsIdResponse](../../models/operations/getmediaextendedaudiodescriptionsidresponse.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.GetMediaExtendedAudioDescriptionsIdUnauthorizedError   | 401                                                           | application/json                                              |
| errors.GetMediaExtendedAudioDescriptionsIdNotFoundError       | 404                                                           | application/json                                              |
| errors.GetMediaExtendedAudioDescriptionsIdInternalServerError | 500                                                           | application/json                                              |
| errors.WistiaDefaultError                                     | 4XX, 5XX                                                      | \*/\*                                                         |

## deleteMediaExtendedAudioDescriptionsId

Deletes an extended audio description by its hashed id.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/media_extended_audio_descriptions/{id}" method="delete" path="/media_extended_audio_descriptions/{id}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.mediaExtendedAudioDescriptions.deleteMediaExtendedAudioDescriptionsId({
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
import { mediaExtendedAudioDescriptionsDeleteMediaExtendedAudioDescriptionsId } from "@wistia/wistia-api-client/funcs/mediaExtendedAudioDescriptionsDeleteMediaExtendedAudioDescriptionsId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaExtendedAudioDescriptionsDeleteMediaExtendedAudioDescriptionsId(wistia, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaExtendedAudioDescriptionsDeleteMediaExtendedAudioDescriptionsId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMediaExtendedAudioDescriptionsIdRequest](../../models/operations/deletemediaextendedaudiodescriptionsidrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteMediaExtendedAudioDescriptionsIdResponse](../../models/operations/deletemediaextendedaudiodescriptionsidresponse.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.DeleteMediaExtendedAudioDescriptionsIdUnauthorizedError   | 401                                                              | application/json                                                 |
| errors.DeleteMediaExtendedAudioDescriptionsIdForbiddenError      | 403                                                              | application/json                                                 |
| errors.DeleteMediaExtendedAudioDescriptionsIdNotFoundError       | 404                                                              | application/json                                                 |
| errors.DeleteMediaExtendedAudioDescriptionsIdInternalServerError | 500                                                              | application/json                                                 |
| errors.WistiaDefaultError                                        | 4XX, 5XX                                                         | \*/\*                                                            |

## postMediaExtendedAudioDescriptionsOrder

Orders an extended audio description for a media. The request will charge the credit card on the account when the order is ready.
Only accounts on paid plans with the `order_audio_descriptions` feature can use this endpoint.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/media_extended_audio_descriptions/order" method="post" path="/media_extended_audio_descriptions/order" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.mediaExtendedAudioDescriptions.postMediaExtendedAudioDescriptionsOrder({
    mediaId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { mediaExtendedAudioDescriptionsPostMediaExtendedAudioDescriptionsOrder } from "@wistia/wistia-api-client/funcs/mediaExtendedAudioDescriptionsPostMediaExtendedAudioDescriptionsOrder.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaExtendedAudioDescriptionsPostMediaExtendedAudioDescriptionsOrder(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaExtendedAudioDescriptionsPostMediaExtendedAudioDescriptionsOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostMediaExtendedAudioDescriptionsOrderRequest](../../models/operations/postmediaextendedaudiodescriptionsorderrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostMediaExtendedAudioDescriptionsOrderResponse](../../models/operations/postmediaextendedaudiodescriptionsorderresponse.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.PostMediaExtendedAudioDescriptionsOrderBadRequestError     | 400                                                               | application/json                                                  |
| errors.PostMediaExtendedAudioDescriptionsOrderUnauthorizedError   | 401                                                               | application/json                                                  |
| errors.PostMediaExtendedAudioDescriptionsOrderForbiddenError      | 403                                                               | application/json                                                  |
| errors.PostMediaExtendedAudioDescriptionsOrderNotFoundError       | 404                                                               | application/json                                                  |
| errors.PostMediaExtendedAudioDescriptionsOrderInternalServerError | 500                                                               | application/json                                                  |
| errors.WistiaDefaultError                                         | 4XX, 5XX                                                          | \*/\*                                                             |

## getMediaExtendedAudioDescriptionsOrderStatusId

Returns the current status of an extended audio description order. Use the order id returned
from the order endpoint to poll for status updates.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/media_extended_audio_descriptions/order_status/{id}" method="get" path="/media_extended_audio_descriptions/order_status/{id}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.mediaExtendedAudioDescriptions.getMediaExtendedAudioDescriptionsOrderStatusId({
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
import { mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptionsOrderStatusId } from "@wistia/wistia-api-client/funcs/mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptionsOrderStatusId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptionsOrderStatusId(wistia, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptionsOrderStatusId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediaExtendedAudioDescriptionsOrderStatusIdRequest](../../models/operations/getmediaextendedaudiodescriptionsorderstatusidrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediaExtendedAudioDescriptionsOrderStatusIdResponse](../../models/operations/getmediaextendedaudiodescriptionsorderstatusidresponse.md)\>**

### Errors

| Error Type                                                               | Status Code                                                              | Content Type                                                             |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| errors.GetMediaExtendedAudioDescriptionsOrderStatusIdUnauthorizedError   | 401                                                                      | application/json                                                         |
| errors.GetMediaExtendedAudioDescriptionsOrderStatusIdForbiddenError      | 403                                                                      | application/json                                                         |
| errors.GetMediaExtendedAudioDescriptionsOrderStatusIdNotFoundError       | 404                                                                      | application/json                                                         |
| errors.GetMediaExtendedAudioDescriptionsOrderStatusIdInternalServerError | 500                                                                      | application/json                                                         |
| errors.WistiaDefaultError                                                | 4XX, 5XX                                                                 | \*/\*                                                                    |
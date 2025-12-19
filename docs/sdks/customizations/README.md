# Customizations

## Overview

### Available Operations

* [get](#get) - Customizations Show
* [create](#create) - Customizations Create
* [update](#update) - Customizations Update
* [delete](#delete) - Customizations Delete

## get

Fetches explicitly defined customizations for the video.

## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
Read all project and video data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaId}/customizations" method="get" path="/medias/{mediaId}/customizations" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.get({
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
import { customizationsGet } from "@wistia/wistia-api-client/funcs/customizationsGet.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsGet(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaIdCustomizationsRequest](../../models/operations/getmediasmediaidcustomizationsrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaIdCustomizationsResponse](../../models/operations/getmediasmediaidcustomizationsresponse.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.GetMediasMediaIdCustomizationsUnauthorizedError   | 401                                                      | application/json                                         |
| errors.GetMediasMediaIdCustomizationsNotFoundError       | 404                                                      | application/json                                         |
| errors.GetMediasMediaIdCustomizationsInternalServerError | 500                                                      | application/json                                         |
| errors.WistiaDefaultError                                | 4XX, 5XX                                                 | \*/\*                                                    |

## create

Set customizations for a video. Replaces the customizations explicitly set for this video.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/medias/{mediaId}/customizations" method="post" path="/medias/{mediaId}/customizations" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.create({
    mediaId: "<id>",
    requestBody: {
      plugin: {
        postRollV1: {
          style: {
            backgroundColor: "#303030",
          },
          ctaType: "text",
        },
      },
      videoFoam: true,
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
import { customizationsCreate } from "@wistia/wistia-api-client/funcs/customizationsCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsCreate(wistia, {
    mediaId: "<id>",
    requestBody: {
      plugin: {
        postRollV1: {
          style: {
            backgroundColor: "#303030",
          },
          ctaType: "text",
        },
      },
      videoFoam: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostMediasMediaIdCustomizationsRequest](../../models/operations/postmediasmediaidcustomizationsrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostMediasMediaIdCustomizationsResponse](../../models/operations/postmediasmediaidcustomizationsresponse.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.PostMediasMediaIdCustomizationsUnauthorizedError   | 401                                                       | application/json                                          |
| errors.PostMediasMediaIdCustomizationsInternalServerError | 500                                                       | application/json                                          |
| errors.WistiaDefaultError                                 | 4XX, 5XX                                                  | \*/\*                                                     |

## update

Allows for partial updates on a video’s customizations. If a value is null, then that key will be deleted from the saved customizations. If it is not null, that value will be set.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaId}/customizations" method="put" path="/medias/{mediaId}/customizations" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.update({
    mediaId: "<id>",
    requestBody: {
      plugin: {
        postRollV1: {
          style: {
            backgroundColor: "#303030",
          },
          ctaType: "text",
        },
      },
      videoFoam: true,
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
import { customizationsUpdate } from "@wistia/wistia-api-client/funcs/customizationsUpdate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsUpdate(wistia, {
    mediaId: "<id>",
    requestBody: {
      plugin: {
        postRollV1: {
          style: {
            backgroundColor: "#303030",
          },
          ctaType: "text",
        },
      },
      videoFoam: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaIdCustomizationsRequest](../../models/operations/putmediasmediaidcustomizationsrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaIdCustomizationsResponse](../../models/operations/putmediasmediaidcustomizationsresponse.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.PutMediasMediaIdCustomizationsUnauthorizedError   | 401                                                      | application/json                                         |
| errors.PutMediasMediaIdCustomizationsNotFoundError       | 404                                                      | application/json                                         |
| errors.PutMediasMediaIdCustomizationsInternalServerError | 500                                                      | application/json                                         |
| errors.WistiaDefaultError                                | 4XX, 5XX                                                 | \*/\*                                                    |

## delete

Deletes all explicit customizations for a video, making it act as if it has never been customized.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/medias/{mediaId}/customizations" method="delete" path="/medias/{mediaId}/customizations" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  await wistia.customizations.delete({
    mediaId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { customizationsDelete } from "@wistia/wistia-api-client/funcs/customizationsDelete.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsDelete(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customizationsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMediasMediaIdCustomizationsRequest](../../models/operations/deletemediasmediaidcustomizationsrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.DeleteMediasMediaIdCustomizationsUnauthorizedError   | 401                                                         | application/json                                            |
| errors.DeleteMediasMediaIdCustomizationsNotFoundError       | 404                                                         | application/json                                            |
| errors.DeleteMediasMediaIdCustomizationsInternalServerError | 500                                                         | application/json                                            |
| errors.WistiaDefaultError                                   | 4XX, 5XX                                                    | \*/\*                                                       |
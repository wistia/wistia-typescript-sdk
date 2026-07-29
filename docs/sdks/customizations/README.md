# Customizations

## Overview

### Available Operations

* [get](#get) - Show Customizations
* [create](#create) - Create Customizations
* [update](#update) - Update Customizations
* [delete](#delete) - Delete Customizations
* [getAppearance](#getappearance) - Show Appearance Customizations
* [updateAppearance](#updateappearance) - Update Appearance Customizations
* [getPlayback](#getplayback) - Show Playback Customizations
* [updatePlayback](#updateplayback) - Update Playback Customizations
* [getThumbnail](#getthumbnail) - Show Thumbnail Customizations
* [updateThumbnail](#updatethumbnail) - Update Thumbnail Customizations
* [getAccessibility](#getaccessibility) - Show Accessibility Customizations
* [updateAccessibility](#updateaccessibility) - Update Accessibility Customizations
* [getChapters](#getchapters) - Show Chapters Customizations
* [updateChapters](#updatechapters) - Update Chapters Customizations
* [getEngagement](#getengagement) - Show Engagement Customizations
* [updateEngagement](#updateengagement) - Update Engagement Customizations
* [getRelatedMedia](#getrelatedmedia) - Show Related Media Customizations
* [updateRelatedMedia](#updaterelatedmedia) - Update Related Media Customizations
* [getSharing](#getsharing) - Show Sharing Customizations
* [updateSharing](#updatesharing) - Update Sharing Customizations
* [getLeadCapture](#getleadcapture) - Show Lead Capture Customizations
* [updateLeadCapture](#updateleadcapture) - Update Lead Capture Customizations
* [getAccess](#getaccess) - Show Access Customizations
* [updateAccess](#updateaccess) - Update Access Customizations

## get

Fetches explicitly defined customizations for the video.

## Requires api token with one of the following permissions
```
Read all folder and media data
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
| errors.PostMediasMediaIdCustomizationsForbiddenError      | 403                                                       | application/json                                          |
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

## getAppearance

Fetches the explicitly-set appearance customizations (player color, gradient,
rounded corners, control contrast, and customer logo) for the video.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaId}/customizations/appearance" method="get" path="/medias/{mediaId}/customizations/appearance" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.getAppearance({
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
import { customizationsGetAppearance } from "@wistia/wistia-api-client/funcs/customizationsGetAppearance.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsGetAppearance(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsGetAppearance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaIdCustomizationsAppearanceRequest](../../models/operations/getmediasmediaidcustomizationsappearancerequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaIdCustomizationsAppearanceResponse](../../models/operations/getmediasmediaidcustomizationsappearanceresponse.md)\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.GetMediasMediaIdCustomizationsAppearanceUnauthorizedError   | 401                                                                | application/json                                                   |
| errors.GetMediasMediaIdCustomizationsAppearanceNotFoundError       | 404                                                                | application/json                                                   |
| errors.GetMediasMediaIdCustomizationsAppearanceInternalServerError | 500                                                                | application/json                                                   |
| errors.WistiaDefaultError                                          | 4XX, 5XX                                                           | \*/\*                                                              |

## updateAppearance

Applies a partial update to a video's appearance customizations. Only the
fields supplied are changed; sending a field as null deletes it (reverting to
the default).

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaId}/customizations/appearance" method="put" path="/medias/{mediaId}/customizations/appearance" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.updateAppearance({
    mediaId: "<id>",
    requestBody: {
      playerColor: "2949E5",
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
import { customizationsUpdateAppearance } from "@wistia/wistia-api-client/funcs/customizationsUpdateAppearance.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsUpdateAppearance(wistia, {
    mediaId: "<id>",
    requestBody: {
      playerColor: "2949E5",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsUpdateAppearance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaIdCustomizationsAppearanceRequest](../../models/operations/putmediasmediaidcustomizationsappearancerequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaIdCustomizationsAppearanceResponse](../../models/operations/putmediasmediaidcustomizationsappearanceresponse.md)\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.PutMediasMediaIdCustomizationsAppearanceBadRequestError     | 400                                                                | application/json                                                   |
| errors.PutMediasMediaIdCustomizationsAppearanceUnauthorizedError   | 401                                                                | application/json                                                   |
| errors.PutMediasMediaIdCustomizationsAppearanceForbiddenError      | 403                                                                | application/json                                                   |
| errors.PutMediasMediaIdCustomizationsAppearanceNotFoundError       | 404                                                                | application/json                                                   |
| errors.PutMediasMediaIdCustomizationsAppearanceInternalServerError | 500                                                                | application/json                                                   |
| errors.WistiaDefaultError                                          | 4XX, 5XX                                                           | \*/\*                                                              |

## getPlayback

Fetches the explicitly-set playback customizations (autoplay, mute, controls
visibility, player control buttons, end behavior, looping, quality bounds, and
embed/runtime flags) for the video.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaId}/customizations/playback" method="get" path="/medias/{mediaId}/customizations/playback" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.getPlayback({
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
import { customizationsGetPlayback } from "@wistia/wistia-api-client/funcs/customizationsGetPlayback.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsGetPlayback(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsGetPlayback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaIdCustomizationsPlaybackRequest](../../models/operations/getmediasmediaidcustomizationsplaybackrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaIdCustomizationsPlaybackResponse](../../models/operations/getmediasmediaidcustomizationsplaybackresponse.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.GetMediasMediaIdCustomizationsPlaybackUnauthorizedError   | 401                                                              | application/json                                                 |
| errors.GetMediasMediaIdCustomizationsPlaybackNotFoundError       | 404                                                              | application/json                                                 |
| errors.GetMediasMediaIdCustomizationsPlaybackInternalServerError | 500                                                              | application/json                                                 |
| errors.WistiaDefaultError                                        | 4XX, 5XX                                                         | \*/\*                                                            |

## updatePlayback

Applies a partial update to a video's playback customizations. Only the
fields supplied are changed; sending a field as null deletes it (reverting to
the default).

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaId}/customizations/playback" method="put" path="/medias/{mediaId}/customizations/playback" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.updatePlayback({
    mediaId: "<id>",
    requestBody: {
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
import { customizationsUpdatePlayback } from "@wistia/wistia-api-client/funcs/customizationsUpdatePlayback.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsUpdatePlayback(wistia, {
    mediaId: "<id>",
    requestBody: {
      videoFoam: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsUpdatePlayback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaIdCustomizationsPlaybackRequest](../../models/operations/putmediasmediaidcustomizationsplaybackrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaIdCustomizationsPlaybackResponse](../../models/operations/putmediasmediaidcustomizationsplaybackresponse.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.PutMediasMediaIdCustomizationsPlaybackBadRequestError     | 400                                                              | application/json                                                 |
| errors.PutMediasMediaIdCustomizationsPlaybackUnauthorizedError   | 401                                                              | application/json                                                 |
| errors.PutMediasMediaIdCustomizationsPlaybackForbiddenError      | 403                                                              | application/json                                                 |
| errors.PutMediasMediaIdCustomizationsPlaybackNotFoundError       | 404                                                              | application/json                                                 |
| errors.PutMediasMediaIdCustomizationsPlaybackInternalServerError | 500                                                              | application/json                                                 |
| errors.WistiaDefaultError                                        | 4XX, 5XX                                                         | \*/\*                                                            |

## getThumbnail

Fetches the explicitly-set thumbnail customizations (still image URL, alt
text, fit strategy, and the looping video thumbnail / text-overlay plugins)
for the video.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaId}/customizations/thumbnail" method="get" path="/medias/{mediaId}/customizations/thumbnail" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.getThumbnail({
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
import { customizationsGetThumbnail } from "@wistia/wistia-api-client/funcs/customizationsGetThumbnail.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsGetThumbnail(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsGetThumbnail failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaIdCustomizationsThumbnailRequest](../../models/operations/getmediasmediaidcustomizationsthumbnailrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaIdCustomizationsThumbnailResponse](../../models/operations/getmediasmediaidcustomizationsthumbnailresponse.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.GetMediasMediaIdCustomizationsThumbnailUnauthorizedError   | 401                                                               | application/json                                                  |
| errors.GetMediasMediaIdCustomizationsThumbnailNotFoundError       | 404                                                               | application/json                                                  |
| errors.GetMediasMediaIdCustomizationsThumbnailInternalServerError | 500                                                               | application/json                                                  |
| errors.WistiaDefaultError                                         | 4XX, 5XX                                                          | \*/\*                                                             |

## updateThumbnail

Applies a partial update to a video's thumbnail customizations. Only the
fields supplied are changed; sending a field as null deletes it (reverting to
the default).

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaId}/customizations/thumbnail" method="put" path="/medias/{mediaId}/customizations/thumbnail" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.updateThumbnail({
    mediaId: "<id>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { customizationsUpdateThumbnail } from "@wistia/wistia-api-client/funcs/customizationsUpdateThumbnail.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsUpdateThumbnail(wistia, {
    mediaId: "<id>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsUpdateThumbnail failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaIdCustomizationsThumbnailRequest](../../models/operations/putmediasmediaidcustomizationsthumbnailrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaIdCustomizationsThumbnailResponse](../../models/operations/putmediasmediaidcustomizationsthumbnailresponse.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.PutMediasMediaIdCustomizationsThumbnailBadRequestError     | 400                                                               | application/json                                                  |
| errors.PutMediasMediaIdCustomizationsThumbnailUnauthorizedError   | 401                                                               | application/json                                                  |
| errors.PutMediasMediaIdCustomizationsThumbnailForbiddenError      | 403                                                               | application/json                                                  |
| errors.PutMediasMediaIdCustomizationsThumbnailNotFoundError       | 404                                                               | application/json                                                  |
| errors.PutMediasMediaIdCustomizationsThumbnailInternalServerError | 500                                                               | application/json                                                  |
| errors.WistiaDefaultError                                         | 4XX, 5XX                                                          | \*/\*                                                             |

## getAccessibility

Fetches the explicitly-set accessibility customizations (caption display and
styling, transcript display, and audio description) for the video.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaId}/customizations/accessibility" method="get" path="/medias/{mediaId}/customizations/accessibility" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.getAccessibility({
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
import { customizationsGetAccessibility } from "@wistia/wistia-api-client/funcs/customizationsGetAccessibility.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsGetAccessibility(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsGetAccessibility failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaIdCustomizationsAccessibilityRequest](../../models/operations/getmediasmediaidcustomizationsaccessibilityrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaIdCustomizationsAccessibilityResponse](../../models/operations/getmediasmediaidcustomizationsaccessibilityresponse.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.GetMediasMediaIdCustomizationsAccessibilityUnauthorizedError   | 401                                                                   | application/json                                                      |
| errors.GetMediasMediaIdCustomizationsAccessibilityNotFoundError       | 404                                                                   | application/json                                                      |
| errors.GetMediasMediaIdCustomizationsAccessibilityInternalServerError | 500                                                                   | application/json                                                      |
| errors.WistiaDefaultError                                             | 4XX, 5XX                                                              | \*/\*                                                                 |

## updateAccessibility

Applies a partial update to a video's accessibility customizations. Only the
fields supplied are changed; sending a field as null deletes it (reverting to
the default).

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaId}/customizations/accessibility" method="put" path="/medias/{mediaId}/customizations/accessibility" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.updateAccessibility({
    mediaId: "<id>",
    requestBody: {
      captionsBackgroundColor: "000000",
      captionsTextColor: "ffffff",
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
import { customizationsUpdateAccessibility } from "@wistia/wistia-api-client/funcs/customizationsUpdateAccessibility.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsUpdateAccessibility(wistia, {
    mediaId: "<id>",
    requestBody: {
      captionsBackgroundColor: "000000",
      captionsTextColor: "ffffff",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsUpdateAccessibility failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaIdCustomizationsAccessibilityRequest](../../models/operations/putmediasmediaidcustomizationsaccessibilityrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaIdCustomizationsAccessibilityResponse](../../models/operations/putmediasmediaidcustomizationsaccessibilityresponse.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.PutMediasMediaIdCustomizationsAccessibilityBadRequestError     | 400                                                                   | application/json                                                      |
| errors.PutMediasMediaIdCustomizationsAccessibilityUnauthorizedError   | 401                                                                   | application/json                                                      |
| errors.PutMediasMediaIdCustomizationsAccessibilityForbiddenError      | 403                                                                   | application/json                                                      |
| errors.PutMediasMediaIdCustomizationsAccessibilityNotFoundError       | 404                                                                   | application/json                                                      |
| errors.PutMediasMediaIdCustomizationsAccessibilityInternalServerError | 500                                                                   | application/json                                                      |
| errors.WistiaDefaultError                                             | 4XX, 5XX                                                              | \*/\*                                                                 |

## getChapters

Fetches the explicitly-set chapter customizations (the chapter list and its
visibility) for the media.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaId}/customizations/chapters" method="get" path="/medias/{mediaId}/customizations/chapters" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.getChapters({
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
import { customizationsGetChapters } from "@wistia/wistia-api-client/funcs/customizationsGetChapters.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsGetChapters(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsGetChapters failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaIdCustomizationsChaptersRequest](../../models/operations/getmediasmediaidcustomizationschaptersrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaIdCustomizationsChaptersResponse](../../models/operations/getmediasmediaidcustomizationschaptersresponse.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.GetMediasMediaIdCustomizationsChaptersUnauthorizedError   | 401                                                              | application/json                                                 |
| errors.GetMediasMediaIdCustomizationsChaptersNotFoundError       | 404                                                              | application/json                                                 |
| errors.GetMediasMediaIdCustomizationsChaptersInternalServerError | 500                                                              | application/json                                                 |
| errors.WistiaDefaultError                                        | 4XX, 5XX                                                         | \*/\*                                                            |

## updateChapters

Applies a partial update to a media's chapter customizations. Only the fields
supplied are changed; sending a field as null deletes it.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaId}/customizations/chapters" method="put" path="/medias/{mediaId}/customizations/chapters" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.updateChapters({
    mediaId: "<id>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { customizationsUpdateChapters } from "@wistia/wistia-api-client/funcs/customizationsUpdateChapters.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsUpdateChapters(wistia, {
    mediaId: "<id>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsUpdateChapters failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaIdCustomizationsChaptersRequestRequest](../../models/operations/putmediasmediaidcustomizationschaptersrequestrequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaIdCustomizationsChaptersResponse](../../models/operations/putmediasmediaidcustomizationschaptersresponse.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.PutMediasMediaIdCustomizationsChaptersBadRequestError     | 400                                                              | application/json                                                 |
| errors.PutMediasMediaIdCustomizationsChaptersUnauthorizedError   | 401                                                              | application/json                                                 |
| errors.PutMediasMediaIdCustomizationsChaptersForbiddenError      | 403                                                              | application/json                                                 |
| errors.PutMediasMediaIdCustomizationsChaptersNotFoundError       | 404                                                              | application/json                                                 |
| errors.PutMediasMediaIdCustomizationsChaptersInternalServerError | 500                                                              | application/json                                                 |
| errors.WistiaDefaultError                                        | 4XX, 5XX                                                         | \*/\*                                                            |

## getEngagement

Fetches the explicitly-set engagement customizations (the end/pause Call To
Action and timed annotation links) for the video.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaId}/customizations/engagement" method="get" path="/medias/{mediaId}/customizations/engagement" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.getEngagement({
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
import { customizationsGetEngagement } from "@wistia/wistia-api-client/funcs/customizationsGetEngagement.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsGetEngagement(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsGetEngagement failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaIdCustomizationsEngagementRequest](../../models/operations/getmediasmediaidcustomizationsengagementrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaIdCustomizationsEngagementResponse](../../models/operations/getmediasmediaidcustomizationsengagementresponse.md)\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.GetMediasMediaIdCustomizationsEngagementUnauthorizedError   | 401                                                                | application/json                                                   |
| errors.GetMediasMediaIdCustomizationsEngagementNotFoundError       | 404                                                                | application/json                                                   |
| errors.GetMediasMediaIdCustomizationsEngagementInternalServerError | 500                                                                | application/json                                                   |
| errors.WistiaDefaultError                                          | 4XX, 5XX                                                           | \*/\*                                                              |

## updateEngagement

Applies a partial update to a video's engagement customizations. Only the
fields supplied are changed; sending a field as null deletes it (reverting to
the default).

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaId}/customizations/engagement" method="put" path="/medias/{mediaId}/customizations/engagement" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.updateEngagement({
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
import { customizationsUpdateEngagement } from "@wistia/wistia-api-client/funcs/customizationsUpdateEngagement.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsUpdateEngagement(wistia, {
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsUpdateEngagement failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaIdCustomizationsEngagementRequest](../../models/operations/putmediasmediaidcustomizationsengagementrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaIdCustomizationsEngagementResponse](../../models/operations/putmediasmediaidcustomizationsengagementresponse.md)\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.PutMediasMediaIdCustomizationsEngagementBadRequestError     | 400                                                                | application/json                                                   |
| errors.PutMediasMediaIdCustomizationsEngagementUnauthorizedError   | 401                                                                | application/json                                                   |
| errors.PutMediasMediaIdCustomizationsEngagementForbiddenError      | 403                                                                | application/json                                                   |
| errors.PutMediasMediaIdCustomizationsEngagementNotFoundError       | 404                                                                | application/json                                                   |
| errors.PutMediasMediaIdCustomizationsEngagementInternalServerError | 500                                                                | application/json                                                   |
| errors.WistiaDefaultError                                          | 4XX, 5XX                                                           | \*/\*                                                              |

## getRelatedMedia

Fetches the explicitly-set related-media ("discover more") customizations
(which videos to recommend, when to show them, label and button text) for
the video.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaId}/customizations/related_media" method="get" path="/medias/{mediaId}/customizations/related_media" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.getRelatedMedia({
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
import { customizationsGetRelatedMedia } from "@wistia/wistia-api-client/funcs/customizationsGetRelatedMedia.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsGetRelatedMedia(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsGetRelatedMedia failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaIdCustomizationsRelatedMediaRequest](../../models/operations/getmediasmediaidcustomizationsrelatedmediarequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaIdCustomizationsRelatedMediaResponse](../../models/operations/getmediasmediaidcustomizationsrelatedmediaresponse.md)\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.GetMediasMediaIdCustomizationsRelatedMediaUnauthorizedError   | 401                                                                  | application/json                                                     |
| errors.GetMediasMediaIdCustomizationsRelatedMediaNotFoundError       | 404                                                                  | application/json                                                     |
| errors.GetMediasMediaIdCustomizationsRelatedMediaInternalServerError | 500                                                                  | application/json                                                     |
| errors.WistiaDefaultError                                            | 4XX, 5XX                                                             | \*/\*                                                                |

## updateRelatedMedia

Applies a partial update to a video's related-media customizations. Only the
fields supplied are changed; sending a field as null deletes it (reverting to
the default).

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaId}/customizations/related_media" method="put" path="/medias/{mediaId}/customizations/related_media" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.updateRelatedMedia({
    mediaId: "<id>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { customizationsUpdateRelatedMedia } from "@wistia/wistia-api-client/funcs/customizationsUpdateRelatedMedia.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsUpdateRelatedMedia(wistia, {
    mediaId: "<id>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsUpdateRelatedMedia failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaIdCustomizationsRelatedMediaRequest](../../models/operations/putmediasmediaidcustomizationsrelatedmediarequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaIdCustomizationsRelatedMediaResponse](../../models/operations/putmediasmediaidcustomizationsrelatedmediaresponse.md)\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.PutMediasMediaIdCustomizationsRelatedMediaBadRequestError     | 400                                                                  | application/json                                                     |
| errors.PutMediasMediaIdCustomizationsRelatedMediaUnauthorizedError   | 401                                                                  | application/json                                                     |
| errors.PutMediasMediaIdCustomizationsRelatedMediaForbiddenError      | 403                                                                  | application/json                                                     |
| errors.PutMediasMediaIdCustomizationsRelatedMediaNotFoundError       | 404                                                                  | application/json                                                     |
| errors.PutMediasMediaIdCustomizationsRelatedMediaInternalServerError | 500                                                                  | application/json                                                     |
| errors.WistiaDefaultError                                            | 4XX, 5XX                                                             | \*/\*                                                                |

## getSharing

Fetches the explicitly-set sharing customizations (the social/embed/download
share bar: enabled channels, tweet text, download type, and page URL/title)
for the video.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaId}/customizations/sharing" method="get" path="/medias/{mediaId}/customizations/sharing" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.getSharing({
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
import { customizationsGetSharing } from "@wistia/wistia-api-client/funcs/customizationsGetSharing.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsGetSharing(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsGetSharing failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaIdCustomizationsSharingRequest](../../models/operations/getmediasmediaidcustomizationssharingrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaIdCustomizationsSharingResponse](../../models/operations/getmediasmediaidcustomizationssharingresponse.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.GetMediasMediaIdCustomizationsSharingUnauthorizedError   | 401                                                             | application/json                                                |
| errors.GetMediasMediaIdCustomizationsSharingNotFoundError       | 404                                                             | application/json                                                |
| errors.GetMediasMediaIdCustomizationsSharingInternalServerError | 500                                                             | application/json                                                |
| errors.WistiaDefaultError                                       | 4XX, 5XX                                                        | \*/\*                                                           |

## updateSharing

Applies a partial update to a video's sharing customizations. Only the fields
supplied are changed; sending a field as null deletes it (reverting to the
default).

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaId}/customizations/sharing" method="put" path="/medias/{mediaId}/customizations/sharing" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.updateSharing({
    mediaId: "<id>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { customizationsUpdateSharing } from "@wistia/wistia-api-client/funcs/customizationsUpdateSharing.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsUpdateSharing(wistia, {
    mediaId: "<id>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsUpdateSharing failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaIdCustomizationsSharingRequest](../../models/operations/putmediasmediaidcustomizationssharingrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaIdCustomizationsSharingResponse](../../models/operations/putmediasmediaidcustomizationssharingresponse.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.PutMediasMediaIdCustomizationsSharingBadRequestError     | 400                                                             | application/json                                                |
| errors.PutMediasMediaIdCustomizationsSharingUnauthorizedError   | 401                                                             | application/json                                                |
| errors.PutMediasMediaIdCustomizationsSharingForbiddenError      | 403                                                             | application/json                                                |
| errors.PutMediasMediaIdCustomizationsSharingNotFoundError       | 404                                                             | application/json                                                |
| errors.PutMediasMediaIdCustomizationsSharingInternalServerError | 500                                                             | application/json                                                |
| errors.WistiaDefaultError                                       | 4XX, 5XX                                                        | \*/\*                                                           |

## getLeadCapture

Fetches the explicitly-set lead-capture plugins (Turnstile, Wistia Form, and
HubSpot/Marketo/Pardot form embeds) for the video.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaId}/customizations/lead_capture" method="get" path="/medias/{mediaId}/customizations/lead_capture" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.getLeadCapture({
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
import { customizationsGetLeadCapture } from "@wistia/wistia-api-client/funcs/customizationsGetLeadCapture.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsGetLeadCapture(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsGetLeadCapture failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaIdCustomizationsLeadCaptureRequest](../../models/operations/getmediasmediaidcustomizationsleadcapturerequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaIdCustomizationsLeadCaptureResponse](../../models/operations/getmediasmediaidcustomizationsleadcaptureresponse.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.GetMediasMediaIdCustomizationsLeadCaptureUnauthorizedError   | 401                                                                 | application/json                                                    |
| errors.GetMediasMediaIdCustomizationsLeadCaptureNotFoundError       | 404                                                                 | application/json                                                    |
| errors.GetMediasMediaIdCustomizationsLeadCaptureInternalServerError | 500                                                                 | application/json                                                    |
| errors.WistiaDefaultError                                           | 4XX, 5XX                                                            | \*/\*                                                               |

## updateLeadCapture

Configures a single lead-capture provider for the video, mapping it to the
appropriate underlying plugin. Only the selected provider is changed.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaId}/customizations/lead_capture" method="put" path="/medias/{mediaId}/customizations/lead_capture" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.updateLeadCapture({
    mediaId: "<id>",
    requestBody: {
      provider: "marketo",
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
import { customizationsUpdateLeadCapture } from "@wistia/wistia-api-client/funcs/customizationsUpdateLeadCapture.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsUpdateLeadCapture(wistia, {
    mediaId: "<id>",
    requestBody: {
      provider: "marketo",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsUpdateLeadCapture failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaIdCustomizationsLeadCaptureRequest](../../models/operations/putmediasmediaidcustomizationsleadcapturerequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaIdCustomizationsLeadCaptureResponse](../../models/operations/putmediasmediaidcustomizationsleadcaptureresponse.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.PutMediasMediaIdCustomizationsLeadCaptureBadRequestError     | 400                                                                 | application/json                                                    |
| errors.PutMediasMediaIdCustomizationsLeadCaptureUnauthorizedError   | 401                                                                 | application/json                                                    |
| errors.PutMediasMediaIdCustomizationsLeadCaptureForbiddenError      | 403                                                                 | application/json                                                    |
| errors.PutMediasMediaIdCustomizationsLeadCaptureNotFoundError       | 404                                                                 | application/json                                                    |
| errors.PutMediasMediaIdCustomizationsLeadCaptureInternalServerError | 500                                                                 | application/json                                                    |
| errors.WistiaDefaultError                                           | 4XX, 5XX                                                            | \*/\*                                                               |

## getAccess

Fetches the explicitly-set password-protection settings for the video,
including the stored password.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaId}/customizations/access" method="get" path="/medias/{mediaId}/customizations/access" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.getAccess({
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
import { customizationsGetAccess } from "@wistia/wistia-api-client/funcs/customizationsGetAccess.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsGetAccess(wistia, {
    mediaId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsGetAccess failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaIdCustomizationsAccessRequest](../../models/operations/getmediasmediaidcustomizationsaccessrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaIdCustomizationsAccessResponse](../../models/operations/getmediasmediaidcustomizationsaccessresponse.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.GetMediasMediaIdCustomizationsAccessUnauthorizedError   | 401                                                            | application/json                                               |
| errors.GetMediasMediaIdCustomizationsAccessNotFoundError       | 404                                                            | application/json                                               |
| errors.GetMediasMediaIdCustomizationsAccessInternalServerError | 500                                                            | application/json                                               |
| errors.WistiaDefaultError                                      | 4XX, 5XX                                                       | \*/\*                                                          |

## updateAccess

Applies a partial update to a video's password-protection settings. Only the
fields supplied are changed; sending a field as null deletes it.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaId}/customizations/access" method="put" path="/medias/{mediaId}/customizations/access" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customizations.updateAccess({
    mediaId: "<id>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { customizationsUpdateAccess } from "@wistia/wistia-api-client/funcs/customizationsUpdateAccess.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customizationsUpdateAccess(wistia, {
    mediaId: "<id>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customizationsUpdateAccess failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaIdCustomizationsAccessRequest](../../models/operations/putmediasmediaidcustomizationsaccessrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaIdCustomizationsAccessResponse](../../models/operations/putmediasmediaidcustomizationsaccessresponse.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.PutMediasMediaIdCustomizationsAccessBadRequestError     | 400                                                            | application/json                                               |
| errors.PutMediasMediaIdCustomizationsAccessUnauthorizedError   | 401                                                            | application/json                                               |
| errors.PutMediasMediaIdCustomizationsAccessForbiddenError      | 403                                                            | application/json                                               |
| errors.PutMediasMediaIdCustomizationsAccessNotFoundError       | 404                                                            | application/json                                               |
| errors.PutMediasMediaIdCustomizationsAccessInternalServerError | 500                                                            | application/json                                               |
| errors.WistiaDefaultError                                      | 4XX, 5XX                                                       | \*/\*                                                          |
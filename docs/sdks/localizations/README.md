# Localizations

## Overview

### Available Operations

* [getMediasMediaHashedIdLocalizations](#getmediasmediahashedidlocalizations) - List Localizations
* [postMediasMediaHashedIdLocalizations](#postmediasmediahashedidlocalizations) - Create Localization
* [getMediasMediaHashedIdLocalizationsLocalizationHashedId](#getmediasmediahashedidlocalizationslocalizationhashedid) - Show Localization
* [deleteMediasMediaHashedIdLocalizationsLocalizationHashedId](#deletemediasmediahashedidlocalizationslocalizationhashedid) - Delete Localization

## getMediasMediaHashedIdLocalizations

Lists all the localizations for a media.

## Requires api token with one of the following permissions
```
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaHashedId}/localizations" method="get" path="/medias/{mediaHashedId}/localizations" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.localizations.getMediasMediaHashedIdLocalizations({
    mediaHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { localizationsGetMediasMediaHashedIdLocalizations } from "@wistia/wistia-api-client/funcs/localizationsGetMediasMediaHashedIdLocalizations.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await localizationsGetMediasMediaHashedIdLocalizations(wistia, {
    mediaHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("localizationsGetMediasMediaHashedIdLocalizations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaHashedIdLocalizationsRequest](../../models/operations/getmediasmediahashedidlocalizationsrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaHashedIdLocalizationsResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.GetMediasMediaHashedIdLocalizationsUnauthorizedError   | 401                                                           | application/json                                              |
| errors.GetMediasMediaHashedIdLocalizationsNotFoundError       | 404                                                           | application/json                                              |
| errors.GetMediasMediaHashedIdLocalizationsInternalServerError | 500                                                           | application/json                                              |
| errors.WistiaDefaultError                                     | 4XX, 5XX                                                      | \*/\*                                                         |

## postMediasMediaHashedIdLocalizations

Creates a new localization.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/medias/{mediaHashedId}/localizations" method="post" path="/medias/{mediaHashedId}/localizations" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.localizations.postMediasMediaHashedIdLocalizations({
    mediaHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { localizationsPostMediasMediaHashedIdLocalizations } from "@wistia/wistia-api-client/funcs/localizationsPostMediasMediaHashedIdLocalizations.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await localizationsPostMediasMediaHashedIdLocalizations(wistia, {
    mediaHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("localizationsPostMediasMediaHashedIdLocalizations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostMediasMediaHashedIdLocalizationsRequest](../../models/operations/postmediasmediahashedidlocalizationsrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostMediasMediaHashedIdLocalizationsResponse](../../models/operations/postmediasmediahashedidlocalizationsresponse.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.PostMediasMediaHashedIdLocalizationsBadRequestError          | 400                                                                 | application/json                                                    |
| errors.PostMediasMediaHashedIdLocalizationsUnauthorizedError        | 401                                                                 | application/json                                                    |
| errors.PostMediasMediaHashedIdLocalizationsForbiddenError           | 403                                                                 | application/json                                                    |
| errors.PostMediasMediaHashedIdLocalizationsNotFoundError            | 404                                                                 | application/json                                                    |
| errors.PostMediasMediaHashedIdLocalizationsUnprocessableEntityError | 422                                                                 | application/json                                                    |
| errors.PostMediasMediaHashedIdLocalizationsInternalServerError      | 500                                                                 | application/json                                                    |
| errors.WistiaDefaultError                                           | 4XX, 5XX                                                            | \*/\*                                                               |

## getMediasMediaHashedIdLocalizationsLocalizationHashedId

Obtain detailed information about a localization.

## Requires api token with one of the following permissions
```
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaHashedId}/localizations/{localizationHashedId}" method="get" path="/medias/{mediaHashedId}/localizations/{localizationHashedId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.localizations.getMediasMediaHashedIdLocalizationsLocalizationHashedId({
    mediaHashedId: "<id>",
    localizationHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { localizationsGetMediasMediaHashedIdLocalizationsLocalizationHashedId } from "@wistia/wistia-api-client/funcs/localizationsGetMediasMediaHashedIdLocalizationsLocalizationHashedId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await localizationsGetMediasMediaHashedIdLocalizationsLocalizationHashedId(wistia, {
    mediaHashedId: "<id>",
    localizationHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("localizationsGetMediasMediaHashedIdLocalizationsLocalizationHashedId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest](../../models/operations/getmediasmediahashedidlocalizationslocalizationhashedidrequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaHashedIdLocalizationsLocalizationHashedIdResponse](../../models/operations/getmediasmediahashedidlocalizationslocalizationhashedidresponse.md)\>**

### Errors

| Error Type                                                                        | Status Code                                                                       | Content Type                                                                      |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| errors.GetMediasMediaHashedIdLocalizationsLocalizationHashedIdUnauthorizedError   | 401                                                                               | application/json                                                                  |
| errors.GetMediasMediaHashedIdLocalizationsLocalizationHashedIdNotFoundError       | 404                                                                               | application/json                                                                  |
| errors.GetMediasMediaHashedIdLocalizationsLocalizationHashedIdInternalServerError | 500                                                                               | application/json                                                                  |
| errors.WistiaDefaultError                                                         | 4XX, 5XX                                                                          | \*/\*                                                                             |

## deleteMediasMediaHashedIdLocalizationsLocalizationHashedId

Deletes a localization.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/medias/{mediaHashedId}/localizations/{localizationHashedId}" method="delete" path="/medias/{mediaHashedId}/localizations/{localizationHashedId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.localizations.deleteMediasMediaHashedIdLocalizationsLocalizationHashedId({
    mediaHashedId: "<id>",
    localizationHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { localizationsDeleteMediasMediaHashedIdLocalizationsLocalizationHashedId } from "@wistia/wistia-api-client/funcs/localizationsDeleteMediasMediaHashedIdLocalizationsLocalizationHashedId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await localizationsDeleteMediasMediaHashedIdLocalizationsLocalizationHashedId(wistia, {
    mediaHashedId: "<id>",
    localizationHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("localizationsDeleteMediasMediaHashedIdLocalizationsLocalizationHashedId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest](../../models/operations/deletemediasmediahashedidlocalizationslocalizationhashedidrequest.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdResponse](../../models/operations/deletemediasmediahashedidlocalizationslocalizationhashedidresponse.md)\>**

### Errors

| Error Type                                                                           | Status Code                                                                          | Content Type                                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| errors.DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdUnauthorizedError   | 401                                                                                  | application/json                                                                     |
| errors.DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdForbiddenError      | 403                                                                                  | application/json                                                                     |
| errors.DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdNotFoundError       | 404                                                                                  | application/json                                                                     |
| errors.DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdInternalServerError | 500                                                                                  | application/json                                                                     |
| errors.WistiaDefaultError                                                            | 4XX, 5XX                                                                             | \*/\*                                                                                |
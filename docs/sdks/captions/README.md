# Captions

## Overview

### Available Operations

* [getMediasMediaHashedIdCaptions](#getmediasmediahashedidcaptions) - List Captions by Media
* [postMediasMediaHashedIdCaptions](#postmediasmediahashedidcaptions) - Create Captions
* [postMediasMediaHashedIdCaptionsMultipart](#postmediasmediahashedidcaptionsmultipart) - Create Captions
* [getCaptions](#getcaptions) - List Captions
* [postMediasMediaHashedIdCaptionsPurchase](#postmediasmediahashedidcaptionspurchase) - Purchase Captions
* [getMediasMediaHashedIdCaptionsLanguageCode](#getmediasmediahashedidcaptionslanguagecode) - Show Captions
* [putMediasMediaHashedIdCaptionsLanguageCode](#putmediasmediahashedidcaptionslanguagecode) - Update Captions
* [putMediasMediaHashedIdCaptionsLanguageCodeMultipart](#putmediasmediahashedidcaptionslanguagecodemultipart) - Update Captions
* [deleteMediasMediaHashedIdCaptionsLanguageCode](#deletemediasmediahashedidcaptionslanguagecode) - Delete Captions

## getMediasMediaHashedIdCaptions

Lists captions belonging to a specific media.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaHashedId}/captions" method="get" path="/medias/{mediaHashedId}/captions" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.captions.getMediasMediaHashedIdCaptions({
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
import { captionsGetMediasMediaHashedIdCaptions } from "@wistia/wistia-api-client/funcs/captionsGetMediasMediaHashedIdCaptions.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await captionsGetMediasMediaHashedIdCaptions(wistia, {
    mediaHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("captionsGetMediasMediaHashedIdCaptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaHashedIdCaptionsRequest](../../models/operations/getmediasmediahashedidcaptionsrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaHashedIdCaptionsResponse[]](../../models/.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.GetMediasMediaHashedIdCaptionsUnauthorizedError   | 401                                                      | application/json                                         |
| errors.GetMediasMediaHashedIdCaptionsInternalServerError | 500                                                      | application/json                                         |
| errors.WistiaDefaultError                                | 4XX, 5XX                                                 | \*/\*                                                    |

## postMediasMediaHashedIdCaptions

Adds captions to a specified media by providing an SRT file or its contents directly.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/medias/{mediaHashedId}/captions" method="post" path="/medias/{mediaHashedId}/captions" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  await wistia.captions.postMediasMediaHashedIdCaptions({
    mediaHashedId: "<id>",
    requestBody: {
      captionFile: "" // Populate with string from file, for example example.file,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { captionsPostMediasMediaHashedIdCaptions } from "@wistia/wistia-api-client/funcs/captionsPostMediasMediaHashedIdCaptions.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await captionsPostMediasMediaHashedIdCaptions(wistia, {
    mediaHashedId: "<id>",
    requestBody: {
      captionFile: "" // Populate with string from file, for example example.file,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("captionsPostMediasMediaHashedIdCaptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostMediasMediaHashedIdCaptionsRequest](../../models/operations/postmediasmediahashedidcaptionsrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.PostMediasMediaHashedIdCaptionsUnauthorizedError   | 401                                                       | application/json                                          |
| errors.PostMediasMediaHashedIdCaptionsForbiddenError      | 403                                                       | application/json                                          |
| errors.PostMediasMediaHashedIdCaptionsInternalServerError | 500                                                       | application/json                                          |
| errors.WistiaDefaultError                                 | 4XX, 5XX                                                  | \*/\*                                                     |

## postMediasMediaHashedIdCaptionsMultipart

Adds captions to a specified media by providing an SRT file or its contents directly.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/medias/{mediaHashedId}/captions_multipart" method="post" path="/medias/{mediaHashedId}/captions" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { openAsBlob } from "node:fs";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  await wistia.captions.postMediasMediaHashedIdCaptionsMultipart({
    mediaHashedId: "<id>",
    requestBody: {
      captionFile: await openAsBlob("example.file"),
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { captionsPostMediasMediaHashedIdCaptionsMultipart } from "@wistia/wistia-api-client/funcs/captionsPostMediasMediaHashedIdCaptionsMultipart.js";
import { openAsBlob } from "node:fs";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await captionsPostMediasMediaHashedIdCaptionsMultipart(wistia, {
    mediaHashedId: "<id>",
    requestBody: {
      captionFile: await openAsBlob("example.file"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("captionsPostMediasMediaHashedIdCaptionsMultipart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostMediasMediaHashedIdCaptionsMultipartRequest](../../models/operations/postmediasmediahashedidcaptionsmultipartrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.PostMediasMediaHashedIdCaptionsMultipartUnauthorizedError   | 401                                                                | application/json                                                   |
| errors.PostMediasMediaHashedIdCaptionsMultipartForbiddenError      | 403                                                                | application/json                                                   |
| errors.PostMediasMediaHashedIdCaptionsMultipartInternalServerError | 500                                                                | application/json                                                   |
| errors.WistiaDefaultError                                          | 4XX, 5XX                                                           | \*/\*                                                              |

## getCaptions

Lists captions belonging to the account. This endpoint can also narrow down results
to those belonging to a specific media.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/captions" method="get" path="/captions" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.captions.getCaptions({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { captionsGetCaptions } from "@wistia/wistia-api-client/funcs/captionsGetCaptions.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await captionsGetCaptions(wistia, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("captionsGetCaptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCaptionsRequest](../../models/operations/getcaptionsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCaptionsResponse[]](../../models/.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GetCaptionsBadRequestError     | 400                                   | application/json                      |
| errors.GetCaptionsUnauthorizedError   | 401                                   | application/json                      |
| errors.GetCaptionsInternalServerError | 500                                   | application/json                      |
| errors.WistiaDefaultError             | 4XX, 5XX                              | \*/\*                                 |

## postMediasMediaHashedIdCaptionsPurchase

This method is for purchasing English captions for a media. The request will charge the credit card on the account if successful. A saved credit card is required to use this endpoint.

> 🚫 Alert
>
> The `automated` parameter defaults to `false`, which orders **paid human-generated captions**. To order computer-generated captions, you must explicitly set `automated` to `true`.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/medias/{mediaHashedId}/captions/purchase" method="post" path="/medias/{mediaHashedId}/captions/purchase" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.captions.postMediasMediaHashedIdCaptionsPurchase({
    mediaHashedId: "<id>",
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
import { captionsPostMediasMediaHashedIdCaptionsPurchase } from "@wistia/wistia-api-client/funcs/captionsPostMediasMediaHashedIdCaptionsPurchase.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await captionsPostMediasMediaHashedIdCaptionsPurchase(wistia, {
    mediaHashedId: "<id>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("captionsPostMediasMediaHashedIdCaptionsPurchase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostMediasMediaHashedIdCaptionsPurchaseRequest](../../models/operations/postmediasmediahashedidcaptionspurchaserequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostMediasMediaHashedIdCaptionsPurchaseResponse](../../models/operations/postmediasmediahashedidcaptionspurchaseresponse.md)\>**

### Errors

| Error Type                                                             | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.PostMediasMediaHashedIdCaptionsPurchaseUnauthorizedError        | 401                                                                    | application/json                                                       |
| errors.PostMediasMediaHashedIdCaptionsPurchaseUnprocessableEntityError | 422                                                                    | application/json                                                       |
| errors.PostMediasMediaHashedIdCaptionsPurchaseInternalServerError      | 500                                                                    | application/json                                                       |
| errors.WistiaDefaultError                                              | 4XX, 5XX                                                               | \*/\*                                                                  |

## getMediasMediaHashedIdCaptionsLanguageCode

Returns a video's captions in the specified language.
Supports multiple formats: JSON (default), SRT, VTT, and TXT.
Use file extensions (.srt, .vtt, .txt) or Accept headers to specify format.

## Requires api token with one of the following permissions
```
Read all folder and media data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaHashedId}/captions/{languageCode}" method="get" path="/medias/{mediaHashedId}/captions/{languageCode}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.captions.getMediasMediaHashedIdCaptionsLanguageCode({
    mediaHashedId: "<id>",
    languageCode: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { captionsGetMediasMediaHashedIdCaptionsLanguageCode } from "@wistia/wistia-api-client/funcs/captionsGetMediasMediaHashedIdCaptionsLanguageCode.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await captionsGetMediasMediaHashedIdCaptionsLanguageCode(wistia, {
    mediaHashedId: "<id>",
    languageCode: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("captionsGetMediasMediaHashedIdCaptionsLanguageCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaHashedIdCaptionsLanguageCodeRequest](../../models/operations/getmediasmediahashedidcaptionslanguagecoderequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaHashedIdCaptionsLanguageCodeResponse](../../models/operations/getmediasmediahashedidcaptionslanguagecoderesponse.md)\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.GetMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError   | 401                                                                  | application/json                                                     |
| errors.GetMediasMediaHashedIdCaptionsLanguageCodeInternalServerError | 500                                                                  | application/json                                                     |
| errors.WistiaDefaultError                                            | 4XX, 5XX                                                             | \*/\*                                                                |

## putMediasMediaHashedIdCaptionsLanguageCode

This method is for replacing the captions on a video for the specified language.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaHashedId}/captions/{languageCode}" method="put" path="/medias/{mediaHashedId}/captions/{languageCode}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  await wistia.captions.putMediasMediaHashedIdCaptionsLanguageCode({
    mediaHashedId: "<id>",
    languageCode: "<value>",
    requestBody: {
      captionFile: "<value>",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { captionsPutMediasMediaHashedIdCaptionsLanguageCode } from "@wistia/wistia-api-client/funcs/captionsPutMediasMediaHashedIdCaptionsLanguageCode.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await captionsPutMediasMediaHashedIdCaptionsLanguageCode(wistia, {
    mediaHashedId: "<id>",
    languageCode: "<value>",
    requestBody: {
      captionFile: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("captionsPutMediasMediaHashedIdCaptionsLanguageCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaHashedIdCaptionsLanguageCodeRequest](../../models/operations/putmediasmediahashedidcaptionslanguagecoderequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.PutMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError   | 401                                                                  | application/json                                                     |
| errors.PutMediasMediaHashedIdCaptionsLanguageCodeInternalServerError | 500                                                                  | application/json                                                     |
| errors.WistiaDefaultError                                            | 4XX, 5XX                                                             | \*/\*                                                                |

## putMediasMediaHashedIdCaptionsLanguageCodeMultipart

This method is for replacing the captions on a video for the specified language.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaHashedId}/captions/{languageCode}_multipart" method="put" path="/medias/{mediaHashedId}/captions/{languageCode}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { openAsBlob } from "node:fs";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  await wistia.captions.putMediasMediaHashedIdCaptionsLanguageCodeMultipart({
    mediaHashedId: "<id>",
    languageCode: "<value>",
    requestBody: {
      captionFile: await openAsBlob("example.file"),
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { captionsPutMediasMediaHashedIdCaptionsLanguageCodeMultipart } from "@wistia/wistia-api-client/funcs/captionsPutMediasMediaHashedIdCaptionsLanguageCodeMultipart.js";
import { openAsBlob } from "node:fs";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await captionsPutMediasMediaHashedIdCaptionsLanguageCodeMultipart(wistia, {
    mediaHashedId: "<id>",
    languageCode: "<value>",
    requestBody: {
      captionFile: await openAsBlob("example.file"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("captionsPutMediasMediaHashedIdCaptionsLanguageCodeMultipart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaHashedIdCaptionsLanguageCodeMultipartRequest](../../models/operations/putmediasmediahashedidcaptionslanguagecodemultipartrequest.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                                    | Status Code                                                                   | Content Type                                                                  |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| errors.PutMediasMediaHashedIdCaptionsLanguageCodeMultipartUnauthorizedError   | 401                                                                           | application/json                                                              |
| errors.PutMediasMediaHashedIdCaptionsLanguageCodeMultipartInternalServerError | 500                                                                           | application/json                                                              |
| errors.WistiaDefaultError                                                     | 4XX, 5XX                                                                      | \*/\*                                                                         |

## deleteMediasMediaHashedIdCaptionsLanguageCode

Removes the captions file from a media for the specified language.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/medias/{mediaHashedId}/captions/{languageCode}" method="delete" path="/medias/{mediaHashedId}/captions/{languageCode}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  await wistia.captions.deleteMediasMediaHashedIdCaptionsLanguageCode({
    mediaHashedId: "<id>",
    languageCode: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { captionsDeleteMediasMediaHashedIdCaptionsLanguageCode } from "@wistia/wistia-api-client/funcs/captionsDeleteMediasMediaHashedIdCaptionsLanguageCode.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await captionsDeleteMediasMediaHashedIdCaptionsLanguageCode(wistia, {
    mediaHashedId: "<id>",
    languageCode: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("captionsDeleteMediasMediaHashedIdCaptionsLanguageCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMediasMediaHashedIdCaptionsLanguageCodeRequest](../../models/operations/deletemediasmediahashedidcaptionslanguagecoderequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                              | Status Code                                                             | Content Type                                                            |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| errors.DeleteMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError   | 401                                                                     | application/json                                                        |
| errors.DeleteMediasMediaHashedIdCaptionsLanguageCodeInternalServerError | 500                                                                     | application/json                                                        |
| errors.WistiaDefaultError                                               | 4XX, 5XX                                                                | \*/\*                                                                   |
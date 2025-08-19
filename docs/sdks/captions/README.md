# Captions
(*captions*)

## Overview

### Available Operations

* [getMediasMediaHashedIdCaptions](#getmediasmediahashedidcaptions) - Captions List
* [postMediasMediaHashedIdCaptionsMultipart](#postmediasmediahashedidcaptionsmultipart) - Captions Create
* [postMediasMediaHashedIdCaptions](#postmediasmediahashedidcaptions) - Captions Create
* [postMediasMediaHashedIdCaptionsPurchase](#postmediasmediahashedidcaptionspurchase) - Captions Purchase
* [getMediasMediaHashedIdCaptionsLanguageCode](#getmediasmediahashedidcaptionslanguagecode) - Captions Show
* [putMediasMediaHashedIdCaptionsLanguageCode](#putmediasmediahashedidcaptionslanguagecode) - Captions Update
* [putMediasMediaHashedIdCaptionsLanguageCodeMultipart](#putmediasmediahashedidcaptionslanguagecodemultipart) - Captions Update
* [deleteMediasMediaHashedIdCaptionsLanguageCode](#deletemediasmediahashedidcaptionslanguagecode) - Captions Delete

## getMediasMediaHashedIdCaptions

Returns all the captions associated with a specified video.
If captions do not exist for this video, the response will be an empty JSON array.
If this video does not exist, the response will be an empty HTTP 404 Not Found.

## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
Read all project and video data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{media-hashed-id}/captions" method="get" path="/medias/{media-hashed-id}/captions" -->
```typescript
import { Wistia } from "wistia";

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
import { WistiaCore } from "wistia/core.js";
import { captionsGetMediasMediaHashedIdCaptions } from "wistia/funcs/captionsGetMediasMediaHashedIdCaptions.js";

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

**Promise\<[models.Caption[]](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.FourHundredAndOneError | 401                           | application/json              |
| errors.FiveHundredError       | 500                           | application/json              |
| errors.WistiaDefaultError     | 4XX, 5XX                      | \*/\*                         |

## postMediasMediaHashedIdCaptionsMultipart

Adds captions to a specified video by providing an SRT file or its contents directly.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/medias/{media-hashed-id}/captions_multipart" method="post" path="/medias/{media-hashed-id}/captions" -->
```typescript
import { openAsBlob } from "node:fs";
import { Wistia } from "wistia";

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
import { openAsBlob } from "node:fs";
import { WistiaCore } from "wistia/core.js";
import { captionsPostMediasMediaHashedIdCaptionsMultipart } from "wistia/funcs/captionsPostMediasMediaHashedIdCaptionsMultipart.js";

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.FourHundredAndOneError | 401                           | application/json              |
| errors.FiveHundredError       | 500                           | application/json              |
| errors.WistiaDefaultError     | 4XX, 5XX                      | \*/\*                         |

## postMediasMediaHashedIdCaptions

Adds captions to a specified video by providing an SRT file or its contents directly.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/medias/{media-hashed-id}/captions" method="post" path="/medias/{media-hashed-id}/captions" -->
```typescript
import { Wistia } from "wistia";

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
import { WistiaCore } from "wistia/core.js";
import { captionsPostMediasMediaHashedIdCaptions } from "wistia/funcs/captionsPostMediasMediaHashedIdCaptions.js";

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.FourHundredAndOneError | 401                           | application/json              |
| errors.FiveHundredError       | 500                           | application/json              |
| errors.WistiaDefaultError     | 4XX, 5XX                      | \*/\*                         |

## postMediasMediaHashedIdCaptionsPurchase

This method is for purchasing English captions for a video. The request will charge the credit card on the account if successful. A saved credit card is required to use this endpoint.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/medias/{media-hashed-id}/captions/purchase" method="post" path="/medias/{media-hashed-id}/captions/purchase" -->
```typescript
import { Wistia } from "wistia";

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
import { WistiaCore } from "wistia/core.js";
import { captionsPostMediasMediaHashedIdCaptionsPurchase } from "wistia/funcs/captionsPostMediasMediaHashedIdCaptionsPurchase.js";

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
| errors.FourHundredAndOneError                                          | 401                                                                    | application/json                                                       |
| errors.PostMediasMediaHashedIdCaptionsPurchaseUnprocessableEntityError | 422                                                                    | application/json                                                       |
| errors.FiveHundredError                                                | 500                                                                    | application/json                                                       |
| errors.WistiaDefaultError                                              | 4XX, 5XX                                                               | \*/\*                                                                  |

## getMediasMediaHashedIdCaptionsLanguageCode

Returns a video's captions in the specified language.
Supports multiple formats: JSON (default), SRT, VTT, and TXT.
Use file extensions (.srt, .vtt, .txt) or Accept headers to specify format.

## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
Read all project and video data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{media-hashed-id}/captions/{language-code}" method="get" path="/medias/{media-hashed-id}/captions/{language-code}" -->
```typescript
import { Wistia } from "wistia";

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
import { WistiaCore } from "wistia/core.js";
import { captionsGetMediasMediaHashedIdCaptionsLanguageCode } from "wistia/funcs/captionsGetMediasMediaHashedIdCaptionsLanguageCode.js";

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.FourHundredAndOneError | 401                           | application/json              |
| errors.FiveHundredError       | 500                           | application/json              |
| errors.WistiaDefaultError     | 4XX, 5XX                      | \*/\*                         |

## putMediasMediaHashedIdCaptionsLanguageCode

This method is for replacing the captions on a video for the specified language.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{media-hashed-id}/captions/{language-code}" method="put" path="/medias/{media-hashed-id}/captions/{language-code}" -->
```typescript
import { Wistia } from "wistia";

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
import { WistiaCore } from "wistia/core.js";
import { captionsPutMediasMediaHashedIdCaptionsLanguageCode } from "wistia/funcs/captionsPutMediasMediaHashedIdCaptionsLanguageCode.js";

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.FourHundredAndOneError | 401                           | application/json              |
| errors.FiveHundredError       | 500                           | application/json              |
| errors.WistiaDefaultError     | 4XX, 5XX                      | \*/\*                         |

## putMediasMediaHashedIdCaptionsLanguageCodeMultipart

This method is for replacing the captions on a video for the specified language.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{media-hashed-id}/captions/{language-code}_multipart" method="put" path="/medias/{media-hashed-id}/captions/{language-code}" -->
```typescript
import { openAsBlob } from "node:fs";
import { Wistia } from "wistia";

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
import { openAsBlob } from "node:fs";
import { WistiaCore } from "wistia/core.js";
import { captionsPutMediasMediaHashedIdCaptionsLanguageCodeMultipart } from "wistia/funcs/captionsPutMediasMediaHashedIdCaptionsLanguageCodeMultipart.js";

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.FourHundredAndOneError | 401                           | application/json              |
| errors.FiveHundredError       | 500                           | application/json              |
| errors.WistiaDefaultError     | 4XX, 5XX                      | \*/\*                         |

## deleteMediasMediaHashedIdCaptionsLanguageCode

This method is for removing the captions file from a video for the specified language.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/medias/{media-hashed-id}/captions/{language-code}" method="delete" path="/medias/{media-hashed-id}/captions/{language-code}" -->
```typescript
import { Wistia } from "wistia";

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
import { WistiaCore } from "wistia/core.js";
import { captionsDeleteMediasMediaHashedIdCaptionsLanguageCode } from "wistia/funcs/captionsDeleteMediasMediaHashedIdCaptionsLanguageCode.js";

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.FourHundredAndOneError | 401                           | application/json              |
| errors.FiveHundredError       | 500                           | application/json              |
| errors.WistiaDefaultError     | 4XX, 5XX                      | \*/\*                         |
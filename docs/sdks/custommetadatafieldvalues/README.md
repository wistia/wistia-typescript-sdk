# CustomMetadataFieldValues

## Overview

### Available Operations

* [getMediasMediaHashedIdCustomMetadataFieldValues](#getmediasmediahashedidcustommetadatafieldvalues) - List Custom Metadata Field Values
* [putMediasMediaHashedIdCustomMetadataFieldValuesKey](#putmediasmediahashedidcustommetadatafieldvalueskey) - Set Custom Metadata Field Value
* [deleteMediasMediaHashedIdCustomMetadataFieldValuesKey](#deletemediasmediahashedidcustommetadatafieldvalueskey) - Clear Custom Metadata Field Value
* [getMediasMediaHashedIdCustomMetadataFieldValuesKey](#getmediasmediahashedidcustommetadatafieldvalueskey) - Show Custom Metadata Field Value

## getMediasMediaHashedIdCustomMetadataFieldValues

Use this endpoint to request the custom metadata field values set on a media, ordered by the field definition's position.

Only values for active field definitions are returned. Requires the custom metadata feature to be available on your account.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
Read all folder and media data
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaHashedId}/custom_metadata_field_values" method="get" path="/medias/{mediaHashedId}/custom_metadata_field_values" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customMetadataFieldValues.getMediasMediaHashedIdCustomMetadataFieldValues({
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
import { customMetadataFieldValuesGetMediasMediaHashedIdCustomMetadataFieldValues } from "@wistia/wistia-api-client/funcs/customMetadataFieldValuesGetMediasMediaHashedIdCustomMetadataFieldValues.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customMetadataFieldValuesGetMediasMediaHashedIdCustomMetadataFieldValues(wistia, {
    mediaHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customMetadataFieldValuesGetMediasMediaHashedIdCustomMetadataFieldValues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaHashedIdCustomMetadataFieldValuesRequest](../../models/operations/getmediasmediahashedidcustommetadatafieldvaluesrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaHashedIdCustomMetadataFieldValuesResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                                | Status Code                                                               | Content Type                                                              |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| errors.GetMediasMediaHashedIdCustomMetadataFieldValuesUnauthorizedError   | 401                                                                       | application/json                                                          |
| errors.GetMediasMediaHashedIdCustomMetadataFieldValuesInternalServerError | 500                                                                       | application/json                                                          |
| errors.WistiaDefaultError                                                 | 4XX, 5XX                                                                  | \*/\*                                                                     |

## putMediasMediaHashedIdCustomMetadataFieldValuesKey

Sets (or replaces) the value of a custom metadata field on a media, addressed by the field definition's immutable key. The lookup is case-insensitive.

The request body carries a single polymorphic `value` field whose JSON type must match the definition's `field_type`:

- text-like types (`text`, `short_text`, `url`, `email`, `money`, `time`, `datetime`) — a string; format-validated per type (e.g. money is `"USD 12.34"`, time is 24-hour `"14:30"`, datetime is UTC ISO 8601 `"2026-07-10T14:30:00Z"`)
- `number` — a JSON number (a numeric string is coerced)
- `date` — an ISO 8601 date string like `"2026-07-10"`
- `boolean` — a JSON boolean; `false` persists as false (it does not clear the field)
- `single_select` — the chosen option's key (a string); unknown option keys return a 422
- `multi_select` — an array of the chosen options' keys (strings); unknown option keys or a non-array value return a 422
- `contact_ref` — a contact reference object `{"type": "contact" | "contact_group", "id": "<hashed_id>"}`; unknown ids, ids from another account, and group references on fields that do not allow groups return a 422
- `contact_multi_ref` — an array of contact reference objects; the same 422 rules apply per reference, and a non-array value returns a 422

A null or absent `value` clears the field (equivalent to the DELETE endpoint), as does an empty array for `multi_select` and `contact_multi_ref`. Type mismatches and format violations return a 422 with a field-level message.

Only values for active field definitions can be written. Requires the custom metadata feature to be available on your account.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
Upload, read & update all media
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/medias/{mediaHashedId}/custom_metadata_field_values/{key}" method="put" path="/medias/{mediaHashedId}/custom_metadata_field_values/{key}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customMetadataFieldValues.putMediasMediaHashedIdCustomMetadataFieldValuesKey({
    mediaHashedId: "<id>",
    key: "client",
    requestBody: {
      value: "high",
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
import { customMetadataFieldValuesPutMediasMediaHashedIdCustomMetadataFieldValuesKey } from "@wistia/wistia-api-client/funcs/customMetadataFieldValuesPutMediasMediaHashedIdCustomMetadataFieldValuesKey.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customMetadataFieldValuesPutMediasMediaHashedIdCustomMetadataFieldValuesKey(wistia, {
    mediaHashedId: "<id>",
    key: "client",
    requestBody: {
      value: "high",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customMetadataFieldValuesPutMediasMediaHashedIdCustomMetadataFieldValuesKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutMediasMediaHashedIdCustomMetadataFieldValuesKeyRequest](../../models/operations/putmediasmediahashedidcustommetadatafieldvalueskeyrequest.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutMediasMediaHashedIdCustomMetadataFieldValuesKeyResponse](../../models/operations/putmediasmediahashedidcustommetadatafieldvalueskeyresponse.md)\>**

### Errors

| Error Type                                                                        | Status Code                                                                       | Content Type                                                                      |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| errors.PutMediasMediaHashedIdCustomMetadataFieldValuesKeyUnauthorizedError        | 401                                                                               | application/json                                                                  |
| errors.PutMediasMediaHashedIdCustomMetadataFieldValuesKeyForbiddenError           | 403                                                                               | application/json                                                                  |
| errors.PutMediasMediaHashedIdCustomMetadataFieldValuesKeyUnprocessableEntityError | 422                                                                               | application/json                                                                  |
| errors.PutMediasMediaHashedIdCustomMetadataFieldValuesKeyInternalServerError      | 500                                                                               | application/json                                                                  |
| errors.WistiaDefaultError                                                         | 4XX, 5XX                                                                          | \*/\*                                                                             |

## deleteMediasMediaHashedIdCustomMetadataFieldValuesKey

Clears the value of a custom metadata field on a media, addressed by the field definition's immutable key. The lookup is case-insensitive. Clearing a field that has no stored value succeeds (the operation is idempotent).

Only values for active field definitions can be cleared. Requires the custom metadata feature to be available on your account.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
Upload, read & update all media
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/medias/{mediaHashedId}/custom_metadata_field_values/{key}" method="delete" path="/medias/{mediaHashedId}/custom_metadata_field_values/{key}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  await wistia.customMetadataFieldValues.deleteMediasMediaHashedIdCustomMetadataFieldValuesKey({
    mediaHashedId: "<id>",
    key: "client",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { customMetadataFieldValuesDeleteMediasMediaHashedIdCustomMetadataFieldValuesKey } from "@wistia/wistia-api-client/funcs/customMetadataFieldValuesDeleteMediasMediaHashedIdCustomMetadataFieldValuesKey.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customMetadataFieldValuesDeleteMediasMediaHashedIdCustomMetadataFieldValuesKey(wistia, {
    mediaHashedId: "<id>",
    key: "client",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customMetadataFieldValuesDeleteMediasMediaHashedIdCustomMetadataFieldValuesKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMediasMediaHashedIdCustomMetadataFieldValuesKeyRequest](../../models/operations/deletemediasmediahashedidcustommetadatafieldvalueskeyrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                                      | Status Code                                                                     | Content Type                                                                    |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| errors.DeleteMediasMediaHashedIdCustomMetadataFieldValuesKeyUnauthorizedError   | 401                                                                             | application/json                                                                |
| errors.DeleteMediasMediaHashedIdCustomMetadataFieldValuesKeyForbiddenError      | 403                                                                             | application/json                                                                |
| errors.DeleteMediasMediaHashedIdCustomMetadataFieldValuesKeyInternalServerError | 500                                                                             | application/json                                                                |
| errors.WistiaDefaultError                                                       | 4XX, 5XX                                                                        | \*/\*                                                                           |

## getMediasMediaHashedIdCustomMetadataFieldValuesKey

Get the value of a single custom metadata field on a media, addressed by the field definition's key. The lookup is case-insensitive.

Only values for active field definitions are returned. Requires the custom metadata feature to be available on your account.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
Read all folder and media data
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/medias/{mediaHashedId}/custom_metadata_field_values/{key}" method="get" path="/medias/{mediaHashedId}/custom_metadata_field_values/{key}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customMetadataFieldValues.getMediasMediaHashedIdCustomMetadataFieldValuesKey({
    mediaHashedId: "<id>",
    key: "client",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { customMetadataFieldValuesGetMediasMediaHashedIdCustomMetadataFieldValuesKey } from "@wistia/wistia-api-client/funcs/customMetadataFieldValuesGetMediasMediaHashedIdCustomMetadataFieldValuesKey.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customMetadataFieldValuesGetMediasMediaHashedIdCustomMetadataFieldValuesKey(wistia, {
    mediaHashedId: "<id>",
    key: "client",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customMetadataFieldValuesGetMediasMediaHashedIdCustomMetadataFieldValuesKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediasMediaHashedIdCustomMetadataFieldValuesKeyRequest](../../models/operations/getmediasmediahashedidcustommetadatafieldvalueskeyrequest.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediasMediaHashedIdCustomMetadataFieldValuesKeyResponse](../../models/operations/getmediasmediahashedidcustommetadatafieldvalueskeyresponse.md)\>**

### Errors

| Error Type                                                                   | Status Code                                                                  | Content Type                                                                 |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| errors.GetMediasMediaHashedIdCustomMetadataFieldValuesKeyUnauthorizedError   | 401                                                                          | application/json                                                             |
| errors.GetMediasMediaHashedIdCustomMetadataFieldValuesKeyInternalServerError | 500                                                                          | application/json                                                             |
| errors.WistiaDefaultError                                                    | 4XX, 5XX                                                                     | \*/\*                                                                        |
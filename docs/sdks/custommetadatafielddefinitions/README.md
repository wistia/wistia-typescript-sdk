# CustomMetadataFieldDefinitions

## Overview

### Available Operations

* [getCustomMetadataFieldDefinitions](#getcustommetadatafielddefinitions) - List Custom Metadata Field Definitions
* [postCustomMetadataFieldDefinitions](#postcustommetadatafielddefinitions) - Create Custom Metadata Field Definition
* [getCustomMetadataFieldDefinitionsKey](#getcustommetadatafielddefinitionskey) - Show Custom Metadata Field Definition
* [putCustomMetadataFieldDefinitionsKey](#putcustommetadatafielddefinitionskey) - Update Custom Metadata Field Definition
* [deleteCustomMetadataFieldDefinitionsKey](#deletecustommetadatafielddefinitionskey) - Archive Custom Metadata Field Definition
* [postCustomMetadataFieldDefinitionsKeyRestore](#postcustommetadatafielddefinitionskeyrestore) - Restore Custom Metadata Field Definition

## getCustomMetadataFieldDefinitions

Use this endpoint to request a list of custom metadata field definitions in your Wistia account, ordered by position. This request supports paging.

Requires the custom metadata feature to be available on your account.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/custom_metadata_field_definitions" method="get" path="/custom_metadata_field_definitions" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customMetadataFieldDefinitions.getCustomMetadataFieldDefinitions();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { customMetadataFieldDefinitionsGetCustomMetadataFieldDefinitions } from "@wistia/wistia-api-client/funcs/customMetadataFieldDefinitionsGetCustomMetadataFieldDefinitions.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customMetadataFieldDefinitionsGetCustomMetadataFieldDefinitions(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customMetadataFieldDefinitionsGetCustomMetadataFieldDefinitions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustomMetadataFieldDefinitionsRequest](../../models/operations/getcustommetadatafielddefinitionsrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCustomMetadataFieldDefinitionsResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.GetCustomMetadataFieldDefinitionsUnauthorizedError   | 401                                                         | application/json                                            |
| errors.GetCustomMetadataFieldDefinitionsInternalServerError | 500                                                         | application/json                                            |
| errors.WistiaDefaultError                                   | 4XX, 5XX                                                    | \*/\*                                                       |

## postCustomMetadataFieldDefinitions

Creates a new custom metadata field definition. The key is immutable, must match `/\A[a-z0-9_-]+\z/`, cannot start with an underscore, and cannot be a reserved name. The label must be unique per account among active fields (case-insensitive). The field_type is immutable after creation.

Requires the custom metadata feature to be available on your account.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/custom_metadata_field_definitions" method="post" path="/custom_metadata_field_definitions" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customMetadataFieldDefinitions.postCustomMetadataFieldDefinitions({
    key: "client",
    label: "Client",
    fieldType: "single_select",
    defaultValue: "high",
    position: 0,
    config: {
      allowsGroupRefs: false,
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
import { customMetadataFieldDefinitionsPostCustomMetadataFieldDefinitions } from "@wistia/wistia-api-client/funcs/customMetadataFieldDefinitionsPostCustomMetadataFieldDefinitions.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customMetadataFieldDefinitionsPostCustomMetadataFieldDefinitions(wistia, {
    key: "client",
    label: "Client",
    fieldType: "single_select",
    defaultValue: "high",
    position: 0,
    config: {
      allowsGroupRefs: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customMetadataFieldDefinitionsPostCustomMetadataFieldDefinitions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostCustomMetadataFieldDefinitionsRequest](../../models/operations/postcustommetadatafielddefinitionsrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostCustomMetadataFieldDefinitionsResponse](../../models/operations/postcustommetadatafielddefinitionsresponse.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.PostCustomMetadataFieldDefinitionsBadRequestError          | 400                                                               | application/json                                                  |
| errors.PostCustomMetadataFieldDefinitionsUnauthorizedError        | 401                                                               | application/json                                                  |
| errors.PostCustomMetadataFieldDefinitionsForbiddenError           | 403                                                               | application/json                                                  |
| errors.PostCustomMetadataFieldDefinitionsUnprocessableEntityError | 422                                                               | application/json                                                  |
| errors.PostCustomMetadataFieldDefinitionsInternalServerError      | 500                                                               | application/json                                                  |
| errors.WistiaDefaultError                                         | 4XX, 5XX                                                          | \*/\*                                                             |

## getCustomMetadataFieldDefinitionsKey

Get details for a specific custom metadata field definition by its key. The lookup is case-insensitive.

Requires the custom metadata feature to be available on your account.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/custom_metadata_field_definitions/{key}" method="get" path="/custom_metadata_field_definitions/{key}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customMetadataFieldDefinitions.getCustomMetadataFieldDefinitionsKey({
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
import { customMetadataFieldDefinitionsGetCustomMetadataFieldDefinitionsKey } from "@wistia/wistia-api-client/funcs/customMetadataFieldDefinitionsGetCustomMetadataFieldDefinitionsKey.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customMetadataFieldDefinitionsGetCustomMetadataFieldDefinitionsKey(wistia, {
    key: "client",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customMetadataFieldDefinitionsGetCustomMetadataFieldDefinitionsKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustomMetadataFieldDefinitionsKeyRequest](../../models/operations/getcustommetadatafielddefinitionskeyrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCustomMetadataFieldDefinitionsKeyResponse](../../models/operations/getcustommetadatafielddefinitionskeyresponse.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.GetCustomMetadataFieldDefinitionsKeyUnauthorizedError   | 401                                                            | application/json                                               |
| errors.GetCustomMetadataFieldDefinitionsKeyInternalServerError | 500                                                            | application/json                                               |
| errors.WistiaDefaultError                                      | 4XX, 5XX                                                       | \*/\*                                                          |

## putCustomMetadataFieldDefinitionsKey

Updates the editable attributes of a custom metadata field definition addressed by its immutable key: `label`, `default_value`, `position`, and single_select or multi_select options via `config.options` (add, edit, or remove). The `key` and `field_type` are immutable — attempting to change them returns a 422.

Requires the custom metadata feature to be available on your account.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/custom_metadata_field_definitions/{key}" method="put" path="/custom_metadata_field_definitions/{key}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customMetadataFieldDefinitions.putCustomMetadataFieldDefinitionsKey({
    key: "client",
    requestBody: {
      label: "Client",
      defaultValue: "high",
      position: 0,
      config: {
        options: [],
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
import { customMetadataFieldDefinitionsPutCustomMetadataFieldDefinitionsKey } from "@wistia/wistia-api-client/funcs/customMetadataFieldDefinitionsPutCustomMetadataFieldDefinitionsKey.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customMetadataFieldDefinitionsPutCustomMetadataFieldDefinitionsKey(wistia, {
    key: "client",
    requestBody: {
      label: "Client",
      defaultValue: "high",
      position: 0,
      config: {
        options: [],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customMetadataFieldDefinitionsPutCustomMetadataFieldDefinitionsKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutCustomMetadataFieldDefinitionsKeyRequest](../../models/operations/putcustommetadatafielddefinitionskeyrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutCustomMetadataFieldDefinitionsKeyResponse](../../models/operations/putcustommetadatafielddefinitionskeyresponse.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.PutCustomMetadataFieldDefinitionsKeyUnauthorizedError        | 401                                                                 | application/json                                                    |
| errors.PutCustomMetadataFieldDefinitionsKeyForbiddenError           | 403                                                                 | application/json                                                    |
| errors.PutCustomMetadataFieldDefinitionsKeyUnprocessableEntityError | 422                                                                 | application/json                                                    |
| errors.PutCustomMetadataFieldDefinitionsKeyInternalServerError      | 500                                                                 | application/json                                                    |
| errors.WistiaDefaultError                                           | 4XX, 5XX                                                            | \*/\*                                                               |

## deleteCustomMetadataFieldDefinitionsKey

Archives (soft-deletes) a custom metadata field definition by its immutable key. Archiving is reversible via the restore endpoint. Once archived, the field's label may be reused by a new active field.

Requires the custom metadata feature to be available on your account.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/custom_metadata_field_definitions/{key}" method="delete" path="/custom_metadata_field_definitions/{key}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  await wistia.customMetadataFieldDefinitions.deleteCustomMetadataFieldDefinitionsKey({
    key: "client",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { customMetadataFieldDefinitionsDeleteCustomMetadataFieldDefinitionsKey } from "@wistia/wistia-api-client/funcs/customMetadataFieldDefinitionsDeleteCustomMetadataFieldDefinitionsKey.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customMetadataFieldDefinitionsDeleteCustomMetadataFieldDefinitionsKey(wistia, {
    key: "client",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customMetadataFieldDefinitionsDeleteCustomMetadataFieldDefinitionsKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteCustomMetadataFieldDefinitionsKeyRequest](../../models/operations/deletecustommetadatafielddefinitionskeyrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.DeleteCustomMetadataFieldDefinitionsKeyUnauthorizedError   | 401                                                               | application/json                                                  |
| errors.DeleteCustomMetadataFieldDefinitionsKeyForbiddenError      | 403                                                               | application/json                                                  |
| errors.DeleteCustomMetadataFieldDefinitionsKeyInternalServerError | 500                                                               | application/json                                                  |
| errors.WistiaDefaultError                                         | 4XX, 5XX                                                          | \*/\*                                                             |

## postCustomMetadataFieldDefinitionsKeyRestore

Restores (unarchives) a custom metadata field definition by its immutable key, making it active again. If the field is already active this is a no-op.

Requires the custom metadata feature to be available on your account.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/custom_metadata_field_definitions/{key}/restore" method="post" path="/custom_metadata_field_definitions/{key}/restore" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.customMetadataFieldDefinitions.postCustomMetadataFieldDefinitionsKeyRestore({
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
import { customMetadataFieldDefinitionsPostCustomMetadataFieldDefinitionsKeyRestore } from "@wistia/wistia-api-client/funcs/customMetadataFieldDefinitionsPostCustomMetadataFieldDefinitionsKeyRestore.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customMetadataFieldDefinitionsPostCustomMetadataFieldDefinitionsKeyRestore(wistia, {
    key: "client",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customMetadataFieldDefinitionsPostCustomMetadataFieldDefinitionsKeyRestore failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostCustomMetadataFieldDefinitionsKeyRestoreRequest](../../models/operations/postcustommetadatafielddefinitionskeyrestorerequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostCustomMetadataFieldDefinitionsKeyRestoreResponse](../../models/operations/postcustommetadatafielddefinitionskeyrestoreresponse.md)\>**

### Errors

| Error Type                                                             | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.PostCustomMetadataFieldDefinitionsKeyRestoreUnauthorizedError   | 401                                                                    | application/json                                                       |
| errors.PostCustomMetadataFieldDefinitionsKeyRestoreForbiddenError      | 403                                                                    | application/json                                                       |
| errors.PostCustomMetadataFieldDefinitionsKeyRestoreInternalServerError | 500                                                                    | application/json                                                       |
| errors.WistiaDefaultError                                              | 4XX, 5XX                                                               | \*/\*                                                                  |
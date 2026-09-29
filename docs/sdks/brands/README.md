# Brands

## Overview

### Available Operations

* [list](#list) - List Brands
* [create](#create) - Create Brand
* [get](#get) - Show Brand
* [update](#update) - Update Brand
* [delete](#delete) - Delete Brand
* [apply](#apply) - Apply Brand

## list

Lists the brands belonging to the account. A brand is a saved set of
branding options (colors, fonts, logos, and layout) that can be applied to
media, folders, and channels. The account-level default brand is flagged
with `is_default`, and styles everything that has no brand of its own.

## Requires api token with one of the following permissions
```
Read all data
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/brands" method="get" path="/brands" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.brands.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { brandsList } from "@wistia/wistia-api-client/funcs/brandsList.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await brandsList(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("brandsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBrandsRequest](../../models/operations/getbrandsrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBrandsResponse[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetBrandsBadRequestError     | 400                                 | application/json                    |
| errors.GetBrandsUnauthorizedError   | 401                                 | application/json                    |
| errors.GetBrandsInternalServerError | 500                                 | application/json                    |
| errors.WistiaDefaultError           | 4XX, 5XX                            | \*/\*                               |

## create

Creates a brand. A brand is a saved set of branding options (colors, fonts,
logos, and layout) that can then be applied to media, folders, and
channels. `name` is required; every other field is optional and left unset
when omitted.

A new brand isn't applied to anything — it has no effect until you apply
it to a resource with `POST /brands/{brandId}/apply`.

Accounts whose plan doesn't include multiple brands can only hold one brand.

## Requires api token with one of the following permissions
```
All data
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/brands" method="post" path="/brands" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.brands.create({
    name: "My Brand",
    primaryColor: "#2949E5",
    pageBackgroundColor: "#2949E5",
    bodyFontFamily: "Inter",
    headlineFontFamily: "GT Walsheim",
    buttonFontFamily: "Inter",
    borderRadius: 10,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { brandsCreate } from "@wistia/wistia-api-client/funcs/brandsCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await brandsCreate(wistia, {
    name: "My Brand",
    primaryColor: "#2949E5",
    pageBackgroundColor: "#2949E5",
    bodyFontFamily: "Inter",
    headlineFontFamily: "GT Walsheim",
    buttonFontFamily: "Inter",
    borderRadius: 10,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("brandsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostBrandsRequest](../../models/operations/postbrandsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostBrandsResponse](../../models/operations/postbrandsresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.PostBrandsBadRequestError     | 400                                  | application/json                     |
| errors.PostBrandsUnauthorizedError   | 401                                  | application/json                     |
| errors.PostBrandsForbiddenError      | 403                                  | application/json                     |
| errors.PostBrandsInternalServerError | 500                                  | application/json                     |
| errors.WistiaDefaultError            | 4XX, 5XX                             | \*/\*                                |

## get

Returns the brand with the given id.

## Requires api token with one of the following permissions
```
Read all data
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/brands/{brandId}" method="get" path="/brands/{brandId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.brands.get({
    brandId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { brandsGet } from "@wistia/wistia-api-client/funcs/brandsGet.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await brandsGet(wistia, {
    brandId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("brandsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBrandsBrandIdRequest](../../models/operations/getbrandsbrandidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBrandsBrandIdResponse](../../models/operations/getbrandsbrandidresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GetBrandsBrandIdUnauthorizedError   | 401                                        | application/json                           |
| errors.GetBrandsBrandIdNotFoundError       | 404                                        | application/json                           |
| errors.GetBrandsBrandIdInternalServerError | 500                                        | application/json                           |
| errors.WistiaDefaultError                  | 4XX, 5XX                                   | \*/\*                                      |

## update

Updates a brand. Only the fields you send are changed; send an explicit
`null` to unset one. Renaming the account-level default brand is ignored —
its name is managed by Wistia.

Changes propagate to everything the brand is applied to.

## Requires api token with one of the following permissions
```
All data
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/brands/{brandId}" method="put" path="/brands/{brandId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.brands.update({
    brandId: "<id>",
    requestBody: {
      name: "My Brand",
      primaryColor: "#2949E5",
      pageBackgroundColor: "#2949E5",
      bodyFontFamily: "Inter",
      headlineFontFamily: "GT Walsheim",
      buttonFontFamily: "Inter",
      borderRadius: 10,
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
import { brandsUpdate } from "@wistia/wistia-api-client/funcs/brandsUpdate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await brandsUpdate(wistia, {
    brandId: "<id>",
    requestBody: {
      name: "My Brand",
      primaryColor: "#2949E5",
      pageBackgroundColor: "#2949E5",
      bodyFontFamily: "Inter",
      headlineFontFamily: "GT Walsheim",
      buttonFontFamily: "Inter",
      borderRadius: 10,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("brandsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutBrandsBrandIdRequest](../../models/operations/putbrandsbrandidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutBrandsBrandIdResponse](../../models/operations/putbrandsbrandidresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.PutBrandsBrandIdBadRequestError     | 400                                        | application/json                           |
| errors.PutBrandsBrandIdUnauthorizedError   | 401                                        | application/json                           |
| errors.PutBrandsBrandIdForbiddenError      | 403                                        | application/json                           |
| errors.PutBrandsBrandIdNotFoundError       | 404                                        | application/json                           |
| errors.PutBrandsBrandIdInternalServerError | 500                                        | application/json                           |
| errors.WistiaDefaultError                  | 4XX, 5XX                                   | \*/\*                                      |

## delete

Deletes a brand. Anything the brand was applied to falls back to the
account-level default brand, unless `sync_to_customizations` is set, in
which case the brand's values are written into each item's own
customizations first so they keep their current look.

The account-level default brand (`is_default: true`) can't be deleted.

## Requires api token with one of the following permissions
```
All data
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/brands/{brandId}" method="delete" path="/brands/{brandId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.brands.delete({
    brandId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { brandsDelete } from "@wistia/wistia-api-client/funcs/brandsDelete.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await brandsDelete(wistia, {
    brandId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("brandsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteBrandsBrandIdRequest](../../models/operations/deletebrandsbrandidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteBrandsBrandIdResponse](../../models/operations/deletebrandsbrandidresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.DeleteBrandsBrandIdBadRequestError     | 400                                           | application/json                              |
| errors.DeleteBrandsBrandIdUnauthorizedError   | 401                                           | application/json                              |
| errors.DeleteBrandsBrandIdForbiddenError      | 403                                           | application/json                              |
| errors.DeleteBrandsBrandIdNotFoundError       | 404                                           | application/json                              |
| errors.DeleteBrandsBrandIdInternalServerError | 500                                           | application/json                              |
| errors.WistiaDefaultError                     | 4XX, 5XX                                      | \*/\*                                         |

## apply

Applies a brand to a media, folder, or channel, so that resource is styled
by the brand's colors, fonts, logos, and layout.

A brand has no effect until it is applied to something. Media inherit from
their folder, and folders from the account's default brand, so applying a
brand to a folder styles everything inside it that has no brand of its own.

Applying the account-level default brand (`is_default: true`) is how a
resource is un-branded: it detaches the resource so it inherits again.

By default this also clears any brand-mapped appearance settings the
resource had set directly, so the brand is what shows. Pass
`clear_overrides: false` to leave those in place.

Responds with the brand now in effect on the resource, which is not always
the one you applied — detaching a media returns the brand it falls back to.

Webinars can't be branded through this endpoint yet.

## Requires api token with one of the following permissions
```
All data
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/brands/{brandId}/apply" method="post" path="/brands/{brandId}/apply" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.brands.apply({
    brandId: "<id>",
    requestBody: {
      resourceType: "media",
      resourceId: "abcde12345",
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
import { brandsApply } from "@wistia/wistia-api-client/funcs/brandsApply.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await brandsApply(wistia, {
    brandId: "<id>",
    requestBody: {
      resourceType: "media",
      resourceId: "abcde12345",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("brandsApply failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostBrandsBrandIdApplyRequest](../../models/operations/postbrandsbrandidapplyrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostBrandsBrandIdApplyResponse](../../models/operations/postbrandsbrandidapplyresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.PostBrandsBrandIdApplyBadRequestError     | 400                                              | application/json                                 |
| errors.PostBrandsBrandIdApplyUnauthorizedError   | 401                                              | application/json                                 |
| errors.PostBrandsBrandIdApplyForbiddenError      | 403                                              | application/json                                 |
| errors.PostBrandsBrandIdApplyNotFoundError       | 404                                              | application/json                                 |
| errors.PostBrandsBrandIdApplyInternalServerError | 500                                              | application/json                                 |
| errors.WistiaDefaultError                        | 4XX, 5XX                                         | \*/\*                                            |
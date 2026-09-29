# Account

## Overview

### Available Operations

* [get](#get) - Get Current Account
* [getUsage](#getusage) - Get Account Usage
* [getCreditBalance](#getcreditbalance) - Get Credit Balance
* [getBrandPreload](#getbrandpreload) - Get Brand Preload
* [updateBrandPreload](#updatebrandpreload) - Update Brand Preload
* [getBrandKitColors](#getbrandkitcolors) - Get Brand Kit Colors
* [getTokenDetails](#gettokendetails) - Get Current Token

## get

Retrieves a summary of the Wistia account including account name, description, URL and counts of records.

## Requires api token with one of the following permissions
```
(any scope allowed)
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountDetails" method="get" path="/account" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.account.get();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { accountGet } from "@wistia/wistia-api-client/funcs/accountGet.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountGet(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAccountDetailsResponse](../../models/operations/getaccountdetailsresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetAccountDetailsUnauthorizedError   | 401                                         | application/json                            |
| errors.GetAccountDetailsInternalServerError | 500                                         | application/json                            |
| errors.WistiaDefaultError                   | 4XX, 5XX                                    | \*/\*                                       |

## getUsage

Retrieves plan, usage, and limit information for the current account.

The response includes plan tier, upload eligibility, and links to billing pages.
Usage and limit details (media counts, storage, seats, bandwidth) are only visible
to account owners and managers — other contacts receive `null` for the `limits` field.

## Requires api token with one of the following permissions
```
(any scope allowed)
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountUsage" method="get" path="/account_usage" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.account.getUsage();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { accountGetUsage } from "@wistia/wistia-api-client/funcs/accountGetUsage.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountGetUsage(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountGetUsage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAccountUsageResponse](../../models/operations/getaccountusageresponse.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.GetAccountUsageUnauthorizedError   | 401                                       | application/json                          |
| errors.GetAccountUsageInternalServerError | 500                                       | application/json                          |
| errors.WistiaDefaultError                 | 4XX, 5XX                                  | \*/\*                                     |

## getCreditBalance

Retrieves the current account's available credit balance and expected next recurring credit grant time.

The balance is a near-real-time hint and can lag one in-flight metered operation. A `402`
response from an operation is authoritative when deciding whether more credits are required.
Negative ledger balances are returned as `0` available credits.

`next_grant_at` comes from the account's billing schedule, not an existing grant's expiration.
It is null when no scheduled grant can be determined. Processing may occur later, and other
grants may arrive sooner.

## Requires api token with one of the following permissions
```
(any scope allowed)
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. The account is always derived
from the authenticated token; this endpoint does not accept an account identifier.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCreditBalance" method="get" path="/credits/balance" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.account.getCreditBalance();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { accountGetCreditBalance } from "@wistia/wistia-api-client/funcs/accountGetCreditBalance.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountGetCreditBalance(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountGetCreditBalance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCreditBalanceResponse](../../models/operations/getcreditbalanceresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GetCreditBalanceUnauthorizedError   | 401                                        | application/json                           |
| errors.GetCreditBalanceNotFoundError       | 404                                        | application/json                           |
| errors.GetCreditBalanceInternalServerError | 500                                        | application/json                           |
| errors.WistiaDefaultError                  | 4XX, 5XX                                   | \*/\*                                      |

## getBrandPreload

Retrieves Brandfetch-derived brand info for the current account's contact
domain, plus a boolean indicating whether the account already has any brand
kits configured. Used by Glass onboarding to preload the brand kit for new
signups on business-email domains.

Returns `brandfetch_brand` with nil `primary_color`/`logo`/`domain` for
free-mail domains, Wistia's own domain, when the Brandfetch feature
flag is off, or when Brandfetch has no data — the caller silently
skips the preload in every such case. The object itself is always
present; only its fields go nil.

## Requires api token with one of the following permissions
```
(any scope allowed)
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBrandPreload" method="get" path="/brand_preload" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.account.getBrandPreload();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { accountGetBrandPreload } from "@wistia/wistia-api-client/funcs/accountGetBrandPreload.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountGetBrandPreload(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountGetBrandPreload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBrandPreloadResponse](../../models/operations/getbrandpreloadresponse.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.GetBrandPreloadUnauthorizedError   | 401                                       | application/json                          |
| errors.GetBrandPreloadInternalServerError | 500                                       | application/json                          |
| errors.WistiaDefaultError                 | 4XX, 5XX                                  | \*/\*                                     |

## updateBrandPreload

Persists the account's default page logo (by Bakery hashed_id) and
default player color. Both fields are optional independently — omit a
field to leave that account setting untouched. Passing an empty string
for `selected_logo_hashed_id` clears the logo.

Requires the OAuth contact to be an owner or manager of the account
(or a Wistia admin) — mirrors the auth check on the underlying
`updateWtwBrandKitAccountSettings` GraphQL mutation.

Deliberately narrower than the mutation: this endpoint does not
create/update BrandKits or set body font family. Glass's onboarding
customize step writes only these two fields; broader brand-kit
editing continues to happen through the WTW web UI + GraphQL.

## Requires api token with one of the following permissions
```
(any scope allowed)
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateBrandPreload" method="put" path="/brand_preload" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.account.updateBrandPreload();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { accountUpdateBrandPreload } from "@wistia/wistia-api-client/funcs/accountUpdateBrandPreload.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountUpdateBrandPreload(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountUpdateBrandPreload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateBrandPreloadRequest](../../models/operations/updatebrandpreloadrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateBrandPreloadResponse](../../models/operations/updatebrandpreloadresponse.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.UpdateBrandPreloadBadRequestError     | 400                                          | application/json                             |
| errors.UpdateBrandPreloadUnauthorizedError   | 401                                          | application/json                             |
| errors.UpdateBrandPreloadForbiddenError      | 403                                          | application/json                             |
| errors.UpdateBrandPreloadNotFoundError       | 404                                          | application/json                             |
| errors.UpdateBrandPreloadInternalServerError | 500                                          | application/json                             |
| errors.WistiaDefaultError                    | 4XX, 5XX                                     | \*/\*                                        |

## getBrandKitColors

Retrieves the current account's brand colors for the Wistia desktop
app's background picker.

`colors` lists solid colors: every brand kit's color tokens (the colors
the web editor offers as "Brand colors"), then each brand's primary and
page background color when it is solid, default brand first. Values are
six-digit hex strings, and a repeated color is listed once. Tokens whose
value isn't a hex color are left out. An account without a brand kit
gets its player color in place of the kit, which is what its default
brand kit would hold.

`brand_gradients` lists each brand's primary and page background color
that is set to a gradient, as color stops sorted by position, default
brand first. Stops whose color isn't a hex color are left out, and a
gradient with fewer than two hex stops left isn't listed.

## Requires api token with one of the following permissions
```
(any scope allowed)
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBrandKitColors" method="get" path="/brand_kit_colors" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.account.getBrandKitColors();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { accountGetBrandKitColors } from "@wistia/wistia-api-client/funcs/accountGetBrandKitColors.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountGetBrandKitColors(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountGetBrandKitColors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBrandKitColorsResponse](../../models/operations/getbrandkitcolorsresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetBrandKitColorsUnauthorizedError   | 401                                         | application/json                            |
| errors.GetBrandKitColorsInternalServerError | 500                                         | application/json                            |
| errors.WistiaDefaultError                   | 4XX, 5XX                                    | \*/\*                                       |

## getTokenDetails

Retrieves a summary of the token used to make the API request. This endpoint can primarily be used to
debug permission issues with the API.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTokenDetails" method="get" path="/token" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.account.getTokenDetails();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { accountGetTokenDetails } from "@wistia/wistia-api-client/funcs/accountGetTokenDetails.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountGetTokenDetails(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountGetTokenDetails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTokenDetailsResponse](../../models/operations/gettokendetailsresponse.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.GetTokenDetailsUnauthorizedError   | 401                                       | application/json                          |
| errors.GetTokenDetailsInternalServerError | 500                                       | application/json                          |
| errors.WistiaDefaultError                 | 4XX, 5XX                                  | \*/\*                                     |
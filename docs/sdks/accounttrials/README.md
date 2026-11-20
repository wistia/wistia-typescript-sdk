# AccountTrials

## Overview

### Available Operations

* [create](#create) - Start Account Trial

## create

Starts a business-tier trial on the current account. The plan tier is
hardcoded — the only caller is the Wistia desktop app's "Invite and
start trial" onboarding CTA.

Requires the current contact to be authorized to start the trial via
the account's AccountPolicy — otherwise returns 403.

[Expiring access tokens](https://docs.wistia.com/reference/post_expiring-token)
with authorizations cannot use this endpoint: starting a trial is an
account-level action authorized as the persisted contact, not through a
token's authorizations. Such requests are forbidden.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/account/trials" method="post" path="/account/trials" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.accountTrials.create();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { accountTrialsCreate } from "@wistia/wistia-api-client/funcs/accountTrialsCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountTrialsCreate(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountTrialsCreate failed:", res.error);
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

**Promise\<[operations.PostAccountTrialsResponse](../../models/operations/postaccounttrialsresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.PostAccountTrialsUnauthorizedError   | 401                                         | application/json                            |
| errors.PostAccountTrialsForbiddenError      | 403                                         | application/json                            |
| errors.PostAccountTrialsInternalServerError | 500                                         | application/json                            |
| errors.WistiaDefaultError                   | 4XX, 5XX                                    | \*/\*                                       |
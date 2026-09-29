# ExpiringAccessTokens

## Overview

### Available Operations

* [create](#create) - Create Expiring Access Token

## create

```
🚫 Alert
This API is still under development and can change at any time.
```

This endpoint is for creating expiring access tokens which can be used for some iframe embeds
and, when granted the `all:delegate_to_contact_permissions` scope, for REST API requests
authorized by the token's authorizations.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/expiring_token" method="post" path="/expiring_token" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.expiringAccessTokens.create({
    expiringAccessToken: {
      scopes: [
        "graphql:all",
        "all:delegate_to_contact_permissions",
      ],
      authorizations: [
        {
          type: "account",
          id: "<id>",
          permissions: [
            "show",
            "update",
            "destroy",
            "edit-transcripts",
            "create-folders",
          ],
        },
      ],
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
import { expiringAccessTokensCreate } from "@wistia/wistia-api-client/funcs/expiringAccessTokensCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await expiringAccessTokensCreate(wistia, {
    expiringAccessToken: {
      scopes: [
        "graphql:all",
        "all:delegate_to_contact_permissions",
      ],
      authorizations: [
        {
          type: "account",
          id: "<id>",
          permissions: [
            "show",
            "update",
            "destroy",
            "edit-transcripts",
            "create-folders",
          ],
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expiringAccessTokensCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostExpiringTokenRequest](../../models/operations/postexpiringtokenrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostExpiringTokenResponse](../../models/operations/postexpiringtokenresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.PostExpiringTokenUnauthorizedError        | 401                                              | application/json                                 |
| errors.PostExpiringTokenUnprocessableEntityError | 422                                              | application/json                                 |
| errors.PostExpiringTokenInternalServerError      | 500                                              | application/json                                 |
| errors.NotImplementedError                       | 501                                              | application/json                                 |
| errors.WistiaDefaultError                        | 4XX, 5XX                                         | \*/\*                                            |
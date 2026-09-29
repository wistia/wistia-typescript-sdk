# Bulk

## Overview

### Available Operations

* [purchase](#purchase) - Create Bulk Purchase

## purchase

Submits either an `actions` array of up to 1000 orders or one `job` that can
resolve to up to 5000 media. Orders are placed asynchronously. Returns a
background job status whose Show endpoint reports aggregate progress and
per-order results.

Orders in the batch can incur charges, so a saved credit card is required.
Supported resource types are `captions` (Wistia-generated English captions),
`localization` (a dubbed, language-specific version of a media),
`extended_audio_description`, and `text_translation` (the media's transcript
translated into another language, audio untouched). Each order's `id` is the
hashed ID of the media to order for.

What an order costs depends on the account, not on this endpoint. Automated
captions are included at no cost on plans that provide them and billed at
the account's configured per-minute rate otherwise; human-reviewed captions
bill per minute at the account's standard or rush rate; localizations bill
per minute once the account's free-dub allowance is used up; text
translations bill as an overage once the account's included translation
minutes are used up. Check the account's plan and billing settings for its
actual rates.

Orders are priced and placed individually: failures -- an ineligible media,
a language that already has a localization, an account not entitled to buy
-- are reported per order and do not stop the rest of the batch. Pricing and
eligibility match the equivalent single-media endpoints exactly.

Use the Create Bulk Actions endpoint for create, update, and delete work; it
does not accept `purchase`, and this endpoint accepts nothing else.


## Requires api token with one of the following permissions
```
Read, update & delete anything
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.



### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/bulk/purchase" method="post" path="/bulk/purchase" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.bulk.purchase({
    actions: [
      {
        operation: "purchase",
        resourceType: "extended_audio_description",
        id: "abc123",
      },
    ],
    job: {
      operation: "purchase",
      resourceType: "captions",
      scope: {
        type: "subfolder",
        id: "abc123",
      },
      ids: [
        "abc1234567",
        "def8901234",
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
import { bulkPurchase } from "@wistia/wistia-api-client/funcs/bulkPurchase.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await bulkPurchase(wistia, {
    actions: [
      {
        operation: "purchase",
        resourceType: "extended_audio_description",
        id: "abc123",
      },
    ],
    job: {
      operation: "purchase",
      resourceType: "captions",
      scope: {
        type: "subfolder",
        id: "abc123",
      },
      ids: [
        "abc1234567",
        "def8901234",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bulkPurchase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostBulkPurchaseRequest](../../models/operations/postbulkpurchaserequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostBulkPurchaseResponse](../../models/operations/postbulkpurchaseresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.PostBulkPurchaseBadRequestError     | 400                                        | application/json                           |
| errors.PostBulkPurchaseUnauthorizedError   | 401                                        | application/json                           |
| errors.PostBulkPurchaseInternalServerError | 500                                        | application/json                           |
| errors.WistiaDefaultError                  | 4XX, 5XX                                   | \*/\*                                      |
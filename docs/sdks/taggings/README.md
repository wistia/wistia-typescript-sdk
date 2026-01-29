# Taggings

## Overview

### Available Operations

* [postTaggingsBulkCreate](#posttaggingsbulkcreate) - Bulk Tag Media

## postTaggingsBulkCreate

This method accepts a list of medias to tag. It processes requests asynchronously and will return a background_job_status object rather than the typical Media response object.

The tags will be added to the existing tags on each media file, not replaced.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/taggings/bulk_create" method="post" path="/taggings/bulk_create" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.taggings.postTaggingsBulkCreate({
    hashedIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tagNames: [
      "<value 1>",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { taggingsPostTaggingsBulkCreate } from "@wistia/wistia-api-client/funcs/taggingsPostTaggingsBulkCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await taggingsPostTaggingsBulkCreate(wistia, {
    hashedIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tagNames: [
      "<value 1>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taggingsPostTaggingsBulkCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostTaggingsBulkCreateRequest](../../models/operations/posttaggingsbulkcreaterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostTaggingsBulkCreateResponse](../../models/operations/posttaggingsbulkcreateresponse.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.PostTaggingsBulkCreateUnauthorizedError        | 401                                                   | application/json                                      |
| errors.PostTaggingsBulkCreateUnprocessableEntityError | 422                                                   | application/json                                      |
| errors.PostTaggingsBulkCreateInternalServerError      | 500                                                   | application/json                                      |
| errors.WistiaDefaultError                             | 4XX, 5XX                                              | \*/\*                                                 |
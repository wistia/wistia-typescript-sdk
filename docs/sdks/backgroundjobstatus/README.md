# BackgroundJobStatus
(*backgroundJobStatus*)

## Overview

### Available Operations

* [get](#get) - Background Job Status Show

## get

Retrieve the status of a background job.
## Requires api token with one of the following permissions
```
Read, update & delete anything
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/background_job_status/{background-job-status-id}" method="get" path="/background_job_status/{background-job-status-id}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.backgroundJobStatus.get({
    backgroundJobStatusId: 350035,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { backgroundJobStatusGet } from "@wistia/wistia-api-client/funcs/backgroundJobStatusGet.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await backgroundJobStatusGet(wistia, {
    backgroundJobStatusId: 350035,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("backgroundJobStatusGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBackgroundJobStatusBackgroundJobStatusIdRequest](../../models/operations/getbackgroundjobstatusbackgroundjobstatusidrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBackgroundJobStatusBackgroundJobStatusIdResponse](../../models/operations/getbackgroundjobstatusbackgroundjobstatusidresponse.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.FourHundredAndOneError                                    | 401                                                              | application/json                                                 |
| errors.GetBackgroundJobStatusBackgroundJobStatusIdForbiddenError | 403                                                              | application/json                                                 |
| errors.FiveHundredError                                          | 500                                                              | application/json                                                 |
| errors.WistiaDefaultError                                        | 4XX, 5XX                                                         | \*/\*                                                            |
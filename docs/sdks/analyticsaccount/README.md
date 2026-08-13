# AnalyticsAccount

## Overview

### Available Operations

* [get](#get) - Show Account Analytics
* [getTimeseries](#gettimeseries) - Show Account Analytics Timeseries
* [getTopContent](#gettopcontent) - Show Account Top Content
* [getEmbedLocations](#getembedlocations) - Show Account Embed Locations

## get

Retrieve aggregate analytics for the entire account over a date range. This endpoint
provides Bottler-powered analytics across all of the account's media including plays,
loads, engagement rate, play rate, and conversion metrics.

The date range between `start_date` and `end_date` must not exceed 2 years.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/account" method="get" path="/analytics/account" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { RFCDate } from "@wistia/wistia-api-client/types";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsAccount.get({
    startDate: new RFCDate("2024-04-09"),
    endDate: new RFCDate("2025-11-25"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsAccountGet } from "@wistia/wistia-api-client/funcs/analyticsAccountGet.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsAccountGet(wistia, {
    startDate: new RFCDate("2024-04-09"),
    endDate: new RFCDate("2025-11-25"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsAccountGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsAccountRequest](../../models/operations/getanalyticsaccountrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsAccountResponse](../../models/operations/getanalyticsaccountresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.GetAnalyticsAccountBadRequestError         | 400                                               | application/json                                  |
| errors.GetAnalyticsAccountUnauthorizedError       | 401                                               | application/json                                  |
| errors.GetAnalyticsAccountForbiddenError          | 403                                               | application/json                                  |
| errors.GetAnalyticsAccountInternalServerError     | 500                                               | application/json                                  |
| errors.GetAnalyticsAccountServiceUnavailableError | 503                                               | application/json                                  |
| errors.WistiaDefaultError                         | 4XX, 5XX                                          | \*/\*                                             |

## getTimeseries

Retrieve analytics timeseries data for the entire account over a date range with
configurable granularity. Returns an array of timestamped metric buckets aggregated
across all of the account's media.

The date range between `start_date` and `end_date` must not exceed 2 years.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/account/timeseries" method="get" path="/analytics/account/timeseries" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { RFCDate } from "@wistia/wistia-api-client/types";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsAccount.getTimeseries({
    startDate: new RFCDate("2025-08-24"),
    endDate: new RFCDate("2025-08-13"),
    granularity: "weekly",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsAccountGetTimeseries } from "@wistia/wistia-api-client/funcs/analyticsAccountGetTimeseries.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsAccountGetTimeseries(wistia, {
    startDate: new RFCDate("2025-08-24"),
    endDate: new RFCDate("2025-08-13"),
    granularity: "weekly",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsAccountGetTimeseries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsAccountTimeseriesRequest](../../models/operations/getanalyticsaccounttimeseriesrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsAccountTimeseriesResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.GetAnalyticsAccountTimeseriesBadRequestError         | 400                                                         | application/json                                            |
| errors.GetAnalyticsAccountTimeseriesUnauthorizedError       | 401                                                         | application/json                                            |
| errors.GetAnalyticsAccountTimeseriesForbiddenError          | 403                                                         | application/json                                            |
| errors.GetAnalyticsAccountTimeseriesInternalServerError     | 500                                                         | application/json                                            |
| errors.GetAnalyticsAccountTimeseriesServiceUnavailableError | 503                                                         | application/json                                            |
| errors.WistiaDefaultError                                   | 4XX, 5XX                                                    | \*/\*                                                       |

## getTopContent

Rank the account's content by a chosen metric over a date range. Returns the top
media, channels, or folders (controlled by `group_by`) with their analytics,
answering questions like "what were my most-played videos last month?".

Optionally pass `hashed_ids` to scope the ranking to a specific set of media
instead of the whole account — useful for fetching analytics for a known list
of videos, still sorted by `sort_by`.

The date range between `start_date` and `end_date` must not exceed 2 years.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/account/top_content" method="get" path="/analytics/account/top_content" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { RFCDate } from "@wistia/wistia-api-client/types";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsAccount.getTopContent({
    startDate: new RFCDate("2025-12-19"),
    endDate: new RFCDate("2024-11-20"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsAccountGetTopContent } from "@wistia/wistia-api-client/funcs/analyticsAccountGetTopContent.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsAccountGetTopContent(wistia, {
    startDate: new RFCDate("2025-12-19"),
    endDate: new RFCDate("2024-11-20"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsAccountGetTopContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsAccountTopContentRequest](../../models/operations/getanalyticsaccounttopcontentrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsAccountTopContentResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.GetAnalyticsAccountTopContentBadRequestError         | 400                                                         | application/json                                            |
| errors.GetAnalyticsAccountTopContentUnauthorizedError       | 401                                                         | application/json                                            |
| errors.GetAnalyticsAccountTopContentForbiddenError          | 403                                                         | application/json                                            |
| errors.GetAnalyticsAccountTopContentInternalServerError     | 500                                                         | application/json                                            |
| errors.GetAnalyticsAccountTopContentServiceUnavailableError | 503                                                         | application/json                                            |
| errors.WistiaDefaultError                                   | 4XX, 5XX                                                    | \*/\*                                                       |

## getEmbedLocations

Retrieve embed location analytics for the entire account. Returns a list of domains
where the account's media are embedded, ranked by the chosen metric.

The date range between `start_date` and `end_date` must not exceed 2 years.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/account/embed_locations" method="get" path="/analytics/account/embed_locations" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { RFCDate } from "@wistia/wistia-api-client/types";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsAccount.getEmbedLocations({
    startDate: new RFCDate("2024-04-04"),
    endDate: new RFCDate("2026-04-14"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsAccountGetEmbedLocations } from "@wistia/wistia-api-client/funcs/analyticsAccountGetEmbedLocations.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsAccountGetEmbedLocations(wistia, {
    startDate: new RFCDate("2024-04-04"),
    endDate: new RFCDate("2026-04-14"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsAccountGetEmbedLocations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsAccountEmbedLocationsRequest](../../models/operations/getanalyticsaccountembedlocationsrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsAccountEmbedLocationsResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.GetAnalyticsAccountEmbedLocationsBadRequestError         | 400                                                             | application/json                                                |
| errors.GetAnalyticsAccountEmbedLocationsUnauthorizedError       | 401                                                             | application/json                                                |
| errors.GetAnalyticsAccountEmbedLocationsForbiddenError          | 403                                                             | application/json                                                |
| errors.GetAnalyticsAccountEmbedLocationsInternalServerError     | 500                                                             | application/json                                                |
| errors.GetAnalyticsAccountEmbedLocationsServiceUnavailableError | 503                                                             | application/json                                                |
| errors.WistiaDefaultError                                       | 4XX, 5XX                                                        | \*/\*                                                           |
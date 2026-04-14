# AnalyticsMedia

## Overview

### Available Operations

* [get](#get) - Show Media Analytics
* [getTimeseries](#gettimeseries) - Show Media Analytics Timeseries
* [getEmbedLocations](#getembedlocations) - Show Media Embed Locations
* [getTraffic](#gettraffic) - Show Media Traffic Breakdown
* [getConversions](#getconversions) - Show Media Form Conversions
* [getLanguages](#getlanguages) - Show Media Languages

## get

Retrieve aggregate analytics for a video over a date range. This endpoint provides
Bottler-powered analytics including plays, loads, engagement rate, play rate, and
conversion metrics.

The date range between `start_date` and `end_date` must not exceed 2 years.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/medias/{mediaId}" method="get" path="/analytics/medias/{mediaId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { RFCDate } from "@wistia/wistia-api-client/types";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsMedia.get({
    mediaId: "<id>",
    startDate: new RFCDate("2026-06-10"),
    endDate: new RFCDate("2026-12-01"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsMediaGet } from "@wistia/wistia-api-client/funcs/analyticsMediaGet.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsMediaGet(wistia, {
    mediaId: "<id>",
    startDate: new RFCDate("2026-06-10"),
    endDate: new RFCDate("2026-12-01"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsMediaGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsMediasMediaIdRequest](../../models/operations/getanalyticsmediasmediaidrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsMediasMediaIdResponse](../../models/operations/getanalyticsmediasmediaidresponse.md)\>**

### Errors

| Error Type                                              | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| errors.GetAnalyticsMediasMediaIdBadRequestError         | 400                                                     | application/json                                        |
| errors.GetAnalyticsMediasMediaIdUnauthorizedError       | 401                                                     | application/json                                        |
| errors.GetAnalyticsMediasMediaIdForbiddenError          | 403                                                     | application/json                                        |
| errors.GetAnalyticsMediasMediaIdInternalServerError     | 500                                                     | application/json                                        |
| errors.GetAnalyticsMediasMediaIdServiceUnavailableError | 503                                                     | application/json                                        |
| errors.WistiaDefaultError                               | 4XX, 5XX                                                | \*/\*                                                   |

## getTimeseries

Retrieve analytics timeseries data for a video over a date range with configurable
granularity. Returns an array of timestamped metric buckets.

The date range between `start_date` and `end_date` must not exceed 2 years.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/medias/{mediaId}/timeseries" method="get" path="/analytics/medias/{mediaId}/timeseries" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { RFCDate } from "@wistia/wistia-api-client/types";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsMedia.getTimeseries({
    mediaId: "<id>",
    startDate: new RFCDate("2024-05-04"),
    endDate: new RFCDate("2025-12-15"),
    granularity: "daily",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsMediaGetTimeseries } from "@wistia/wistia-api-client/funcs/analyticsMediaGetTimeseries.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsMediaGetTimeseries(wistia, {
    mediaId: "<id>",
    startDate: new RFCDate("2024-05-04"),
    endDate: new RFCDate("2025-12-15"),
    granularity: "daily",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsMediaGetTimeseries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsMediasMediaIdTimeseriesRequest](../../models/operations/getanalyticsmediasmediaidtimeseriesrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsMediasMediaIdTimeseriesResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.GetAnalyticsMediasMediaIdTimeseriesBadRequestError         | 400                                                               | application/json                                                  |
| errors.GetAnalyticsMediasMediaIdTimeseriesUnauthorizedError       | 401                                                               | application/json                                                  |
| errors.GetAnalyticsMediasMediaIdTimeseriesForbiddenError          | 403                                                               | application/json                                                  |
| errors.GetAnalyticsMediasMediaIdTimeseriesInternalServerError     | 500                                                               | application/json                                                  |
| errors.GetAnalyticsMediasMediaIdTimeseriesServiceUnavailableError | 503                                                               | application/json                                                  |
| errors.WistiaDefaultError                                         | 4XX, 5XX                                                          | \*/\*                                                             |

## getEmbedLocations

Retrieve embed location analytics for a video. Returns a list of pages where the
video is embedded, ranked by the chosen metric.

The date range between `start_date` and `end_date` must not exceed 2 years.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/medias/{mediaId}/embed_locations" method="get" path="/analytics/medias/{mediaId}/embed_locations" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { RFCDate } from "@wistia/wistia-api-client/types";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsMedia.getEmbedLocations({
    mediaId: "<id>",
    startDate: new RFCDate("2025-01-17"),
    endDate: new RFCDate("2024-09-01"),
    embedUrl: "https://example.com/landing-page",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsMediaGetEmbedLocations } from "@wistia/wistia-api-client/funcs/analyticsMediaGetEmbedLocations.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsMediaGetEmbedLocations(wistia, {
    mediaId: "<id>",
    startDate: new RFCDate("2025-01-17"),
    endDate: new RFCDate("2024-09-01"),
    embedUrl: "https://example.com/landing-page",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsMediaGetEmbedLocations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsMediasMediaIdEmbedLocationsRequest](../../models/operations/getanalyticsmediasmediaidembedlocationsrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsMediasMediaIdEmbedLocationsResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.GetAnalyticsMediasMediaIdEmbedLocationsBadRequestError         | 400                                                                   | application/json                                                      |
| errors.GetAnalyticsMediasMediaIdEmbedLocationsUnauthorizedError       | 401                                                                   | application/json                                                      |
| errors.GetAnalyticsMediasMediaIdEmbedLocationsForbiddenError          | 403                                                                   | application/json                                                      |
| errors.GetAnalyticsMediasMediaIdEmbedLocationsInternalServerError     | 500                                                                   | application/json                                                      |
| errors.GetAnalyticsMediasMediaIdEmbedLocationsServiceUnavailableError | 503                                                                   | application/json                                                      |
| errors.WistiaDefaultError                                             | 4XX, 5XX                                                              | \*/\*                                                                 |

## getTraffic

Retrieve traffic breakdown analytics for a video, grouped by a specified dimension
such as UTM campaign, UTM source, UTM medium, referrer domain, or viewer screen size.

The date range between `start_date` and `end_date` must not exceed 2 years.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/medias/{mediaId}/traffic" method="get" path="/analytics/medias/{mediaId}/traffic" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { RFCDate } from "@wistia/wistia-api-client/types";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsMedia.getTraffic({
    mediaId: "<id>",
    startDate: new RFCDate("2026-11-05"),
    endDate: new RFCDate("2026-08-31"),
    groupBy: "utm_source",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsMediaGetTraffic } from "@wistia/wistia-api-client/funcs/analyticsMediaGetTraffic.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsMediaGetTraffic(wistia, {
    mediaId: "<id>",
    startDate: new RFCDate("2026-11-05"),
    endDate: new RFCDate("2026-08-31"),
    groupBy: "utm_source",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsMediaGetTraffic failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsMediasMediaIdTrafficRequest](../../models/operations/getanalyticsmediasmediaidtrafficrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsMediasMediaIdTrafficResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.GetAnalyticsMediasMediaIdTrafficBadRequestError         | 400                                                            | application/json                                               |
| errors.GetAnalyticsMediasMediaIdTrafficUnauthorizedError       | 401                                                            | application/json                                               |
| errors.GetAnalyticsMediasMediaIdTrafficForbiddenError          | 403                                                            | application/json                                               |
| errors.GetAnalyticsMediasMediaIdTrafficInternalServerError     | 500                                                            | application/json                                               |
| errors.GetAnalyticsMediasMediaIdTrafficServiceUnavailableError | 503                                                            | application/json                                               |
| errors.WistiaDefaultError                                      | 4XX, 5XX                                                       | \*/\*                                                          |

## getConversions

Retrieve form conversion data for a video. Returns a paginated list of form
submissions with visitor details and timestamps.

The date range between `start_date` and `end_date` must not exceed 2 years.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/medias/{mediaId}/conversions" method="get" path="/analytics/medias/{mediaId}/conversions" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { RFCDate } from "@wistia/wistia-api-client/types";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsMedia.getConversions({
    mediaId: "<id>",
    startDate: new RFCDate("2024-02-20"),
    endDate: new RFCDate("2026-07-17"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsMediaGetConversions } from "@wistia/wistia-api-client/funcs/analyticsMediaGetConversions.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsMediaGetConversions(wistia, {
    mediaId: "<id>",
    startDate: new RFCDate("2024-02-20"),
    endDate: new RFCDate("2026-07-17"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsMediaGetConversions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsMediasMediaIdConversionsRequest](../../models/operations/getanalyticsmediasmediaidconversionsrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsMediasMediaIdConversionsResponse](../../models/operations/getanalyticsmediasmediaidconversionsresponse.md)\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.GetAnalyticsMediasMediaIdConversionsBadRequestError         | 400                                                                | application/json                                                   |
| errors.GetAnalyticsMediasMediaIdConversionsUnauthorizedError       | 401                                                                | application/json                                                   |
| errors.GetAnalyticsMediasMediaIdConversionsForbiddenError          | 403                                                                | application/json                                                   |
| errors.GetAnalyticsMediasMediaIdConversionsInternalServerError     | 500                                                                | application/json                                                   |
| errors.GetAnalyticsMediasMediaIdConversionsServiceUnavailableError | 503                                                                | application/json                                                   |
| errors.WistiaDefaultError                                          | 4XX, 5XX                                                           | \*/\*                                                              |

## getLanguages

Retrieve language analytics for a video. Returns a breakdown of plays by
viewer browser language, sorted by number of plays in descending order.

The date range between `start_date` and `end_date` must not exceed 2 years.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/medias/{mediaId}/languages" method="get" path="/analytics/medias/{mediaId}/languages" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { RFCDate } from "@wistia/wistia-api-client/types";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsMedia.getLanguages({
    mediaId: "<id>",
    startDate: new RFCDate("2026-07-01"),
    endDate: new RFCDate("2024-01-19"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsMediaGetLanguages } from "@wistia/wistia-api-client/funcs/analyticsMediaGetLanguages.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsMediaGetLanguages(wistia, {
    mediaId: "<id>",
    startDate: new RFCDate("2026-07-01"),
    endDate: new RFCDate("2024-01-19"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsMediaGetLanguages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsMediasMediaIdLanguagesRequest](../../models/operations/getanalyticsmediasmediaidlanguagesrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsMediasMediaIdLanguagesResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.GetAnalyticsMediasMediaIdLanguagesBadRequestError         | 400                                                              | application/json                                                 |
| errors.GetAnalyticsMediasMediaIdLanguagesUnauthorizedError       | 401                                                              | application/json                                                 |
| errors.GetAnalyticsMediasMediaIdLanguagesForbiddenError          | 403                                                              | application/json                                                 |
| errors.GetAnalyticsMediasMediaIdLanguagesInternalServerError     | 500                                                              | application/json                                                 |
| errors.GetAnalyticsMediasMediaIdLanguagesServiceUnavailableError | 503                                                              | application/json                                                 |
| errors.WistiaDefaultError                                        | 4XX, 5XX                                                         | \*/\*                                                            |
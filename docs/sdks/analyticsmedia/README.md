# AnalyticsMedia

## Overview

### Available Operations

* [getAnalyticsMediasMediaId](#getanalyticsmediasmediaid) - Show Media Analytics
* [getAnalyticsMediasMediaIdTimeseries](#getanalyticsmediasmediaidtimeseries) - Show Media Analytics Timeseries
* [getAnalyticsMediasMediaIdEmbedLocations](#getanalyticsmediasmediaidembedlocations) - Show Media Embed Locations
* [getAnalyticsMediasMediaIdTraffic](#getanalyticsmediasmediaidtraffic) - Show Media Traffic Breakdown
* [getAnalyticsMediasMediaIdConversions](#getanalyticsmediasmediaidconversions) - Show Media Form Conversions
* [getAnalyticsMediasMediaIdLanguages](#getanalyticsmediasmediaidlanguages) - Show Media Languages

## getAnalyticsMediasMediaId

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
  const result = await wistia.analyticsMedia.getAnalyticsMediasMediaId({
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
import { analyticsMediaGetAnalyticsMediasMediaId } from "@wistia/wistia-api-client/funcs/analyticsMediaGetAnalyticsMediasMediaId.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsMediaGetAnalyticsMediasMediaId(wistia, {
    mediaId: "<id>",
    startDate: new RFCDate("2026-06-10"),
    endDate: new RFCDate("2026-12-01"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsMediaGetAnalyticsMediasMediaId failed:", res.error);
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

## getAnalyticsMediasMediaIdTimeseries

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
  const result = await wistia.analyticsMedia.getAnalyticsMediasMediaIdTimeseries({
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
import { analyticsMediaGetAnalyticsMediasMediaIdTimeseries } from "@wistia/wistia-api-client/funcs/analyticsMediaGetAnalyticsMediasMediaIdTimeseries.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsMediaGetAnalyticsMediasMediaIdTimeseries(wistia, {
    mediaId: "<id>",
    startDate: new RFCDate("2024-05-04"),
    endDate: new RFCDate("2025-12-15"),
    granularity: "daily",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsMediaGetAnalyticsMediasMediaIdTimeseries failed:", res.error);
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

## getAnalyticsMediasMediaIdEmbedLocations

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
  const result = await wistia.analyticsMedia.getAnalyticsMediasMediaIdEmbedLocations({
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
import { analyticsMediaGetAnalyticsMediasMediaIdEmbedLocations } from "@wistia/wistia-api-client/funcs/analyticsMediaGetAnalyticsMediasMediaIdEmbedLocations.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsMediaGetAnalyticsMediasMediaIdEmbedLocations(wistia, {
    mediaId: "<id>",
    startDate: new RFCDate("2025-01-17"),
    endDate: new RFCDate("2024-09-01"),
    embedUrl: "https://example.com/landing-page",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsMediaGetAnalyticsMediasMediaIdEmbedLocations failed:", res.error);
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

## getAnalyticsMediasMediaIdTraffic

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
  const result = await wistia.analyticsMedia.getAnalyticsMediasMediaIdTraffic({
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
import { analyticsMediaGetAnalyticsMediasMediaIdTraffic } from "@wistia/wistia-api-client/funcs/analyticsMediaGetAnalyticsMediasMediaIdTraffic.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsMediaGetAnalyticsMediasMediaIdTraffic(wistia, {
    mediaId: "<id>",
    startDate: new RFCDate("2026-11-05"),
    endDate: new RFCDate("2026-08-31"),
    groupBy: "utm_source",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsMediaGetAnalyticsMediasMediaIdTraffic failed:", res.error);
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

## getAnalyticsMediasMediaIdConversions

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
  const result = await wistia.analyticsMedia.getAnalyticsMediasMediaIdConversions({
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
import { analyticsMediaGetAnalyticsMediasMediaIdConversions } from "@wistia/wistia-api-client/funcs/analyticsMediaGetAnalyticsMediasMediaIdConversions.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsMediaGetAnalyticsMediasMediaIdConversions(wistia, {
    mediaId: "<id>",
    startDate: new RFCDate("2024-02-20"),
    endDate: new RFCDate("2026-07-17"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsMediaGetAnalyticsMediasMediaIdConversions failed:", res.error);
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

## getAnalyticsMediasMediaIdLanguages

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
  const result = await wistia.analyticsMedia.getAnalyticsMediasMediaIdLanguages({
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
import { analyticsMediaGetAnalyticsMediasMediaIdLanguages } from "@wistia/wistia-api-client/funcs/analyticsMediaGetAnalyticsMediasMediaIdLanguages.js";
import { RFCDate } from "@wistia/wistia-api-client/types";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsMediaGetAnalyticsMediasMediaIdLanguages(wistia, {
    mediaId: "<id>",
    startDate: new RFCDate("2026-07-01"),
    endDate: new RFCDate("2024-01-19"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsMediaGetAnalyticsMediasMediaIdLanguages failed:", res.error);
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
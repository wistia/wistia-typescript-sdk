# AnalyticsWebinar

## Overview

### Available Operations

* [get](#get) - Show Webinar Analytics
* [getRegistration](#getregistration) - Show Webinar Registration Timeseries
* [getTraffic](#gettraffic) - Show Webinar Traffic Breakdown
* [getAudience](#getaudience) - Show Webinar Audience
* [getHistograms](#gethistograms) - Show Webinar Histograms

## get

Retrieve aggregate analytics for a webinar. This endpoint provides
Bottler-powered analytics including registrations, attendance, engagement,
chat activity, and poll results.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/webinars/{webinarId}" method="get" path="/analytics/webinars/{webinarId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsWebinar.get({
    webinarId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsWebinarGet } from "@wistia/wistia-api-client/funcs/analyticsWebinarGet.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsWebinarGet(wistia, {
    webinarId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsWebinarGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsWebinarsWebinarIdRequest](../../models/operations/getanalyticswebinarswebinaridrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsWebinarsWebinarIdResponse](../../models/operations/getanalyticswebinarswebinaridresponse.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.GetAnalyticsWebinarsWebinarIdUnauthorizedError        | 401                                                          | application/json                                             |
| errors.GetAnalyticsWebinarsWebinarIdForbiddenError           | 403                                                          | application/json                                             |
| errors.GetAnalyticsWebinarsWebinarIdConflictError            | 409                                                          | application/json                                             |
| errors.GetAnalyticsWebinarsWebinarIdUnprocessableEntityError | 422                                                          | application/json                                             |
| errors.GetAnalyticsWebinarsWebinarIdInternalServerError      | 500                                                          | application/json                                             |
| errors.GetAnalyticsWebinarsWebinarIdServiceUnavailableError  | 503                                                          | application/json                                             |
| errors.WistiaDefaultError                                    | 4XX, 5XX                                                     | \*/\*                                                        |

## getRegistration

Retrieve registration timeseries data for a webinar with configurable
granularity. Returns an array of timestamped registration metric buckets
including impressions, registrations, and completion rates.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/webinars/{webinarId}/registration" method="get" path="/analytics/webinars/{webinarId}/registration" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsWebinar.getRegistration({
    webinarId: "<id>",
    granularity: "monthly",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsWebinarGetRegistration } from "@wistia/wistia-api-client/funcs/analyticsWebinarGetRegistration.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsWebinarGetRegistration(wistia, {
    webinarId: "<id>",
    granularity: "monthly",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsWebinarGetRegistration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsWebinarsWebinarIdRegistrationRequest](../../models/operations/getanalyticswebinarswebinaridregistrationrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsWebinarsWebinarIdRegistrationResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                              | Status Code                                                             | Content Type                                                            |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| errors.GetAnalyticsWebinarsWebinarIdRegistrationBadRequestError         | 400                                                                     | application/json                                                        |
| errors.GetAnalyticsWebinarsWebinarIdRegistrationUnauthorizedError       | 401                                                                     | application/json                                                        |
| errors.GetAnalyticsWebinarsWebinarIdRegistrationForbiddenError          | 403                                                                     | application/json                                                        |
| errors.GetAnalyticsWebinarsWebinarIdRegistrationInternalServerError     | 500                                                                     | application/json                                                        |
| errors.GetAnalyticsWebinarsWebinarIdRegistrationServiceUnavailableError | 503                                                                     | application/json                                                        |
| errors.WistiaDefaultError                                               | 4XX, 5XX                                                                | \*/\*                                                                   |

## getTraffic

Retrieve traffic breakdown analytics for a webinar, grouped by a specified dimension
such as UTM campaign, UTM source, UTM medium, or referrer domain.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/webinars/{webinarId}/traffic" method="get" path="/analytics/webinars/{webinarId}/traffic" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsWebinar.getTraffic({
    webinarId: "<id>",
    groupBy: "utm_campaign",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsWebinarGetTraffic } from "@wistia/wistia-api-client/funcs/analyticsWebinarGetTraffic.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsWebinarGetTraffic(wistia, {
    webinarId: "<id>",
    groupBy: "utm_campaign",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsWebinarGetTraffic failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsWebinarsWebinarIdTrafficRequest](../../models/operations/getanalyticswebinarswebinaridtrafficrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsWebinarsWebinarIdTrafficResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.GetAnalyticsWebinarsWebinarIdTrafficBadRequestError         | 400                                                                | application/json                                                   |
| errors.GetAnalyticsWebinarsWebinarIdTrafficUnauthorizedError       | 401                                                                | application/json                                                   |
| errors.GetAnalyticsWebinarsWebinarIdTrafficForbiddenError          | 403                                                                | application/json                                                   |
| errors.GetAnalyticsWebinarsWebinarIdTrafficInternalServerError     | 500                                                                | application/json                                                   |
| errors.GetAnalyticsWebinarsWebinarIdTrafficServiceUnavailableError | 503                                                                | application/json                                                   |
| errors.WistiaDefaultError                                          | 4XX, 5XX                                                           | \*/\*                                                              |

## getAudience

Retrieve audience data for a webinar. Returns a paginated list of
registrants with their attendance status, engagement metrics,
attribution data, and per-attendee histograms.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/webinars/{webinarId}/audience" method="get" path="/analytics/webinars/{webinarId}/audience" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsWebinar.getAudience({
    webinarId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsWebinarGetAudience } from "@wistia/wistia-api-client/funcs/analyticsWebinarGetAudience.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsWebinarGetAudience(wistia, {
    webinarId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsWebinarGetAudience failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsWebinarsWebinarIdAudienceRequest](../../models/operations/getanalyticswebinarswebinaridaudiencerequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsWebinarsWebinarIdAudienceResponse](../../models/operations/getanalyticswebinarswebinaridaudienceresponse.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.GetAnalyticsWebinarsWebinarIdAudienceUnauthorizedError       | 401                                                                 | application/json                                                    |
| errors.GetAnalyticsWebinarsWebinarIdAudienceForbiddenError          | 403                                                                 | application/json                                                    |
| errors.GetAnalyticsWebinarsWebinarIdAudienceInternalServerError     | 500                                                                 | application/json                                                    |
| errors.GetAnalyticsWebinarsWebinarIdAudienceServiceUnavailableError | 503                                                                 | application/json                                                    |
| errors.WistiaDefaultError                                           | 4XX, 5XX                                                            | \*/\*                                                               |

## getHistograms

Retrieve engagement histogram data for a webinar. Returns arrays of
per-time-bucket counts for attendees, chat activity, and visual focus,
useful for rendering engagement visualizations.

<!--- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read detailed stats
```
<!--- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/analytics/webinars/{webinarId}/histograms" method="get" path="/analytics/webinars/{webinarId}/histograms" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.analyticsWebinar.getHistograms({
    webinarId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { analyticsWebinarGetHistograms } from "@wistia/wistia-api-client/funcs/analyticsWebinarGetHistograms.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await analyticsWebinarGetHistograms(wistia, {
    webinarId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsWebinarGetHistograms failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnalyticsWebinarsWebinarIdHistogramsRequest](../../models/operations/getanalyticswebinarswebinaridhistogramsrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAnalyticsWebinarsWebinarIdHistogramsResponse](../../models/operations/getanalyticswebinarswebinaridhistogramsresponse.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.GetAnalyticsWebinarsWebinarIdHistogramsUnauthorizedError       | 401                                                                   | application/json                                                      |
| errors.GetAnalyticsWebinarsWebinarIdHistogramsForbiddenError          | 403                                                                   | application/json                                                      |
| errors.GetAnalyticsWebinarsWebinarIdHistogramsConflictError           | 409                                                                   | application/json                                                      |
| errors.GetAnalyticsWebinarsWebinarIdHistogramsInternalServerError     | 500                                                                   | application/json                                                      |
| errors.GetAnalyticsWebinarsWebinarIdHistogramsServiceUnavailableError | 503                                                                   | application/json                                                      |
| errors.WistiaDefaultError                                             | 4XX, 5XX                                                              | \*/\*                                                                 |
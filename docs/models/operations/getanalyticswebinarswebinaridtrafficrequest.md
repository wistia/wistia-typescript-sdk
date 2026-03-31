# GetAnalyticsWebinarsWebinarIdTrafficRequest

## Example Usage

```typescript
import { GetAnalyticsWebinarsWebinarIdTrafficRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsWebinarsWebinarIdTrafficRequest = {
  webinarId: "<id>",
  groupBy: "utm_campaign",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `webinarId`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The hashed ID of the webinar.                                                                                                                |
| `groupBy`                                                                                                                                    | [operations.GetAnalyticsWebinarsWebinarIdTrafficGroupBy](../../models/operations/getanalyticswebinarswebinaridtrafficgroupby.md)             | :heavy_check_mark:                                                                                                                           | The dimension to group traffic data by.                                                                                                      |
| `sortBy`                                                                                                                                     | [operations.GetAnalyticsWebinarsWebinarIdTrafficSortBy](../../models/operations/getanalyticswebinarswebinaridtrafficsortby.md)               | :heavy_minus_sign:                                                                                                                           | The metric to sort results by.                                                                                                               |
| `sortDirection`                                                                                                                              | [operations.GetAnalyticsWebinarsWebinarIdTrafficSortDirection](../../models/operations/getanalyticswebinarswebinaridtrafficsortdirection.md) | :heavy_minus_sign:                                                                                                                           | The sort direction.                                                                                                                          |
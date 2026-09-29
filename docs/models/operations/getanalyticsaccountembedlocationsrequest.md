# GetAnalyticsAccountEmbedLocationsRequest

## Example Usage

```typescript
import { GetAnalyticsAccountEmbedLocationsRequest } from "@wistia/wistia-api-client/models/operations";
import { RFCDate } from "@wistia/wistia-api-client/types";

let value: GetAnalyticsAccountEmbedLocationsRequest = {
  startDate: new RFCDate("2024-11-24"),
  endDate: new RFCDate("2025-01-15"),
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                                      | :heavy_check_mark:                                                                                                                     | Start date for the analytics period in ISO 8601 format (YYYY-MM-DD). Inclusive — the range starts at the beginning of this date.       |
| `endDate`                                                                                                                              | [RFCDate](../../types/rfcdate.md)                                                                                                      | :heavy_check_mark:                                                                                                                     | End date for the analytics period in ISO 8601 format (YYYY-MM-DD). Exclusive — the range ends before the beginning of this date.       |
| `sortBy`                                                                                                                               | [operations.GetAnalyticsAccountEmbedLocationsSortBy](../../models/operations/getanalyticsaccountembedlocationssortby.md)               | :heavy_minus_sign:                                                                                                                     | The metric to sort embed locations by.                                                                                                 |
| `sortDirection`                                                                                                                        | [operations.GetAnalyticsAccountEmbedLocationsSortDirection](../../models/operations/getanalyticsaccountembedlocationssortdirection.md) | :heavy_minus_sign:                                                                                                                     | The sort direction.                                                                                                                    |
| `perPage`                                                                                                                              | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Number of results to return (max 100).                                                                                                 |
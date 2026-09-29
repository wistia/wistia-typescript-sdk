# GetAnalyticsAccountTimeseriesRequest

## Example Usage

```typescript
import { GetAnalyticsAccountTimeseriesRequest } from "@wistia/wistia-api-client/models/operations";
import { RFCDate } from "@wistia/wistia-api-client/types";

let value: GetAnalyticsAccountTimeseriesRequest = {
  startDate: new RFCDate("2025-09-01"),
  endDate: new RFCDate("2025-06-25"),
  granularity: "daily",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                      | [RFCDate](../../types/rfcdate.md)                                                                                                | :heavy_check_mark:                                                                                                               | Start date for the analytics period in ISO 8601 format (YYYY-MM-DD). Inclusive — the range starts at the beginning of this date. |
| `endDate`                                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                                | :heavy_check_mark:                                                                                                               | End date for the analytics period in ISO 8601 format (YYYY-MM-DD). Exclusive — the range ends before the beginning of this date. |
| `granularity`                                                                                                                    | [operations.GetAnalyticsAccountTimeseriesGranularity](../../models/operations/getanalyticsaccounttimeseriesgranularity.md)       | :heavy_check_mark:                                                                                                               | The time granularity for the timeseries data.                                                                                    |
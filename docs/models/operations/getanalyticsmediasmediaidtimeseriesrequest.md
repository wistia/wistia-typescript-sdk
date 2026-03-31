# GetAnalyticsMediasMediaIdTimeseriesRequest

## Example Usage

```typescript
import { GetAnalyticsMediasMediaIdTimeseriesRequest } from "@wistia/wistia-api-client/models/operations";
import { RFCDate } from "@wistia/wistia-api-client/types";

let value: GetAnalyticsMediasMediaIdTimeseriesRequest = {
  mediaId: "<id>",
  startDate: new RFCDate("2025-03-05"),
  endDate: new RFCDate("2026-09-06"),
  granularity: "monthly",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The hashed ID of the video.                                                                                                            |
| `startDate`                                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                                      | :heavy_check_mark:                                                                                                                     | Start date for the analytics period in ISO 8601 format (YYYY-MM-DD).                                                                   |
| `endDate`                                                                                                                              | [RFCDate](../../types/rfcdate.md)                                                                                                      | :heavy_check_mark:                                                                                                                     | End date for the analytics period in ISO 8601 format (YYYY-MM-DD).                                                                     |
| `granularity`                                                                                                                          | [operations.GetAnalyticsMediasMediaIdTimeseriesGranularity](../../models/operations/getanalyticsmediasmediaidtimeseriesgranularity.md) | :heavy_check_mark:                                                                                                                     | The time granularity for the timeseries data.                                                                                          |
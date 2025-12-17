# GetStatsMediasMediaIdByDateRequest

## Example Usage

```typescript
import { GetStatsMediasMediaIdByDateRequest } from "@wistia/wistia-api-client/models/operations";
import { RFCDate } from "@wistia/wistia-api-client/types";

let value: GetStatsMediasMediaIdByDateRequest = {
  mediaId: "<id>",
  startDate: new RFCDate("2024-02-21"),
  endDate: new RFCDate("2024-02-23"),
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `mediaId`                                          | *string*                                           | :heavy_check_mark:                                 | The ID of the media                                |                                                    |
| `startDate`                                        | [RFCDate](../../types/rfcdate.md)                  | :heavy_minus_sign:                                 | The start date for the stats, formatted YYYY-MM-DD | 2024-02-21                                         |
| `endDate`                                          | [RFCDate](../../types/rfcdate.md)                  | :heavy_minus_sign:                                 | The end date for the stats, formatted YYYY-MM-DD   | 2024-02-23                                         |
| `xWistiaAPIVersion`                                | *string*                                           | :heavy_minus_sign:                                 | The API version                                    | 2025-11                                            |
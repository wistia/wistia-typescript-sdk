# GetAnalyticsMediasMediaIdConversionsRequest

## Example Usage

```typescript
import { GetAnalyticsMediasMediaIdConversionsRequest } from "@wistia/wistia-api-client/models/operations";
import { RFCDate } from "@wistia/wistia-api-client/types";

let value: GetAnalyticsMediasMediaIdConversionsRequest = {
  mediaId: "<id>",
  startDate: new RFCDate("2024-12-13"),
  endDate: new RFCDate("2025-12-01"),
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `mediaId`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | The hashed ID of the video.                                                             |
| `startDate`                                                                             | [RFCDate](../../types/rfcdate.md)                                                       | :heavy_check_mark:                                                                      | Start date for the analytics period in ISO 8601 format (YYYY-MM-DD).                    |
| `endDate`                                                                               | [RFCDate](../../types/rfcdate.md)                                                       | :heavy_check_mark:                                                                      | End date for the analytics period in ISO 8601 format (YYYY-MM-DD).                      |
| `perPage`                                                                               | *number*                                                                                | :heavy_minus_sign:                                                                      | Number of results to return (max 100).                                                  |
| `cursor`                                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | Cursor for pagination. Use the value from the previous response's page_info.end_cursor. |
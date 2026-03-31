# GetAnalyticsMediasMediaIdRequest

## Example Usage

```typescript
import { GetAnalyticsMediasMediaIdRequest } from "@wistia/wistia-api-client/models/operations";
import { RFCDate } from "@wistia/wistia-api-client/types";

let value: GetAnalyticsMediasMediaIdRequest = {
  mediaId: "<id>",
  startDate: new RFCDate("2026-09-11"),
  endDate: new RFCDate("2024-12-14"),
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `mediaId`                                                            | *string*                                                             | :heavy_check_mark:                                                   | The hashed ID of the video.                                          |
| `startDate`                                                          | [RFCDate](../../types/rfcdate.md)                                    | :heavy_check_mark:                                                   | Start date for the analytics period in ISO 8601 format (YYYY-MM-DD). |
| `endDate`                                                            | [RFCDate](../../types/rfcdate.md)                                    | :heavy_check_mark:                                                   | End date for the analytics period in ISO 8601 format (YYYY-MM-DD).   |
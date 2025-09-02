# GetStatsEventsRequest

## Example Usage

```typescript
import { GetStatsEventsRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetStatsEventsRequest = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `mediaId`                                             | *string*                                              | :heavy_minus_sign:                                    | An optional identifier for a specific video.          |
| `visitorKey`                                          | *string*                                              | :heavy_minus_sign:                                    | An optional identifier for a specific visitor.        |
| `perPage`                                             | *number*                                              | :heavy_minus_sign:                                    | Maximum number of events to retrieve (capped at 100). |
| `page`                                                | *number*                                              | :heavy_minus_sign:                                    | The page of events to get data from.                  |
| `startDate`                                           | [RFCDate](../../types/rfcdate.md)                     | :heavy_minus_sign:                                    | Start date in the format 'YYYY-MM-DD'.                |
| `endDate`                                             | [RFCDate](../../types/rfcdate.md)                     | :heavy_minus_sign:                                    | End date in the format 'YYYY-MM-DD'.                  |
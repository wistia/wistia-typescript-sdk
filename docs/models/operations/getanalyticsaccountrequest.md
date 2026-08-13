# GetAnalyticsAccountRequest

## Example Usage

```typescript
import { GetAnalyticsAccountRequest } from "@wistia/wistia-api-client/models/operations";
import { RFCDate } from "@wistia/wistia-api-client/types";

let value: GetAnalyticsAccountRequest = {
  startDate: new RFCDate("2026-07-22"),
  endDate: new RFCDate("2026-03-24"),
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                      | [RFCDate](../../types/rfcdate.md)                                                                                                | :heavy_check_mark:                                                                                                               | Start date for the analytics period in ISO 8601 format (YYYY-MM-DD). Inclusive — the range starts at the beginning of this date. |
| `endDate`                                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                                | :heavy_check_mark:                                                                                                               | End date for the analytics period in ISO 8601 format (YYYY-MM-DD). Exclusive — the range ends before the beginning of this date. |
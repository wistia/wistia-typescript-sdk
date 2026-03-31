# GetAnalyticsWebinarsWebinarIdAudienceRequest

## Example Usage

```typescript
import { GetAnalyticsWebinarsWebinarIdAudienceRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsWebinarsWebinarIdAudienceRequest = {
  webinarId: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `webinarId`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | The hashed ID of the webinar.                                                           |
| `perPage`                                                                               | *number*                                                                                | :heavy_minus_sign:                                                                      | Number of results to return (max 100).                                                  |
| `cursor`                                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | Cursor for pagination. Use the value from the previous response's page_info.end_cursor. |
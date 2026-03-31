# GetAnalyticsWebinarsWebinarIdHistogramsResponse

Success response with webinar histogram data.

## Example Usage

```typescript
import { GetAnalyticsWebinarsWebinarIdHistogramsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsWebinarsWebinarIdHistogramsResponse = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `attendeesHistogram`                                                                                                             | *number*[]                                                                                                                       | :heavy_minus_sign:                                                                                                               | Per-time-bucket attendee counts. Each element represents the number of attendees in a 10-second bucket.                          |
| `chatHistogram`                                                                                                                  | *number*[]                                                                                                                       | :heavy_minus_sign:                                                                                                               | Per-time-bucket chat message counts. Each element represents the number of chat messages in a 10-second bucket.                  |
| `visualFocusPlayedHistogram`                                                                                                     | *number*[]                                                                                                                       | :heavy_minus_sign:                                                                                                               | Per-time-bucket visual focus counts. Each element represents the number of attendees with the tab focused in a 10-second bucket. |
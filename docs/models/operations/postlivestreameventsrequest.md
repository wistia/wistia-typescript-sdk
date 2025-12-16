# PostLiveStreamEventsRequest

## Example Usage

```typescript
import { PostLiveStreamEventsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostLiveStreamEventsRequest = {
  requestBody: {
    title: "Wellness Session: Coping with Outie Memories",
    description: "A comprehensive session on managing work-life balance",
    scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
    eventDuration: 60,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `xWistiaAPIVersion`                                                                                      | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The API version                                                                                          | 2025-11                                                                                                  |
| `requestBody`                                                                                            | [operations.PostLiveStreamEventsRequestBody](../../models/operations/postlivestreameventsrequestbody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |
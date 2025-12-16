# PutLiveStreamEventsIdRequest

## Example Usage

```typescript
import { PutLiveStreamEventsIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutLiveStreamEventsIdRequest = {
  id: "<id>",
  requestBody: {
    liveStreamEvent: {
      title: "Updated Event Title",
      description: "Updated event description",
      scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
      eventDuration: 90,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The hashed ID of the live stream event                                                                     |                                                                                                            |
| `xWistiaAPIVersion`                                                                                        | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The API version                                                                                            | 2025-11                                                                                                    |
| `requestBody`                                                                                              | [operations.PutLiveStreamEventsIdRequestBody](../../models/operations/putlivestreameventsidrequestbody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |
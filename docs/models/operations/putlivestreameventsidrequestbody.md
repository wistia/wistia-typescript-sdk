# PutLiveStreamEventsIdRequestBody

## Example Usage

```typescript
import { PutLiveStreamEventsIdRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PutLiveStreamEventsIdRequestBody = {
  liveStreamEvent: {
    title: "Updated Event Title",
    description: "Updated event description",
    scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
    eventDuration: 90,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `liveStreamEvent`                                                        | [operations.LiveStreamEvent](../../models/operations/livestreamevent.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
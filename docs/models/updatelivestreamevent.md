# UpdateLiveStreamEvent

## Example Usage

```typescript
import { UpdateLiveStreamEvent } from "@wistia/wistia-api-client/models";

let value: UpdateLiveStreamEvent = {
  liveStreamEvent: {
    title: "Updated Event Title",
    description: "Updated event description",
    scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
    eventDuration: 90,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `liveStreamEvent`                                                                                | [models.UpdateLiveStreamEventLiveStreamEvent](../models/updatelivestreameventlivestreamevent.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
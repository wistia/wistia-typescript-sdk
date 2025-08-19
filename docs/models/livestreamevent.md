# LiveStreamEvent

## Example Usage

```typescript
import { LiveStreamEvent } from "wistia/models";

let value: LiveStreamEvent = {
  id: "abc123def456",
  title: "Wellness Session: Coping with Outie Memories",
  description: "A comprehensive session on managing work-life balance",
  scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
  eventDuration: 60,
  lifecycleStatus: "scheduled",
  registrationStatus: "published",
  createdAt: new Date("2024-03-15T10:30:00Z"),
  updatedAt: new Date("2024-03-15T10:30:00Z"),
  audienceLink: "https://lumon-industries.wistia.com/live/events/abc123def456",
  hostLink: "https://lumon-industries.wistia.com/live/onair/abc123def456/",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The hashed ID of the live stream event                                                        | abc123def456                                                                                  |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The title of the live stream event                                                            | Wellness Session: Coping with Outie Memories                                                  |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the live stream event                                                      | A comprehensive session on managing work-life balance                                         |
| `scheduledFor`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The scheduled start time in W3C format with timezone                                          | 2024-03-20T15:30:00-05:00                                                                     |
| `eventDuration`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | Duration of the event in minutes                                                              | 60                                                                                            |
| `lifecycleStatus`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | Current lifecycle status of the event                                                         | scheduled                                                                                     |
| `registrationStatus`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Registration status of the event                                                              | published                                                                                     |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the event was created (UTC)                                                              | 2024-03-15T10:30:00Z                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the event was last updated (UTC)                                                         | 2024-03-15T10:30:00Z                                                                          |
| `audienceLink`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Link for the audience to join the event                                                       | https://lumon-industries.wistia.com/live/events/abc123def456                                  |
| `hostLink`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Link for the host to manage the event                                                         | https://lumon-industries.wistia.com/live/onair/abc123def456/                                  |
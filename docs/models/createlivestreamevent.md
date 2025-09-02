# CreateLiveStreamEvent

## Example Usage

```typescript
import { CreateLiveStreamEvent } from "@wistia/wistia-api-client/models";

let value: CreateLiveStreamEvent = {
  title: "Wellness Session: Coping with Outie Memories",
  description: "A comprehensive session on managing work-life balance",
  scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
  eventDuration: 60,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The title of the live stream event                                                            | Wellness Session: Coping with Outie Memories                                                  |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the live stream event                                                      | A comprehensive session on managing work-life balance                                         |
| `scheduledFor`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The scheduled start time in W3C format with timezone                                          | 2024-03-20T15:30:00-05:00                                                                     |
| `eventDuration`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | Duration of the event in minutes (minimum 15)                                                 | 60                                                                                            |
# GetWebinarsIdResponse

A webinar is an event which allows you to stream a video
to multiple participants. See our [Webinars Guide](https://support.wistia.com/en/articles/8288501-getting-started-with-webinars)
for more info.


## Example Usage

```typescript
import { GetWebinarsIdResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetWebinarsIdResponse = {
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
  panelistLink:
    "https://lumon-industries.wistia.com/live/join/abc123def456/a1b2c3d4-e5f6-7890-abcd-ef1234567890",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | The hashed ID of the webinar                                                                    | abc123def456                                                                                    |
| `title`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | The title of the webinar                                                                        | Wellness Session: Coping with Outie Memories                                                    |
| `description`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | The description of the webinar                                                                  | A comprehensive session on managing work-life balance                                           |
| `scheduledFor`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | The scheduled start time in W3C format with timezone                                            | 2024-03-20T15:30:00-05:00                                                                       |
| `eventDuration`                                                                                 | *number*                                                                                        | :heavy_minus_sign:                                                                              | Duration of the webinar in minutes                                                              | 60                                                                                              |
| `lifecycleStatus`                                                                               | *string*                                                                                        | :heavy_check_mark:                                                                              | Current lifecycle status of the event                                                           | scheduled                                                                                       |
| `registrationStatus`                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | Registration status of the event                                                                | published                                                                                       |
| `createdAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | When the event was created (UTC)                                                                | 2024-03-15T10:30:00Z                                                                            |
| `updatedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | When the event was last updated (UTC)                                                           | 2024-03-15T10:30:00Z                                                                            |
| `audienceLink`                                                                                  | *string*                                                                                        | :heavy_check_mark:                                                                              | Link for the audience to join the event                                                         | https://lumon-industries.wistia.com/live/events/abc123def456                                    |
| `hostLink`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | Link for the host to manage the event                                                           | https://lumon-industries.wistia.com/live/onair/abc123def456/                                    |
| `panelistLink`                                                                                  | *string*                                                                                        | :heavy_check_mark:                                                                              | Link for panelists to join the event                                                            | https://lumon-industries.wistia.com/live/join/abc123def456/a1b2c3d4-e5f6-7890-abcd-ef1234567890 |
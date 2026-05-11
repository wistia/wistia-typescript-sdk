# Webinar

## Example Usage

```typescript
import { Webinar } from "@wistia/wistia-api-client/models/operations";

let value: Webinar = {
  title: "Updated Webinar Title",
  description: "Updated webinar description",
  scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
  eventDuration: 90,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The title of the webinar                                                                      | Updated Webinar Title                                                                         |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the webinar                                                                | Updated webinar description                                                                   |
| `scheduledFor`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The scheduled start time in W3C format with timezone                                          | 2024-03-20T15:30:00-05:00                                                                     |
| `eventDuration`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | Duration of the webinar in minutes (minimum 15)                                               | 90                                                                                            |
# PutWebinarsIdWebinar

## Example Usage

```typescript
import { PutWebinarsIdWebinar } from "@wistia/wistia-api-client/models/operations";

let value: PutWebinarsIdWebinar = {
  title: "Updated Webinar Title",
  description: "Updated webinar description",
  scheduledFor: new Date("2024-03-20T15:30:00Z"),
  eventDuration: 90,
  timeZone: "America/New_York",
  folderId: "abc123def456",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `title`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The title of the webinar                                                                             | Updated Webinar Title                                                                                |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The description of the webinar                                                                       | Updated webinar description                                                                          |
| `scheduledFor`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The scheduled start time as a UTC formatted ISO 8601 string (offset `Z` or `+00:00`).                | 2024-03-20T15:30:00Z                                                                                 |
| `eventDuration`                                                                                      | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Duration of the webinar in minutes (minimum 15)                                                      | 90                                                                                                   |
| `timeZone`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The IANA time zone identifier the webinar is scheduled in.                                           | America/New_York                                                                                     |
| `folderId`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Hashed ID of the folder to move this webinar to. Can only be changed before the webinar has started. | abc123def456                                                                                         |
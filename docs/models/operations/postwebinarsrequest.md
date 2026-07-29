# PostWebinarsRequest

## Example Usage

```typescript
import { PostWebinarsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostWebinarsRequest = {
  title: "Wellness Session: Coping with Outie Memories",
  description: "A comprehensive session on managing work-life balance",
  scheduledFor: new Date("2024-03-20T15:30:00Z"),
  eventDuration: 60,
  timeZone: "America/New_York",
  folderId: "abc123def456",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The title of the webinar                                                                                            | Wellness Session: Coping with Outie Memories                                                                        |
| `description`                                                                                                       | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The description of the webinar                                                                                      | A comprehensive session on managing work-life balance                                                               |
| `scheduledFor`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | The scheduled start time as a UTC formatted ISO 8601 string (offset `Z` or `+00:00`).                               | 2024-03-20T15:30:00Z                                                                                                |
| `eventDuration`                                                                                                     | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | Duration of the event in minutes (minimum 15)                                                                       | 60                                                                                                                  |
| `timeZone`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The IANA time zone identifier the webinar is scheduled in.                                                          | America/New_York                                                                                                    |
| `folderId`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Hashed ID of the folder to place this webinar in. Defaults to the account's default webinar folder if not provided. | abc123def456                                                                                                        |
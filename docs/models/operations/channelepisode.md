# ChannelEpisode

## Example Usage

```typescript
import { ChannelEpisode } from "@wistia/wistia-api-client/models/operations";

let value: ChannelEpisode = {
  id: 30742,
  hashedId: "<id>",
  description: "failing hierarchy skeletal",
  summary: "<value>",
  channelHashedId: "<id>",
  mediaHashedId: "<id>",
  published: false,
  created: new Date("2025-05-12T04:48:47.343Z"),
  updated: new Date("2026-04-29T20:39:05.077Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | A unique numeric identifier for the channel episode within the system.                        |
| `hashedId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | A unique alphanumeric identifier for this channel episode.                                    |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The title of the channel episode.                                                             |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The episode notes for the channel episode.                                                    |
| `summary`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the channel episode.                                                       |
| `channelHashedId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | The hashed ID of the channel this episode belongs to.                                         |
| `mediaHashedId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The hashed ID of the media associated with this channel episode.                              |
| `published`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the channel episode is published.                                                     |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date when the channel episode was originally created.                                     |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date when the channel episode was last updated.                                           |
| `publishAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The scheduled publish date (only present if scheduled).                                       |
# ChannelChannels

## Example Usage

```typescript
import { ChannelChannels } from "wistia/models";

let value: ChannelChannels = {
  id: 181386,
  created: new Date("2025-03-22T07:23:25.010Z"),
  description: "plus vast aw inhibit against yesterday",
  hashedId: "<id>",
  mediaCount: 865704,
  name: "<value>",
  updated: new Date("2025-04-13T10:28:28.996Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The numeri d of the channel.                                                                  |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date when the channel was originally created.                                             |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The channel's description.                                                                    |
| `hashedId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | A unique alphanumeric identifier for this channel.                                            |
| `mediaCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of medias in the channel.                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The display name for the channel                                                              |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date when the channel was last updated.                                                   |
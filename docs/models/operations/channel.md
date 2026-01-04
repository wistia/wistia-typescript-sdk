# Channel

## Example Usage

```typescript
import { Channel } from "@wistia/wistia-api-client/models/operations";

let value: Channel = {
  id: 343828,
  hashedId: "<id>",
  name: "<value>",
  description: "guzzle cycle mindless closed descent amid come following",
  mediaCount: 251066,
  created: new Date("2025-05-21T03:53:14.193Z"),
  updated: new Date("2025-03-02T03:13:41.459Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | A unique numeric identifier for the channel within the system.                                |
| `hashedId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | A unique alphanumeric identifier for this channel.                                            |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The display name for the channel.                                                             |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The channel's description.                                                                    |
| `mediaCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of medias in the channel.                                                          |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date when the channel was originally created.                                             |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date when the channel was last updated.                                                   |
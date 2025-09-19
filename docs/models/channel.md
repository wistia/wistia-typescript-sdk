# Channel

## Example Usage

```typescript
import { Channel } from "@wistia/wistia-api-client/models";

let value: Channel = {
  id: 343828,
  created: new Date("2025-02-11T09:12:44.981Z"),
  description: "strictly however delectable geez vainly",
  hashedId: "<id>",
  mediaCount: 294815,
  name: "<value>",
  updated: new Date("2024-08-19T21:46:43.317Z"),
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
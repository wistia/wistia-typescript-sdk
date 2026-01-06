# GetChannelsResponse

## Example Usage

```typescript
import { GetChannelsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetChannelsResponse = {
  id: 817535,
  created: new Date("2024-10-18T05:53:50.151Z"),
  description: "till fatherly evenly platter gee instantly near wriggler",
  hashedId: "<id>",
  mediaCount: 143688,
  name: "<value>",
  updated: new Date("2024-02-26T07:29:40.770Z"),
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
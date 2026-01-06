# GetChannelsChannelHashedIdResponse

Channel retrieval successful

## Example Usage

```typescript
import { GetChannelsChannelHashedIdResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetChannelsChannelHashedIdResponse = {
  id: 832954,
  created: new Date("2024-10-17T22:49:09.576Z"),
  description:
    "humiliating daddy how celebrate stark idle pastel unsteady than",
  hashedId: "<id>",
  mediaCount: 135769,
  name: "<value>",
  updated: new Date("2024-12-21T11:17:09.475Z"),
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
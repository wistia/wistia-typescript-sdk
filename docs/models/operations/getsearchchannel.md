# GetSearchChannel

## Example Usage

```typescript
import { GetSearchChannel } from "@wistia/wistia-api-client/models/operations";

let value: GetSearchChannel = {
  id: 516902,
  hashedId: "<id>",
  name: "<value>",
  description:
    "phew quarrelsomely unless ah curly blah fooey fray dreary uh-huh",
  mediaCount: 929347,
  created: new Date("2025-07-19T15:50:09.243Z"),
  updated: new Date("2025-01-18T20:38:31.273Z"),
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *number*                                                                                       | :heavy_check_mark:                                                                             | A unique numeric identifier for the channel within the system.                                 |
| `hashedId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | A unique alphanumeric identifier for this channel.                                             |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | The display name for the channel.                                                              |
| `description`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | The channel's description.                                                                     |
| `mediaCount`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | The number of medias in the channel.                                                           |
| `created`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | The date when the channel was originally created.                                              |
| `updated`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | The date when the channel was last updated.                                                    |
| `liveStreamEventCount`                                                                         | *number*                                                                                       | :heavy_minus_sign:                                                                             | The number of live stream events in the channel.                                               |
| `autoPublishEnabled`                                                                           | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether episodes are automatically published when added to the channel.                        |
| `podcastEnabled`                                                                               | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether podcasting is enabled for the channel.                                                 |
| `customUrl`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | The custom URL used when embedding the channel on your own site. Null if no custom URL is set. |
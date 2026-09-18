# ResponseBody2

## Example Usage

```typescript
import { ResponseBody2 } from "@wistia/wistia-api-client/models/operations";

let value: ResponseBody2 = {
  channelHashedId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `plays`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The total number of plays.                                         |
| `playRate`                                                         | *number*                                                           | :heavy_minus_sign:                                                 | The percentage of loads that resulted in a play (between 0 and 1). |
| `engagementRate`                                                   | *number*                                                           | :heavy_minus_sign:                                                 | The average percentage of the content watched (between 0 and 1).   |
| `uniqueVisitors`                                                   | *number*                                                           | :heavy_minus_sign:                                                 | The number of unique visitors.                                     |
| `playedTime`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | Total time spent watching in seconds.                              |
| `channelTitle`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | The title of the channel.                                          |
| `channelHashedId`                                                  | *string*                                                           | :heavy_check_mark:                                                 | The hashed ID of the channel.                                      |
| `channelEpisodeCount`                                              | *number*                                                           | :heavy_minus_sign:                                                 | The number of episodes in the channel.                             |
| `channelCreatedAt`                                                 | *string*                                                           | :heavy_minus_sign:                                                 | When the channel was created, in ISO 8601 format.                  |
| `channelUrl`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | The URL of the channel.                                            |
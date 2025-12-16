# GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdRequest

## Example Usage

```typescript
import { GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdRequest = {
  channelHashedId: "<id>",
  channelEpisodeId: "<id>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `channelHashedId`                     | *string*                              | :heavy_check_mark:                    | The hashed ID of the channel.         |                                       |
| `channelEpisodeId`                    | *string*                              | :heavy_check_mark:                    | The hashed ID of the channel episode. |                                       |
| `xWistiaAPIVersion`                   | *string*                              | :heavy_minus_sign:                    | The API version                       | 2025-11                               |
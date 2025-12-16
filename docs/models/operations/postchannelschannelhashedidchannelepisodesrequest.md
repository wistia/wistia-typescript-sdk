# PostChannelsChannelHashedIdChannelEpisodesRequest

## Example Usage

```typescript
import { PostChannelsChannelHashedIdChannelEpisodesRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostChannelsChannelHashedIdChannelEpisodesRequest = {
  channelHashedId: "<id>",
  requestBody: {
    title: "My New Episode",
    description: "My Episode Description.",
    summary: "A short description.",
    publishAt: new Date("2024-12-31T23:59:59Z"),
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `channelHashedId`                                                                                                                                    | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The hashed ID of the channel to add the episode to.                                                                                                  |
| `requestBody`                                                                                                                                        | [operations.PostChannelsChannelHashedIdChannelEpisodesRequestBody](../../models/operations/postchannelschannelhashedidchannelepisodesrequestbody.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
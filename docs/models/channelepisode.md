# ChannelEpisode

## Example Usage

```typescript
import { ChannelEpisode } from "wistia/models";

let value: ChannelEpisode = {
  channels: {
    channelHashedId: "<id>",
    created: new Date("2023-02-03T16:39:10.428Z"),
    description: "failing hierarchy skeletal",
    summary: "A short description.",
    hashedId: "<id>",
    mediaHashedId: "<id>",
    published: true,
    publishAt: new Date("2024-12-31T23:59:59Z"),
    title: "<value>",
    updated: new Date("2023-09-06T02:35:01.550Z"),
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `channels`                                                           | [models.ChannelEpisodeChannels](../models/channelepisodechannels.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
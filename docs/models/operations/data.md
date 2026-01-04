# Data

## Example Usage

```typescript
import { Data } from "@wistia/wistia-api-client/models/operations";

let value: Data = {
  projects: [
    {
      id: 22570,
      name: "My Project Title",
      description: "About My Project",
      mediaCount: 2,
      created: new Date("2010-08-13T18:47:39+00:00"),
      updated: new Date("2010-08-19T21:47:00+00:00"),
      hashedId: "4d23503f70",
      public: false,
      publicId: "4bD",
      anonymousCanUpload: false,
      anonymousCanDownload: false,
    },
  ],
  medias: [
    {
      projectHashedId: "4d23503f70",
    },
  ],
  channels: [
    {
      id: 21457,
      hashedId: "<id>",
      name: "<value>",
      description: "over runny till offensively pro eek pension",
      mediaCount: 751106,
      created: new Date("2026-09-20T12:15:22.877Z"),
      updated: new Date("2024-10-21T18:31:11.912Z"),
    },
  ],
  channelEpisodes: [
    {
      id: 62016,
      hashedId: "<id>",
      description: "footrest till psst zowie why supposing usefully unless so",
      summary: "<value>",
      channelHashedId: "<id>",
      mediaHashedId: "<id>",
      published: false,
      created: new Date("2024-02-03T21:15:06.314Z"),
      updated: new Date("2024-01-20T16:07:24.843Z"),
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `projects`                                                                   | [operations.GetSearchProject](../../models/operations/getsearchproject.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `medias`                                                                     | [operations.GetSearchMedia](../../models/operations/getsearchmedia.md)[]     | :heavy_check_mark:                                                           | N/A                                                                          |
| `channels`                                                                   | [operations.Channel](../../models/operations/channel.md)[]                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `channelEpisodes`                                                            | [operations.ChannelEpisode](../../models/operations/channelepisode.md)[]     | :heavy_check_mark:                                                           | N/A                                                                          |
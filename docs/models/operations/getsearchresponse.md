# GetSearchResponse

Search results

## Example Usage

```typescript
import { GetSearchResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetSearchResponse = {
  data: {
    folders: [
      {
        id: 22570,
        name: "My Folder Title",
        description: "About My Folder",
        mediaCount: 2,
        medias: {},
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
        folderHashedId: "4d23503f70",
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
    channelEpisodes: [],
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [operations.Data](../../models/operations/data.md) | :heavy_check_mark:                                 | N/A                                                |
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
    subfolders: [
      {
        hashedId: "abc123def4",
        name: "Marketing Videos",
        description: "Collection of all marketing and promotional videos",
        position: 1,
        created: new Date("2024-01-15T10:30:00+00:00"),
        updated: new Date("2024-01-20T14:45:00+00:00"),
      },
    ],
    medias: [
      {
        folderHashedId: "4d23503f70",
        transcriptMatches: [],
      },
    ],
    channels: [],
    channelEpisodes: [
      {
        id: 969848,
        hashedId: "<id>",
        description:
          "encouragement woefully saloon advancement shovel until frenetically mallard fooey thoughtfully",
        summary: "<value>",
        channelHashedId: "<id>",
        mediaHashedId: "<id>",
        published: false,
        created: new Date("2024-07-01T15:43:15.624Z"),
        updated: new Date("2026-08-01T01:22:36.889Z"),
      },
    ],
    webinars: [],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [operations.GetSearchData](../../models/operations/getsearchdata.md) | :heavy_check_mark:                                                   | N/A                                                                  |
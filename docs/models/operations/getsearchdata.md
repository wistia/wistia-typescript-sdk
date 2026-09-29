# GetSearchData

## Example Usage

```typescript
import { GetSearchData } from "@wistia/wistia-api-client/models/operations";

let value: GetSearchData = {
  folders: [],
  subfolders: [],
  medias: [
    {
      folderHashedId: "4d23503f70",
      transcriptMatches: [],
      customMetadataFieldValues: [
        {
          key: "client",
          fieldType: "single_select",
          value: "high",
          updatedAt: new Date("2026-07-17T21:47:00Z"),
          lastWrite: {
            at: new Date("2026-08-25T17:55:00Z"),
            source: "api",
            actor: {
              type: "contact",
              id: "abc123de",
              name: "Jane Doe",
            },
          },
        },
      ],
    },
  ],
  channels: [],
  channelEpisodes: [],
  webinars: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `folders`                                                                        | [operations.GetSearchFolder](../../models/operations/getsearchfolder.md)[]       | :heavy_check_mark:                                                               | N/A                                                                              |
| `subfolders`                                                                     | [operations.GetSearchSubfolder](../../models/operations/getsearchsubfolder.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `medias`                                                                         | [operations.GetSearchMedia](../../models/operations/getsearchmedia.md)[]         | :heavy_check_mark:                                                               | N/A                                                                              |
| `channels`                                                                       | [operations.GetSearchChannel](../../models/operations/getsearchchannel.md)[]     | :heavy_check_mark:                                                               | N/A                                                                              |
| `channelEpisodes`                                                                | [operations.ChannelEpisode](../../models/operations/channelepisode.md)[]         | :heavy_check_mark:                                                               | N/A                                                                              |
| `webinars`                                                                       | [operations.GetSearchWebinar](../../models/operations/getsearchwebinar.md)[]     | :heavy_check_mark:                                                               | N/A                                                                              |
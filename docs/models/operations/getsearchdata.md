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
| `channels`                                                                       | [operations.Channel](../../models/operations/channel.md)[]                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `channelEpisodes`                                                                | [operations.ChannelEpisode](../../models/operations/channelepisode.md)[]         | :heavy_check_mark:                                                               | N/A                                                                              |
| `webinars`                                                                       | [operations.GetSearchWebinar](../../models/operations/getsearchwebinar.md)[]     | :heavy_check_mark:                                                               | N/A                                                                              |
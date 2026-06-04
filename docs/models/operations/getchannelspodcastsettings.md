# GetChannelsPodcastSettings

Podcast specific settings for the channel. Only present when podcasting
is enabled for the channel.


## Example Usage

```typescript
import { GetChannelsPodcastSettings } from "@wistia/wistia-api-client/models/operations";

let value: GetChannelsPodcastSettings = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `copyright`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | The channel's copyright information.                                                       |
| `episodeFormat`                                                                            | [operations.GetChannelsEpisodeFormat](../../models/operations/getchannelsepisodeformat.md) | :heavy_minus_sign:                                                                         | The format for episodes for the podcast channel.                                           |
| `authorName`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | The name of the author(s) for the channel.                                                 |
| `explicit`                                                                                 | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Whether the channel contains explicit content.                                             |
| `ownerName`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | The name of the owner for the channel.                                                     |
| `ownerEmail`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | The email of the owner for the channel.                                                    |
| `category1`                                                                                | [operations.GetChannelsCategory1](../../models/operations/getchannelscategory1.md)         | :heavy_minus_sign:                                                                         | The primary category for the channel.                                                      |
| `category2`                                                                                | [operations.GetChannelsCategory2](../../models/operations/getchannelscategory2.md)         | :heavy_minus_sign:                                                                         | The secondary category for the channel.                                                    |
| `category3`                                                                                | [operations.GetChannelsCategory3](../../models/operations/getchannelscategory3.md)         | :heavy_minus_sign:                                                                         | The third category for the channel.                                                        |
| `language`                                                                                 | [operations.GetChannelsLanguage](../../models/operations/getchannelslanguage.md)           | :heavy_minus_sign:                                                                         | The ISO 639-1 language code for the channel.                                               |
# GetChannelsChannelHashedIdChannelEpisodesRequest

## Example Usage

```typescript
import { GetChannelsChannelHashedIdChannelEpisodesRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetChannelsChannelHashedIdChannelEpisodesRequest = {
  channelHashedId: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `channelHashedId`                                           | *string*                                                    | :heavy_check_mark:                                          | The hashed ID of the channel to grab channel episodes from. |
| `sortBy`                                                    | [models.SortBy](../../models/sortby.md)                     | :heavy_minus_sign:                                          | Ordering. Default is ID ASC.                                |
| `sortDirection`                                             | [models.SortDirection](../../models/sortdirection.md)       | :heavy_minus_sign:                                          | Ordering Sort Direction (0 = desc, 1 = asc; default is 1)   |
| `page`                                                      | *number*                                                    | :heavy_minus_sign:                                          | Page number to retrieve                                     |
| `perPage`                                                   | *number*                                                    | :heavy_minus_sign:                                          | Number of channels per page                                 |
| `mediaId`                                                   | *string*[]                                                  | :heavy_minus_sign:                                          | Filter by media id                                          |
| `hashedId`                                                  | *models.HashedId*                                           | :heavy_minus_sign:                                          | Filter by hashed id                                         |
| `published`                                                 | *boolean*                                                   | :heavy_minus_sign:                                          | Filter by published status.                                 |
| `title`                                                     | *string*                                                    | :heavy_minus_sign:                                          | Filter by channel episode name/title.                       |
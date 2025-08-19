# GetChannelsRequest

## Example Usage

```typescript
import { GetChannelsRequest } from "wistia/models/operations";

let value: GetChannelsRequest = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `page`                                                                                     | *number*                                                                                   | :heavy_minus_sign:                                                                         | Page number to retrieve                                                                    |
| `perPage`                                                                                  | *number*                                                                                   | :heavy_minus_sign:                                                                         | Number of channels per page                                                                |
| `sortBy`                                                                                   | [operations.GetChannelsSortBy](../../models/operations/getchannelssortby.md)               | :heavy_minus_sign:                                                                         | Ordering. Default is ID ASC.                                                               |
| `sortDirection`                                                                            | [operations.GetChannelsSortDirection](../../models/operations/getchannelssortdirection.md) | :heavy_minus_sign:                                                                         | Ordering Sort Direction (0 = desc, 1 = asc; default is 1)                                  |
| `hashedIds`                                                                                | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | Find all of the channels limited to these hashed_ids.                                      |
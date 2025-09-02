# GetLiveStreamEventsRequest

## Example Usage

```typescript
import { GetLiveStreamEventsRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetLiveStreamEventsRequest = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `page`                                                                                                     | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Page number to retrieve                                                                                    |
| `perPage`                                                                                                  | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Number of events per page (maximum 100)                                                                    |
| `sortBy`                                                                                                   | [operations.GetLiveStreamEventsSortBy](../../models/operations/getlivestreameventssortby.md)               | :heavy_minus_sign:                                                                                         | Field to sort by                                                                                           |
| `sortDirection`                                                                                            | [operations.GetLiveStreamEventsSortDirection](../../models/operations/getlivestreameventssortdirection.md) | :heavy_minus_sign:                                                                                         | Sort direction (1 for ascending, -1 for descending)                                                        |
| `hashedIds`                                                                                                | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | Filter by specific event IDs                                                                               |
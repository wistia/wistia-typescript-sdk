# GetStatsVisitorsRequest

## Example Usage

```typescript
import { GetStatsVisitorsRequest } from "wistia/models/operations";

let value: GetStatsVisitorsRequest = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `page`                                                   | *number*                                                 | :heavy_minus_sign:                                       | The page of results based on the per_page parameter.     |
| `perPage`                                                | *number*                                                 | :heavy_minus_sign:                                       | The maximum number of results to return, capped at 100.  |
| `filter`                                                 | [operations.Filter](../../models/operations/filter.md)   | :heavy_minus_sign:                                       | Filtering parameter to narrow down the list of visitors. |
| `search`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Search for visitors based on name or email address.      |
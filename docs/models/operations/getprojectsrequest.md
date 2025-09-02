# GetProjectsRequest

## Example Usage

```typescript
import { GetProjectsRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetProjectsRequest = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `page`                                                                                     | *number*                                                                                   | :heavy_minus_sign:                                                                         | Page number to retrieve                                                                    |
| `perPage`                                                                                  | *number*                                                                                   | :heavy_minus_sign:                                                                         | Number of projects per page                                                                |
| `sortBy`                                                                                   | [operations.GetProjectsSortBy](../../models/operations/getprojectssortby.md)               | :heavy_minus_sign:                                                                         | Ordering                                                                                   |
| `sortDirection`                                                                            | [operations.GetProjectsSortDirection](../../models/operations/getprojectssortdirection.md) | :heavy_minus_sign:                                                                         | Ordering Sort Direction (0 = desc, 1 = asc; default is 1)                                  |
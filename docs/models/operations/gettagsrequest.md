# GetTagsRequest

## Example Usage

```typescript
import { GetTagsRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetTagsRequest = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `page`                                                                             | *number*                                                                           | :heavy_minus_sign:                                                                 | Page number to retrieve                                                            |
| `perPage`                                                                          | *number*                                                                           | :heavy_minus_sign:                                                                 | Number of tags per page                                                            |
| `sortBy`                                                                           | [operations.GetTagsSortBy](../../models/operations/gettagssortby.md)               | :heavy_minus_sign:                                                                 | Ordering                                                                           |
| `sortDirection`                                                                    | [operations.GetTagsSortDirection](../../models/operations/gettagssortdirection.md) | :heavy_minus_sign:                                                                 | Ordering Sort Direction (0 = desc, 1 = asc)                                        |
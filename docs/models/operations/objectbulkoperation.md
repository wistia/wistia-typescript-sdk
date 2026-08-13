# ObjectBulkOperation

Wire view of a bulk operation as it appears inside a background job status
poll response. Discriminated by `type`.


## Example Usage

```typescript
import { ObjectBulkOperation } from "@wistia/wistia-api-client/models/operations";

let value: ObjectBulkOperation = {
  type: "bulk_operation",
  summary: {
    total: 150632,
    succeeded: 386476,
    failed: 532936,
  },
  results: [
    {
      position: 193506,
      status: "succeeded",
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                   | [operations.GetBackgroundJobStatusBackgroundJobStatusIdType](../../models/operations/getbackgroundjobstatusbackgroundjobstatusidtype.md) | :heavy_check_mark:                                                                                                                       | Discriminator identifying the wrapped resource type.                                                                                     |
| `summary`                                                                                                                                | [operations.Summary](../../models/operations/summary.md)                                                                                 | :heavy_check_mark:                                                                                                                       | Aggregate counts for the bulk operation. While the operation is<br/>running, `succeeded` and `failed` reflect progress so far.<br/>      |
| `results`                                                                                                                                | [operations.Result](../../models/operations/result.md)[]                                                                                 | :heavy_check_mark:                                                                                                                       | Per-action results, in submission order. Empty until actions begin<br/>completing.<br/>                                                  |
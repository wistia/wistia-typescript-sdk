# Summary

Aggregate counts for the bulk operation. While the operation is
running, `succeeded` and `failed` reflect progress so far.


## Example Usage

```typescript
import { Summary } from "@wistia/wistia-api-client/models/operations";

let value: Summary = {
  total: 717063,
  succeeded: 399543,
  failed: 950147,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `total`                                                 | *number*                                                | :heavy_check_mark:                                      | The total number of actions in the operation.           |
| `succeeded`                                             | *number*                                                | :heavy_check_mark:                                      | The number of actions that have completed successfully. |
| `failed`                                                | *number*                                                | :heavy_check_mark:                                      | The number of actions that have failed.                 |
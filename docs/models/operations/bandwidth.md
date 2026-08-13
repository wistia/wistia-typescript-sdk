# Bandwidth

Bandwidth usage and limits for the current billing period, in bytes (1 GB = 1,000,000,000 bytes)

## Example Usage

```typescript
import { Bandwidth } from "@wistia/wistia-api-client/models/operations";

let value: Bandwidth = {
  usedBytes: 44465,
  limitBytes: null,
  period: "monthly",
  resetsAt: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `usedBytes`                                                             | *number*                                                                | :heavy_check_mark:                                                      | Bandwidth used in the current billing period, in bytes                  |
| `limitBytes`                                                            | *number*                                                                | :heavy_check_mark:                                                      | Bandwidth limit for the billing period in bytes. Null if unlimited.     |
| `period`                                                                | [operations.Period](../../models/operations/period.md)                  | :heavy_check_mark:                                                      | Whether the bandwidth allowance is tracked monthly or annually          |
| `resetsAt`                                                              | *string*                                                                | :heavy_check_mark:                                                      | ISO 8601 timestamp when the bandwidth period resets, or null if unknown |
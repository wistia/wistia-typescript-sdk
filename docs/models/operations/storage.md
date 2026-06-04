# Storage

Storage usage and limits in bytes (1 GB = 1,000,000,000 bytes)

## Example Usage

```typescript
import { Storage } from "@wistia/wistia-api-client/models/operations";

let value: Storage = {
  usedBytes: 142071,
  flexibleLimitBytes: 845388,
  inflexibleLimitBytes: 179901,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `usedBytes`                                         | *number*                                            | :heavy_check_mark:                                  | Current storage usage in bytes                      |
| `flexibleLimitBytes`                                | *number*                                            | :heavy_check_mark:                                  | Included storage limit in bytes. Null if unlimited. |
| `inflexibleLimitBytes`                              | *number*                                            | :heavy_check_mark:                                  | Hard storage cap in bytes. Null if no hard cap.     |
# Limits

Usage and limit data. Null when the authenticated contact does not have
billing visibility (i.e. is not an account owner or manager).


## Example Usage

```typescript
import { Limits } from "@wistia/wistia-api-client/models/operations";

let value: Limits = {
  primaryResource: "media",
  media: {
    count: 407168,
    flexibleLimit: 376830,
    inflexibleLimit: 332064,
  },
  storage: {
    usedBytes: 748795,
    flexibleLimitBytes: 455993,
    inflexibleLimitBytes: 488543,
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `primaryResource`                                                                                         | [operations.PrimaryResource](../../models/operations/primaryresource.md)                                  | :heavy_check_mark:                                                                                        | The primary resource type for this plan's limits — "storage" for standard plans, "media" for legacy plans |
| `media`                                                                                                   | [operations.GetAccountUsageMedia](../../models/operations/getaccountusagemedia.md)                        | :heavy_check_mark:                                                                                        | Media count and limits                                                                                    |
| `storage`                                                                                                 | [operations.Storage](../../models/operations/storage.md)                                                  | :heavy_check_mark:                                                                                        | Storage usage and limits in bytes (1 GB = 1,000,000,000 bytes)                                            |
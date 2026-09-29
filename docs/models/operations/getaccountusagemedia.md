# GetAccountUsageMedia

Media count and limits

## Example Usage

```typescript
import { GetAccountUsageMedia } from "@wistia/wistia-api-client/models/operations";

let value: GetAccountUsageMedia = {
  count: 430192,
  flexibleLimit: 756455,
  inflexibleLimit: 966577,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_check_mark:                                         | Current number of media in the account                     |
| `flexibleLimit`                                            | *number*                                                   | :heavy_check_mark:                                         | Soft media limit (overage billed). Null if no soft limit.  |
| `inflexibleLimit`                                          | *number*                                                   | :heavy_check_mark:                                         | Hard media limit (uploads blocked). Null if no hard limit. |
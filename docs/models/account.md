# Account

## Example Usage

```typescript
import { Account } from "@wistia/wistia-api-client/models";

let value: Account = {
  id: 682268,
  name: "<value>",
  url: "https://cute-restaurant.biz/",
  mediaCount: 546003,
  videoLimit: 385626,
  projectCount: 940693,
  channelCount: 262730,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *number*                                                   | :heavy_check_mark:                                         | Numeric id of the account                                  |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | Account name                                               |
| `url`                                                      | *string*                                                   | :heavy_check_mark:                                         | Account’s main Wistia URL (e.g. http://brendan.wistia.com) |
| `mediaCount`                                               | *number*                                                   | :heavy_check_mark:                                         | The total number of medias in this account                 |
| `videoLimit`                                               | *number*                                                   | :heavy_check_mark:                                         | The account's video limit                                  |
| `projectCount`                                             | *number*                                                   | :heavy_check_mark:                                         | The total number of projects in this account               |
| `channelCount`                                             | *number*                                                   | :heavy_check_mark:                                         | The total number of channels in this account               |
# GetAccountDetailsResponse

Successful response

## Example Usage

```typescript
import { GetAccountDetailsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAccountDetailsResponse = {
  id: 327653,
  name: "<value>",
  url: "https://grounded-programme.biz/",
  mediaCount: 714409,
  videoLimit: 102467,
  projectCount: 423946,
  channelCount: 878911,
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
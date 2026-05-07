# GetAccountDetailsResponse

An account represents a customer at Wistia. Each account can own media, folders
channels, etc.


## Example Usage

```typescript
import { GetAccountDetailsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAccountDetailsResponse = {
  id: 327653,
  name: "<value>",
  url: "https://grounded-programme.biz/",
  mediaCount: 714409,
  videoLimit: 423946,
  folderCount: 878911,
  channelCount: 809044,
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
| `folderCount`                                              | *number*                                                   | :heavy_check_mark:                                         | The total number of folders in this account                |
| `channelCount`                                             | *number*                                                   | :heavy_check_mark:                                         | The total number of channels in this account               |
# GetAnalyticsAccountEmbedLocationsResponse

## Example Usage

```typescript
import { GetAnalyticsAccountEmbedLocationsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsAccountEmbedLocationsResponse = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `embedDomain`                                                   | *string*                                                        | :heavy_minus_sign:                                              | The domain where the account's media are embedded.              |
| `mediaCount`                                                    | *number*                                                        | :heavy_minus_sign:                                              | The number of distinct media embedded on this domain.           |
| `loads`                                                         | *number*                                                        | :heavy_minus_sign:                                              | The number of media loads from this domain.                     |
| `plays`                                                         | *number*                                                        | :heavy_minus_sign:                                              | The number of media plays from this domain.                     |
| `playRate`                                                      | *number*                                                        | :heavy_minus_sign:                                              | The play rate from this domain (between 0 and 1).               |
| `playedTime`                                                    | *number*                                                        | :heavy_minus_sign:                                              | Total time spent watching from this domain in seconds.          |
| `engagementRate`                                                | *number*                                                        | :heavy_minus_sign:                                              | The average engagement rate from this domain (between 0 and 1). |
| `uniqueVisitors`                                                | *number*                                                        | :heavy_minus_sign:                                              | The number of unique visitors from this domain.                 |
# GetAnalyticsMediasMediaIdEmbedLocationsResponse

## Example Usage

```typescript
import { GetAnalyticsMediasMediaIdEmbedLocationsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsMediasMediaIdEmbedLocationsResponse = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `embedDomain`                                                     | *string*                                                          | :heavy_minus_sign:                                                | The domain where the video is embedded.                           |
| `embedPath`                                                       | *string*                                                          | :heavy_minus_sign:                                                | The path on the domain where the video is embedded.               |
| `embedUrl`                                                        | *string*                                                          | :heavy_minus_sign:                                                | The full URL where the video is embedded.                         |
| `pageTitle`                                                       | *string*                                                          | :heavy_minus_sign:                                                | The title of the page where the video is embedded.                |
| `loads`                                                           | *number*                                                          | :heavy_minus_sign:                                                | The number of video loads from this location.                     |
| `plays`                                                           | *number*                                                          | :heavy_minus_sign:                                                | The number of video plays from this location.                     |
| `playRate`                                                        | *number*                                                          | :heavy_minus_sign:                                                | The play rate from this location (between 0 and 1).               |
| `playedTime`                                                      | *number*                                                          | :heavy_minus_sign:                                                | Total time spent watching from this location in seconds.          |
| `engagementRate`                                                  | *number*                                                          | :heavy_minus_sign:                                                | The average engagement rate from this location (between 0 and 1). |
| `uniqueVisitors`                                                  | *number*                                                          | :heavy_minus_sign:                                                | The number of unique visitors from this location.                 |
| `ctaConversionRate`                                               | *number*                                                          | :heavy_minus_sign:                                                | The CTA conversion rate from this location (between 0 and 1).     |
# GetAnalyticsMediasMediaIdResponse

Success response with aggregate analytics for the video.

## Example Usage

```typescript
import { GetAnalyticsMediasMediaIdResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsMediasMediaIdResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `uniqueLoads`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | The number of unique video loads.                                  |
| `uniquePlays`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | The number of unique video plays.                                  |
| `plays`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The total number of video plays.                                   |
| `playRate`                                                         | *number*                                                           | :heavy_minus_sign:                                                 | The percentage of loads that resulted in a play (between 0 and 1). |
| `playedTime`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | Total time spent watching the video in seconds.                    |
| `uniqueVisitors`                                                   | *number*                                                           | :heavy_minus_sign:                                                 | The number of unique visitors who loaded the video.                |
| `engagementRate`                                                   | *number*                                                           | :heavy_minus_sign:                                                 | The average percentage of the video watched (between 0 and 1).     |
| `ctaImpressions`                                                   | *number*                                                           | :heavy_minus_sign:                                                 | The number of times a call-to-action was shown.                    |
| `ctaConversions`                                                   | *number*                                                           | :heavy_minus_sign:                                                 | The number of times a call-to-action was clicked.                  |
| `ctaConversionRate`                                                | *number*                                                           | :heavy_minus_sign:                                                 | The rate of CTA clicks over impressions (between 0 and 1).         |
| `formConversions`                                                  | *number*                                                           | :heavy_minus_sign:                                                 | The number of form submissions.                                    |
# GetAnalyticsMediasMediaIdTrafficResponse

Each item contains the group_by field and associated metrics.

## Example Usage

```typescript
import { GetAnalyticsMediasMediaIdTrafficResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsMediasMediaIdTrafficResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `utmCampaign`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | The UTM campaign value (present when group_by is utm_campaign).       |
| `utmSource`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | The UTM source value (present when group_by is utm_source).           |
| `utmMedium`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | The UTM medium value (present when group_by is utm_medium).           |
| `referrerDomain`                                                      | *string*                                                              | :heavy_minus_sign:                                                    | The referrer domain (present when group_by is referrer_domain).       |
| `viewerScreenSize`                                                    | *string*                                                              | :heavy_minus_sign:                                                    | The viewer screen size (present when group_by is viewer_screen_size). |
| `loads`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | The number of video loads for this group.                             |
| `plays`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | The number of video plays for this group.                             |
| `engagementRate`                                                      | *number*                                                              | :heavy_minus_sign:                                                    | The average engagement rate for this group (between 0 and 1).         |
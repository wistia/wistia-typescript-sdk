# GetAnalyticsWebinarsWebinarIdTrafficResponse

Each item contains the group_by field and associated metrics.

## Example Usage

```typescript
import { GetAnalyticsWebinarsWebinarIdTrafficResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsWebinarsWebinarIdTrafficResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `utmCampaign`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | The UTM campaign value (present when group_by is utm_campaign).       |
| `utmSource`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | The UTM source value (present when group_by is utm_source).           |
| `utmMedium`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | The UTM medium value (present when group_by is utm_medium).           |
| `referrerDomain`                                                      | *string*                                                              | :heavy_minus_sign:                                                    | The referrer domain (present when group_by is referrer_domain).       |
| `registrations`                                                       | *number*                                                              | :heavy_minus_sign:                                                    | The number of registrations from this traffic source.                 |
| `attendees`                                                           | *number*                                                              | :heavy_minus_sign:                                                    | The number of attendees from this traffic source.                     |
| `impressions`                                                         | *number*                                                              | :heavy_minus_sign:                                                    | The number of registration page impressions from this traffic source. |
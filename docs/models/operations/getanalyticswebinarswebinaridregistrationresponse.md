# GetAnalyticsWebinarsWebinarIdRegistrationResponse

## Example Usage

```typescript
import { GetAnalyticsWebinarsWebinarIdRegistrationResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsWebinarsWebinarIdRegistrationResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The start of the time bucket in ISO 8601 format.                                              |
| `registrations`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of registrations in this time period.                                              |
| `impressions`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of registration page impressions in this time period.                              |
| `onDemandRegistrations`                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of on-demand registrations in this time period.                                    |
| `onDemandImpressions`                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of on-demand page impressions in this time period.                                 |
| `completionRate`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | The completion rate for attendees in this time period (between 0 and 1).                      |
| `onDemandCompletionRate`                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | The completion rate for on-demand viewers in this time period (between 0 and 1).              |
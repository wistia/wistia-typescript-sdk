# GetAnalyticsMediasMediaIdEmbedLocationsTimeseriesResponse

## Example Usage

```typescript
import { GetAnalyticsMediasMediaIdEmbedLocationsTimeseriesResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsMediasMediaIdEmbedLocationsTimeseriesResponse = {};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `timestamp`                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                              | :heavy_minus_sign:                                                                                                                         | The start of the time bucket in ISO 8601 format.                                                                                           |
| `entries`                                                                                                                                  | [operations.Entry](../../models/operations/entry.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                         | Embed location metrics for this time bucket. Contains the top locations (ranked by the chosen metric) and optionally an "All other" entry. |
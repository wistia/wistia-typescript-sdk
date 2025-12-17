# GetStatsMediasMediaIdEngagementResponse

Success response with the engagement data of the video.

## Example Usage

```typescript
import { GetStatsMediasMediaIdEngagementResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetStatsMediasMediaIdEngagementResponse = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `engagement`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | The percentage of the video that was viewed, averaged across all viewing sessions. |
| `engagementData`                                                                   | *number*[]                                                                         | :heavy_minus_sign:                                                                 | An array for creating an engagement graph.                                         |
| `rewatchData`                                                                      | *number*[]                                                                         | :heavy_minus_sign:                                                                 | An array for creating the rewatch block on an engagement graph.                    |
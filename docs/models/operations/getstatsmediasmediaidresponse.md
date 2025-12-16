# GetStatsMediasMediaIdResponse

Success response with the stats of the video.

## Example Usage

```typescript
import { GetStatsMediasMediaIdResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetStatsMediasMediaIdResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `loadCount`                                                             | *number*                                                                | :heavy_minus_sign:                                                      | The total number of times this video has been loaded.                   |
| `playCount`                                                             | *number*                                                                | :heavy_minus_sign:                                                      | The total number of times this video has been played.                   |
| `playRate`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | The percentage of visitors who clicked play (between 0 and 1).          |
| `hoursWatched`                                                          | *number*                                                                | :heavy_minus_sign:                                                      | The total time spent watching this video.                               |
| `engagement`                                                            | *number*                                                                | :heavy_minus_sign:                                                      | The average percentage of the video that gets viewed (between 0 and 1). |
| `visitors`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | The total number of unique people that have loaded this video.          |
| `actions`                                                               | [operations.Action](../../models/operations/action.md)[]                | :heavy_minus_sign:                                                      | N/A                                                                     |
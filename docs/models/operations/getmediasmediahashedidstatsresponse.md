# GetMediasMediaHashedIdStatsResponse

Successful retrieval of video statistics.

## Example Usage

```typescript
import { GetMediasMediaHashedIdStatsResponse } from "wistia/models/operations";

let value: GetMediasMediaHashedIdStatsResponse = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *number*                                                               | :heavy_minus_sign:                                                     | A unique numeric identifier for the video within the system.           |
| `hashedId`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | A unique alphanumeric identifier for the video within the system.      |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | The display name of the video.                                         |
| `stats`                                                                | [operations.Stats](../../models/operations/stats.md)                   | :heavy_minus_sign:                                                     | An object representing the aggregated embed statistics for this video. |
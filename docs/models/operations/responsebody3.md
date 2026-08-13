# ResponseBody3

## Example Usage

```typescript
import { ResponseBody3 } from "@wistia/wistia-api-client/models/operations";

let value: ResponseBody3 = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `plays`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The total number of plays.                                         |
| `playRate`                                                         | *number*                                                           | :heavy_minus_sign:                                                 | The percentage of loads that resulted in a play (between 0 and 1). |
| `engagementRate`                                                   | *number*                                                           | :heavy_minus_sign:                                                 | The average percentage of the content watched (between 0 and 1).   |
| `uniqueVisitors`                                                   | *number*                                                           | :heavy_minus_sign:                                                 | The number of unique visitors.                                     |
| `playedTime`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | Total time spent watching in seconds.                              |
| `projectName`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | The name of the folder.                                            |
| `projectHashedId`                                                  | *string*                                                           | :heavy_minus_sign:                                                 | The hashed ID of the folder.                                       |
| `projectCreatedAt`                                                 | *string*                                                           | :heavy_minus_sign:                                                 | When the folder was created, in ISO 8601 format.                   |
| `projectUrl`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | The URL of the folder.                                             |
| `projectVideoCount`                                                | *number*                                                           | :heavy_minus_sign:                                                 | The number of videos in the folder.                                |
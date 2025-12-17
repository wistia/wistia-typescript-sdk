# GetStatsAccountResponse

Successful operation. Account stats retrieved.

## Example Usage

```typescript
import { GetStatsAccountResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetStatsAccountResponse = {
  loadCount: 189636,
  playCount: 941360,
  hoursWatched: 7858.7,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `loadCount`                                                                     | *number*                                                                        | :heavy_check_mark:                                                              | The total number of times all of the videos from this account have been loaded. |
| `playCount`                                                                     | *number*                                                                        | :heavy_check_mark:                                                              | The total number of times all of the videos from this account have been played. |
| `hoursWatched`                                                                  | *number*                                                                        | :heavy_check_mark:                                                              | The total amount of time spent watching all of the videos in this account.      |
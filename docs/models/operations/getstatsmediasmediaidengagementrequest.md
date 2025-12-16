# GetStatsMediasMediaIdEngagementRequest

## Example Usage

```typescript
import { GetStatsMediasMediaIdEngagementRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetStatsMediasMediaIdEngagementRequest = {
  mediaId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mediaId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | The hashed ID or ID of the video for which you want to retrieve engagement data. |                                                                                  |
| `xWistiaAPIVersion`                                                              | *string*                                                                         | :heavy_minus_sign:                                                               | The API version                                                                  | 2025-11                                                                          |
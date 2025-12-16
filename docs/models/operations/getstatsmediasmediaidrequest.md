# GetStatsMediasMediaIdRequest

## Example Usage

```typescript
import { GetStatsMediasMediaIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetStatsMediasMediaIdRequest = {
  mediaId: "<id>",
  xWistiaAPIVersion: "2025-11",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `mediaId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | The hashed ID or ID of the video for which you want to retrieve stats. |                                                                        |
| `xWistiaAPIVersion`                                                    | *string*                                                               | :heavy_check_mark:                                                     | The API version                                                        | 2025-11                                                                |
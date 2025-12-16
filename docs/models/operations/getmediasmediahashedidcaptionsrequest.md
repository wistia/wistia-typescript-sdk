# GetMediasMediaHashedIdCaptionsRequest

## Example Usage

```typescript
import { GetMediasMediaHashedIdCaptionsRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdCaptionsRequest = {
  mediaHashedId: "<id>",
  xWistiaAPIVersion: "2025-11",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `mediaHashedId`                                                    | *string*                                                           | :heavy_check_mark:                                                 | The hashed ID of the media for which captions are to be retrieved. |                                                                    |
| `xWistiaAPIVersion`                                                | *string*                                                           | :heavy_check_mark:                                                 | The API version                                                    | 2025-11                                                            |
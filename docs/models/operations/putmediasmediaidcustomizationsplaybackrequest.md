# PutMediasMediaIdCustomizationsPlaybackRequest

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsPlaybackRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsPlaybackRequest = {
  mediaId: "<id>",
  requestBody: {
    videoFoam: true,
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                                                    | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The hashed ID of the video to be customized.                                                                                                 |
| `requestBody`                                                                                                                                | [operations.PutMediasMediaIdCustomizationsPlaybackRequestBody](../../models/operations/putmediasmediaidcustomizationsplaybackrequestbody.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
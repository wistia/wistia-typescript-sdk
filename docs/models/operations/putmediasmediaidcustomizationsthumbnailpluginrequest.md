# PutMediasMediaIdCustomizationsThumbnailPluginRequest

Container for thumbnail-related player plugin configurations.

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsThumbnailPluginRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsThumbnailPluginRequest = {};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `videoThumbnail`                                                                                                                                                   | [operations.PutMediasMediaIdCustomizationsThumbnailVideoThumbnailRequest](../../models/operations/putmediasmediaidcustomizationsthumbnailvideothumbnailrequest.md) | :heavy_minus_sign:                                                                                                                                                 | Looping video thumbnail (a short clip used as the poster).                                                                                                         |
| `thumbnailTextOverlayV2`                                                                                                                                           | [operations.ThumbnailTextOverlayV2Request](../../models/operations/thumbnailtextoverlayv2request.md)                                                               | :heavy_minus_sign:                                                                                                                                                 | Text overlay rendered on top of the thumbnail.                                                                                                                     |
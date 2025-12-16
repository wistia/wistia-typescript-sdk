# PostMediasMediaIdCustomizationsPluginRequest

## Example Usage

```typescript
import { PostMediasMediaIdCustomizationsPluginRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaIdCustomizationsPluginRequest = {
  postRollV1: {
    style: {
      backgroundColor: "#303030",
    },
    ctaType: "text",
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `videoThumbnail`                                                                                                                                   | [operations.PostMediasMediaIdCustomizationsVideoThumbnailRequest](../../models/operations/postmediasmediaidcustomizationsvideothumbnailrequest.md) | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `socialbarV1`                                                                                                                                      | [operations.PostMediasMediaIdCustomizationsSocialbarV1Request](../../models/operations/postmediasmediaidcustomizationssocialbarv1request.md)       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `chapters`                                                                                                                                         | [operations.PostMediasMediaIdCustomizationsChaptersRequest](../../models/operations/postmediasmediaidcustomizationschaptersrequest.md)             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `postRollV1`                                                                                                                                       | [operations.PostMediasMediaIdCustomizationsPostRollV1Request](../../models/operations/postmediasmediaidcustomizationspostrollv1request.md)         | :heavy_minus_sign:                                                                                                                                 | Adds a Call To Action to your Video                                                                                                                |
| `captionsV1`                                                                                                                                       | [operations.PostMediasMediaIdCustomizationsCaptionsV1Request](../../models/operations/postmediasmediaidcustomizationscaptionsv1request.md)         | :heavy_minus_sign:                                                                                                                                 | Enables closed captions for the video                                                                                                              |
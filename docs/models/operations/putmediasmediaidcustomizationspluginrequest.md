# PutMediasMediaIdCustomizationsPluginRequest

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsPluginRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsPluginRequest = {
  postRollV1: {
    style: {
      backgroundColor: "#303030",
    },
    ctaType: "text",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `videoThumbnail`                                                                                                                                 | [operations.PutMediasMediaIdCustomizationsVideoThumbnailRequest](../../models/operations/putmediasmediaidcustomizationsvideothumbnailrequest.md) | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `socialbarV1`                                                                                                                                    | [operations.PutMediasMediaIdCustomizationsSocialbarV1Request](../../models/operations/putmediasmediaidcustomizationssocialbarv1request.md)       | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `chapters`                                                                                                                                       | [operations.PutMediasMediaIdCustomizationsChaptersRequest](../../models/operations/putmediasmediaidcustomizationschaptersrequest.md)             | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `postRollV1`                                                                                                                                     | [operations.PutMediasMediaIdCustomizationsPostRollV1Request](../../models/operations/putmediasmediaidcustomizationspostrollv1request.md)         | :heavy_minus_sign:                                                                                                                               | Adds a Call To Action to your Video                                                                                                              |
| `captionsV1`                                                                                                                                     | [operations.PutMediasMediaIdCustomizationsCaptionsV1Request](../../models/operations/putmediasmediaidcustomizationscaptionsv1request.md)         | :heavy_minus_sign:                                                                                                                               | Enables closed captions for the video                                                                                                            |
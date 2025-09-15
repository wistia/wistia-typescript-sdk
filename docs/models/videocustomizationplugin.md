# VideoCustomizationPlugin

## Example Usage

```typescript
import { VideoCustomizationPlugin } from "@wistia/wistia-api-client/models";

let value: VideoCustomizationPlugin = {
  postRollV1: {
    style: {
      backgroundColor: "#303030",
    },
    ctaType: "text",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `videoThumbnail`                                                                         | [models.VideoCustomizationVideoThumbnail](../models/videocustomizationvideothumbnail.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `socialbarV1`                                                                            | [models.VideoCustomizationSocialbarV1](../models/videocustomizationsocialbarv1.md)       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `chapters`                                                                               | [models.VideoCustomizationChapters](../models/videocustomizationchapters.md)             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `postRollV1`                                                                             | [models.VideoCustomizationPostRollV1](../models/videocustomizationpostrollv1.md)         | :heavy_minus_sign:                                                                       | Adds a Call To Action to your Video                                                      |
| `captionsV1`                                                                             | [models.VideoCustomizationCaptionsV1](../models/videocustomizationcaptionsv1.md)         | :heavy_minus_sign:                                                                       | Enables closed captions for the video                                                    |
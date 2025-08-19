# VideoCustomizationPlugin

## Example Usage

```typescript
import { VideoCustomizationPlugin } from "wistia/models";

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
| `socialbarV1`                                                                            | [models.SocialbarV1](../models/socialbarv1.md)                                           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `chapters`                                                                               | [models.Chapters](../models/chapters.md)                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `postRollV1`                                                                             | [models.PostRollV1](../models/postrollv1.md)                                             | :heavy_minus_sign:                                                                       | Adds a Call To Action to your Video                                                      |
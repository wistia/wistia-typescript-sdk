# PostMediasMediaIdCustomizationsRequest

## Example Usage

```typescript
import { PostMediasMediaIdCustomizationsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaIdCustomizationsRequest = {
  mediaId: "<id>",
  videoCustomization: {
    plugin: {
      postRollV1: {
        style: {
          backgroundColor: "#303030",
        },
        ctaType: "text",
      },
    },
    videoFoam: true,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `mediaId`                                                       | *string*                                                        | :heavy_check_mark:                                              | The hashed ID of the video.                                     |
| `videoCustomization`                                            | [models.VideoCustomization](../../models/videocustomization.md) | :heavy_check_mark:                                              | N/A                                                             |
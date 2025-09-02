# PutMediasMediaIdCustomizationsRequest

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsRequest = {
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
| `mediaId`                                                       | *string*                                                        | :heavy_check_mark:                                              | The hashed ID of the video to be customized.                    |
| `videoCustomization`                                            | [models.VideoCustomization](../../models/videocustomization.md) | :heavy_check_mark:                                              | N/A                                                             |
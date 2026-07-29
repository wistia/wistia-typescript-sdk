# PutMediasMediaIdCustomizationsEngagementPluginRequest

Container for engagement plugin configurations.

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsEngagementPluginRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsEngagementPluginRequest = {
  postRollV1: {
    style: {
      backgroundColor: "#303030",
    },
    ctaType: "text",
  },
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `postRollV1`                                                                                                                                                 | [operations.PutMediasMediaIdCustomizationsEngagementPostRollV1Request](../../models/operations/putmediasmediaidcustomizationsengagementpostrollv1request.md) | :heavy_minus_sign:                                                                                                                                           | Adds a Call To Action to your Video.                                                                                                                         |
| `midrollLinkV1`                                                                                                                                              | [operations.MidrollLinkV1Request](../../models/operations/midrolllinkv1request.md)                                                                           | :heavy_minus_sign:                                                                                                                                           | Timed annotation links that appear over the video at specific times.                                                                                         |
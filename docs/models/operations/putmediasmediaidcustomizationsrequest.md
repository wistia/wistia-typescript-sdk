# PutMediasMediaIdCustomizationsRequest

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsRequest = {
  mediaId: "<id>",
  requestBody: {
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The hashed ID of the video to be customized.                                                                                 |
| `requestBody`                                                                                                                | [operations.PutMediasMediaIdCustomizationsRequestBody](../../models/operations/putmediasmediaidcustomizationsrequestbody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
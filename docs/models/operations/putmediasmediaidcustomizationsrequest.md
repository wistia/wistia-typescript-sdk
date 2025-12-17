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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The hashed ID of the video to be customized.                                                                                 |                                                                                                                              |
| `xWistiaAPIVersion`                                                                                                          | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The API version                                                                                                              | 2025-11                                                                                                                      |
| `requestBody`                                                                                                                | [operations.PutMediasMediaIdCustomizationsRequestBody](../../models/operations/putmediasmediaidcustomizationsrequestbody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
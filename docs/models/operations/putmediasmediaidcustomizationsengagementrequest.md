# PutMediasMediaIdCustomizationsEngagementRequest

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsEngagementRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsEngagementRequest = {
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
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                                                                        | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The hashed ID of the video to be customized.                                                                                                     |
| `requestBody`                                                                                                                                    | [operations.PutMediasMediaIdCustomizationsEngagementRequestBody](../../models/operations/putmediasmediaidcustomizationsengagementrequestbody.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
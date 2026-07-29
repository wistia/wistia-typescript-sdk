# PutMediasMediaIdCustomizationsSharingRequest

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsSharingRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsSharingRequest = {
  mediaId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                                                                  | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The hashed ID of the video to be customized.                                                                                               |
| `requestBody`                                                                                                                              | [operations.PutMediasMediaIdCustomizationsSharingRequestBody](../../models/operations/putmediasmediaidcustomizationssharingrequestbody.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
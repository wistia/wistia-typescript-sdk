# PutMediasMediaIdCustomizationsLeadCaptureRequest

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsLeadCaptureRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsLeadCaptureRequest = {
  mediaId: "<id>",
  requestBody: {
    provider: "marketo",
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                                                          | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The hashed ID of the video to be customized.                                                                                                       |
| `requestBody`                                                                                                                                      | [operations.PutMediasMediaIdCustomizationsLeadCaptureRequestBody](../../models/operations/putmediasmediaidcustomizationsleadcapturerequestbody.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
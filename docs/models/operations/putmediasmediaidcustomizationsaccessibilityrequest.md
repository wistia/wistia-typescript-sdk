# PutMediasMediaIdCustomizationsAccessibilityRequest

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsAccessibilityRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsAccessibilityRequest = {
  mediaId: "<id>",
  requestBody: {
    captionsBackgroundColor: "000000",
    captionsTextColor: "ffffff",
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                                                                              | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The hashed ID of the video to be customized.                                                                                                           |
| `requestBody`                                                                                                                                          | [operations.PutMediasMediaIdCustomizationsAccessibilityRequestBody](../../models/operations/putmediasmediaidcustomizationsaccessibilityrequestbody.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
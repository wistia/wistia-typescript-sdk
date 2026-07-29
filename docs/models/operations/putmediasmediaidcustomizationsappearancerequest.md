# PutMediasMediaIdCustomizationsAppearanceRequest

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsAppearanceRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsAppearanceRequest = {
  mediaId: "<id>",
  requestBody: {
    playerColor: "2949E5",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                                                                        | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The hashed ID of the video to be customized.                                                                                                     |
| `requestBody`                                                                                                                                    | [operations.PutMediasMediaIdCustomizationsAppearanceRequestBody](../../models/operations/putmediasmediaidcustomizationsappearancerequestbody.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
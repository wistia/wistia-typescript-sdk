# PutMediasMediaIdCustomizationsRelatedMediaRequest

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsRelatedMediaRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsRelatedMediaRequest = {
  mediaId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                                                            | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The hashed ID of the video to be customized.                                                                                                         |
| `requestBody`                                                                                                                                        | [operations.PutMediasMediaIdCustomizationsRelatedMediaRequestBody](../../models/operations/putmediasmediaidcustomizationsrelatedmediarequestbody.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
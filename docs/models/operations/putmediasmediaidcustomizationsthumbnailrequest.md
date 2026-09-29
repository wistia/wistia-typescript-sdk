# PutMediasMediaIdCustomizationsThumbnailRequest

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsThumbnailRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsThumbnailRequest = {
  mediaId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                                                      | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The hashed ID of the video to be customized.                                                                                                   |
| `requestBody`                                                                                                                                  | [operations.PutMediasMediaIdCustomizationsThumbnailRequestBody](../../models/operations/putmediasmediaidcustomizationsthumbnailrequestbody.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
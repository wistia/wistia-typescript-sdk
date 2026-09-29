# PutMediasMediaIdCustomizationsAccessRequest

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsAccessRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsAccessRequest = {
  mediaId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                                                | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The hashed ID of the video to be customized.                                                                                             |
| `requestBody`                                                                                                                            | [operations.PutMediasMediaIdCustomizationsAccessRequestBody](../../models/operations/putmediasmediaidcustomizationsaccessrequestbody.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
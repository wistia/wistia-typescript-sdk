# PutFoldersFolderIdSharingsSharingIdRequest

## Example Usage

```typescript
import { PutFoldersFolderIdSharingsSharingIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutFoldersFolderIdSharingsSharingIdRequest = {
  folderId: "<id>",
  sharingId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `folderId`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | ID of the folder                                                                                                                       |
| `sharingId`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | ID of the sharing to be updated                                                                                                        |
| `requestBody`                                                                                                                          | [operations.PutFoldersFolderIdSharingsSharingIdRequestBody](../../models/operations/putfoldersfolderidsharingssharingidrequestbody.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
# PutFoldersFolderIdSubfoldersSubfolderIdRequest

## Example Usage

```typescript
import { PutFoldersFolderIdSubfoldersSubfolderIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutFoldersFolderIdSubfoldersSubfolderIdRequest = {
  folderId: "abc123def4",
  subfolderId: "xyz789ghi0",
  requestBody: {
    name: "Updated Marketing Videos",
    description: "Updated collection of marketing materials",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `folderId`                                                                                                                                     | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The hashed ID of the folder                                                                                                                    | abc123def4                                                                                                                                     |
| `subfolderId`                                                                                                                                  | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The hashed ID of the subfolder                                                                                                                 | xyz789ghi0                                                                                                                                     |
| `requestBody`                                                                                                                                  | [operations.PutFoldersFolderIdSubfoldersSubfolderIdRequestBody](../../models/operations/putfoldersfolderidsubfolderssubfolderidrequestbody.md) | :heavy_check_mark:                                                                                                                             | Updated subfolder data                                                                                                                         |                                                                                                                                                |
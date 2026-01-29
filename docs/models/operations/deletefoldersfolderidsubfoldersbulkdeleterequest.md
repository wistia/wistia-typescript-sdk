# DeleteFoldersFolderIdSubfoldersBulkDeleteRequest

## Example Usage

```typescript
import { DeleteFoldersFolderIdSubfoldersBulkDeleteRequest } from "@wistia/wistia-api-client/models/operations";

let value: DeleteFoldersFolderIdSubfoldersBulkDeleteRequest = {
  folderId: "abc123def4",
  requestBody: {
    hashedIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `folderId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The hashed ID of the folder containing the subfolders                                                                                              | abc123def4                                                                                                                                         |
| `requestBody`                                                                                                                                      | [operations.DeleteFoldersFolderIdSubfoldersBulkDeleteRequestBody](../../models/operations/deletefoldersfolderidsubfoldersbulkdeleterequestbody.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |                                                                                                                                                    |
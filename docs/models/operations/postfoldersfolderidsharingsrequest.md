# PostFoldersFolderIdSharingsRequest

## Example Usage

```typescript
import { PostFoldersFolderIdSharingsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostFoldersFolderIdSharingsRequest = {
  folderId: "<id>",
  requestBody: {
    sharing: {
      with: "Kelley.Toy94@gmail.com",
      requirePassword: false,
      canShare: false,
      canDownload: false,
      canUpload: false,
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `folderId`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Hashed ID of the folder to be shared                                                                                   |
| `requestBody`                                                                                                          | [operations.PostFoldersFolderIdSharingsRequestBody](../../models/operations/postfoldersfolderidsharingsrequestbody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
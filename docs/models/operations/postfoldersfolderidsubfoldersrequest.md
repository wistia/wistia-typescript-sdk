# PostFoldersFolderIdSubfoldersRequest

## Example Usage

```typescript
import { PostFoldersFolderIdSubfoldersRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostFoldersFolderIdSubfoldersRequest = {
  folderId: "abc123def4",
  requestBody: {
    name: "Marketing Videos",
    description: "Collection of all marketing and promotional videos",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `folderId`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The hashed ID of the folder                                                                                                | abc123def4                                                                                                                 |
| `requestBody`                                                                                                              | [operations.PostFoldersFolderIdSubfoldersRequestBody](../../models/operations/postfoldersfolderidsubfoldersrequestbody.md) | :heavy_check_mark:                                                                                                         | Subfolder data                                                                                                             |                                                                                                                            |
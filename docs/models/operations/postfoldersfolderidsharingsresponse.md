# PostFoldersFolderIdSharingsResponse

## Example Usage

```typescript
import { PostFoldersFolderIdSharingsResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostFoldersFolderIdSharingsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    folder: "http://myaccount.wistia.com/folders/13",
    sharing: {
      id: 14,
      isAdmin: true,
      canShare: true,
      canDownload: true,
      canUpload: true,
      share: {
        id: 3,
        name: "Jim",
        type: "Contact",
        email: "jim@wistia.com",
      },
      folder: {
        id: 13,
        name: "My Folder",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                | Record<string, *string*[]>                                                                                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `result`                                                                                                                 | [operations.PostFoldersFolderIdSharingsResponseBody](../../models/operations/postfoldersfolderidsharingsresponsebody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
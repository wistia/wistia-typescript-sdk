# PostFoldersFolderIdSharingsRequestBody

## Example Usage

```typescript
import { PostFoldersFolderIdSharingsRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostFoldersFolderIdSharingsRequestBody = {
  sharing: {
    with: "Kelley.Toy94@gmail.com",
    requirePassword: false,
    canShare: false,
    canDownload: false,
    canUpload: false,
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `sharing`                                                                                                                    | [operations.PostFoldersFolderIdSharingsSharingRequest](../../models/operations/postfoldersfolderidsharingssharingrequest.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
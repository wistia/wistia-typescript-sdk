# PutFoldersIdRequestBody

## Example Usage

```typescript
import { PutFoldersIdRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PutFoldersIdRequestBody = {
  name: "My New Folder Name",
  description: "My New Folder Description",
  public: false,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `name`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The folder’s new name.                                      | My New Folder Name                                          |
| `description`                                               | *string*                                                    | :heavy_minus_sign:                                          | The folder’s new description.                               | My New Folder Description                                   |
| `anonymousCanUpload`                                        | *boolean*                                                   | :heavy_minus_sign:                                          | Whether anonymous users can upload media to the folder.     |                                                             |
| `anonymousCanDownload`                                      | *boolean*                                                   | :heavy_minus_sign:                                          | Whether anonymous users can download media from the folder. |                                                             |
| `public`                                                    | *operations.PutFoldersIdPublicUnion*                        | :heavy_minus_sign:                                          | N/A                                                         |                                                             |
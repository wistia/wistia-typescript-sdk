# GetFoldersFolderIdSubfoldersSubfolderIdRequest

## Example Usage

```typescript
import { GetFoldersFolderIdSubfoldersSubfolderIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetFoldersFolderIdSubfoldersSubfolderIdRequest = {
  folderId: "abc123def4",
  subfolderId: "xyz789ghi0",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `folderId`                     | *string*                       | :heavy_check_mark:             | The hashed ID of the folder    | abc123def4                     |
| `subfolderId`                  | *string*                       | :heavy_check_mark:             | The hashed ID of the subfolder | xyz789ghi0                     |
| `descriptionFormat`            | *"markdown"*                   | :heavy_minus_sign:             | Format for media descriptions  | markdown                       |
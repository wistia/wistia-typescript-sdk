# GetFoldersFolderIdSharingsSharingIdRequest

## Example Usage

```typescript
import { GetFoldersFolderIdSharingsSharingIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetFoldersFolderIdSharingsSharingIdRequest = {
  folderId: "<id>",
  sharingId: 307245,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `folderId`                                                     | *string*                                                       | :heavy_check_mark:                                             | Hashed ID for the folder for which you'd like to see sharings. |
| `sharingId`                                                    | *number*                                                       | :heavy_check_mark:                                             | The ID of the specific sharing object that you want to see.    |
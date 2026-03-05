# DeleteFoldersFolderIdSharingsSharingIdRequest

## Example Usage

```typescript
import { DeleteFoldersFolderIdSharingsSharingIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: DeleteFoldersFolderIdSharingsSharingIdRequest = {
  folderId: "<id>",
  sharingId: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `folderId`                      | *string*                        | :heavy_check_mark:              | Hashed ID of the folder         |
| `sharingId`                     | *string*                        | :heavy_check_mark:              | ID of the sharing to be deleted |
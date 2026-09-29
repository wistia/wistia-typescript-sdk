# PostFoldersFolderIdSharingsResponseBody

The response includes a link for the user to access the folder.

## Example Usage

```typescript
import { PostFoldersFolderIdSharingsResponseBody } from "@wistia/wistia-api-client/models/operations";

let value: PostFoldersFolderIdSharingsResponseBody = {
  project: "http://myaccount.wistia.com/folders/13",
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
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               | Example                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                                                 | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | The URL of the folder that was shared.                                                                                                                    | http://myaccount.wistia.com/folders/13                                                                                                                    |
| `sharing`                                                                                                                                                 | [operations.SharingResponse](../../models/operations/sharingresponse.md)                                                                                  | :heavy_minus_sign:                                                                                                                                        | A sharing is an object that links either a contact or a contact group to a folder, including information about the contacts' permissions to that folder.<br/> |                                                                                                                                                           |
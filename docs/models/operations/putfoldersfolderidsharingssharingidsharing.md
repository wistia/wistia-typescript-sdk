# PutFoldersFolderIdSharingsSharingIdSharing

## Example Usage

```typescript
import { PutFoldersFolderIdSharingsSharingIdSharing } from "@wistia/wistia-api-client/models/operations";

let value: PutFoldersFolderIdSharingsSharingIdSharing = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `canShare`                                                 | *boolean*                                                  | :heavy_minus_sign:                                         | Allow the user or group to share the folder with others.   |
| `canDownload`                                              | *boolean*                                                  | :heavy_minus_sign:                                         | Allow the user or group to download media from the folder. |
| `canUpload`                                                | *boolean*                                                  | :heavy_minus_sign:                                         | Allow the user or group to upload media to the folder.     |
| `isAdmin`                                                  | *boolean*                                                  | :heavy_minus_sign:                                         | Give this user admin rights to the folder.                 |
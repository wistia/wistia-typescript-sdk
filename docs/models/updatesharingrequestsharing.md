# UpdateSharingRequestSharing

## Example Usage

```typescript
import { UpdateSharingRequestSharing } from "wistia/models";

let value: UpdateSharingRequestSharing = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `canShare`                                                  | *boolean*                                                   | :heavy_minus_sign:                                          | Allow the user or group to share the project with others.   |
| `canDownload`                                               | *boolean*                                                   | :heavy_minus_sign:                                          | Allow the user or group to download media from the project. |
| `canUpload`                                                 | *boolean*                                                   | :heavy_minus_sign:                                          | Allow the user or group to upload media to the project.     |
| `isAdmin`                                                   | *boolean*                                                   | :heavy_minus_sign:                                          | Give this user admin rights to the project.                 |
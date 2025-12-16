# PutProjectsProjectIdSharingsSharingIdResponse

Sharing updated successfully

## Example Usage

```typescript
import { PutProjectsProjectIdSharingsSharingIdResponse } from "@wistia/wistia-api-client/models/operations";

let value: PutProjectsProjectIdSharingsSharingIdResponse = {
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
  project: {
    id: 13,
    name: "My Project",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | 14                                                                                                                                 |
| `isAdmin`                                                                                                                          | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | true                                                                                                                               |
| `canShare`                                                                                                                         | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | true                                                                                                                               |
| `canDownload`                                                                                                                      | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | true                                                                                                                               |
| `canUpload`                                                                                                                        | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | true                                                                                                                               |
| `share`                                                                                                                            | [operations.PutProjectsProjectIdSharingsSharingIdShare](../../models/operations/putprojectsprojectidsharingssharingidshare.md)     | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `project`                                                                                                                          | [operations.PutProjectsProjectIdSharingsSharingIdProject](../../models/operations/putprojectsprojectidsharingssharingidproject.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
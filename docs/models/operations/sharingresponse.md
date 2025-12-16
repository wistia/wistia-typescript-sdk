# SharingResponse

## Example Usage

```typescript
import { SharingResponse } from "@wistia/wistia-api-client/models/operations";

let value: SharingResponse = {
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | 14                                                                                                                 |
| `isAdmin`                                                                                                          | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | true                                                                                                               |
| `canShare`                                                                                                         | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | true                                                                                                               |
| `canDownload`                                                                                                      | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | true                                                                                                               |
| `canUpload`                                                                                                        | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | true                                                                                                               |
| `share`                                                                                                            | [operations.PostProjectsProjectIdSharingsShare](../../models/operations/postprojectsprojectidsharingsshare.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `project`                                                                                                          | [operations.PostProjectsProjectIdSharingsProject](../../models/operations/postprojectsprojectidsharingsproject.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
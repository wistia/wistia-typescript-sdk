# GetProjectsProjectIdSharingsResponse

## Example Usage

```typescript
import { GetProjectsProjectIdSharingsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetProjectsProjectIdSharingsResponse = {
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | 14                                                                                                               |
| `isAdmin`                                                                                                        | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              | true                                                                                                             |
| `canShare`                                                                                                       | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              | true                                                                                                             |
| `canDownload`                                                                                                    | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              | true                                                                                                             |
| `canUpload`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              | true                                                                                                             |
| `share`                                                                                                          | [operations.GetProjectsProjectIdSharingsShare](../../models/operations/getprojectsprojectidsharingsshare.md)     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `project`                                                                                                        | [operations.GetProjectsProjectIdSharingsProject](../../models/operations/getprojectsprojectidsharingsproject.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
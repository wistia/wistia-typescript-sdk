# ProjectSharingSchema

## Example Usage

```typescript
import { ProjectSharingSchema } from "@wistia/wistia-api-client/models";

let value: ProjectSharingSchema = {
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | 14                                                                             |
| `isAdmin`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            | true                                                                           |
| `canShare`                                                                     | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            | true                                                                           |
| `canDownload`                                                                  | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            | true                                                                           |
| `canUpload`                                                                    | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            | true                                                                           |
| `share`                                                                        | [models.Share](../models/share.md)                                             | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `project`                                                                      | [models.ProjectSharingSchemaProject](../models/projectsharingschemaproject.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
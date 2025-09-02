# ProjectSharingDetail

## Example Usage

```typescript
import { ProjectSharingDetail } from "@wistia/wistia-api-client/models";

let value: ProjectSharingDetail = {
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
| `id`                                                                           | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 14                                                                             |
| `isAdmin`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            | true                                                                           |
| `canShare`                                                                     | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            | true                                                                           |
| `canDownload`                                                                  | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            | true                                                                           |
| `canUpload`                                                                    | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            | true                                                                           |
| `share`                                                                        | [models.ProjectSharingDetailShare](../models/projectsharingdetailshare.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `project`                                                                      | [models.ProjectSharingDetailProject](../models/projectsharingdetailproject.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
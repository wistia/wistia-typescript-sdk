# CreateProjectSharingResponse

The response includes a link for the user to access the project.

## Example Usage

```typescript
import { CreateProjectSharingResponse } from "@wistia/wistia-api-client/models";

let value: CreateProjectSharingResponse = {
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
    project: {
      id: 13,
      name: "My Project",
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `project`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | http://myaccount.wistia.com/folders/13                           |
| `sharing`                                                        | [models.ProjectSharingSchema](../models/projectsharingschema.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
# PostProjectsProjectIdSharingsRequest

## Example Usage

```typescript
import { PostProjectsProjectIdSharingsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostProjectsProjectIdSharingsRequest = {
  projectId: "<id>",
  createProjectSharing: {
    sharing: {
      with: "Ada67@yahoo.com",
      requirePassword: false,
      canShare: false,
      canDownload: false,
      canUpload: false,
    },
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `projectId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Hashed ID of the project to be shared                               |
| `createProjectSharing`                                              | [models.CreateProjectSharing](../../models/createprojectsharing.md) | :heavy_check_mark:                                                  | N/A                                                                 |
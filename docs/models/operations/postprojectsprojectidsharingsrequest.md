# PostProjectsProjectIdSharingsRequest

## Example Usage

```typescript
import { PostProjectsProjectIdSharingsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostProjectsProjectIdSharingsRequest = {
  projectId: "<id>",
  requestBody: {
    sharing: {
      with: "Elizabeth.Langworth0@gmail.com",
      requirePassword: false,
      canShare: false,
      canDownload: false,
      canUpload: false,
    },
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Hashed ID of the project to be shared                                                                                      |
| `requestBody`                                                                                                              | [operations.PostProjectsProjectIdSharingsRequestBody](../../models/operations/postprojectsprojectidsharingsrequestbody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
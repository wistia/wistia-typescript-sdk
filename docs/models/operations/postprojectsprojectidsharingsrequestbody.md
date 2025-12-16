# PostProjectsProjectIdSharingsRequestBody

## Example Usage

```typescript
import { PostProjectsProjectIdSharingsRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostProjectsProjectIdSharingsRequestBody = {
  sharing: {
    with: "Elizabeth.Langworth0@gmail.com",
    requirePassword: false,
    canShare: false,
    canDownload: false,
    canUpload: false,
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `sharing`                                                                                                                        | [operations.PostProjectsProjectIdSharingsSharingRequest](../../models/operations/postprojectsprojectidsharingssharingrequest.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
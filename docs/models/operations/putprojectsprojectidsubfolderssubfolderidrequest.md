# PutProjectsProjectIdSubfoldersSubfolderIdRequest

## Example Usage

```typescript
import { PutProjectsProjectIdSubfoldersSubfolderIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutProjectsProjectIdSubfoldersSubfolderIdRequest = {
  projectId: "abc123def4",
  subfolderId: "xyz789ghi0",
  requestBody: {
    name: "Updated Marketing Videos",
    description: "Updated collection of marketing materials",
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The hashed ID of the project                                                                                                                       | abc123def4                                                                                                                                         |
| `subfolderId`                                                                                                                                      | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The hashed ID of the subfolder                                                                                                                     | xyz789ghi0                                                                                                                                         |
| `requestBody`                                                                                                                                      | [operations.PutProjectsProjectIdSubfoldersSubfolderIdRequestBody](../../models/operations/putprojectsprojectidsubfolderssubfolderidrequestbody.md) | :heavy_check_mark:                                                                                                                                 | Updated subfolder data                                                                                                                             |                                                                                                                                                    |
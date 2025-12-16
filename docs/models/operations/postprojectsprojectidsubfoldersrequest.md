# PostProjectsProjectIdSubfoldersRequest

## Example Usage

```typescript
import { PostProjectsProjectIdSubfoldersRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostProjectsProjectIdSubfoldersRequest = {
  projectId: "abc123def4",
  requestBody: {
    name: "Marketing Videos",
    description: "Collection of all marketing and promotional videos",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `projectId`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The hashed ID of the project                                                                                                   | abc123def4                                                                                                                     |
| `requestBody`                                                                                                                  | [operations.PostProjectsProjectIdSubfoldersRequestBody](../../models/operations/postprojectsprojectidsubfoldersrequestbody.md) | :heavy_check_mark:                                                                                                             | Subfolder data                                                                                                                 |                                                                                                                                |
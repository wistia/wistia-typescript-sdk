# GetProjectsProjectIdSubfoldersSubfolderIdRequest

## Example Usage

```typescript
import { GetProjectsProjectIdSubfoldersSubfolderIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetProjectsProjectIdSubfoldersSubfolderIdRequest = {
  projectId: "abc123def4",
  subfolderId: "xyz789ghi0",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `projectId`                    | *string*                       | :heavy_check_mark:             | The hashed ID of the project   | abc123def4                     |
| `subfolderId`                  | *string*                       | :heavy_check_mark:             | The hashed ID of the subfolder | xyz789ghi0                     |
| `descriptionFormat`            | *string*                       | :heavy_minus_sign:             | Format for media descriptions  | markdown                       |
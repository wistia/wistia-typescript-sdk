# DeleteProjectsProjectIdSubfoldersSubfolderIdRequest

## Example Usage

```typescript
import { DeleteProjectsProjectIdSubfoldersSubfolderIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: DeleteProjectsProjectIdSubfoldersSubfolderIdRequest = {
  projectId: "abc123def4",
  subfolderId: "xyz789ghi0",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `projectId`                    | *string*                       | :heavy_check_mark:             | The hashed ID of the project   | abc123def4                     |
| `subfolderId`                  | *string*                       | :heavy_check_mark:             | The hashed ID of the subfolder | xyz789ghi0                     |
| `xWistiaAPIVersion`            | *string*                       | :heavy_minus_sign:             | The API version                | 2025-11                        |
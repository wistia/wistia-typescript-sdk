# DeleteProjectsProjectIdSharingsSharingIdRequest

## Example Usage

```typescript
import { DeleteProjectsProjectIdSharingsSharingIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: DeleteProjectsProjectIdSharingsSharingIdRequest = {
  projectId: "<id>",
  sharingId: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `projectId`                     | *string*                        | :heavy_check_mark:              | Hashed ID of the project        |                                 |
| `sharingId`                     | *string*                        | :heavy_check_mark:              | ID of the sharing to be deleted |                                 |
| `xWistiaAPIVersion`             | *string*                        | :heavy_minus_sign:              | The API version                 | 2025-11                         |
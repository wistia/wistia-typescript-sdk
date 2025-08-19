# DeleteProjectsProjectIdSharingsSharingIdRequest

## Example Usage

```typescript
import { DeleteProjectsProjectIdSharingsSharingIdRequest } from "wistia/models/operations";

let value: DeleteProjectsProjectIdSharingsSharingIdRequest = {
  projectId: "<id>",
  sharingId: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `projectId`                     | *string*                        | :heavy_check_mark:              | Hashed ID of the project        |
| `sharingId`                     | *string*                        | :heavy_check_mark:              | ID of the sharing to be deleted |
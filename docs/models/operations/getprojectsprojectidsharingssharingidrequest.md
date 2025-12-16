# GetProjectsProjectIdSharingsSharingIdRequest

## Example Usage

```typescript
import { GetProjectsProjectIdSharingsSharingIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetProjectsProjectIdSharingsSharingIdRequest = {
  projectId: "<id>",
  sharingId: 197808,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `projectId`                                                     | *string*                                                        | :heavy_check_mark:                                              | Hashed ID for the project for which you'd like to see sharings. |                                                                 |
| `sharingId`                                                     | *number*                                                        | :heavy_check_mark:                                              | The ID of the specific sharing object that you want to see.     |                                                                 |
| `xWistiaAPIVersion`                                             | *string*                                                        | :heavy_minus_sign:                                              | The API version                                                 | 2025-11                                                         |
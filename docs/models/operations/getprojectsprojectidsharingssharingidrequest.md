# GetProjectsProjectIdSharingsSharingIdRequest

## Example Usage

```typescript
import { GetProjectsProjectIdSharingsSharingIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetProjectsProjectIdSharingsSharingIdRequest = {
  projectId: "<id>",
  sharingId: 197808,
  xWistiaAPIVersion: "2025-11",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `projectId`                                                     | *string*                                                        | :heavy_check_mark:                                              | Hashed ID for the project for which you'd like to see sharings. |                                                                 |
| `sharingId`                                                     | *number*                                                        | :heavy_check_mark:                                              | The ID of the specific sharing object that you want to see.     |                                                                 |
| `xWistiaAPIVersion`                                             | *string*                                                        | :heavy_check_mark:                                              | The API version                                                 | 2025-11                                                         |
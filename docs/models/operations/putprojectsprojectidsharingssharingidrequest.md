# PutProjectsProjectIdSharingsSharingIdRequest

## Example Usage

```typescript
import { PutProjectsProjectIdSharingsSharingIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutProjectsProjectIdSharingsSharingIdRequest = {
  projectId: "<id>",
  sharingId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectId`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | ID of the project                                                                                                                          |
| `sharingId`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | ID of the sharing to be updated                                                                                                            |
| `requestBody`                                                                                                                              | [operations.PutProjectsProjectIdSharingsSharingIdRequestBody](../../models/operations/putprojectsprojectidsharingssharingidrequestbody.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
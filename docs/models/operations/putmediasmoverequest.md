# PutMediasMoveRequest

## Example Usage

```typescript
import { PutMediasMoveRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMoveRequest = {
  hashedIds: [
    "<value 1>",
    "<value 2>",
  ],
  projectId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                                 | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hashedIds`                                                                                                                                                                                           | *string*[]                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                    | An array of the media hashed IDs to be moved.                                                                                                                                                         |
| `projectId`                                                                                                                                                                                           | *string*                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                    | The hashed ID of the project where you want the media moved.                                                                                                                                          |
| `subfolderId`                                                                                                                                                                                         | *string*                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                    | Optional. The hashed ID of the subfolder where you want the media moved. If not provided, media will be moved to the project's default subfolder. The subfolder must belong to the specified project. |
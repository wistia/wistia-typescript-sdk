# PutMediasRestoreRequest

## Example Usage

```typescript
import { PutMediasRestoreRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasRestoreRequest = {
  hashedIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  projectId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `hashedIds`                                            | *string*[]                                             | :heavy_check_mark:                                     | An array of the media hashed IDs to be restored.       |
| `projectId`                                            | *string*                                               | :heavy_check_mark:                                     | The hashed ID of the project to restore the medias to. |
# PutMediasCopyRequest

## Example Usage

```typescript
import { PutMediasCopyRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasCopyRequest = {
  hashedIds: [
    "<value 1>",
  ],
  folderId: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `hashedIds`                                                              | *string*[]                                                               | :heavy_check_mark:                                                       | An array of the media hashed IDs to be copied.                           |
| `folderId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | The hashed ID of the destination folder where the copies will be placed. |
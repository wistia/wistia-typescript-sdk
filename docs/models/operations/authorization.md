# Authorization

## Example Usage

```typescript
import { Authorization } from "@wistia/wistia-api-client/models/operations";

let value: Authorization = {
  type: "<value>",
  id: "<id>",
  permissions: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | The type of object the permission is being performed on, only media is currently supported |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The hashed if of the object the permissions are being performed on.                        |
| `permissions`                                                                              | *string*[]                                                                                 | :heavy_check_mark:                                                                         | The types of permissions, currently only supports edit-transcripts                         |
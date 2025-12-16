# PutMediasArchiveRequestBody

## Example Usage

```typescript
import { PutMediasArchiveRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasArchiveRequestBody = {
  hashedIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `hashedIds`                                      | *string*[]                                       | :heavy_check_mark:                               | An array of the media hashed IDs to be archived. |
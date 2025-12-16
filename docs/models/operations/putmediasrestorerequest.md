# PutMediasRestoreRequest

## Example Usage

```typescript
import { PutMediasRestoreRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasRestoreRequest = {
  requestBody: {
    hashedIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `xWistiaAPIVersion`                                                                              | *string*                                                                                         | :heavy_minus_sign:                                                                               | The API version                                                                                  | 2025-11                                                                                          |
| `requestBody`                                                                                    | [operations.PutMediasRestoreRequestBody](../../models/operations/putmediasrestorerequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
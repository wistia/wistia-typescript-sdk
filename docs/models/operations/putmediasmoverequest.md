# PutMediasMoveRequest

## Example Usage

```typescript
import { PutMediasMoveRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMoveRequest = {
  requestBody: {
    hashedIds: [
      "<value 1>",
      "<value 2>",
    ],
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `xWistiaAPIVersion`                                                                        | *string*                                                                                   | :heavy_minus_sign:                                                                         | The API version                                                                            | 2025-11                                                                                    |
| `requestBody`                                                                              | [operations.PutMediasMoveRequestBody](../../models/operations/putmediasmoverequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
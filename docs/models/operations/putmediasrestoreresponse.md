# PutMediasRestoreResponse

Successful restoration of media.

## Example Usage

```typescript
import { PutMediasRestoreResponse } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasRestoreResponse = {
  message: "<value>",
  backgroundJobStatus: {
    id: 559558,
    hashedId: "<id>",
    status: "finished",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | A confirmation message that the background job has been queued.                                                  |
| `backgroundJobStatus`                                                                                            | [operations.PutMediasRestoreBackgroundJobStatus](../../models/operations/putmediasrestorebackgroundjobstatus.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `container`                                                                                                      | [operations.Container](../../models/operations/container.md)                                                     | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
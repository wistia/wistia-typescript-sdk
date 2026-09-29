# PutMediasCopyResponse

Successful copy request of media.

## Example Usage

```typescript
import { PutMediasCopyResponse } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasCopyResponse = {
  message: "<value>",
  backgroundJobStatus: {
    id: 920173,
    hashedId: "<id>",
    status: "started",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | A confirmation message that the background job has been queued.                                            |
| `backgroundJobStatus`                                                                                      | [operations.PutMediasCopyBackgroundJobStatus](../../models/operations/putmediascopybackgroundjobstatus.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `destination`                                                                                              | [operations.Destination](../../models/operations/destination.md)                                           | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
# PutMediasArchiveResponse

Successful archival of media.

## Example Usage

```typescript
import { PutMediasArchiveResponse } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasArchiveResponse = {
  message: "<value>",
  backgroundJobStatus: {
    id: 923963,
    hashedId: "<id>",
    status: "failed",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | A confirmation message that the background job has been queued.                                                  |
| `backgroundJobStatus`                                                                                            | [operations.PutMediasArchiveBackgroundJobStatus](../../models/operations/putmediasarchivebackgroundjobstatus.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
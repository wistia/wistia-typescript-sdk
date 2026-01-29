# PutMediasRestoreBackgroundJobStatus

A background job keeps track of the progress of an asynchronous task, e.g
bulk archiving media, translating media, etc.


## Example Usage

```typescript
import { PutMediasRestoreBackgroundJobStatus } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasRestoreBackgroundJobStatus = {
  id: 511876,
  status: "finished",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *number*                                                                               | :heavy_check_mark:                                                                     | The ID of the background job that's been queued for the request.                       |
| `status`                                                                               | [operations.PutMediasRestoreStatus](../../models/operations/putmediasrestorestatus.md) | :heavy_check_mark:                                                                     | The status of the background job that's been queued for the request.                   |
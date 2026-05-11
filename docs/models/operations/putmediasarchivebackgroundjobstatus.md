# PutMediasArchiveBackgroundJobStatus

A background job keeps track of the progress of an asynchronous task, e.g
bulk archiving media, translating media, etc.


## Example Usage

```typescript
import { PutMediasArchiveBackgroundJobStatus } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasArchiveBackgroundJobStatus = {
  id: 531802,
  status: "finished",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *number*                                                                               | :heavy_check_mark:                                                                     | The ID of the background job that's been queued for the request.                       |
| `status`                                                                               | [operations.PutMediasArchiveStatus](../../models/operations/putmediasarchivestatus.md) | :heavy_check_mark:                                                                     | The status of the background job that's been queued for the request.                   |
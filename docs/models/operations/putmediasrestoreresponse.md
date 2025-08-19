# PutMediasRestoreResponse

Successful restoration of media.

## Example Usage

```typescript
import { PutMediasRestoreResponse } from "wistia/models/operations";

let value: PutMediasRestoreResponse = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `message`                                                         | *string*                                                          | :heavy_minus_sign:                                                | A confirmation message that the background job has been queued.   |
| `container`                                                       | [operations.Container](../../models/operations/container.md)      | :heavy_minus_sign:                                                | N/A                                                               |
| `backgroundJobStatus`                                             | [models.BackgroundJobStatus](../../models/backgroundjobstatus.md) | :heavy_minus_sign:                                                | Status of the background job.                                     |
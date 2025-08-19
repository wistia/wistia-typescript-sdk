# PutMediasArchiveResponse

Successful archival of media.

## Example Usage

```typescript
import { PutMediasArchiveResponse } from "wistia/models/operations";

let value: PutMediasArchiveResponse = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `message`                                                         | *string*                                                          | :heavy_minus_sign:                                                | A confirmation message that the background job has been queued.   |
| `backgroundJobStatus`                                             | [models.BackgroundJobStatus](../../models/backgroundjobstatus.md) | :heavy_minus_sign:                                                | Status of the background job.                                     |
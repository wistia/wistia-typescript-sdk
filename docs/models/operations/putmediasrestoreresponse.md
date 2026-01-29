# PutMediasRestoreResponse

Successful restoration of media.

## Example Usage

```typescript
import { PutMediasRestoreResponse } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasRestoreResponse = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | A confirmation message that the background job has been queued.                                                          |
| `container`                                                                                                              | [operations.Container](../../models/operations/container.md)                                                             | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `backgroundJobStatus`                                                                                                    | [operations.PutMediasRestoreBackgroundJobStatus](../../models/operations/putmediasrestorebackgroundjobstatus.md)         | :heavy_minus_sign:                                                                                                       | A background job keeps track of the progress of an asynchronous task, e.g<br/>bulk archiving media, translating media, etc.<br/> |
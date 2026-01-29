# PutMediasCopyResponse

Successful copy request of media.

## Example Usage

```typescript
import { PutMediasCopyResponse } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasCopyResponse = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | A confirmation message that the background job has been queued.                                                          |
| `destination`                                                                                                            | [operations.Destination](../../models/operations/destination.md)                                                         | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `backgroundJobStatus`                                                                                                    | [operations.PutMediasCopyBackgroundJobStatus](../../models/operations/putmediascopybackgroundjobstatus.md)               | :heavy_minus_sign:                                                                                                       | A background job keeps track of the progress of an asynchronous task, e.g<br/>bulk archiving media, translating media, etc.<br/> |
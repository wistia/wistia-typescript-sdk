# PutMediasMoveResponseBody2

Successfully queued move of at least one media. Other provided hashed_ids failed.

## Example Usage

```typescript
import { PutMediasMoveResponseBody2 } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMoveResponseBody2 = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `backgroundJobStatus`                                                                                                    | [operations.PutMediasMoveBackgroundJobStatus2](../../models/operations/putmediasmovebackgroundjobstatus2.md)             | :heavy_minus_sign:                                                                                                       | A background job keeps track of the progress of an asynchronous task, e.g<br/>bulk archiving media, translating media, etc.<br/> |
| `partialErrors`                                                                                                          | [operations.PartialError](../../models/operations/partialerror.md)[]                                                     | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
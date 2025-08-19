# PutMediasMoveResponseBody2

Successfully queued move of at least one media. Other provided hashed_ids failed.

## Example Usage

```typescript
import { PutMediasMoveResponseBody2 } from "wistia/models/operations";

let value: PutMediasMoveResponseBody2 = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `message`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `backgroundJobStatus`                                                | [models.BackgroundJobStatus](../../models/backgroundjobstatus.md)    | :heavy_minus_sign:                                                   | Status of the background job.                                        |
| `partialErrors`                                                      | [operations.PartialError](../../models/operations/partialerror.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |
# PutMediasMoveResponseBody2

Successfully queued move of at least one media. Other provided hashed_ids failed.

## Example Usage

```typescript
import { PutMediasMoveResponseBody2 } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMoveResponseBody2 = {
  message: "<value>",
  backgroundJobStatus: {
    id: 747060,
    hashedId: "<id>",
    status: "finished",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | A confirmation message that the background job has been queued.                                              |
| `backgroundJobStatus`                                                                                        | [operations.PutMediasMoveBackgroundJobStatus2](../../models/operations/putmediasmovebackgroundjobstatus2.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `partialErrors`                                                                                              | [operations.PartialError](../../models/operations/partialerror.md)[]                                         | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
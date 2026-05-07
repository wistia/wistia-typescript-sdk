# PutMediasMoveBackgroundJobStatus1

A background job keeps track of the progress of an asynchronous task, e.g
bulk archiving media, translating media, etc.


## Example Usage

```typescript
import { PutMediasMoveBackgroundJobStatus1 } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMoveBackgroundJobStatus1 = {
  id: 240021,
  status: "failed",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | The ID of the background job that's been queued for the request.                   |
| `status`                                                                           | [operations.PutMediasMoveStatus1](../../models/operations/putmediasmovestatus1.md) | :heavy_check_mark:                                                                 | The status of the background job that's been queued for the request.               |
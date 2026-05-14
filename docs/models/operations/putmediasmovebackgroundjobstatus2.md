# PutMediasMoveBackgroundJobStatus2

A background job keeps track of the progress of an asynchronous task, e.g
bulk archiving media, translating media, etc.


## Example Usage

```typescript
import { PutMediasMoveBackgroundJobStatus2 } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMoveBackgroundJobStatus2 = {
  id: 882100,
  status: "queued",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | The ID of the background job that's been queued for the request.                   |
| `status`                                                                           | [operations.PutMediasMoveStatus2](../../models/operations/putmediasmovestatus2.md) | :heavy_check_mark:                                                                 | The status of the background job that's been queued for the request.               |
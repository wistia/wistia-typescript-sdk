# PutMediasMoveResponseBody1

Successfully queued move of all the media.

## Example Usage

```typescript
import { PutMediasMoveResponseBody1 } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMoveResponseBody1 = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `backgroundJobStatus`                                                                                                    | [operations.PutMediasMoveBackgroundJobStatus1](../../models/operations/putmediasmovebackgroundjobstatus1.md)             | :heavy_minus_sign:                                                                                                       | A background job keeps track of the progress of an asynchronous task, e.g<br/>bulk archiving media, translating media, etc.<br/> |
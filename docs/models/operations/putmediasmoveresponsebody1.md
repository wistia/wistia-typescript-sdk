# PutMediasMoveResponseBody1

Successfully queued move of all the media.

## Example Usage

```typescript
import { PutMediasMoveResponseBody1 } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMoveResponseBody1 = {
  message: "<value>",
  backgroundJobStatus: {
    id: 430950,
    hashedId: "<id>",
    status: "queued",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | A confirmation message that the background job has been queued.                                              |
| `backgroundJobStatus`                                                                                        | [operations.PutMediasMoveBackgroundJobStatus1](../../models/operations/putmediasmovebackgroundjobstatus1.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
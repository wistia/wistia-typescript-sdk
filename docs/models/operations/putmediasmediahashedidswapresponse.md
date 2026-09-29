# PutMediasMediaHashedIdSwapResponse

Successfully queued background job for media swap.

## Example Usage

```typescript
import { PutMediasMediaHashedIdSwapResponse } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaHashedIdSwapResponse = {
  message: "<value>",
  backgroundJobStatus: {
    id: 597974,
    hashedId: "<id>",
    status: "started",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | A confirmation message that the background job has been queued.                                                                      |
| `backgroundJobStatus`                                                                                                                | [operations.PutMediasMediaHashedIdSwapBackgroundJobStatus](../../models/operations/putmediasmediahashedidswapbackgroundjobstatus.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `media`                                                                                                                              | [operations.PutMediasMediaHashedIdSwapMedia](../../models/operations/putmediasmediahashedidswapmedia.md)                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
# PutMediasMediaHashedIdSwapResponse

Successfully queued background job for media swap.

## Example Usage

```typescript
import { PutMediasMediaHashedIdSwapResponse } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaHashedIdSwapResponse = {
  message: "Media swap has been queued for processing.",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                                            | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  | Media swap has been queued for processing.                                                                                           |
| `media`                                                                                                                              | [operations.PutMediasMediaHashedIdSwapMedia](../../models/operations/putmediasmediahashedidswapmedia.md)                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |                                                                                                                                      |
| `backgroundJobStatus`                                                                                                                | [operations.PutMediasMediaHashedIdSwapBackgroundJobStatus](../../models/operations/putmediasmediahashedidswapbackgroundjobstatus.md) | :heavy_minus_sign:                                                                                                                   | Status of the background job.                                                                                                        |                                                                                                                                      |
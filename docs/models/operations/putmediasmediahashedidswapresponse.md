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

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `message`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | Media swap has been queued for processing.                        |
| `media`                                                           | [models.MediaProperties](../../models/mediaproperties.md)         | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `backgroundJobStatus`                                             | [models.BackgroundJobStatus](../../models/backgroundjobstatus.md) | :heavy_minus_sign:                                                | Status of the background job.                                     |                                                                   |
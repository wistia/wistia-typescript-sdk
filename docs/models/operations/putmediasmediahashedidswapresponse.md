# PutMediasMediaHashedIdSwapResponse

Successfully queued background job for media swap.

## Example Usage

```typescript
import { PutMediasMediaHashedIdSwapResponse } from "wistia/models/operations";

let value: PutMediasMediaHashedIdSwapResponse = {
  message: "Media swap has been queued for processing.",
  media: {
    project: {
      id: 22570,
      name: "My Project Title",
      hashedId: "4d23503f70",
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `message`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | Media swap has been queued for processing.                        |
| `media`                                                           | [models.Media](../../models/media.md)                             | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `backgroundJobStatus`                                             | [models.BackgroundJobStatus](../../models/backgroundjobstatus.md) | :heavy_minus_sign:                                                | Status of the background job.                                     |                                                                   |
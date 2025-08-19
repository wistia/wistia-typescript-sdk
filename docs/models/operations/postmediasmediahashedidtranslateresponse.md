# PostMediasMediaHashedIdTranslateResponse

Successfully queued background job for translation of the transcript.

## Example Usage

```typescript
import { PostMediasMediaHashedIdTranslateResponse } from "wistia/models/operations";

let value: PostMediasMediaHashedIdTranslateResponse = {
  message: "Translation request has been successfully queued for processing.",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `message`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | Translation request has been successfully queued for processing.  |
| `backgroundJobStatus`                                             | [models.BackgroundJobStatus](../../models/backgroundjobstatus.md) | :heavy_minus_sign:                                                | Status of the background job.                                     |                                                                   |
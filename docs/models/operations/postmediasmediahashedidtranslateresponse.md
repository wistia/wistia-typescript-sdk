# PostMediasMediaHashedIdTranslateResponse

Successfully queued background job for translation of the transcript.

## Example Usage

```typescript
import { PostMediasMediaHashedIdTranslateResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdTranslateResponse = {
  message: "Translation request has been successfully queued for processing.",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                                                        | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              | Translation request has been successfully queued for processing.                                                                                 |
| `backgroundJobStatus`                                                                                                                            | [operations.PostMediasMediaHashedIdTranslateBackgroundJobStatus](../../models/operations/postmediasmediahashedidtranslatebackgroundjobstatus.md) | :heavy_minus_sign:                                                                                                                               | A background job keeps track of the progress of an asynchronous task, e.g<br/>bulk archiving media, translating media, etc.<br/>                 |                                                                                                                                                  |
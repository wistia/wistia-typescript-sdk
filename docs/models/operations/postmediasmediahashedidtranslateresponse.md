# PostMediasMediaHashedIdTranslateResponse

Successfully queued background job for translation of the transcript.

## Example Usage

```typescript
import { PostMediasMediaHashedIdTranslateResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdTranslateResponse = {
  message: "<value>",
  backgroundJobStatus: {
    id: 973637,
    hashedId: "<id>",
    status: "queued",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                                                        | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | A confirmation message that the background job has been queued.                                                                                  |
| `backgroundJobStatus`                                                                                                                            | [operations.PostMediasMediaHashedIdTranslateBackgroundJobStatus](../../models/operations/postmediasmediahashedidtranslatebackgroundjobstatus.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
# PostMediasImportUrlResponse

Successfully queued background job for URL import.

## Example Usage

```typescript
import { PostMediasImportUrlResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasImportUrlResponse = {
  message: "URL import has been successfully queued for processing.",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | URL import has been successfully queued for processing.                                                                  |
| `backgroundJobStatus`                                                                                                    | [operations.PostMediasImportUrlBackgroundJobStatus](../../models/operations/postmediasimporturlbackgroundjobstatus.md)   | :heavy_minus_sign:                                                                                                       | A background job keeps track of the progress of an asynchronous task, e.g<br/>bulk archiving media, translating media, etc.<br/> |                                                                                                                          |
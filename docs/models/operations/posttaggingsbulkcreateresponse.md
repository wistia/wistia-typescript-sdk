# PostTaggingsBulkCreateResponse

Successful tagging of media.

## Example Usage

```typescript
import { PostTaggingsBulkCreateResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostTaggingsBulkCreateResponse = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                                    | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | A confirmation message that the background job has been queued.                                                              |
| `backgroundJobStatus`                                                                                                        | [operations.PostTaggingsBulkCreateBackgroundJobStatus](../../models/operations/posttaggingsbulkcreatebackgroundjobstatus.md) | :heavy_minus_sign:                                                                                                           | A background job keeps track of the progress of an asynchronous task, e.g<br/>bulk archiving media, translating media, etc.<br/> |
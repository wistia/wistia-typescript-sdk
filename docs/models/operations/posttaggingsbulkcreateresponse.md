# PostTaggingsBulkCreateResponse

Successful tagging of media.

## Example Usage

```typescript
import { PostTaggingsBulkCreateResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostTaggingsBulkCreateResponse = {
  message: "<value>",
  backgroundJobStatus: {
    id: 115215,
    hashedId: "<id>",
    status: "started",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | A confirmation message that the background job has been queued.                                                              |
| `backgroundJobStatus`                                                                                                        | [operations.PostTaggingsBulkCreateBackgroundJobStatus](../../models/operations/posttaggingsbulkcreatebackgroundjobstatus.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
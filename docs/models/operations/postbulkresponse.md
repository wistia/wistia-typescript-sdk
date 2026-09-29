# PostBulkResponse

Bulk request accepted and queued for processing

## Example Usage

```typescript
import { PostBulkResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostBulkResponse = {
  message: "<value>",
  backgroundJobStatus: {
    id: 202823,
    hashedId: "<id>",
    status: "finished",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `message`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | A confirmation message that the background job has been queued.                                  |
| `backgroundJobStatus`                                                                            | [operations.PostBulkBackgroundJobStatus](../../models/operations/postbulkbackgroundjobstatus.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
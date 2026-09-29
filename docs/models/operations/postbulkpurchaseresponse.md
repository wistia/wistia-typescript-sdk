# PostBulkPurchaseResponse

Bulk purchase accepted and queued for processing

## Example Usage

```typescript
import { PostBulkPurchaseResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostBulkPurchaseResponse = {
  message: "<value>",
  backgroundJobStatus: {
    id: 410641,
    hashedId: "<id>",
    status: "finished",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | A confirmation message that the background job has been queued.                                                  |
| `backgroundJobStatus`                                                                                            | [operations.PostBulkPurchaseBackgroundJobStatus](../../models/operations/postbulkpurchasebackgroundjobstatus.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
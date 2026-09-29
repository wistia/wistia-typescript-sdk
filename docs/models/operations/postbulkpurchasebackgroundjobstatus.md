# PostBulkPurchaseBackgroundJobStatus

A background job keeps track of the progress of an asynchronous task, e.g
bulk archiving media, translating media, etc.


## Example Usage

```typescript
import { PostBulkPurchaseBackgroundJobStatus } from "@wistia/wistia-api-client/models/operations";

let value: PostBulkPurchaseBackgroundJobStatus = {
  id: 32873,
  hashedId: "<id>",
  status: "started",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *number*                                                                                                  | :heavy_check_mark:                                                                                        | The ID of the background job that's been queued for the request.                                          |
| `hashedId`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The unguessable hashed ID of the background job. Prefer this over the numeric ID when polling for status. |
| `status`                                                                                                  | [operations.PostBulkPurchaseStatus](../../models/operations/postbulkpurchasestatus.md)                    | :heavy_check_mark:                                                                                        | The status of the background job that's been queued for the request.                                      |
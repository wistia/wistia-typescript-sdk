# DeleteFoldersFolderIdSubfoldersBulkDeleteResponse

Successful queuing of subfolder deletion.

## Example Usage

```typescript
import { DeleteFoldersFolderIdSubfoldersBulkDeleteResponse } from "@wistia/wistia-api-client/models/operations";

let value: DeleteFoldersFolderIdSubfoldersBulkDeleteResponse = {};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                                                                          | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | A confirmation message that the background job has been queued.                                                                                                    |
| `backgroundJobStatus`                                                                                                                                              | [operations.DeleteFoldersFolderIdSubfoldersBulkDeleteBackgroundJobStatus](../../models/operations/deletefoldersfolderidsubfoldersbulkdeletebackgroundjobstatus.md) | :heavy_minus_sign:                                                                                                                                                 | A background job keeps track of the progress of an asynchronous task, e.g<br/>bulk archiving media, translating media, etc.<br/>                                   |
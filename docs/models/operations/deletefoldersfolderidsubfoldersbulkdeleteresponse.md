# DeleteFoldersFolderIdSubfoldersBulkDeleteResponse

Successful queuing of subfolder deletion.

## Example Usage

```typescript
import { DeleteFoldersFolderIdSubfoldersBulkDeleteResponse } from "@wistia/wistia-api-client/models/operations";

let value: DeleteFoldersFolderIdSubfoldersBulkDeleteResponse = {
  message: "<value>",
  backgroundJobStatus: {
    id: 548565,
    hashedId: "<id>",
    status: "started",
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                                                                          | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | A confirmation message that the background job has been queued.                                                                                                    |
| `backgroundJobStatus`                                                                                                                                              | [operations.DeleteFoldersFolderIdSubfoldersBulkDeleteBackgroundJobStatus](../../models/operations/deletefoldersfolderidsubfoldersbulkdeletebackgroundjobstatus.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
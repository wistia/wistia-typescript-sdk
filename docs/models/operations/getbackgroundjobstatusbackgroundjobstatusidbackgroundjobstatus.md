# GetBackgroundJobStatusBackgroundJobStatusIdBackgroundJobStatus

Status of the background job.

## Example Usage

```typescript
import { GetBackgroundJobStatusBackgroundJobStatusIdBackgroundJobStatus } from "@wistia/wistia-api-client/models/operations";

let value: GetBackgroundJobStatusBackgroundJobStatusIdBackgroundJobStatus = {
  id: 155376,
  status: "finished",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The ID of the background job that's been queued for the request.                                                                             |
| `status`                                                                                                                                     | [operations.GetBackgroundJobStatusBackgroundJobStatusIdStatus](../../models/operations/getbackgroundjobstatusbackgroundjobstatusidstatus.md) | :heavy_check_mark:                                                                                                                           | The status of the background job that's been queued for the request.                                                                         |
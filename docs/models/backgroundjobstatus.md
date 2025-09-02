# BackgroundJobStatus

Status of the background job.

## Example Usage

```typescript
import { BackgroundJobStatus } from "@wistia/wistia-api-client/models";

let value: BackgroundJobStatus = {
  id: 287035,
  status: "started",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *number*                                                                   | :heavy_check_mark:                                                         | The ID of the background job that's been queued for the request.           |
| `status`                                                                   | [models.BackgroundJobStatusStatus](../models/backgroundjobstatusstatus.md) | :heavy_check_mark:                                                         | The status of the background job that's been queued for the request.       |
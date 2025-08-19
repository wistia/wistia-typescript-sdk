# GetBackgroundJobStatusBackgroundJobStatusIdResponse

OK

## Example Usage

```typescript
import { GetBackgroundJobStatusBackgroundJobStatusIdResponse } from "wistia/models/operations";

let value: GetBackgroundJobStatusBackgroundJobStatusIdResponse = {
  backgroundJobStatus: {
    id: 197424,
    status: "started",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `backgroundJobStatus`                                             | [models.BackgroundJobStatus](../../models/backgroundjobstatus.md) | :heavy_check_mark:                                                | Status of the background job.                                     |
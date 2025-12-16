# GetBackgroundJobStatusBackgroundJobStatusIdResponse

OK

## Example Usage

```typescript
import { GetBackgroundJobStatusBackgroundJobStatusIdResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetBackgroundJobStatusBackgroundJobStatusIdResponse = {
  backgroundJobStatus: {
    id: 197424,
    status: "started",
  },
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `backgroundJobStatus`                                                                                                                                                  | [operations.GetBackgroundJobStatusBackgroundJobStatusIdBackgroundJobStatus](../../models/operations/getbackgroundjobstatusbackgroundjobstatusidbackgroundjobstatus.md) | :heavy_check_mark:                                                                                                                                                     | Status of the background job.                                                                                                                                          |
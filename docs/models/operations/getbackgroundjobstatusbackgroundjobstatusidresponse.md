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
| `backgroundJobStatus`                                                                                                                                                  | [operations.GetBackgroundJobStatusBackgroundJobStatusIdBackgroundJobStatus](../../models/operations/getbackgroundjobstatusbackgroundjobstatusidbackgroundjobstatus.md) | :heavy_check_mark:                                                                                                                                                     | A background job keeps track of the progress of an asynchronous task, e.g<br/>bulk archiving media, translating media, etc.<br/>                                       |
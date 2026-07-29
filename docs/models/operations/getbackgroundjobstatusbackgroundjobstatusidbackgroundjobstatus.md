# GetBackgroundJobStatusBackgroundJobStatusIdBackgroundJobStatus

A background job keeps track of the progress of an asynchronous task, e.g
bulk archiving media, translating media, etc.


## Example Usage

```typescript
import { GetBackgroundJobStatusBackgroundJobStatusIdBackgroundJobStatus } from "@wistia/wistia-api-client/models/operations";

let value: GetBackgroundJobStatusBackgroundJobStatusIdBackgroundJobStatus = {
  id: 155376,
  hashedId: "<id>",
  status: "finished",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The ID of the background job that's been queued for the request.                                                                             |
| `hashedId`                                                                                                                                   | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The unguessable hashed ID of the background job. Prefer this over the numeric ID when polling for status.                                    |
| `status`                                                                                                                                     | [operations.GetBackgroundJobStatusBackgroundJobStatusIdStatus](../../models/operations/getbackgroundjobstatusbackgroundjobstatusidstatus.md) | :heavy_check_mark:                                                                                                                           | The status of the background job that's been queued for the request.                                                                         |
| `object`                                                                                                                                     | *operations.ObjectT*                                                                                                                         | :heavy_minus_sign:                                                                                                                           | The wrapped resource, present only when the job type carries typed<br/>poll content. Use `type` to discriminate which shape this is.<br/>    |
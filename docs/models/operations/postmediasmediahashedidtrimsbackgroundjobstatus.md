# PostMediasMediaHashedIdTrimsBackgroundJobStatus

Status of the background job.

## Example Usage

```typescript
import { PostMediasMediaHashedIdTrimsBackgroundJobStatus } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdTrimsBackgroundJobStatus = {
  id: 980845,
  status: "failed",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the background job that's been queued for the request.                                               |
| `status`                                                                                                       | [operations.PostMediasMediaHashedIdTrimsStatus](../../models/operations/postmediasmediahashedidtrimsstatus.md) | :heavy_check_mark:                                                                                             | The status of the background job that's been queued for the request.                                           |
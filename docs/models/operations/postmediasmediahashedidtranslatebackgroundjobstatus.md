# PostMediasMediaHashedIdTranslateBackgroundJobStatus

A background job keeps track of the progress of an asynchronous task, e.g
bulk archiving media, translating media, etc.


## Example Usage

```typescript
import { PostMediasMediaHashedIdTranslateBackgroundJobStatus } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdTranslateBackgroundJobStatus = {
  id: 875882,
  hashedId: "<id>",
  status: "queued",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the background job that's been queued for the request.                                                       |
| `hashedId`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The unguessable hashed ID of the background job. Prefer this over the numeric ID when polling for status.              |
| `status`                                                                                                               | [operations.PostMediasMediaHashedIdTranslateStatus](../../models/operations/postmediasmediahashedidtranslatestatus.md) | :heavy_check_mark:                                                                                                     | The status of the background job that's been queued for the request.                                                   |
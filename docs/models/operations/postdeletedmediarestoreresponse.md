# PostDeletedMediaRestoreResponse

Restore request accepted and queued for processing.

## Example Usage

```typescript
import { PostDeletedMediaRestoreResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostDeletedMediaRestoreResponse = {
  message: "Restoring 3 media.",
  backgroundJobStatus: {
    status: "queued",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `message`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            | Restoring 3 media.                                                                                                             |
| `backgroundJobStatus`                                                                                                          | [operations.PostDeletedMediaRestoreBackgroundJobStatus](../../models/operations/postdeletedmediarestorebackgroundjobstatus.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
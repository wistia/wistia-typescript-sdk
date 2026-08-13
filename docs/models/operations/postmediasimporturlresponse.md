# PostMediasImportUrlResponse

Successfully queued background job for URL import.

## Example Usage

```typescript
import { PostMediasImportUrlResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasImportUrlResponse = {
  message: "<value>",
  backgroundJobStatus: {
    id: 563649,
    hashedId: "<id>",
    status: "finished",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | A confirmation message that the background job has been queued.                                                        |
| `backgroundJobStatus`                                                                                                  | [operations.PostMediasImportUrlBackgroundJobStatus](../../models/operations/postmediasimporturlbackgroundjobstatus.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
# PutMediasMediaHashedIdSwapResponse

Successfully queued background job for media swap.

## Example Usage

```typescript
import { PutMediasMediaHashedIdSwapResponse } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaHashedIdSwapResponse = {
  message: "Media swap has been queued for processing.",
  media: {
    subfolder: {
      hashedId: "abc123def4",
      name: "Marketing Videos",
      description: "Collection of all marketing and promotional videos",
      position: 1,
      created: new Date("2024-01-15T10:30:00+00:00"),
      updated: new Date("2024-01-20T14:45:00+00:00"),
    },
    project: {
      id: 22570,
      name: "My Project Title",
      hashedId: "4d23503f70",
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `message`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | Media swap has been queued for processing.                        |
| `media`                                                           | [models.MediaSchemaMedia](../../models/mediaschemamedia.md)       | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `backgroundJobStatus`                                             | [models.BackgroundJobStatus](../../models/backgroundjobstatus.md) | :heavy_minus_sign:                                                | Status of the background job.                                     |                                                                   |
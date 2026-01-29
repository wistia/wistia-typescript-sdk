# PutWebinarsIdRequest

## Example Usage

```typescript
import { PutWebinarsIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutWebinarsIdRequest = {
  id: "<id>",
  requestBody: {
    webinar: {
      title: "Updated Webinar Title",
      description: "Updated webinar description",
      scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
      eventDuration: 90,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The hashed ID of the webinar                                                               |
| `requestBody`                                                                              | [operations.PutWebinarsIdRequestBody](../../models/operations/putwebinarsidrequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
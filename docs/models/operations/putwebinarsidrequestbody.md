# PutWebinarsIdRequestBody

## Example Usage

```typescript
import { PutWebinarsIdRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PutWebinarsIdRequestBody = {
  webinar: {
    title: "Updated Webinar Title",
    description: "Updated webinar description",
    scheduledFor: new Date("2024-03-20T15:30:00-05:00"),
    eventDuration: 90,
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `webinar`                                                | [operations.Webinar](../../models/operations/webinar.md) | :heavy_minus_sign:                                       | N/A                                                      |
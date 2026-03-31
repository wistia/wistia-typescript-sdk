# GetMediaExtendedAudioDescriptionsOrderStatusIdResponse

Order status retrieved successfully.

## Example Usage

```typescript
import { GetMediaExtendedAudioDescriptionsOrderStatusIdResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetMediaExtendedAudioDescriptionsOrderStatusIdResponse = {
  order: {
    id: "<id>",
    orderStatus: "cancelled",
    createdAt: new Date("2025-10-13T08:05:33.052Z"),
    updatedAt: new Date("2026-08-09T17:09:51.895Z"),
    media: {
      id: "<id>",
      indexUrl: "https://upbeat-napkin.name",
      url: "https://proud-cardboard.org/",
    },
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `order`                                                                                                                                          | [operations.GetMediaExtendedAudioDescriptionsOrderStatusIdOrder](../../models/operations/getmediaextendedaudiodescriptionsorderstatusidorder.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
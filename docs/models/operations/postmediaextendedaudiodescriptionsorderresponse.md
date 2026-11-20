# PostMediaExtendedAudioDescriptionsOrderResponse

Extended audio description ordered successfully.

## Example Usage

```typescript
import { PostMediaExtendedAudioDescriptionsOrderResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostMediaExtendedAudioDescriptionsOrderResponse = {
  message:
    "Extended audio description ordered. Your account will be charged when the order is ready.",
  order: {
    id: "<id>",
    orderStatus: "in_progress",
    createdAt: new Date("2026-02-09T20:42:27.144Z"),
    updatedAt: new Date("2026-03-20T01:40:08.721Z"),
    media: {
      id: "<id>",
      indexUrl: "https://odd-stump.info",
      url: "https://scratchy-bowling.org/",
    },
  },
  expectedBilledCredits: null,
};
```

## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                | Example                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                         | Success message indicating the order has been placed.                                                                                                                                                                      | **Example 1:** Extended audio description ordered. Your account will be charged when the order is ready.<br/>**Example 2:** Extended audio description ordered. Credits are held now and deducted when the order is ready. |
| `order`                                                                                                                                                                                                                    | [operations.PostMediaExtendedAudioDescriptionsOrderOrder](../../models/operations/postmediaextendedaudiodescriptionsorderorder.md)                                                                                         | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |                                                                                                                                                                                                                            |
| `expectedBilledCredits`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                         | The credits held for the audio description, deducted when it completes. Null when the audio description is not paid for with credits. Decimal amounts are returned as strings.                                             |                                                                                                                                                                                                                            |
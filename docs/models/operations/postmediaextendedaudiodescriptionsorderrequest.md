# PostMediaExtendedAudioDescriptionsOrderRequest

## Example Usage

```typescript
import { PostMediaExtendedAudioDescriptionsOrderRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostMediaExtendedAudioDescriptionsOrderRequest = {
  mediaId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The hashed id of the media to order the extended audio description for.                            |
| `enabled`                                                                                          | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether the extended audio description should be automatically enabled once the order is complete. |
| `aiEnabled`                                                                                        | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether to use AI-generated audio descriptions (cheaper) or human-generated (higher quality).      |
| `orderInstructions`                                                                                | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Optional instructions for the audio description provider.                                          |
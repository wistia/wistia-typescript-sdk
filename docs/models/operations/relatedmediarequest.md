# RelatedMediaRequest

Configuration for the related-media recommendations plugin.

## Example Usage

```typescript
import { RelatedMediaRequest } from "@wistia/wistia-api-client/models/operations";

let value: RelatedMediaRequest = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `on`                                                         | *boolean*                                                    | :heavy_minus_sign:                                           | Whether related-media recommendations are enabled.           |
| `hashedIdList`                                               | *string*[]                                                   | :heavy_minus_sign:                                           | Ordered list of media hashed IDs to recommend.               |
| `shouldShowOnPause`                                          | *boolean*                                                    | :heavy_minus_sign:                                           | If true, recommendations are shown when the video is paused. |
| `shouldShowOnEnd`                                            | *boolean*                                                    | :heavy_minus_sign:                                           | If true, recommendations are shown when the video ends.      |
| `mediaLabelText`                                             | *string*                                                     | :heavy_minus_sign:                                           | Label text displayed above the recommended media.            |
| `watchButtonText`                                            | *string*                                                     | :heavy_minus_sign:                                           | Text shown on the watch button for a recommended media.      |
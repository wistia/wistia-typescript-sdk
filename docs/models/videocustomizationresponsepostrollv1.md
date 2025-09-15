# VideoCustomizationResponsePostRollV1

Adds a Call To Action to your Video (response format)

## Example Usage

```typescript
import { VideoCustomizationResponsePostRollV1 } from "@wistia/wistia-api-client/models";

let value: VideoCustomizationResponsePostRollV1 = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `rewatch`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | String representation of whether the video can be rewatched.                           |
| `text`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | The URL of the text to be displayed.                                                   |
| `link`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | The URL of the link to be displayed.                                                   |
| `time`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | The time when the post-roll should be displayed as a string.                           |
| `autoSize`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | String representation of whether the post-roll will automatically adjust its size.     |
| `style`                                                                                | [models.VideoCustomizationResponseStyle](../models/videocustomizationresponsestyle.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `ctaType`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | The type of call-to-action to be displayed.                                            |
| `on`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | String representation of whether the post-roll is enabled.                             |
| `conversionOpportunityKey`                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | The key used for tracking conversion opportunities.                                    |
# VideoCustomizationCaptionsV1

Enables closed captions for the video

## Example Usage

```typescript
import { VideoCustomizationCaptionsV1 } from "@wistia/wistia-api-client/models";

let value: VideoCustomizationCaptionsV1 = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `on`                                                                                                                                  | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | If set to true, the captions plugin is enabled and captions controls will be available to viewers.                                    |
| `onByDefault`                                                                                                                         | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | If set to true, captions will be turned on automatically when the video loads. Only takes effect when the captions plugin is enabled. |
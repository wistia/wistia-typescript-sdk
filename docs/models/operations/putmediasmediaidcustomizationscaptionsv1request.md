# PutMediasMediaIdCustomizationsCaptionsV1Request

Enables closed captions for the video

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsCaptionsV1Request } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsCaptionsV1Request = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `on`                                                                                                                                  | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | If set to true, the captions plugin is enabled and captions controls will be available to viewers.                                    |
| `onByDefault`                                                                                                                         | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | If set to true, captions will be turned on automatically when the video loads. Only takes effect when the captions plugin is enabled. |
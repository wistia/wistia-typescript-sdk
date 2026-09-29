# Preview

Preview URLs, available when status is "edit_tree_generated" or later.

## Example Usage

```typescript
import { Preview } from "@wistia/wistia-api-client/models/operations";

let value: Preview = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `embedUrl`                                | *string*                                  | :heavy_minus_sign:                        | Iframe embed URL for video playback.      |
| `thumbnailUrl`                            | *string*                                  | :heavy_minus_sign:                        | Thumbnail image URL.                      |
| `instantHlsReady`                         | *boolean*                                 | :heavy_minus_sign:                        | Whether the instant HLS preview is ready. |
# Preview

Preview URLs, available when status is "edit_tree_generated" or later.

## Example Usage

```typescript
import { Preview } from "@wistia/wistia-api-client/models/operations";

let value: Preview = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `videoUrl`                           | *string*                             | :heavy_minus_sign:                   | Iframe embed URL for video playback. |
| `thumbnailUrl`                       | *string*                             | :heavy_minus_sign:                   | Thumbnail image URL.                 |
| `mediaHashedId`                      | *string*                             | :heavy_minus_sign:                   | Hashed ID of the output media.       |
| `name`                               | *string*                             | :heavy_minus_sign:                   | Name of the output media.            |
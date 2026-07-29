# ThumbnailTextOverlayV2Request

Text overlay rendered on top of the thumbnail.

## Example Usage

```typescript
import { ThumbnailTextOverlayV2Request } from "@wistia/wistia-api-client/models/operations";

let value: ThumbnailTextOverlayV2Request = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `on`                                         | *boolean*                                    | :heavy_minus_sign:                           | If set to true, the text overlay is enabled. |
| `text`                                       | *string*                                     | :heavy_minus_sign:                           | The text displayed in the overlay.           |
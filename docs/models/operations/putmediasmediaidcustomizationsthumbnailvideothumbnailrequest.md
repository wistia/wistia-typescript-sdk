# PutMediasMediaIdCustomizationsThumbnailVideoThumbnailRequest

Looping video thumbnail (a short clip used as the poster).

## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsThumbnailVideoThumbnailRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsThumbnailVideoThumbnailRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `clickToPlayButton`                                                        | *boolean*                                                                  | :heavy_minus_sign:                                                         | If set to false, removes the “Click to Play” button on video thumbnails.   |
| `clickForSound`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | If set to true, shows a click-for-sound affordance on the video thumbnail. |
| `hashedId`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | The hashed ID of the media used as the looping video thumbnail.            |
| `trimStart`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Start time of the trimmed clip used as the video thumbnail.                |
| `trimEnd`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | End time of the trimmed clip used as the video thumbnail.                  |
| `priorityMode`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | Priority mode controlling how the video thumbnail is loaded.               |
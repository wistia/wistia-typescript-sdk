# GetMediasMediaHashedIdCaptionsSegment

## Example Usage

```typescript
import { GetMediasMediaHashedIdCaptionsSegment } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdCaptionsSegment = {
  startMs: 955291,
  endMs: 266776,
  text: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `startMs`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | The segment's start offset from the beginning of the media, in milliseconds. |
| `endMs`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | The segment's end offset from the beginning of the media, in milliseconds.   |
| `text`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The segment's transcript text.                                               |
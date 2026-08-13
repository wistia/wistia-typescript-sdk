# GetCaptionsSegment

## Example Usage

```typescript
import { GetCaptionsSegment } from "@wistia/wistia-api-client/models/operations";

let value: GetCaptionsSegment = {
  startMs: 531001,
  endMs: 191204,
  text: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `startMs`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | The segment's start offset from the beginning of the media, in milliseconds. |
| `endMs`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | The segment's end offset from the beginning of the media, in milliseconds.   |
| `text`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The segment's transcript text.                                               |
# GetMediasMediaHashedIdCaptionsLanguageCodeDiarizedSegment

## Example Usage

```typescript
import { GetMediasMediaHashedIdCaptionsLanguageCodeDiarizedSegment } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdCaptionsLanguageCodeDiarizedSegment = {
  startMs: 26042,
  endMs: 895581,
  text: "<value>",
  speaker: {
    mediaSpeakerId: "<id>",
    speakerProfileId: "<id>",
    detectedSpeakerId: "<id>",
    displayLabel: "<value>",
    name: null,
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `startMs`                                                                                                                                    | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The speaker-turn segment's start offset from the beginning of the media, in milliseconds.                                                    |
| `endMs`                                                                                                                                      | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The speaker-turn segment's end offset from the beginning of the media, in milliseconds.                                                      |
| `text`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Transcript text attributed to this speaker turn.                                                                                             |
| `speaker`                                                                                                                                    | [operations.GetMediasMediaHashedIdCaptionsLanguageCodeSpeaker](../../models/operations/getmediasmediahashedidcaptionslanguagecodespeaker.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
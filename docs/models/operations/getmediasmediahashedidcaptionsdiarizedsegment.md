# GetMediasMediaHashedIdCaptionsDiarizedSegment

## Example Usage

```typescript
import { GetMediasMediaHashedIdCaptionsDiarizedSegment } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdCaptionsDiarizedSegment = {
  startMs: 976619,
  endMs: 722850,
  text: "<value>",
  speaker: {
    mediaSpeakerId: "<id>",
    speakerProfileId: "<id>",
    detectedSpeakerId: "<id>",
    displayLabel: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `startMs`                                                                                                            | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The speaker-turn segment's start offset from the beginning of the media, in milliseconds.                            |
| `endMs`                                                                                                              | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The speaker-turn segment's end offset from the beginning of the media, in milliseconds.                              |
| `text`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Transcript text attributed to this speaker turn.                                                                     |
| `speaker`                                                                                                            | [operations.GetMediasMediaHashedIdCaptionsSpeaker](../../models/operations/getmediasmediahashedidcaptionsspeaker.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
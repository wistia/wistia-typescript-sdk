# GetCaptionsDiarizedSegment

## Example Usage

```typescript
import { GetCaptionsDiarizedSegment } from "@wistia/wistia-api-client/models/operations";

let value: GetCaptionsDiarizedSegment = {
  startMs: 286831,
  endMs: 486735,
  text: "<value>",
  speaker: {
    mediaSpeakerId: "<id>",
    speakerProfileId: null,
    detectedSpeakerId: "<id>",
    displayLabel: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `startMs`                                                                                 | *number*                                                                                  | :heavy_check_mark:                                                                        | The speaker-turn segment's start offset from the beginning of the media, in milliseconds. |
| `endMs`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | The speaker-turn segment's end offset from the beginning of the media, in milliseconds.   |
| `text`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | Transcript text attributed to this speaker turn.                                          |
| `speaker`                                                                                 | [operations.GetCaptionsSpeaker](../../models/operations/getcaptionsspeaker.md)            | :heavy_check_mark:                                                                        | N/A                                                                                       |
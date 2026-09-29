# DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdResponse

The speaker was removed from the media.

## Example Usage

```typescript
import { DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdResponse } from "@wistia/wistia-api-client/models/operations";

let value: DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdResponse = {
  status: "removed",
  speaker: {
    mediaSpeakerId: "<id>",
    speakerProfileId: "<id>",
    name: "<value>",
  },
  speakerDataVersion: 243566,
  changedRuns: 84977,
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                                               | [operations.DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdStatus](../../models/operations/deletemediasmediahashedidspeakersmediaspeakeridstatus.md)   | :heavy_check_mark:                                                                                                                                     | Always `removed`.                                                                                                                                      |
| `speaker`                                                                                                                                              | [operations.DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdSpeaker](../../models/operations/deletemediasmediahashedidspeakersmediaspeakeridspeaker.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `speakerDataVersion`                                                                                                                                   | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The media's speaker data version after the removal, or null when the media has no speaker data.                                                        |
| `changedRuns`                                                                                                                                          | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The number of speaker turns returned to an anonymous detected speaker.                                                                                 |
# PostMediasMediaHashedIdSpeakersResponseBody2

The profile was newly assigned to the media.

## Example Usage

```typescript
import { PostMediasMediaHashedIdSpeakersResponseBody2 } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdSpeakersResponseBody2 = {
  status: "no_op",
  speaker: {
    mediaSpeakerId: "<id>",
    speakerProfileId: "<id>",
    name: "<value>",
  },
  speakerDataVersion: 692851,
  changedRuns: 759090,
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                       | [operations.PostMediasMediaHashedIdSpeakersStatus2](../../models/operations/postmediasmediahashedidspeakersstatus2.md)                                         | :heavy_check_mark:                                                                                                                                             | `created` when the profile was newly assigned to the media, `reused` when it was already assigned and more turns were named, and `no_op` when nothing changed. |
| `speaker`                                                                                                                                                      | [operations.PostMediasMediaHashedIdSpeakersSpeaker2](../../models/operations/postmediasmediahashedidspeakersspeaker2.md)                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `speakerDataVersion`                                                                                                                                           | *number*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | The media's speaker data version after the assignment, or null when the media has no speaker data.                                                             |
| `changedRuns`                                                                                                                                                  | *number*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | The number of speaker turns that were renamed.                                                                                                                 |
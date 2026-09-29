# PostMediasMediaHashedIdSpeakersResponseBody1

The profile was already assigned; any newly named turns are reflected in `changed_runs`.

## Example Usage

```typescript
import { PostMediasMediaHashedIdSpeakersResponseBody1 } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdSpeakersResponseBody1 = {
  status: "no_op",
  speaker: {
    mediaSpeakerId: "<id>",
    speakerProfileId: "<id>",
    name: "<value>",
  },
  speakerDataVersion: 455643,
  changedRuns: 302995,
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                       | [operations.PostMediasMediaHashedIdSpeakersStatus1](../../models/operations/postmediasmediahashedidspeakersstatus1.md)                                         | :heavy_check_mark:                                                                                                                                             | `created` when the profile was newly assigned to the media, `reused` when it was already assigned and more turns were named, and `no_op` when nothing changed. |
| `speaker`                                                                                                                                                      | [operations.PostMediasMediaHashedIdSpeakersSpeaker1](../../models/operations/postmediasmediahashedidspeakersspeaker1.md)                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `speakerDataVersion`                                                                                                                                           | *number*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | The media's speaker data version after the assignment, or null when the media has no speaker data.                                                             |
| `changedRuns`                                                                                                                                                  | *number*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | The number of speaker turns that were renamed.                                                                                                                 |
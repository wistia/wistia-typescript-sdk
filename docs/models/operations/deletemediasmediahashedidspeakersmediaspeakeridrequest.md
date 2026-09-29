# DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdRequest

## Example Usage

```typescript
import { DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdRequest = {
  mediaHashedId: "<id>",
  mediaSpeakerId: "<id>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `mediaHashedId`                                                                           | *string*                                                                                  | :heavy_check_mark:                                                                        | The hashed ID of the media to remove the speaker from.                                    |
| `mediaSpeakerId`                                                                          | *string*                                                                                  | :heavy_check_mark:                                                                        | The `media_speaker_id` of the assignment to remove, from `include=speakers` on the media. |
| `expectedVersion`                                                                         | *number*                                                                                  | :heavy_minus_sign:                                                                        | The media's current `speaker_data_version`. When given, a stale value returns 409.        |
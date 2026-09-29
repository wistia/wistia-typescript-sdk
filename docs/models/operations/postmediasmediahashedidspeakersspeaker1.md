# PostMediasMediaHashedIdSpeakersSpeaker1

## Example Usage

```typescript
import { PostMediasMediaHashedIdSpeakersSpeaker1 } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdSpeakersSpeaker1 = {
  mediaSpeakerId: "<id>",
  speakerProfileId: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `mediaSpeakerId`                                                           | *string*                                                                   | :heavy_check_mark:                                                         | The unique identifier for this transcript speaker assignment on the media. |
| `speakerProfileId`                                                         | *string*                                                                   | :heavy_check_mark:                                                         | The reusable account speaker profile assigned to the transcript speaker.   |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The assigned speaker profile's display name.                               |
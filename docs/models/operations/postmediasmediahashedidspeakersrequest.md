# PostMediasMediaHashedIdSpeakersRequest

## Example Usage

```typescript
import { PostMediasMediaHashedIdSpeakersRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdSpeakersRequest = {
  mediaHashedId: "<id>",
  requestBody: {
    speakerProfileId: "abc123def4",
    detectedSpeakerId: "default_speaker_0",
    expectedVersion: 7,
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `mediaHashedId`                                                                                                                | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The hashed ID of the media to assign the speaker to.                                                                           |
| `requestBody`                                                                                                                  | [operations.PostMediasMediaHashedIdSpeakersRequestBody](../../models/operations/postmediasmediahashedidspeakersrequestbody.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
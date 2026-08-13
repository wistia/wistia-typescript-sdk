# GetMediasMediaHashedIdCaptionsLanguageCodeRequest

## Example Usage

```typescript
import { GetMediasMediaHashedIdCaptionsLanguageCodeRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdCaptionsLanguageCodeRequest = {
  mediaHashedId: "<id>",
  languageCode: "<value>",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mediaHashedId`                                                                                                                                                  | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The hashed ID of the media from which captions are to be retrieved.                                                                                              |
| `languageCode`                                                                                                                                                   | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The 3-character ISO 639-2 language code of the captions to be retrieved (e.g., `eng`, `fra`, `spa`). Some languages use extended IETF subtags (e.g., `zh-Hant`). |
| `include`                                                                                                                                                        | [operations.Include](../../models/operations/include.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Set to `segments` to include time-coded cues in JSON responses.                                                                                                  |
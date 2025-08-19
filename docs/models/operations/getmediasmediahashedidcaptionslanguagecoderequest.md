# GetMediasMediaHashedIdCaptionsLanguageCodeRequest

## Example Usage

```typescript
import { GetMediasMediaHashedIdCaptionsLanguageCodeRequest } from "wistia/models/operations";

let value: GetMediasMediaHashedIdCaptionsLanguageCodeRequest = {
  mediaHashedId: "<id>",
  languageCode: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `mediaHashedId`                                                     | *string*                                                            | :heavy_check_mark:                                                  | The hashed ID of the media from which captions are to be retrieved. |
| `languageCode`                                                      | *string*                                                            | :heavy_check_mark:                                                  | The language code of the captions to be retrieved.                  |
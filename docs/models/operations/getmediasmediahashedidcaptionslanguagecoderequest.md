# GetMediasMediaHashedIdCaptionsLanguageCodeRequest

## Example Usage

```typescript
import { GetMediasMediaHashedIdCaptionsLanguageCodeRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdCaptionsLanguageCodeRequest = {
  mediaHashedId: "<id>",
  languageCode: "<value>",
  xWistiaAPIVersion: "2025-11",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `mediaHashedId`                                                     | *string*                                                            | :heavy_check_mark:                                                  | The hashed ID of the media from which captions are to be retrieved. |                                                                     |
| `languageCode`                                                      | *string*                                                            | :heavy_check_mark:                                                  | The language code of the captions to be retrieved.                  |                                                                     |
| `xWistiaAPIVersion`                                                 | *string*                                                            | :heavy_check_mark:                                                  | The API version                                                     | 2025-11                                                             |
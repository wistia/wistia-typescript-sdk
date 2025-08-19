# PutMediasMediaHashedIdCaptionsLanguageCodeRequest

## Example Usage

```typescript
import { PutMediasMediaHashedIdCaptionsLanguageCodeRequest } from "wistia/models/operations";

let value: PutMediasMediaHashedIdCaptionsLanguageCodeRequest = {
  mediaHashedId: "<id>",
  languageCode: "<value>",
  requestBody: {
    captionFile: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mediaHashedId`                                                                                                                                      | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Unique identifier for the video.                                                                                                                     |
| `languageCode`                                                                                                                                       | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Language code conforming to ISO-639-2 for which the captions should be updated.                                                                      |
| `requestBody`                                                                                                                                        | [operations.PutMediasMediaHashedIdCaptionsLanguageCodeRequestBody](../../models/operations/putmediasmediahashedidcaptionslanguagecoderequestbody.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
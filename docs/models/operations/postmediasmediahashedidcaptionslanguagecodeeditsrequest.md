# PostMediasMediaHashedIdCaptionsLanguageCodeEditsRequest

## Example Usage

```typescript
import { PostMediasMediaHashedIdCaptionsLanguageCodeEditsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdCaptionsLanguageCodeEditsRequest = {
  mediaHashedId: "<id>",
  languageCode: "<value>",
  requestBody: {
    edits: [],
    expectedVersion: 200725,
  },
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mediaHashedId`                                                                                                                                                  | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The hashed ID of the media whose transcript should be edited.                                                                                                    |
| `languageCode`                                                                                                                                                   | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The 3-character ISO 639-2 language code of the caption track to edit (e.g., `eng`, `fra`, `spa`). Some languages use extended IETF subtags (e.g., `zh-Hant`).    |
| `requestBody`                                                                                                                                                    | [operations.PostMediasMediaHashedIdCaptionsLanguageCodeEditsRequestBody](../../models/operations/postmediasmediahashedidcaptionslanguagecodeeditsrequestbody.md) | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
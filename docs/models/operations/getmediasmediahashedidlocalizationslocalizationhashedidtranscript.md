# GetMediasMediaHashedIdLocalizationsLocalizationHashedIdTranscript

The transcript for the localization. Selectively serialized in some endpoints. See properties for endpoint.

## Example Usage

```typescript
import { GetMediasMediaHashedIdLocalizationsLocalizationHashedIdTranscript } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdLocalizationsLocalizationHashedIdTranscript = {
  hashedId: "<id>",
  languageName: "<value>",
  nativeLanguageName: "<value>",
  text: "<value>",
  createdAt: new Date("2026-07-07T03:47:27.336Z"),
  updatedAt: new Date("2026-05-21T03:51:38.812Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `hashedId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | A unique alphanumeric identifier for this transcript.                                         |
| `languageName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the language in English.                                                          |
| `nativeLanguageName`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the language in the language of the localization.                                 |
| `text`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The text of the transcript.                                                                   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date when the transcript was created.                                                     |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date when the transcript was last updated.                                                |
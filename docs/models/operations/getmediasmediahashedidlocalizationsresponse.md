# GetMediasMediaHashedIdLocalizationsResponse

A localization is a translation of a media into another language.


## Example Usage

```typescript
import { GetMediasMediaHashedIdLocalizationsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdLocalizationsResponse = {
  hashedId: "<id>",
  languageCode: "<value>",
  iso6392LanguageCode: "<value>",
  languageName: "<value>",
  nativeLanguageName: "<value>",
  createdAt: new Date("2024-06-24T07:36:31.910Z"),
  updatedAt: new Date("2025-04-08T11:58:34.202Z"),
  orderedAt: null,
  enabledAt: null,
  enabled: true,
  sourceMedia: {
    hashedId: "<id>",
    name: "<value>",
    duration: 234.22,
    createdAt: new Date("2025-06-21T17:53:45.352Z"),
    updatedAt: new Date("2024-11-01T17:59:13.723Z"),
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `hashedId`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | A unique alphanumeric identifier for this localization.                                                                                |
| `languageCode`                                                                                                                         | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | A 3-character language code as specified by IETF.                                                                                      |
| `iso6392LanguageCode`                                                                                                                  | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | A 2-character language code as specified by ISO-639–2.                                                                                 |
| `languageName`                                                                                                                         | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The name of the language in English.                                                                                                   |
| `nativeLanguageName`                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The name of the language in the language of the localization.                                                                          |
| `createdAt`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_check_mark:                                                                                                                     | The date when the localization was created.                                                                                            |
| `updatedAt`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_check_mark:                                                                                                                     | The date when the localization was last updated.                                                                                       |
| `orderedAt`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_check_mark:                                                                                                                     | The date when the localization was ordered.                                                                                            |
| `enabledAt`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_check_mark:                                                                                                                     | The date when the localization was enabled.                                                                                            |
| `enabled`                                                                                                                              | *boolean*                                                                                                                              | :heavy_check_mark:                                                                                                                     | Whether or not the localization is enabled.                                                                                            |
| `sourceMedia`                                                                                                                          | [operations.GetMediasMediaHashedIdLocalizationsSourceMedia](../../models/operations/getmediasmediahashedidlocalizationssourcemedia.md) | :heavy_check_mark:                                                                                                                     | The media that the localization is associated with.                                                                                    |
| `transcript`                                                                                                                           | [operations.GetMediasMediaHashedIdLocalizationsTranscript](../../models/operations/getmediasmediahashedidlocalizationstranscript.md)   | :heavy_minus_sign:                                                                                                                     | The transcript for the localization. Selectively serialized in some endpoints. See properties for endpoint.                            |
# Localization

## Example Usage

```typescript
import { Localization } from "@wistia/wistia-api-client/models";

let value: Localization = {
  hashedId: "<id>",
  languageCode: "<value>",
  iso6392LanguageCode: "<value>",
  languageName: "<value>",
  nativeLanguageName: "<value>",
  createdAt: new Date("2024-02-28T14:48:20.885Z"),
  updatedAt: new Date("2023-09-29T09:23:36.361Z"),
  orderedAt: new Date("2025-05-21T16:22:30.566Z"),
  enabledAt: new Date("2025-01-30T18:28:49.017Z"),
  enabled: false,
  sourceMedia: {
    hashedId: "<id>",
    name: "<value>",
    duration: 8523.74,
    createdAt: new Date("2023-04-16T05:41:03.083Z"),
    updatedAt: new Date("2025-10-20T17:09:32.625Z"),
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `hashedId`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | A unique alphanumeric identifier for this localization.                                                     |
| `languageCode`                                                                                              | *string*                                                                                                    | :heavy_check_mark:                                                                                          | A 3-character language code as specified by IETF.                                                           |
| `iso6392LanguageCode`                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | A 2-character language code as specified by ISO-639–2.                                                      |
| `languageName`                                                                                              | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the language in English.                                                                        |
| `nativeLanguageName`                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the language in the language of the localization.                                               |
| `createdAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | The date when the localization was created.                                                                 |
| `updatedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | The date when the localization was last updated.                                                            |
| `orderedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | The date when the localization was ordered.                                                                 |
| `enabledAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | The date when the localization was enabled.                                                                 |
| `enabled`                                                                                                   | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | Whether or not the localization is enabled.                                                                 |
| `sourceMedia`                                                                                               | [models.SourceMedia](../models/sourcemedia.md)                                                              | :heavy_check_mark:                                                                                          | The media that the localization is associated with.                                                         |
| `transcript`                                                                                                | [models.LocalizationTranscript](../models/localizationtranscript.md)                                        | :heavy_minus_sign:                                                                                          | The transcript for the localization. Selectively serialized in some endpoints. See properties for endpoint. |
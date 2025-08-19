# LocalizationWithPurchaseData

## Example Usage

```typescript
import { LocalizationWithPurchaseData } from "wistia/models";

let value: LocalizationWithPurchaseData = {
  hashedId: "<id>",
  languageCode: "<value>",
  iso6392LanguageCode: "<value>",
  languageName: "<value>",
  nativeLanguageName: "<value>",
  createdAt: new Date("2023-06-18T19:20:03.038Z"),
  updatedAt: new Date("2025-04-19T19:12:40.215Z"),
  orderedAt: new Date("2024-04-01T16:54:44.834Z"),
  enabledAt: null,
  enabled: false,
  sourceMedia: {
    hashedId: "<id>",
    name: "<value>",
    duration: 8523.74,
    createdAt: new Date("2023-04-16T05:41:03.083Z"),
    updatedAt: new Date("2025-10-20T17:09:32.625Z"),
  },
  autoEnableDubbing: true,
  expectedBilledMinutes: 5609.28,
  expectedBilledPricePerMinute: 5650.99,
  expectedBilledPrice: 8024.89,
  billedAt: new Date("2024-08-20T14:04:54.917Z"),
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
| `autoEnableDubbing`                                                                                         | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | Whether or not the dubbing will be automatically enabled when completed.                                    |
| `expectedBilledMinutes`                                                                                     | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The expected number of minutes that will be billed for the dubbing.                                         |
| `expectedBilledPricePerMinute`                                                                              | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The expected price per minute that will be billed for the dubbing.                                          |
| `expectedBilledPrice`                                                                                       | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The expected total price that will be billed for the dubbing.                                               |
| `billedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | The date when the dubbing was billed.                                                                       |
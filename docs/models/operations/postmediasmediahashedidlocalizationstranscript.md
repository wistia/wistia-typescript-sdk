# PostMediasMediaHashedIdLocalizationsTranscript

The transcript for the localization. Selectively serialized in some endpoints. See properties for endpoint.

## Example Usage

```typescript
import { PostMediasMediaHashedIdLocalizationsTranscript } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdLocalizationsTranscript = {
  hashedId: "<id>",
  languageName: "<value>",
  nativeLanguageName: "<value>",
  text: "<value>",
  createdAt: new Date("2023-02-08T07:54:53.636Z"),
  updatedAt: new Date("2025-02-03T09:05:22.548Z"),
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
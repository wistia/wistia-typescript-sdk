# PostMediasMediaHashedIdTranslateRequestBody

## Example Usage

```typescript
import { PostMediasMediaHashedIdTranslateRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdTranslateRequestBody = {
  targetLanguage: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `targetLanguage`                                                                                                                                                                               | *string*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                             | The language to translate the transcript to. Use the bibliographic ISO 639-2 form or a supported regional or script IETF tag.                                                                  |
| `sourceLanguage`                                                                                                                                                                               | *string*                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                             | The language of the source transcript. Use the bibliographic ISO 639-2 form or a supported regional or script IETF tag. If not provided, the media's default transcript language will be used. |
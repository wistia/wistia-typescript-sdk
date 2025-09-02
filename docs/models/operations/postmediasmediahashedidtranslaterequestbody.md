# PostMediasMediaHashedIdTranslateRequestBody

## Example Usage

```typescript
import { PostMediasMediaHashedIdTranslateRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdTranslateRequestBody = {
  targetLanguage: "<value>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `targetLanguage`                                                                                                                                                   | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The language to translate the transcript to as a 3-character IETF language code.                                                                                   |
| `sourceLanguage`                                                                                                                                                   | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The language of the source transcript to be translated as a 3-character IETF language code. If not provided, the media's default transcript language will be used. |
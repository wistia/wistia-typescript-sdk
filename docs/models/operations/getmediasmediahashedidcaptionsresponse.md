# GetMediasMediaHashedIdCaptionsResponse

## Example Usage

```typescript
import { GetMediasMediaHashedIdCaptionsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdCaptionsResponse = {
  language: "<value>",
  isDraft: false,
  id: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `englishName`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | English name of the language.                                      |
| `nativeName`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | Native name of the language.                                       |
| `language`                                                         | *string*                                                           | :heavy_check_mark:                                                 | A 3 character language code as specified by ISO-639–2.             |
| `text`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The text of the captions for the specified language in SRT format. |
| `isDraft`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | The unique hashed identifier of the time-coded transcript.         |
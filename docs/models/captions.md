# Captions

## Example Usage

```typescript
import { Captions } from "@wistia/wistia-api-client/models";

let value: Captions = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `englishName`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | English name of the language.                                      |
| `nativeName`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | Native name of the language.                                       |
| `language`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | A 3 character language code as specified by ISO-639–2.             |
| `text`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The text of the captions for the specified language in SRT format. |
| `isDraft`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | The unique hashed identifier of the time-coded transcript.         |
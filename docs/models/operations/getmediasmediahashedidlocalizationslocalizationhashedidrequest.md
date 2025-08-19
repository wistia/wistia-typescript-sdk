# GetMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest

## Example Usage

```typescript
import { GetMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest } from "wistia/models/operations";

let value: GetMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest = {
  mediaHashedId: "<id>",
  localizationHashedId: "<id>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `mediaHashedId`                                    | *string*                                           | :heavy_check_mark:                                 | The hashed ID of the localization's media.         |
| `localizationHashedId`                             | *string*                                           | :heavy_check_mark:                                 | The hashed ID of the localization.                 |
| `includeTranscript`                                | *boolean*                                          | :heavy_minus_sign:                                 | Whether to include the transcript in the response. |
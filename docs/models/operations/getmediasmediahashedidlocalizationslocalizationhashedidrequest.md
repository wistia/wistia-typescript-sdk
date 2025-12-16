# GetMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest

## Example Usage

```typescript
import { GetMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest = {
  mediaHashedId: "<id>",
  localizationHashedId: "<id>",
  xWistiaAPIVersion: "2025-11",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `mediaHashedId`                                    | *string*                                           | :heavy_check_mark:                                 | The hashed ID of the localization's media.         |                                                    |
| `localizationHashedId`                             | *string*                                           | :heavy_check_mark:                                 | The hashed ID of the localization.                 |                                                    |
| `includeTranscript`                                | *boolean*                                          | :heavy_minus_sign:                                 | Whether to include the transcript in the response. |                                                    |
| `xWistiaAPIVersion`                                | *string*                                           | :heavy_check_mark:                                 | The API version                                    | 2025-11                                            |
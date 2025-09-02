# PostMediasMediaHashedIdLocalizationsRequestBody

## Example Usage

```typescript
import { PostMediasMediaHashedIdLocalizationsRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdLocalizationsRequestBody = {
  outputLanguage: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `outputLanguage`                                                           | *string*                                                                   | :heavy_check_mark:                                                         | The language to localize the media to as a 3-character IETF language code. |
| `autoEnable`                                                               | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether to automatically enable the localization.                          |
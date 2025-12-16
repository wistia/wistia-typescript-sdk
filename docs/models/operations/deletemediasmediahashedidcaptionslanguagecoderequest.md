# DeleteMediasMediaHashedIdCaptionsLanguageCodeRequest

## Example Usage

```typescript
import { DeleteMediasMediaHashedIdCaptionsLanguageCodeRequest } from "@wistia/wistia-api-client/models/operations";

let value: DeleteMediasMediaHashedIdCaptionsLanguageCodeRequest = {
  mediaHashedId: "<id>",
  languageCode: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `mediaHashedId`                                                                 | *string*                                                                        | :heavy_check_mark:                                                              | Unique identifier for the video.                                                |                                                                                 |
| `languageCode`                                                                  | *string*                                                                        | :heavy_check_mark:                                                              | Language code conforming to ISO-639-2 for which the captions should be removed. |                                                                                 |
| `xWistiaAPIVersion`                                                             | *string*                                                                        | :heavy_minus_sign:                                                              | The API version                                                                 | 2025-11                                                                         |
# DeleteMediasMediaHashedIdCaptionsLanguageCodeRequest

## Example Usage

```typescript
import { DeleteMediasMediaHashedIdCaptionsLanguageCodeRequest } from "wistia/models/operations";

let value: DeleteMediasMediaHashedIdCaptionsLanguageCodeRequest = {
  mediaHashedId: "<id>",
  languageCode: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `mediaHashedId`                                                                 | *string*                                                                        | :heavy_check_mark:                                                              | Unique identifier for the video.                                                |
| `languageCode`                                                                  | *string*                                                                        | :heavy_check_mark:                                                              | Language code conforming to ISO-639-2 for which the captions should be removed. |
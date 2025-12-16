# PostMediasMediaHashedIdCaptionsRequestBody

## Example Usage

```typescript
import { PostMediasMediaHashedIdCaptionsRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdCaptionsRequestBody = {
  captionFile: "<value>",
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `captionFile`                                                                                                                                                               | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Either an attached SRT file or a string parameter with the contents of an SRT file.                                                                                         |
| `language`                                                                                                                                                                  | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | An optional parameter that denotes which language this file represents. Should conform to ISO-639–2. If left unspecified, the language code will be detected automatically. |
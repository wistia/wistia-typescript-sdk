# PostFormResponse

Response after successfully uploading or importing media

## Example Usage

```typescript
import { PostFormResponse } from "wistia/models/operations";

let value: PostFormResponse = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *number*                                                                                            | :heavy_minus_sign:                                                                                  | A unique numeric identifier for the media within the system.                                        |
| `name`                                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The display name of the media.                                                                      |
| `type`                                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | A string representing what type of media this is.                                                   |
| `created`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | The date when the media was originally uploaded.                                                    |
| `updated`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | The date when the media was last changed.                                                           |
| `duration`                                                                                          | *number*                                                                                            | :heavy_minus_sign:                                                                                  | Specifies the length (in seconds) for audio and video files.                                        |
| `hashedId`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | A unique alphanumeric identifier for this media.                                                    |
| `progress`                                                                                          | *number*                                                                                            | :heavy_minus_sign:                                                                                  | A floating point value between 0 and 1 that indicates the progress of the processing for this file. |
| `thumbnail`                                                                                         | [models.Thumbnail](../../models/thumbnail.md)                                                       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
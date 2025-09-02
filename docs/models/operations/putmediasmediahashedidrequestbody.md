# PutMediasMediaHashedIdRequestBody

## Example Usage

```typescript
import { PutMediasMediaHashedIdRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaHashedIdRequestBody = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The media’s new name.                                                                                            |
| `newStillMediaId`                                                                                                | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The Wistia hashed ID of an image that will replace the still that’s displayed before the player starts playing.<br/> |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A new description for this media. Accepts plain text or markdown.                                                |
| `tags`                                                                                                           | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | An array of tag names to apply to the media. Note that this will replace any existing tags!                      |
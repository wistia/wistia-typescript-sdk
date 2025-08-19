# PostMediasMediaHashedIdCaptionsRequest

## Example Usage

```typescript
import { PostMediasMediaHashedIdCaptionsRequest } from "wistia/models/operations";

let value: PostMediasMediaHashedIdCaptionsRequest = {
  mediaHashedId: "<id>",
  requestBody: {
    captionFile: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `mediaHashedId`                                                                                                                | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The hashed ID of the media for which captions are to be added.                                                                 |
| `requestBody`                                                                                                                  | [operations.PostMediasMediaHashedIdCaptionsRequestBody](../../models/operations/postmediasmediahashedidcaptionsrequestbody.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
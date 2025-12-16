# PostMediasMediaHashedIdCaptionsRequest

## Example Usage

```typescript
import { PostMediasMediaHashedIdCaptionsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdCaptionsRequest = {
  mediaHashedId: "<id>",
  requestBody: {
    captionFile: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `mediaHashedId`                                                                                                                | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The hashed ID of the media for which captions are to be added.                                                                 |                                                                                                                                |
| `xWistiaAPIVersion`                                                                                                            | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The API version                                                                                                                | 2025-11                                                                                                                        |
| `requestBody`                                                                                                                  | [operations.PostMediasMediaHashedIdCaptionsRequestBody](../../models/operations/postmediasmediahashedidcaptionsrequestbody.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
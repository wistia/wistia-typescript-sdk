# PostMediasMediaHashedIdTrimsRequest

## Example Usage

```typescript
import { PostMediasMediaHashedIdTrimsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdTrimsRequest = {
  mediaHashedId: "<id>",
  requestBody: {
    trims: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `mediaHashedId`                                                                                                          | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The hashed ID of the media.                                                                                              |
| `requestBody`                                                                                                            | [operations.PostMediasMediaHashedIdTrimsRequestBody](../../models/operations/postmediasmediahashedidtrimsrequestbody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
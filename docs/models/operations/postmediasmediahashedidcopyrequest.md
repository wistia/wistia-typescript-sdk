# PostMediasMediaHashedIdCopyRequest

## Example Usage

```typescript
import { PostMediasMediaHashedIdCopyRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdCopyRequest = {
  mediaHashedId: "<id>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `mediaHashedId`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The hashed ID of the media.                                                                                            |                                                                                                                        |
| `xWistiaAPIVersion`                                                                                                    | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The API version                                                                                                        | 2025-11                                                                                                                |
| `requestBody`                                                                                                          | [operations.PostMediasMediaHashedIdCopyRequestBody](../../models/operations/postmediasmediahashedidcopyrequestbody.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
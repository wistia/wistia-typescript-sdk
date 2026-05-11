# PostMediasImportUrlRequest

## Example Usage

```typescript
import { PostMediasImportUrlRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasImportUrlRequest = {
  url: "https://example.com/video.mp4",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The publicly accessible URL of the media file to import.                                                       | https://example.com/video.mp4                                                                                  |
| `folderId`                                                                                                     | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The hashed ID of the folder (project) to import the media into. If not provided, a new folder will be created. |                                                                                                                |
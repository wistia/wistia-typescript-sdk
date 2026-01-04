# PostMediasMediaHashedIdLocalizationsSourceMedia

The media that the localization is associated with.

## Example Usage

```typescript
import { PostMediasMediaHashedIdLocalizationsSourceMedia } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdLocalizationsSourceMedia = {
  hashedId: "<id>",
  name: "<value>",
  duration: 8939.27,
  createdAt: new Date("2026-09-13T22:12:49.337Z"),
  updatedAt: new Date("2025-12-26T18:11:23.123Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `hashedId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | A unique alphanumeric identifier for this media.                                              |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the media.                                                                        |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | The duration of the media in seconds.                                                         |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date when the media was created.                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date when the media was last updated.                                                     |
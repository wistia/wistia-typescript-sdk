# GetMediasMediaHashedIdLocalizationsSourceMedia

The media that the localization is associated with.

## Example Usage

```typescript
import { GetMediasMediaHashedIdLocalizationsSourceMedia } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdLocalizationsSourceMedia = {
  hashedId: "<id>",
  name: "<value>",
  duration: 6844.9,
  createdAt: new Date("2025-03-03T14:14:45.197Z"),
  updatedAt: new Date("2024-06-29T02:22:47.552Z"),
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
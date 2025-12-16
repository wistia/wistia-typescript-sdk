# DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdSourceMedia

The media that the localization is associated with.

## Example Usage

```typescript
import { DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdSourceMedia } from "@wistia/wistia-api-client/models/operations";

let value:
  DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdSourceMedia = {
    hashedId: "<id>",
    name: "<value>",
    duration: 331.96,
    createdAt: new Date("2025-06-10T21:54:43.464Z"),
    updatedAt: new Date("2025-06-25T12:57:37.983Z"),
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
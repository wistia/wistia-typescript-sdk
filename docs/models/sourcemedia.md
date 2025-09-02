# SourceMedia

The media that the localization is associated with.

## Example Usage

```typescript
import { SourceMedia } from "@wistia/wistia-api-client/models";

let value: SourceMedia = {
  hashedId: "<id>",
  name: "<value>",
  duration: 7512.52,
  createdAt: new Date("2025-12-04T23:53:35.122Z"),
  updatedAt: new Date("2024-07-16T10:38:57.708Z"),
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
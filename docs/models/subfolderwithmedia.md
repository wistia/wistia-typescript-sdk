# SubfolderWithMedia

A subfolder with its contained media files.

## Example Usage

```typescript
import { SubfolderWithMedia } from "@wistia/wistia-api-client/models";

let value: SubfolderWithMedia = {
  hashedId: "abc123def4",
  name: "Marketing Videos",
  description: "Collection of all marketing and promotional videos",
  position: 1,
  created: new Date("2024-01-15T10:30:00+00:00"),
  updated: new Date("2024-01-20T14:45:00+00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `hashedId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | A unique alphanumeric identifier for this subfolder.                                          | abc123def4                                                                                    |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name of the subfolder.                                                            | Marketing Videos                                                                              |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | A description for the subfolder.                                                              | Collection of all marketing and promotional videos                                            |
| `position`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | The position of this subfolder within its project, used for ordering.                         | 1                                                                                             |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date when the subfolder was created.                                                      | 2024-01-15T10:30:00+00:00                                                                     |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date when the subfolder was last modified.                                                | 2024-01-20T14:45:00+00:00                                                                     |
| `medias`                                                                                      | [models.MediaProperties](../models/mediaproperties.md)[]                                      | :heavy_minus_sign:                                                                            | Array of media files contained in this subfolder.                                             |                                                                                               |
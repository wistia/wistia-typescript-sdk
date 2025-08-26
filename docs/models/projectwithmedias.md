# ProjectWithMedias

## Example Usage

```typescript
import { ProjectWithMedias } from "wistia/models";

let value: ProjectWithMedias = {
  id: 22570,
  name: "My Project Title",
  description: "About My Project",
  medias: [
    {
      subfolder: {
        hashedId: "abc123def4",
        name: "Marketing Videos",
        description: "Collection of all marketing and promotional videos",
        position: 1,
        created: new Date("2024-01-15T10:30:00+00:00"),
        updated: new Date("2024-01-20T14:45:00+00:00"),
      },
    },
  ],
  mediaCount: 2,
  created: new Date("2010-08-13T18:47:39+00:00"),
  updated: new Date("2010-08-19T21:47:00+00:00"),
  hashedId: "4d23503f70",
  public: false,
  publicId: "4bD",
  anonymousCanUpload: false,
  anonymousCanDownload: false,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                        | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | A unique numeric identifier for the project within the system.                                                              | 22570                                                                                                                       |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The project's display name.                                                                                                 | My Project Title                                                                                                            |
| `description`                                                                                                               | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The project's description.                                                                                                  | About My Project                                                                                                            |
| `medias`                                                                                                                    | [models.NoAssetMediaSchemaMedia](../models/noassetmediaschemamedia.md)[]                                                    | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `mediaCount`                                                                                                                | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | The number of different medias that have been uploaded to the project.                                                      | 2                                                                                                                           |
| `created`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_check_mark:                                                                                                          | The date that the project was originally created.                                                                           | 2010-08-13T18:47:39+00:00                                                                                                   |
| `updated`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_check_mark:                                                                                                          | The date that the project was last updated.                                                                                 | 2010-08-19T21:47:00+00:00                                                                                                   |
| `hashedId`                                                                                                                  | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | A private hashed id, uniquely identifying the project within the system.                                                    | 4d23503f70                                                                                                                  |
| `public`                                                                                                                    | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | A boolean indicating whether the project is available for public (anonymous) viewing.                                       | false                                                                                                                       |
| `publicId`                                                                                                                  | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | If the project is public, this field contains a string representing the ID used for referencing the project in public URLs. | 4bD                                                                                                                         |
| `anonymousCanUpload`                                                                                                        | *boolean*                                                                                                                   | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         | false                                                                                                                       |
| `anonymousCanDownload`                                                                                                      | *boolean*                                                                                                                   | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         | false                                                                                                                       |
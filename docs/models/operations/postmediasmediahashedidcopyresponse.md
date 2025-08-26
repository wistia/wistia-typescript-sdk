# PostMediasMediaHashedIdCopyResponse

## Example Usage

```typescript
import { PostMediasMediaHashedIdCopyResponse } from "wistia/models/operations";

let value: PostMediasMediaHashedIdCopyResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    subfolder: {
      hashedId: "abc123def4",
      name: "Marketing Videos",
      description: "Collection of all marketing and promotional videos",
      position: 1,
      created: new Date("2024-01-15T10:30:00+00:00"),
      updated: new Date("2024-01-20T14:45:00+00:00"),
    },
    project: {
      id: 22570,
      name: "My Project Title",
      hashedId: "4d23503f70",
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                 | Record<string, *string*[]>                                                                                | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `result`                                                                                                  | [models.MediaWithThumbnailAndProjectSchemaMedia](../../models/mediawiththumbnailandprojectschemamedia.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
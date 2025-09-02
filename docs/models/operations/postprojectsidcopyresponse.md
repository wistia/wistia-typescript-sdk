# PostProjectsIdCopyResponse

## Example Usage

```typescript
import { PostProjectsIdCopyResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostProjectsIdCopyResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: 22570,
    name: "My Project Title",
    description: "About My Project",
    mediaCount: 2,
    created: new Date("2010-08-13T18:47:39+00:00"),
    updated: new Date("2010-08-19T21:47:00+00:00"),
    hashedId: "4d23503f70",
    public: false,
    publicId: "4bD",
    anonymousCanUpload: false,
    anonymousCanDownload: false,
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `headers`                                 | Record<string, *string*[]>                | :heavy_check_mark:                        | N/A                                       |
| `result`                                  | [models.Project](../../models/project.md) | :heavy_check_mark:                        | N/A                                       |
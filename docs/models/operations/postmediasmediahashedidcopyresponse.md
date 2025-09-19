# PostMediasMediaHashedIdCopyResponse

## Example Usage

```typescript
import { PostMediasMediaHashedIdCopyResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdCopyResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    project: {
      id: 22570,
      name: "My Project Title",
      hashedId: "4d23503f70",
    },
  },
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `headers`                                     | Record<string, *string*[]>                    | :heavy_check_mark:                            | N/A                                           |
| `result`                                      | [models.MediaCopy](../../models/mediacopy.md) | :heavy_check_mark:                            | N/A                                           |
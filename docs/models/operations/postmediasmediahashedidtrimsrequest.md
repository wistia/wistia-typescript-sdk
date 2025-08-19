# PostMediasMediaHashedIdTrimsRequest

## Example Usage

```typescript
import { PostMediasMediaHashedIdTrimsRequest } from "wistia/models/operations";

let value: PostMediasMediaHashedIdTrimsRequest = {
  mediaHashedId: "<id>",
  trims: {},
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `mediaHashedId`                       | *string*                              | :heavy_check_mark:                    | The hashed ID of the media.           |
| `trims`                               | [models.Trims](../../models/trims.md) | :heavy_check_mark:                    | N/A                                   |
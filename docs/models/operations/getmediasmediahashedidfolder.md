# GetMediasMediaHashedIdFolder

## Example Usage

```typescript
import { GetMediasMediaHashedIdFolder } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdFolder = {
  id: 22570,
  name: "My Folder Title",
  hashedId: "4d23503f70",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *number*                                                                | :heavy_minus_sign:                                                      | A unique numeric identifier for the folder within the system.           | 22570                                                                   |
| `name`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | The folder’s display name.                                              | My Folder Title                                                         |
| `hashedId`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | A private hashed id, uniquely identifying the folder within the system. | 4d23503f70                                                              |
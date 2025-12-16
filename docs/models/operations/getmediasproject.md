# GetMediasProject

## Example Usage

```typescript
import { GetMediasProject } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasProject = {
  id: 22570,
  name: "My Project Title",
  hashedId: "4d23503f70",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *number*                                                                 | :heavy_minus_sign:                                                       | A unique numeric identifier for the project within the system.           | 22570                                                                    |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | The project’s display name.                                              | My Project Title                                                         |
| `hashedId`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | A private hashed id, uniquely identifying the project within the system. | 4d23503f70                                                               |
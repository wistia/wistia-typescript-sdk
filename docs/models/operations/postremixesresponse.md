# PostRemixesResponse

Remix job successfully created.

## Example Usage

```typescript
import { PostRemixesResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostRemixesResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `remixId`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | Hashed ID of the created remix. Use this to poll for status.                             |
| `conversationId`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | Hashed ID of the remix conversation (groups multiple remix iterations).                  |
| `status`                                                                                 | [operations.PostRemixesStatus](../../models/operations/postremixesstatus.md)             | :heavy_minus_sign:                                                                       | Current status of the remix job.                                                         |
| `sourceMedias`                                                                           | [operations.PostRemixesSourceMedia](../../models/operations/postremixessourcemedia.md)[] | :heavy_minus_sign:                                                                       | The source media used for this remix.                                                    |
# PostRemixesRemixHashedIdExportResponse

Export successfully queued.

## Example Usage

```typescript
import { PostRemixesRemixHashedIdExportResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostRemixesRemixHashedIdExportResponse = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `remixId`                                                                                                          | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Hashed ID of the exported remix.                                                                                   |
| `mediaHashedId`                                                                                                    | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Hashed ID of the output media being rendered.                                                                      |
| `mediaName`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Name of the output media.                                                                                          |
| `folderHashedId`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Hashed ID of the destination folder.                                                                               |
| `status`                                                                                                           | [operations.PostRemixesRemixHashedIdExportStatus](../../models/operations/postremixesremixhashedidexportstatus.md) | :heavy_minus_sign:                                                                                                 | Export status.                                                                                                     |
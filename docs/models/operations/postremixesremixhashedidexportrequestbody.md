# PostRemixesRemixHashedIdExportRequestBody

## Example Usage

```typescript
import { PostRemixesRemixHashedIdExportRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostRemixesRemixHashedIdExportRequestBody = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `folderId`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | Hashed ID of the destination folder. Defaults to the source media's folder. |
| `name`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | Custom name for the exported media.                                         |
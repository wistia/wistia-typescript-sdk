# GetCustomMetadataFieldDefinitionsRequest

## Example Usage

```typescript
import { GetCustomMetadataFieldDefinitionsRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetCustomMetadataFieldDefinitionsRequest = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `includeArchived`                                                                         | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Include archived fields in the response                                                   |
| `page`                                                                                    | *number*                                                                                  | :heavy_minus_sign:                                                                        | The page number to retrieve. This cannot be combined with `cursor`,<br/>pagination.<br/>  |
| `perPage`                                                                                 | *number*                                                                                  | :heavy_minus_sign:                                                                        | The number of medias per page. Use this for both offset pagination and cursor pagination. |
# PutCustomMetadataFieldDefinitionsKeyOptionResponse

## Example Usage

```typescript
import { PutCustomMetadataFieldDefinitionsKeyOptionResponse } from "@wistia/wistia-api-client/models/operations";

let value: PutCustomMetadataFieldDefinitionsKeyOptionResponse = {
  key: "high",
  label: "High",
  position: 0,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `key`                                                                       | *string*                                                                    | :heavy_minus_sign:                                                          | The option's immutable identifier, unique within the field.                 | high                                                                        |
| `label`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | The option's editable display name.                                         | High                                                                        |
| `position`                                                                  | *number*                                                                    | :heavy_minus_sign:                                                          | The option's display order within the field, ascending from 0. May be null. | 0                                                                           |
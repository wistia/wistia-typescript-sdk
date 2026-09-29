# PostCustomMetadataFieldDefinitionsOptionRequest

## Example Usage

```typescript
import { PostCustomMetadataFieldDefinitionsOptionRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostCustomMetadataFieldDefinitionsOptionRequest = {
  key: "high",
  label: "High",
  position: 0,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `key`                                                                                          | *string*                                                                                       | :heavy_minus_sign:                                                                             | The option's immutable identifier, unique within the field. Defaults to a parameterized label. | high                                                                                           |
| `label`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The option's display name.                                                                     | High                                                                                           |
| `position`                                                                                     | *number*                                                                                       | :heavy_minus_sign:                                                                             | The option's display order within the field, ascending from 0.                                 | 0                                                                                              |
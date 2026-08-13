# GetCustomMetadataFieldDefinitionsConfig1

## Example Usage

```typescript
import { GetCustomMetadataFieldDefinitionsConfig1 } from "@wistia/wistia-api-client/models/operations";

let value: GetCustomMetadataFieldDefinitionsConfig1 = {
  options: [
    {
      key: "high",
      label: "High",
      position: 0,
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `options`                                                                                                                  | [operations.GetCustomMetadataFieldDefinitionsOption](../../models/operations/getcustommetadatafielddefinitionsoption.md)[] | :heavy_check_mark:                                                                                                         | The field's active options, in display order.                                                                              |
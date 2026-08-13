# GetCustomMetadataFieldDefinitionsKeyConfig1

## Example Usage

```typescript
import { GetCustomMetadataFieldDefinitionsKeyConfig1 } from "@wistia/wistia-api-client/models/operations";

let value: GetCustomMetadataFieldDefinitionsKeyConfig1 = {
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

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `options`                                                                                                                        | [operations.GetCustomMetadataFieldDefinitionsKeyOption](../../models/operations/getcustommetadatafielddefinitionskeyoption.md)[] | :heavy_check_mark:                                                                                                               | The field's active options, in display order.                                                                                    |
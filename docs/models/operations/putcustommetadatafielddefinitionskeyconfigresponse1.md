# PutCustomMetadataFieldDefinitionsKeyConfigResponse1

## Example Usage

```typescript
import { PutCustomMetadataFieldDefinitionsKeyConfigResponse1 } from "@wistia/wistia-api-client/models/operations";

let value: PutCustomMetadataFieldDefinitionsKeyConfigResponse1 = {
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

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                        | [operations.PutCustomMetadataFieldDefinitionsKeyOptionResponse](../../models/operations/putcustommetadatafielddefinitionskeyoptionresponse.md)[] | :heavy_check_mark:                                                                                                                               | The field's active options, in display order.                                                                                                    |
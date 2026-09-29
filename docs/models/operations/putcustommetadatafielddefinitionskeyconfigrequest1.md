# PutCustomMetadataFieldDefinitionsKeyConfigRequest1

## Example Usage

```typescript
import { PutCustomMetadataFieldDefinitionsKeyConfigRequest1 } from "@wistia/wistia-api-client/models/operations";

let value: PutCustomMetadataFieldDefinitionsKeyConfigRequest1 = {
  options: [
    {
      key: "high",
      label: "High",
      position: 0,
      destroy: false,
      force: false,
    },
  ],
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`                                                                                                                                      | [operations.PutCustomMetadataFieldDefinitionsKeyOptionRequest](../../models/operations/putcustommetadatafielddefinitionskeyoptionrequest.md)[] | :heavy_check_mark:                                                                                                                             | Option add, edit, or remove operations, matched by their immutable key.                                                                        |
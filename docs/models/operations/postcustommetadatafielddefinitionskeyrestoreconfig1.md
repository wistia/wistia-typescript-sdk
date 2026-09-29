# PostCustomMetadataFieldDefinitionsKeyRestoreConfig1

## Example Usage

```typescript
import { PostCustomMetadataFieldDefinitionsKeyRestoreConfig1 } from "@wistia/wistia-api-client/models/operations";

let value: PostCustomMetadataFieldDefinitionsKeyRestoreConfig1 = {
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
| `options`                                                                                                                                        | [operations.PostCustomMetadataFieldDefinitionsKeyRestoreOption](../../models/operations/postcustommetadatafielddefinitionskeyrestoreoption.md)[] | :heavy_check_mark:                                                                                                                               | The field's active options, in display order.                                                                                                    |
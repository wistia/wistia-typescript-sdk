# PutCustomMetadataFieldDefinitionsKeyRequest

## Example Usage

```typescript
import { PutCustomMetadataFieldDefinitionsKeyRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutCustomMetadataFieldDefinitionsKeyRequest = {
  key: "client",
  requestBody: {
    label: "Client",
    defaultValue: "high",
    position: 0,
    config: {
      allowsGroupRefs: false,
    },
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                    | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The field's immutable key                                                                                                                | client                                                                                                                                   |
| `requestBody`                                                                                                                            | [operations.PutCustomMetadataFieldDefinitionsKeyRequestBody](../../models/operations/putcustommetadatafielddefinitionskeyrequestbody.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |                                                                                                                                          |
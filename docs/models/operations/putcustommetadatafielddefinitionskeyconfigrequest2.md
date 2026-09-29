# PutCustomMetadataFieldDefinitionsKeyConfigRequest2

## Example Usage

```typescript
import { PutCustomMetadataFieldDefinitionsKeyConfigRequest2 } from "@wistia/wistia-api-client/models/operations";

let value: PutCustomMetadataFieldDefinitionsKeyConfigRequest2 = {
  allowsGroupRefs: false,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowsGroupRefs`                                                                                                                                     | *boolean*                                                                                                                                             | :heavy_check_mark:                                                                                                                                    | For contact_ref and contact_multi_ref fields, whether values may reference contact groups in addition to contacts. Defaults to false (contacts only). | false                                                                                                                                                 |
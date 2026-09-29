# PostCustomMetadataFieldDefinitionsConfigRequest1

## Example Usage

```typescript
import { PostCustomMetadataFieldDefinitionsConfigRequest1 } from "@wistia/wistia-api-client/models/operations";

let value: PostCustomMetadataFieldDefinitionsConfigRequest1 = {
  options: [],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                  | [operations.PostCustomMetadataFieldDefinitionsOptionRequest](../../models/operations/postcustommetadatafielddefinitionsoptionrequest.md)[] | :heavy_check_mark:                                                                                                                         | The options to create on a single_select or multi_select field.                                                                            |
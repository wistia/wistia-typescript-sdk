# PostCustomMetadataFieldDefinitionsConfigResponse2

## Example Usage

```typescript
import { PostCustomMetadataFieldDefinitionsConfigResponse2 } from "@wistia/wistia-api-client/models/operations";

let value: PostCustomMetadataFieldDefinitionsConfigResponse2 = {
  usedCurrencies: [
    "EUR",
    "USD",
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `usedCurrencies`                                              | *string*[]                                                    | :heavy_check_mark:                                            | Distinct currency codes among this field's values, ascending. | [<br/>"EUR",<br/>"USD"<br/>]                                  |
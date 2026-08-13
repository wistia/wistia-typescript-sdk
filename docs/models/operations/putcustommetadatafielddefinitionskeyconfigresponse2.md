# PutCustomMetadataFieldDefinitionsKeyConfigResponse2

## Example Usage

```typescript
import { PutCustomMetadataFieldDefinitionsKeyConfigResponse2 } from "@wistia/wistia-api-client/models/operations";

let value: PutCustomMetadataFieldDefinitionsKeyConfigResponse2 = {
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
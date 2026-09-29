# BrandGradient

## Example Usage

```typescript
import { BrandGradient } from "@wistia/wistia-api-client/models/operations";

let value: BrandGradient = {
  name: "<value>",
  stops: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The brand and field the gradient comes from (e.g. "Acme primary color"). |
| `stops`                                                                  | [operations.Stop](../../models/operations/stop.md)[]                     | :heavy_check_mark:                                                       | The gradient's color stops, sorted by position.                          |
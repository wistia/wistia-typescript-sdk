# UpdateBrandPreloadLogo

## Example Usage

```typescript
import { UpdateBrandPreloadLogo } from "@wistia/wistia-api-client/models/operations";

let value: UpdateBrandPreloadLogo = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `theme`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | "dark" or "light".                                                                           |
| `type`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | e.g. "logo", "icon", "symbol".                                                               |
| `tags`                                                                                       | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `formats`                                                                                    | [operations.UpdateBrandPreloadFormat](../../models/operations/updatebrandpreloadformat.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |
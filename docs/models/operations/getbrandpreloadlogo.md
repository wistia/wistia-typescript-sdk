# GetBrandPreloadLogo

## Example Usage

```typescript
import { GetBrandPreloadLogo } from "@wistia/wistia-api-client/models/operations";

let value: GetBrandPreloadLogo = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `theme`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | "dark" or "light".                                                                     |
| `type`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | e.g. "logo", "icon", "symbol".                                                         |
| `tags`                                                                                 | *string*[]                                                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `formats`                                                                              | [operations.GetBrandPreloadFormat](../../models/operations/getbrandpreloadformat.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |
# GetBrandKitColorsResponse

The current account's brand colors, from its brand kits and its brands.

## Example Usage

```typescript
import { GetBrandKitColorsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetBrandKitColorsResponse = {
  colors: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  brandGradients: [
    {
      name: "<value>",
      stops: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `colors`                                                                                                                                                                                                                                                                                 | [operations.Color](../../models/operations/color.md)[]                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                       | Solid brand colors: every brand kit's color tokens (newest kit<br/>first, tokens in the order they were added), then each brand's<br/>primary and page background color when it is a solid color<br/>(default brand first). A color already listed isn't repeated.<br/>Empty when the account has none.<br/> |
| `brandGradients`                                                                                                                                                                                                                                                                         | [operations.BrandGradient](../../models/operations/brandgradient.md)[]                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                       | Each brand's primary and page background color that is set to a<br/>gradient, default brand first. Stops whose color isn't a hex color<br/>are left out, and a gradient with fewer than two hex stops left<br/>isn't listed. Empty when none are gradients.<br/>                         |
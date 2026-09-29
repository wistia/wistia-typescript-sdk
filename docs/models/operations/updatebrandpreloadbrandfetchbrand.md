# UpdateBrandPreloadBrandfetchBrand

Brandfetch response for the contact's email domain. Fields are nil for
free-mail domains, Wistia's own domain, and accounts where Brandfetch
has no data — the caller silently skips the preload in every such case.


## Example Usage

```typescript
import { UpdateBrandPreloadBrandfetchBrand } from "@wistia/wistia-api-client/models/operations";

let value: UpdateBrandPreloadBrandfetchBrand = {
  domain: "selfish-digit.biz",
  primaryColor: "<value>",
  logo: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `domain`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `primaryColor`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Hex color string (e.g. "#3366FF") or null if Brandfetch returned no accent/primary color.                                  |
| `logo`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Absolute URL to the dark-theme logo, or null if none is available.                                                         |
| `font`                                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `colors`                                                                                                                   | *string*[]                                                                                                                 | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `logos`                                                                                                                    | [operations.UpdateBrandPreloadLogo](../../models/operations/updatebrandpreloadlogo.md)[]                                   | :heavy_minus_sign:                                                                                                         | Full Brandfetch logos list — Glass consumes only `logo` (the primary), but callers that want theme variants can walk this. |
| `status`                                                                                                                   | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | HTTP status Brandfetch responded with (204 when empty).                                                                    |
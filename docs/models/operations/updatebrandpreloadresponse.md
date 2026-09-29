# UpdateBrandPreloadResponse

Brandfetch-derived brand info for the current account's contact domain,
plus whether the account has any brand kits configured.


## Example Usage

```typescript
import { UpdateBrandPreloadResponse } from "@wistia/wistia-api-client/models/operations";

let value: UpdateBrandPreloadResponse = {
  hasBrandKits: true,
  brandfetchBrand: {
    domain: "long-term-injunction.org",
    primaryColor: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                  | Required                                                                                                                                                                                                              | Description                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hasBrandKits`                                                                                                                                                                                                        | *boolean*                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                    | True iff the account has one or more configured brand kits. Glass uses<br/>this to skip the onboarding preload step for accounts that already have<br/>a brand kit set up.<br/>                                       |
| `brandfetchBrand`                                                                                                                                                                                                     | [operations.UpdateBrandPreloadBrandfetchBrand](../../models/operations/updatebrandpreloadbrandfetchbrand.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                    | Brandfetch response for the contact's email domain. Fields are nil for<br/>free-mail domains, Wistia's own domain, and accounts where Brandfetch<br/>has no data — the caller silently skips the preload in every such case.<br/> |
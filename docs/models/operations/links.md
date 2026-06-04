# Links

URLs for plan, usage, and billing pages

## Example Usage

```typescript
import { Links } from "@wistia/wistia-api-client/models/operations";

let value: Links = {
  plansUrl: "https://faint-grouper.name",
  usageUrl: "https://circular-cop-out.biz/",
  billingUrl: "https://distorted-suv.org",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `plansUrl`                                                              | *string*                                                                | :heavy_check_mark:                                                      | URL to the account's plans page. Always present.                        |
| `usageUrl`                                                              | *string*                                                                | :heavy_check_mark:                                                      | URL to the account's usage page. Null for non-owner/manager contacts.   |
| `billingUrl`                                                            | *string*                                                                | :heavy_check_mark:                                                      | URL to the account's billing page. Null for non-owner/manager contacts. |
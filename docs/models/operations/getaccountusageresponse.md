# GetAccountUsageResponse

Account usage and plan information, including storage, media, seat, and bandwidth limits.
Fields under `limits` are only visible to account owners and managers.


## Example Usage

```typescript
import { GetAccountUsageResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAccountUsageResponse = {
  plan: {
    tier: "<value>",
    name: "<value>",
    isStandard: true,
    isTrial: false,
    trialExpiresAt: "<value>",
  },
  canUpload: true,
  uploadBlockedReason: "<value>",
  limits: null,
  links: {
    plansUrl: "https://authorized-information.biz/",
    usageUrl: "https://marvelous-loaf.org",
    billingUrl: null,
  },
  role: "<value>",
  verifiedDomain: false,
  canInviteTeammates: true,
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `plan`                                                                                                                                                                                            | [operations.Plan](../../models/operations/plan.md)                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                | The account's current plan information                                                                                                                                                            |
| `canUpload`                                                                                                                                                                                       | *boolean*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                | Whether the next upload will succeed. False when an inflexible media or storage limit has been reached.                                                                                           |
| `uploadBlockedReason`                                                                                                                                                                             | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The reason uploads are blocked, or null if uploads are allowed.<br/>Known values: `reached_media_limit`, `reached_storage_limit`.<br/>                                                            |
| `limits`                                                                                                                                                                                          | [operations.Limits](../../models/operations/limits.md)                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                | Usage and limit data. Null when the authenticated contact does not have<br/>billing visibility (i.e. is not an account owner or manager).<br/>                                                    |
| `links`                                                                                                                                                                                           | [operations.Links](../../models/operations/links.md)                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                | URLs for plan, usage, and billing pages                                                                                                                                                           |
| `role`                                                                                                                                                                                            | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The authenticated contact's role on the account. One of `owner`, `manager`,<br/>`standard_user`, `limited_user`, `viewer`. Null when the token isn't<br/>associated with a specific contact.<br/> |
| `verifiedDomain`                                                                                                                                                                                  | *boolean*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                | Whether the account has at least one verified business domain (i.e. an<br/>owner whose email domain is verified and business-classified). Independent<br/>of plan tier.<br/>                      |
| `canInviteTeammates`                                                                                                                                                                              | *boolean*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                | Whether the authenticated contact can invite additional teammates via the<br/>modern contacts endpoint. True when the contact is an owner or manager and<br/>the account has a verified business domain.<br/> |
# PutMediasMediaIdShareLinkVisibilityResponse

Controls who can view the media via this share link.

- `unlocked`: anyone with the link can view the media.
- `account`: only signed-in members of the media's account can view.
- `locked`: only contacts with access to the media's folder can view.
- `domain_verified`: only viewers signed in with an email address at a
  domain verified on the media's account can view. Requires the account
  to be enrolled in the domain validation gate; otherwise setting this
  value returns 400.


## Example Usage

```typescript
import { PutMediasMediaIdShareLinkVisibilityResponse } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdShareLinkVisibilityResponse = "account";
```

## Values

```typescript
"unlocked" | "account" | "locked" | "domain_verified"
```
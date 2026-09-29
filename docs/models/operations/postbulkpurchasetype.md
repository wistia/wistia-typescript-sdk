# PostBulkPurchaseType

The kind of parent `id` names. Required, because a hashed ID does not say
what it belongs to -- the same value could name a folder or a channel.
Use `account` to order for every media in the account.


## Example Usage

```typescript
import { PostBulkPurchaseType } from "@wistia/wistia-api-client/models/operations";

let value: PostBulkPurchaseType = "folder";
```

## Values

```typescript
"account" | "folder" | "subfolder" | "channel"
```
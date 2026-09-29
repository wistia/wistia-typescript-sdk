# PostBulkType

The kind of parent `id` names. Required, because a hashed ID does not say
what it belongs to -- the same value could name a folder or a channel.
Use `account` to mean every record the job could reach, with no `id`.


## Example Usage

```typescript
import { PostBulkType } from "@wistia/wistia-api-client/models/operations";

let value: PostBulkType = "account";
```

## Values

```typescript
"account" | "folder" | "subfolder" | "channel" | "media"
```
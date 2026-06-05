# GetFoldersKind

Indicates the folder's access scope, relative to the requesting user. One of:
- `library`: a library the requester owns. Libraries can still be shared with specific contacts or contact groups; the only restriction is that they cannot be shared with the whole account.
- `shared`: a folder the requester has access to via a Contact or ContactGroup sharing — this includes both shared folders and another contact's library that the requester has been granted access to.
- `account`: a folder shared with the whole account (everyone in the company can see it).


## Example Usage

```typescript
import { GetFoldersKind } from "@wistia/wistia-api-client/models/operations";

let value: GetFoldersKind = "shared";
```

## Values

```typescript
"library" | "shared" | "account"
```
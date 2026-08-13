# PostBulkOperation

The operation to perform. Media creation is not supported here --
uploads and URL imports have their own endpoints.

`delete` also soft-deletes media inside a `folder` or `subfolder`. An
account owner or manager can restore it from the trash until it purges.

`move` applies to `media` only, one action per media. Each action
carries its own destination, so a single request can move media into
many different folders.


## Example Usage

```typescript
import { PostBulkOperation } from "@wistia/wistia-api-client/models/operations";

let value: PostBulkOperation = "update";
```

## Values

```typescript
"create" | "update" | "delete" | "move"
```
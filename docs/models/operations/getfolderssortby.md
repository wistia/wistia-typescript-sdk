# GetFoldersSortBy

Ordering. When using cursor pagination (see cursor param),
only `id`, `updated` and `created` are supported. All other sort_by options
require offset pagination.


## Example Usage

```typescript
import { GetFoldersSortBy } from "@wistia/wistia-api-client/models/operations";

let value: GetFoldersSortBy = "updated";
```

## Values

```typescript
"name" | "created" | "updated" | "mediaCount" | "id"
```
# GetTagsSortBy

Ordering. When using cursor pagination (see cursor param),
only `id`, `updated` and `created` are supported. All other sort_by options
require offset pagination.


## Example Usage

```typescript
import { GetTagsSortBy } from "@wistia/wistia-api-client/models/operations";

let value: GetTagsSortBy = "taggingsCount";
```

## Values

```typescript
"name" | "created" | "updated" | "taggingsCount"
```
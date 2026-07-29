# GetBrandsSortBy

Ordering. When using cursor pagination (see cursor param),
only `id`, `updated` and `created` are supported. All other sort_by options
require offset pagination.


## Example Usage

```typescript
import { GetBrandsSortBy } from "@wistia/wistia-api-client/models/operations";

let value: GetBrandsSortBy = "id";
```

## Values

```typescript
"name" | "created" | "updated" | "id"
```
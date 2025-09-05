# GetMediasSortBy

Ordering. When using cursor pagination (see cursor param),
only `id` and `created` are supported. All other sort_by options (`name`, `updated`, `position`)
require offset pagination.


## Example Usage

```typescript
import { GetMediasSortBy } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasSortBy = "name";
```

## Values

```typescript
"name" | "created" | "updated" | "position"
```
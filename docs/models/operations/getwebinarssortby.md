# GetWebinarsSortBy

Field to sort by. When using cursor pagination (see cursor param),
only `id` and `scheduled_for` are supported. All other sort_by options
(`title`, `created`, `updated`) require offset pagination.


## Example Usage

```typescript
import { GetWebinarsSortBy } from "@wistia/wistia-api-client/models/operations";

let value: GetWebinarsSortBy = "updated";
```

## Values

```typescript
"scheduled_for" | "title" | "created" | "updated" | "id"
```
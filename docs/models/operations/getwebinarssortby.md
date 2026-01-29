# GetWebinarsSortBy

Field to sort by. When using cursor pagination (see cursor param),
only `id` and `scheduled_for` are supported.


## Example Usage

```typescript
import { GetWebinarsSortBy } from "@wistia/wistia-api-client/models/operations";

let value: GetWebinarsSortBy = "id";
```

## Values

```typescript
"scheduled_for" | "id"
```
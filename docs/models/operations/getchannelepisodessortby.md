# GetChannelEpisodesSortBy

Ordering. Default is ID ASC. When using cursor pagination (see cursor param),
only `id` and `created` are supported. All other sort_by options (`position`, `title`, `updated`)
require offset pagination.


## Example Usage

```typescript
import { GetChannelEpisodesSortBy } from "@wistia/wistia-api-client/models/operations";

let value: GetChannelEpisodesSortBy = "title";
```

## Values

```typescript
"position" | "title" | "created" | "updated" | "id"
```
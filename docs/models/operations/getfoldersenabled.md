# GetFoldersEnabled

If `cursor[enabled]` is set to 1, the first result set will be fetched with cursor pagination enabled. This
values is ignored if `cursor[before]` or `cursor[after]` are set.


## Example Usage

```typescript
import { GetFoldersEnabled } from "@wistia/wistia-api-client/models/operations";

let value: GetFoldersEnabled = 0;
```

## Values

```typescript
0 | 1
```
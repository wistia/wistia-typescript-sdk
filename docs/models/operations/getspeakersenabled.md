# GetSpeakersEnabled

If `cursor[enabled]` is set to 1, the first result set will be fetched with cursor pagination enabled. This
values is ignored if `cursor[before]` or `cursor[after]` are set.


## Example Usage

```typescript
import { GetSpeakersEnabled } from "@wistia/wistia-api-client/models/operations";

let value: GetSpeakersEnabled = 1;
```

## Values

```typescript
0 | 1
```
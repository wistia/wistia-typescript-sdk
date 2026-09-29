# PathMatch

How to match the path of `embed_url` against embed locations. `exact` requires the path to match exactly; `prefix` matches any embed path starting with it.

## Example Usage

```typescript
import { PathMatch } from "@wistia/wistia-api-client/models/operations";

let value: PathMatch = "exact";
```

## Values

```typescript
"exact" | "prefix"
```
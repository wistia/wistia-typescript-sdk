# JobOperation

The operation to apply to every matching record. `create` is not
accepted here.


## Example Usage

```typescript
import { JobOperation } from "@wistia/wistia-api-client/models/operations";

let value: JobOperation = "delete";
```

## Values

```typescript
"update" | "delete" | "move"
```
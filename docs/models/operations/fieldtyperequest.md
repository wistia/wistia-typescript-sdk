# FieldTypeRequest

The field's data type. Immutable after creation. `url`, `email`, `money`, `contact_ref`, and `contact_multi_ref` are early-access types: creating one on an account without access returns 422 naming the types the account can use. Existing fields of these types keep working.

## Example Usage

```typescript
import { FieldTypeRequest } from "@wistia/wistia-api-client/models/operations";

let value: FieldTypeRequest = "single_select";
```

## Values

```typescript
"text" | "number" | "date" | "boolean" | "single_select" | "short_text" | "url" | "email" | "money" | "time" | "datetime" | "multi_select" | "contact_ref" | "contact_multi_ref"
```
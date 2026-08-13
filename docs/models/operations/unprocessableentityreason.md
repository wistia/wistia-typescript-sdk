# UnprocessableEntityReason

Why the edit could not be applied. `ambiguous`: matched more than once (disambiguate with a candidate's time range). `not_found`: no exact match (adopt a suggestion's exact text). `overlapping`: two edits target overlapping spans. `spans_paragraph`: the target crosses a paragraph or non-editable boundary.

## Example Usage

```typescript
import { UnprocessableEntityReason } from "@wistia/wistia-api-client/models/operations";

let value: UnprocessableEntityReason = "ambiguous";
```

## Values

```typescript
"ambiguous" | "not_found" | "overlapping" | "spans_paragraph"
```
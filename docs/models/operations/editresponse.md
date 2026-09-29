# EditResponse

## Example Usage

```typescript
import { EditResponse } from "@wistia/wistia-api-client/models/operations";

let value: EditResponse = {
  targetText: "<value>",
  replacementText: "<value>",
  matchedText: "<value>",
  context: "<value>",
  original: {
    startMs: 439679,
    endMs: 515513,
  },
  replacement: {
    startMs: 58397,
    endMs: 32120,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `targetText`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | The target text that was sent.                                                                 |
| `replacementText`                                                                              | *string*                                                                                       | :heavy_check_mark:                                                                             | The replacement text that was sent (empty string for a deletion).                              |
| `matchedText`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | The transcript text that actually matched (may differ from target_text only in normalization). |
| `context`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | Surrounding transcript text for the match, for disambiguation.                                 |
| `original`                                                                                     | [operations.Original](../../models/operations/original.md)                                     | :heavy_check_mark:                                                                             | The matched span's time range, in the requested media's coordinate space.                      |
| `replacement`                                                                                  | [operations.Replacement](../../models/operations/replacement.md)                               | :heavy_check_mark:                                                                             | The replacement span's new time range, or null when the target was deleted.                    |
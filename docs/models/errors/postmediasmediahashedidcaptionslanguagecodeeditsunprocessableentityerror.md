# PostMediasMediaHashedIdCaptionsLanguageCodeEditsUnprocessableEntityError

One or more edits could not be resolved, so nothing was written. Fix the listed failures and retry the whole batch.

## Example Usage

```typescript
import { PostMediasMediaHashedIdCaptionsLanguageCodeEditsUnprocessableEntityError } from "@wistia/wistia-api-client/models/errors";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `errors`                                                           | *string*[]                                                         | :heavy_check_mark:                                                 | Human-readable summary of what went wrong.                         |
| `editFailures`                                                     | [operations.EditFailure](../../models/operations/editfailure.md)[] | :heavy_check_mark:                                                 | One entry per edit that could not be resolved.                     |
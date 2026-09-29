# PostCustomMetadataFieldDefinitionsUnprocessableEntityError

Unprocessable entity, the request parameters were invalid.

## Example Usage

```typescript
import { PostCustomMetadataFieldDefinitionsUnprocessableEntityError } from "@wistia/wistia-api-client/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `error`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | A single error message describing what went wrong.                    |                                                                       |
| `errors`                                                              | *string*[]                                                            | :heavy_minus_sign:                                                    | Array of error messages describing what went wrong.                   | [<br/>"Title is required",<br/>"Event duration must be at least 15 minutes"<br/>] |
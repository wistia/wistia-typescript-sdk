# PostMediasMediaHashedIdTrimsUnprocessableEntityError

Unprocessable entity, the request parameters were invalid.

## Example Usage

```typescript
import { PostMediasMediaHashedIdTrimsUnprocessableEntityError } from "@wistia/wistia-api-client/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                   | Record<string, *string*[]>                                                                                 | :heavy_minus_sign:                                                                                         | Object containing validation errors grouped by field name. Each field contains an array of error messages. | {<br/>"trims": [<br/>"didn't match hh:mm:ss.xxx-hh:mm:ss.xxx"<br/>],<br/>"media": [<br/>"must be part of a project"<br/>]<br/>} |
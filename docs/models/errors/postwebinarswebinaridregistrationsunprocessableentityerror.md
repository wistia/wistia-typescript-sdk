# PostWebinarsWebinarIdRegistrationsUnprocessableEntityError

Unprocessable entity, the request parameters were invalid.

## Example Usage

```typescript
import { PostWebinarsWebinarIdRegistrationsUnprocessableEntityError } from "@wistia/wistia-api-client/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                   | Record<string, *string*[]>                                                                                 | :heavy_minus_sign:                                                                                         | Object containing validation errors grouped by field name. Each field contains an array of error messages. | {<br/>"email": [<br/>"is invalid",<br/>"can't be blank"<br/>],<br/>"first_name": [<br/>"can't be blank"<br/>]<br/>} |
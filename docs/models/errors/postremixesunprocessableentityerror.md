# PostRemixesUnprocessableEntityError

Unprocessable entity (e.g., credit limit reached, media not found).

## Example Usage

```typescript
import { PostRemixesUnprocessableEntityError } from "@wistia/wistia-api-client/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `creditsRenewAt`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When remix credits renew (ISO 8601), if the error is a credit limit.                          |
# ExpiringAccessTokenInput

## Example Usage

```typescript
import { ExpiringAccessTokenInput } from "wistia/models";

let value: ExpiringAccessTokenInput = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `expiresAt`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | an ISO8601 string of when the token will expire, defaults to two days from creation |
| `authorizations`                                                                    | [models.Authorization](../models/authorization.md)[]                                | :heavy_minus_sign:                                                                  | a list of authorizations the token will have                                        |
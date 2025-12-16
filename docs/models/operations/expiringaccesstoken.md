# ExpiringAccessToken

## Example Usage

```typescript
import { ExpiringAccessToken } from "@wistia/wistia-api-client/models/operations";

let value: ExpiringAccessToken = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `expiresAt`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | an ISO8601 string of when the token will expire, defaults to two days from creation |
| `authorizations`                                                                    | [operations.Authorization](../../models/operations/authorization.md)[]              | :heavy_minus_sign:                                                                  | a list of authorizations the token will have                                        |
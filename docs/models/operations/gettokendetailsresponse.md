# GetTokenDetailsResponse

The token used to make the API request. This is primarily for debugging
purposes. Sensitive data such as the token value is excluded.


## Example Usage

```typescript
import { GetTokenDetailsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetTokenDetailsResponse = {
  type: "permanent",
  application: null,
  scopes: [
    "<value 1>",
    "<value 2>",
  ],
  name: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [operations.GetTokenDetailsType](../../models/operations/gettokendetailstype.md)   | :heavy_check_mark:                                                                 | The type of token used.                                                            |
| `application`                                                                      | [operations.Application](../../models/operations/application.md)                   | :heavy_check_mark:                                                                 | The application used by the token. Will be null if the token isn't an oauth token. |
| `scopes`                                                                           | *string*[]                                                                         | :heavy_check_mark:                                                                 | The scopes of the token.                                                           |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | The name of the token. This only applies to permanent tokens.                      |
| `expiresAt`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | When the token expires. A null token means it never expires.                       |
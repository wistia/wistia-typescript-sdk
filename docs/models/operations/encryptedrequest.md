# EncryptedRequest

## Example Usage

```typescript
import { EncryptedRequest } from "@wistia/wistia-api-client/models/operations";

let value: EncryptedRequest = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `passwordProtectPassword`                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | The password viewers must enter. Stored encrypted; also returned by the show endpoint. |
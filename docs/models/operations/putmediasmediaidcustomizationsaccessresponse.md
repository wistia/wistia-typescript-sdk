# PutMediasMediaIdCustomizationsAccessResponse

Explicitly-set password-protection settings. Values are returned as strings.
Includes the stored password under `encrypted` (redaction tracked in sc-65366).


## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsAccessResponse } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsAccessResponse = {};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `private`                                                                                                                                            | [operations.PutMediasMediaIdCustomizationsAccessPrivateResponse](../../models/operations/putmediasmediaidcustomizationsaccessprivateresponse.md)     | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `encrypted`                                                                                                                                          | [operations.PutMediasMediaIdCustomizationsAccessEncryptedResponse](../../models/operations/putmediasmediaidcustomizationsaccessencryptedresponse.md) | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `plugin`                                                                                                                                             | [operations.PutMediasMediaIdCustomizationsAccessPluginResponse](../../models/operations/putmediasmediaidcustomizationsaccesspluginresponse.md)       | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
# PutMediasMediaIdCustomizationsAccessRequestBody

Password-protection settings for a video. Partial update; send a field as
null to clear it. The password you send is stored encrypted.


## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsAccessRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsAccessRequestBody = {};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `private`                                                                                                                                    | [operations.PrivateRequest](../../models/operations/privaterequest.md)                                                                       | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `encrypted`                                                                                                                                  | [operations.EncryptedRequest](../../models/operations/encryptedrequest.md)                                                                   | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `plugin`                                                                                                                                     | [operations.PutMediasMediaIdCustomizationsAccessPluginRequest](../../models/operations/putmediasmediaidcustomizationsaccesspluginrequest.md) | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
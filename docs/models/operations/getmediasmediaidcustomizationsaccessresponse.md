# GetMediasMediaIdCustomizationsAccessResponse

Explicitly-set password-protection settings. Values are returned as strings.
Includes the stored password under `encrypted` (redaction tracked in sc-65366).


## Example Usage

```typescript
import { GetMediasMediaIdCustomizationsAccessResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaIdCustomizationsAccessResponse = {};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `private`                                                                                                                            | [operations.GetMediasMediaIdCustomizationsAccessPrivate](../../models/operations/getmediasmediaidcustomizationsaccessprivate.md)     | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `encrypted`                                                                                                                          | [operations.GetMediasMediaIdCustomizationsAccessEncrypted](../../models/operations/getmediasmediaidcustomizationsaccessencrypted.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `plugin`                                                                                                                             | [operations.GetMediasMediaIdCustomizationsAccessPlugin](../../models/operations/getmediasmediaidcustomizationsaccessplugin.md)       | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
# PutMediasMediaIdCustomizationsLeadCaptureRequestBody

Configure viewer email collection for a video using a single provider
discriminator. Choose a provider, whether it is enabled, and provider-specific
settings. Which settings apply depends on the provider (e.g. a Wistia Form
uses hashedId; CRM providers reference an external form).


## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsLeadCaptureRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsLeadCaptureRequestBody = {
  provider: "pardot",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `provider`                                                                            | [operations.Provider](../../models/operations/provider.md)                            | :heavy_check_mark:                                                                    | Which lead-capture mechanism to configure.                                            |
| `enabled`                                                                             | *boolean*                                                                             | :heavy_minus_sign:                                                                    | Whether the selected provider is turned on. Defaults to true.                         |
| `settings`                                                                            | [operations.Settings](../../models/operations/settings.md)                            | :heavy_minus_sign:                                                                    | Provider-specific settings. Only the fields relevant to the chosen provider are used. |
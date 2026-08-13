# Settings

Provider-specific settings. Only the fields relevant to the chosen provider are used.

## Example Usage

```typescript
import { Settings } from "@wistia/wistia-api-client/models/operations";

let value: Settings = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `time`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | When the form appears: "start"/"before", a number of seconds, or "end". |
| `allowSkip`                                                             | *boolean*                                                               | :heavy_minus_sign:                                                      | Whether the viewer may skip the form.                                   |
| `hashedId`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | (Wistia Form) The hashed ID of the Wistia form to embed.                |
| `displayMode`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | (Wistia Form) How the form is displayed.                                |
| `showLogo`                                                              | *boolean*                                                               | :heavy_minus_sign:                                                      | (Wistia Form) Whether to show the Wistia logo on the form.              |
| `backgroundColor`                                                       | *string*                                                                | :heavy_minus_sign:                                                      | Background color of the form as a hex string.                           |
| `formId`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | (HubSpot/Marketo/Pardot) The external form identifier.                  |
| `portalId`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | (HubSpot) The HubSpot portal/account identifier.                        |
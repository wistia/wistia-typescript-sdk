# GetMediasMediaIdCustomizationsCaptionsV1

Captions plugin configuration (response format)

## Example Usage

```typescript
import { GetMediasMediaIdCustomizationsCaptionsV1 } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaIdCustomizationsCaptionsV1 = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `on`                                                                                    | *string*                                                                                | :heavy_minus_sign:                                                                      | String representation of whether the captions plugin is enabled ("true" or "false").    |
| `onByDefault`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | String representation of whether captions are turned on by default ("true" or "false"). |
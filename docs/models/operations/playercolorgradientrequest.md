# PlayerColorGradientRequest

Optional gradient applied to the player color.

## Example Usage

```typescript
import { PlayerColorGradientRequest } from "@wistia/wistia-api-client/models/operations";

let value: PlayerColorGradientRequest = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `on`                                                           | *boolean*                                                      | :heavy_minus_sign:                                             | Whether the gradient is enabled.                               |
| `colors`                                                       | *any*[][]                                                      | :heavy_minus_sign:                                             | Ordered list of [hex color, stop] pairs defining the gradient. |
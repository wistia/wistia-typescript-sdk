# PlayerLogo

The brand logo used for the player. Null when unset.

## Example Usage

```typescript
import { PlayerLogo } from "@wistia/wistia-api-client/models/operations";

let value: PlayerLogo = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `url`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | The URL of the logo image.                                                         |
| `dimensions`                                                                       | [operations.PlayerLogoDimensions](../../models/operations/playerlogodimensions.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `size`                                                                             | *number*                                                                           | :heavy_minus_sign:                                                                 | The size multiplier of the logo.                                                   |
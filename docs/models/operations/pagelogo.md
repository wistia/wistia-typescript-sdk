# PageLogo

The brand logo used for pages. Null when unset.

## Example Usage

```typescript
import { PageLogo } from "@wistia/wistia-api-client/models/operations";

let value: PageLogo = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `url`                                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | The URL of the logo image.                                                     |
| `dimensions`                                                                   | [operations.PageLogoDimensions](../../models/operations/pagelogodimensions.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `size`                                                                         | *number*                                                                       | :heavy_minus_sign:                                                             | The size multiplier of the logo.                                               |
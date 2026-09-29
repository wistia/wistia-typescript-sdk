# Color

## Example Usage

```typescript
import { Color } from "@wistia/wistia-api-client/models/operations";

let value: Color = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The brand kit token's name, or the brand and field (e.g. "Acme primary color"). |
| `value`                                                                         | *string*                                                                        | :heavy_check_mark:                                                              | Six-digit hex color with a leading "#" (e.g. "#2949E5").                        |
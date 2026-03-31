# Option

## Example Usage

```typescript
import { Option } from "@wistia/wistia-api-client/models/operations";

let value: Option = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `id`                                                    | *number*                                                | :heavy_minus_sign:                                      | The option ID.                                          |
| `text`                                                  | *string*                                                | :heavy_minus_sign:                                      | The option text.                                        |
| `count`                                                 | *number*                                                | :heavy_minus_sign:                                      | The number of times this option was selected.           |
| `percent`                                               | *number*                                                | :heavy_minus_sign:                                      | The percentage of respondents who selected this option. |
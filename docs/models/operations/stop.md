# Stop

## Example Usage

```typescript
import { Stop } from "@wistia/wistia-api-client/models/operations";

let value: Stop = {
  color: "blue",
  position: 4973.35,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `color`                                                         | *string*                                                        | :heavy_check_mark:                                              | Six-digit hex color with a leading "#".                         |
| `position`                                                      | *number*                                                        | :heavy_check_mark:                                              | Where the stop sits along the gradient, as stored on the brand. |
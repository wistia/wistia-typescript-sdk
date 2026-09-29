# DeleteBrandsBrandIdRequest

## Example Usage

```typescript
import { DeleteBrandsBrandIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: DeleteBrandsBrandIdRequest = {
  brandId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brandId`                                                                                                                                                                              | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The id of the brand                                                                                                                                                                    |
| `syncToCustomizations`                                                                                                                                                                 | *boolean*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                     | When true, the brand's values are baked into the customizations of everything it was applied to before it is deleted, so those items keep their current appearance. Defaults to false. |
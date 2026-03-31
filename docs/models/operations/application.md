# Application

## Example Usage

```typescript
import { Application } from "@wistia/wistia-api-client/models/operations";

let value: Application = {
  name: "<value>",
  scopes: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `name`                                                                      | *string*                                                                    | :heavy_check_mark:                                                          | The name of the application.                                                |
| `scopes`                                                                    | *string*[]                                                                  | :heavy_check_mark:                                                          | The scopes of the application. These may be different than the token scope. |
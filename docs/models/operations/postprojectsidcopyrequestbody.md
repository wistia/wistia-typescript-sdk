# PostProjectsIdCopyRequestBody

## Example Usage

```typescript
import { PostProjectsIdCopyRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostProjectsIdCopyRequestBody = {
  adminEmail: "admin@example.com",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `adminEmail`                                                                                                                             | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The email address of the account Manager that will be the owner of the new project. Defaults to the Account Owner if invalid or omitted. | admin@example.com                                                                                                                        |
# PasswordProtectedVideoRequest

## Example Usage

```typescript
import { PasswordProtectedVideoRequest } from "@wistia/wistia-api-client/models/operations";

let value: PasswordProtectedVideoRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `on`                                                    | *boolean*                                               | :heavy_minus_sign:                                      | Whether the password-protection plugin is enabled.      |
| `challenge`                                             | *string*                                                | :heavy_minus_sign:                                      | Optional challenge/prompt text shown to viewers.        |
| `src`                                                   | *string*                                                | :heavy_minus_sign:                                      | Internal source marker for the protection plugin.       |
| `async`                                                 | *boolean*                                               | :heavy_minus_sign:                                      | Whether the password check is performed asynchronously. |
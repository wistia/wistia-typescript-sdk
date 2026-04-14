# GetRemixAccountStatusResponse

Remix account status.

## Example Usage

```typescript
import { GetRemixAccountStatusResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetRemixAccountStatusResponse = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `monthlyLimit`                                | *number*                                      | :heavy_minus_sign:                            | Maximum number of remix credits per month.    |
| `monthlyUsage`                                | *number*                                      | :heavy_minus_sign:                            | Number of remix credits used this month.      |
| `remaining`                                   | *number*                                      | :heavy_minus_sign:                            | Number of remix credits remaining this month. |
| `canCreateRemix`                              | *boolean*                                     | :heavy_minus_sign:                            | Whether the account can create a new remix.   |
# Action

## Example Usage

```typescript
import { Action } from "@wistia/wistia-api-client/models/operations";

let value: Action = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `type`                                          | *string*                                        | :heavy_minus_sign:                              | Type of action (e.g., "Call to Action").        |
| `actionCount`                                   | *number*                                        | :heavy_minus_sign:                              | Number of actions performed.                    |
| `impressionCount`                               | *number*                                        | :heavy_minus_sign:                              | Number of times the action was shown.           |
| `rate`                                          | *number*                                        | :heavy_minus_sign:                              | The rate of actions performed over impressions. |
# PollQuestion

## Example Usage

```typescript
import { PollQuestion } from "@wistia/wistia-api-client/models/operations";

let value: PollQuestion = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *number*                                                 | :heavy_minus_sign:                                       | The poll question ID.                                    |
| `pollId`                                                 | *number*                                                 | :heavy_minus_sign:                                       | The poll ID this question belongs to.                    |
| `text`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The question text.                                       |
| `responseCount`                                          | *number*                                                 | :heavy_minus_sign:                                       | The total number of responses.                           |
| `options`                                                | [operations.Option](../../models/operations/option.md)[] | :heavy_minus_sign:                                       | The available answer options and their response counts.  |
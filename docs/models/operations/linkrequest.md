# LinkRequest

## Example Usage

```typescript
import { LinkRequest } from "@wistia/wistia-api-client/models/operations";

let value: LinkRequest = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `text`                                           | *string*                                         | :heavy_minus_sign:                               | The text of the annotation link.                 |
| `url`                                            | *string*                                         | :heavy_minus_sign:                               | The URL the annotation link points to.           |
| `time`                                           | *string*                                         | :heavy_minus_sign:                               | The time (in seconds) at which the link appears. |
| `duration`                                       | *string*                                         | :heavy_minus_sign:                               | How long (in seconds) the link remains visible.  |
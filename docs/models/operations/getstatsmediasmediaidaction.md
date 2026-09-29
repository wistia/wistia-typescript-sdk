# GetStatsMediasMediaIdAction

## Example Usage

```typescript
import { GetStatsMediasMediaIdAction } from "@wistia/wistia-api-client/models/operations";

let value: GetStatsMediasMediaIdAction = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `type`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | Type of action (e.g., "Call to Action").                                                        |
| `actionCount`                                                                                   | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of actions performed.                                                                    |
| `impressionCount`                                                                               | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of times the action was shown.                                                           |
| `rate`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | The rate of actions performed over impressions.                                                 |
| `url`                                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | For action types that link out (e.g., post-roll CTA), the URL the viewer was directed to.       |
| `text`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | For action types that include display text (e.g., post-roll CTA), the text shown to the viewer. |
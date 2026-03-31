# GetAnalyticsWebinarsWebinarIdAudiencePageInfo

## Example Usage

```typescript
import { GetAnalyticsWebinarsWebinarIdAudiencePageInfo } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsWebinarsWebinarIdAudiencePageInfo = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `hasNextPage`                                   | *boolean*                                       | :heavy_minus_sign:                              | Whether there are more results after this page. |
| `hasPreviousPage`                               | *boolean*                                       | :heavy_minus_sign:                              | Whether there are results before this page.     |
| `endCursor`                                     | *string*                                        | :heavy_minus_sign:                              | Cursor to use for fetching the next page.       |
| `startCursor`                                   | *string*                                        | :heavy_minus_sign:                              | Cursor to use for fetching the previous page.   |
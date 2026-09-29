# PostCaptionMatchesResponse

Every requested media ID was processed; inspect each result's status.

## Example Usage

```typescript
import { PostCaptionMatchesResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostCaptionMatchesResponse = {
  requestedCount: 664736,
  succeededCount: 391663,
  failedCount: 429603,
  complete: true,
  results: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `requestedCount`                                                                                             | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `succeededCount`                                                                                             | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Number of media whose transcript search was processed successfully, whether or not an exact match was found. |
| `failedCount`                                                                                                | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Number of media that returned a non-ok per-media status.                                                     |
| `complete`                                                                                                   | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | True when every requested media ID was processed, including per-media negative results.                      |
| `results`                                                                                                    | [operations.PostCaptionMatchesResult](../../models/operations/postcaptionmatchesresult.md)[]                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
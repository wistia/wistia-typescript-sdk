# PostCaptionMatchesRequest

## Example Usage

```typescript
import { PostCaptionMatchesRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostCaptionMatchesRequest = {
  mediaIds: [],
  targetText: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `mediaIds`                                                                      | *string*[]                                                                      | :heavy_check_mark:                                                              | Explicit hashed IDs of the media whose captions should be searched.             |
| `targetText`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | Exact caption wording to locate.                                                |
| `languageCode`                                                                  | *string*                                                                        | :heavy_minus_sign:                                                              | Exact IETF language tag. Omit when each media has only one caption track.       |
| `occurrence`                                                                    | *number*                                                                        | :heavy_minus_sign:                                                              | One-based exact occurrence to return, including occurrences after the first 10. |
| `startMs`                                                                       | *number*                                                                        | :heavy_minus_sign:                                                              | Optional start of a time range used to disambiguate the match.                  |
| `endMs`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Optional end of a time range used to disambiguate the match.                    |
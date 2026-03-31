# TranscriptMatch

## Example Usage

```typescript
import { TranscriptMatch } from "@wistia/wistia-api-client/models/operations";

let value: TranscriptMatch = {
  text: "today we'll talk about product demo",
  startTimeSeconds: 3,
  startTimeFormatted: "0:03",
  thumbnailUrl: "https://example.com/thumb.jpg?video_still_time=3.0",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `text`                                                | *string*                                              | :heavy_check_mark:                                    | The matched transcript text with context              | today we'll talk about product demo                   |
| `startTimeSeconds`                                    | *number*                                              | :heavy_check_mark:                                    | Start time of the match in seconds                    | 3                                                     |
| `startTimeFormatted`                                  | *string*                                              | :heavy_check_mark:                                    | Human-readable start time (e.g., "0:03" or "1:23:45") | 0:03                                                  |
| `thumbnailUrl`                                        | *string*                                              | :heavy_check_mark:                                    | Thumbnail URL at the match timestamp                  | https://example.com/thumb.jpg?video_still_time=3.0    |
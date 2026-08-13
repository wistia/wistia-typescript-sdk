# Candidate

## Example Usage

```typescript
import { Candidate } from "@wistia/wistia-api-client/models/operations";

let value: Candidate = {
  text: "<value>",
  context: "<value>",
  startMs: 893581,
  endMs: 820365,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `text`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The candidate's transcript text.                                      |
| `context`                                                             | *string*                                                              | :heavy_check_mark:                                                    | Surrounding transcript text, for disambiguation.                      |
| `startMs`                                                             | *number*                                                              | :heavy_check_mark:                                                    | The candidate span's start in the requested media's coordinate space. |
| `endMs`                                                               | *number*                                                              | :heavy_check_mark:                                                    | The candidate span's end in the requested media's coordinate space.   |
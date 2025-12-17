# PostMediasMediaHashedIdTrimsRequestBody

## Example Usage

```typescript
import { PostMediasMediaHashedIdTrimsRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdTrimsRequestBody = {
  trims: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `trims`                                                                                                                                                                                                                                              | *string*[]                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                   | An array of strings matching the format of HH:MM:SS.mmm-HH:MM:SS.mmm where HH is hours, MM is minutes, SS is seconds and mmm is milliseconds. The ranges should contain the earliest point of the trim first and the later point of the trim second. |
# PutMediasMediaHashedIdSwapRequestBody

## Example Usage

```typescript
import { PutMediasMediaHashedIdSwapRequestBody } from "wistia/models/operations";

let value: PutMediasMediaHashedIdSwapRequestBody = {
  replacementMediaId: "<id>",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `replacementMediaId`                                                                                          | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The hashed ID of the media that will replace the original media. Must be the same media type as the original. |
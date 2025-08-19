# PostMediasMediaHashedIdCaptionsPurchaseResponse

Successful operation. Captions purchased.

## Example Usage

```typescript
import { PostMediasMediaHashedIdCaptionsPurchaseResponse } from "wistia/models/operations";

let value: PostMediasMediaHashedIdCaptionsPurchaseResponse = {
  message:
    "Captions purchased for this video. Your account will be charged when the captions are ready.",
  id: "abc123def456",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `message`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | Success message indicating the captions have been purchased                                  | Captions purchased for this video. Your account will be charged when the captions are ready. |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | The unique hashed identifier of the time-coded transcript that was created                   | abc123def456                                                                                 |
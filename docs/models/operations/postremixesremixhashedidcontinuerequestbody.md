# PostRemixesRemixHashedIdContinueRequestBody

## Example Usage

```typescript
import { PostRemixesRemixHashedIdContinueRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostRemixesRemixHashedIdContinueRequestBody = {
  instructions: "Cut the intro and add background music",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `instructions`                                                                                                                  | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Natural language instructions for the edit (e.g., "cut the first 10 seconds").                                                  | Cut the intro and add background music                                                                                          |
| `folderId`                                                                                                                      | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Hashed ID of the destination folder for the exported media. Defaults to the same folder as the previous remix version's output. |                                                                                                                                 |
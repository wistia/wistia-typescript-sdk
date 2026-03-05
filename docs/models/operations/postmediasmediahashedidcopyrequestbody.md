# PostMediasMediaHashedIdCopyRequestBody

## Example Usage

```typescript
import { PostMediasMediaHashedIdCopyRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdCopyRequestBody = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `folderId`                                                                                                                    | *number*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The ID of the folder where you want the new copy placed. Defaults to the source media’s current folder if omitted or invalid. |
| `owner`                                                                                                                       | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | An email address specifying the owner of the new media. Defaults to the source media’s current owner if omitted or invalid.   |
# PostMediasMediaHashedIdCopyRequestBody

## Example Usage

```typescript
import { PostMediasMediaHashedIdCopyRequestBody } from "wistia/models/operations";

let value: PostMediasMediaHashedIdCopyRequestBody = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                                     | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | The ID of the project where you want the new copy placed. Defaults to the source media’s current project if omitted or invalid. |
| `owner`                                                                                                                         | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | An email address specifying the owner of the new media. Defaults to the source media’s current owner if omitted or invalid.     |
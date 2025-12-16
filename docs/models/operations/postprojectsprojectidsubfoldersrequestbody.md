# PostProjectsProjectIdSubfoldersRequestBody

Input data for creating or updating a subfolder.

## Example Usage

```typescript
import { PostProjectsProjectIdSubfoldersRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostProjectsProjectIdSubfoldersRequestBody = {
  name: "Marketing Videos",
  description: "Collection of all marketing and promotional videos",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | The display name of the subfolder.                 | Marketing Videos                                   |
| `description`                                      | *string*                                           | :heavy_minus_sign:                                 | A description for the subfolder.                   | Collection of all marketing and promotional videos |
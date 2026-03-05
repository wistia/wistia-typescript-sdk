# PostFoldersRequest

## Example Usage

```typescript
import { PostFoldersRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostFoldersRequest = {
  name: "My New Folder",
  adminEmail: "admin@example.com",
  public: false,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The name of the folder you want to create.                                                                         | My New Folder                                                                                                      |
| `adminEmail`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The email address of the person you want to set as the owner of this folder. Defaults to the Wistia Account Owner. | admin@example.com                                                                                                  |
| `public`                                                                                                           | *operations.PostFoldersPublicUnion*                                                                                | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
# PostDeletedMediaRestoreRequest

## Example Usage

```typescript
import { PostDeletedMediaRestoreRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostDeletedMediaRestoreRequest = {
  mediaHashedIds: [
    "abc123",
  ],
  folderId: "folder123",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `mediaHashedIds`                                                                                                              | *string*[]                                                                                                                    | :heavy_check_mark:                                                                                                            | The hashed ids of the soft-deleted media to restore. Up to 1000 at a time.                                                    | **Example 1:** abc123<br/>**Example 2:** abc124                                                                               |
| `folderId`                                                                                                                    | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Optional hashed id of the folder to restore the media into. If omitted, each media returns to the folder it was deleted from. | folder123                                                                                                                     |
# GetRemixesRemixHashedIdResponse

Remix status and details.

## Example Usage

```typescript
import { GetRemixesRemixHashedIdResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetRemixesRemixHashedIdResponse = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `remixId`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Hashed ID of the remix.                                                                              |
| `conversationId`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Hashed ID of the parent conversation.                                                                |
| `status`                                                                                             | [operations.GetRemixesRemixHashedIdStatus](../../models/operations/getremixesremixhashedidstatus.md) | :heavy_minus_sign:                                                                                   | Current processing status.                                                                           |
| `errorMessage`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Error details if status is "error".                                                                  |
| `preview`                                                                                            | [operations.Preview](../../models/operations/preview.md)                                             | :heavy_minus_sign:                                                                                   | Preview URLs, available when status is "edit_tree_generated" or later.                               |
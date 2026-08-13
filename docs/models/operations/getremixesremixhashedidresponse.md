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
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The ISO 8601 timestamp when the remix was created.                                                   |
| `status`                                                                                             | [operations.GetRemixesRemixHashedIdStatus](../../models/operations/getremixesremixhashedidstatus.md) | :heavy_minus_sign:                                                                                   | Current processing status.                                                                           |
| `errorMessage`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Error details if status is "error".                                                                  |
| `preview`                                                                                            | [operations.Preview](../../models/operations/preview.md)                                             | :heavy_minus_sign:                                                                                   | Preview URLs, available when status is "edit_tree_generated" or later.                               |
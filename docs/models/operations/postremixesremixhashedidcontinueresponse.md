# PostRemixesRemixHashedIdContinueResponse

New remix version created.

## Example Usage

```typescript
import { PostRemixesRemixHashedIdContinueResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostRemixesRemixHashedIdContinueResponse = {};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `remixId`                                                                                                              | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Hashed ID of the new remix version.                                                                                    |
| `conversationId`                                                                                                       | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Hashed ID of the conversation.                                                                                         |
| `status`                                                                                                               | [operations.PostRemixesRemixHashedIdContinueStatus](../../models/operations/postremixesremixhashedidcontinuestatus.md) | :heavy_minus_sign:                                                                                                     | Status of the new remix version.                                                                                       |
| `previousRemixId`                                                                                                      | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Hashed ID of the remix version this edit is based on.                                                                  |
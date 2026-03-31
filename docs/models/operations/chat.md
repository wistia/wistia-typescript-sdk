# Chat

## Example Usage

```typescript
import { Chat } from "@wistia/wistia-api-client/models/operations";

let value: Chat = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `roundedPlayerPosition`                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | The approximate position in the event when the chat was sent (in seconds). |
| `chats`                                                                    | *string*[]                                                                 | :heavy_minus_sign:                                                         | The chat message content.                                                  |
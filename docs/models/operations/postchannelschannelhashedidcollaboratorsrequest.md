# PostChannelsChannelHashedIdCollaboratorsRequest

## Example Usage

```typescript
import { PostChannelsChannelHashedIdCollaboratorsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostChannelsChannelHashedIdCollaboratorsRequest = {
  channelHashedId: "<id>",
  requestBody: {
    email: "jim@wistia.com",
    role: "admin",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `channelHashedId`                                                                                                                                | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Hashed ID of the channel                                                                                                                         |
| `requestBody`                                                                                                                                    | [operations.PostChannelsChannelHashedIdCollaboratorsRequestBody](../../models/operations/postchannelschannelhashedidcollaboratorsrequestbody.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
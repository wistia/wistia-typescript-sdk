# PostChannelsChannelHashedIdCollaboratorsRequestBody

Request body for creating a channel collaborator.

## Example Usage

```typescript
import { PostChannelsChannelHashedIdCollaboratorsRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostChannelsChannelHashedIdCollaboratorsRequestBody = {
  email: "jim@wistia.com",
  role: "admin",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `email`                                                                             | *string*                                                                            | :heavy_check_mark:                                                                  | Email address of the contact to invite. Creates a new contact if one doesn't exist. | jim@wistia.com                                                                      |
| `role`                                                                              | [operations.RoleRequest](../../models/operations/rolerequest.md)                    | :heavy_check_mark:                                                                  | The role to grant the collaborator.                                                 | admin                                                                               |
# Payload

The data for the operation. Required for create and update operations.
The accepted fields depend on the resource type and match the corresponding
create or update endpoint's request body (for example, a channel_episode
create takes the same fields as the Create Channel Episode endpoint,
including channel_id).

Creating a subfolder requires `folder_id` (the parent folder's hashed ID)
and `name`.


## Example Usage

```typescript
import { Payload } from "@wistia/wistia-api-client/models/operations";

let value: Payload = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |
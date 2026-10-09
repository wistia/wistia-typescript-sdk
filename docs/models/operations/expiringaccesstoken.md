# ExpiringAccessToken

## Example Usage

```typescript
import { ExpiringAccessToken } from "@wistia/wistia-api-client/models/operations";

let value: ExpiringAccessToken = {
  scopes: [
    "graphql:all",
    "all:delegate_to_contact_permissions",
  ],
  authorizations: [
    {
      type: "channel",
      id: "<id>",
      permissions: [
        "show",
        "update",
        "destroy",
        "edit-transcripts",
        "view-stats",
        "share",
        "translate",
        "create-folders",
        "create-channels",
        "create-webinars",
        "manage-team",
        "edit",
        "order-audio-descriptions",
        "create-transcripts",
        "view-speakers",
        "view-tags",
        "manage-tags",
        "manage-allowed-domains",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expiresAt`                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                         | an ISO8601 string of when the token will expire, defaults to two days from creation                                                                                                                                                                                        |
| `scopes`                                                                                                                                                                                                                                                                   | *string*[]                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                         | The scopes the token will be granted. `graphql:all` allows GraphQL requests (e.g. the embedded transcript editor) and `all:delegate_to_contact_permissions` allows REST API requests authorized by the token's authorizations. Defaults to `["graphql:all"]` when omitted. |
| `authorizations`                                                                                                                                                                                                                                                           | [operations.Authorization](../../models/operations/authorization.md)[]                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                         | The rules the token carries. Each rule names one object by `type` and `id`<br/>and lists the `permissions` granted on it.<br/><br/>Any permission implicitly allows viewing the object; every other permission<br/>must be declared explicitly.<br/>                       |
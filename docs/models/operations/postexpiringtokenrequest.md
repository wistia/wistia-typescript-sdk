# PostExpiringTokenRequest

## Example Usage

```typescript
import { PostExpiringTokenRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostExpiringTokenRequest = {
  expiringAccessToken: {
    scopes: [
      "graphql:all",
      "all:delegate_to_contact_permissions",
    ],
    authorizations: [
      {
        type: "account",
        id: "<id>",
        permissions: [
          "show",
          "update",
          "destroy",
          "edit-transcripts",
          "create-folders",
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `expiringAccessToken`                                                            | [operations.ExpiringAccessToken](../../models/operations/expiringaccesstoken.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
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
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `expiringAccessToken`                                                            | [operations.ExpiringAccessToken](../../models/operations/expiringaccesstoken.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
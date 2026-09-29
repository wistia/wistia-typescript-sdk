# PostContactsResponse

Contacts created

## Example Usage

```typescript
import { PostContactsResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostContactsResponse = {
  contacts: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `contacts`                                                                         | [operations.PostContactsContact](../../models/operations/postcontactscontact.md)[] | :heavy_check_mark:                                                                 | The contacts that were created (or already existed) for the requested emails.      |
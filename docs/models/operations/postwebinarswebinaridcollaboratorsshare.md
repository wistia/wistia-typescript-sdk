# PostWebinarsWebinarIdCollaboratorsShare

The contact or contact group being granted access.

## Example Usage

```typescript
import { PostWebinarsWebinarIdCollaboratorsShare } from "@wistia/wistia-api-client/models/operations";

let value: PostWebinarsWebinarIdCollaboratorsShare = {
  id: 3,
  name: "Jim",
  type: "Contact",
  email: "jim@wistia.com",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *number*                                       | :heavy_check_mark:                             | N/A                                            | 3                                              |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | N/A                                            | Jim                                            |
| `type`                                         | *string*                                       | :heavy_check_mark:                             | Either "Contact" or "ContactGroup"             | Contact                                        |
| `email`                                        | *string*                                       | :heavy_minus_sign:                             | Email address (only present for Contact type). | jim@wistia.com                                 |
# PostCustomMetadataFieldDefinitionsActor

The contact who made the write, or null when the write had no acting contact.

## Example Usage

```typescript
import { PostCustomMetadataFieldDefinitionsActor } from "@wistia/wistia-api-client/models/operations";

let value: PostCustomMetadataFieldDefinitionsActor = {
  type: "contact",
  id: "abc123de",
  name: "Jane Doe",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.PostCustomMetadataFieldDefinitionsType](../../models/operations/postcustommetadatafielddefinitionstype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The contact's hashed id.                                                                                               | abc123de                                                                                                               |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The contact's display name.                                                                                            | Jane Doe                                                                                                               |
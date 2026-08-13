# PostWebinarsWebinarIdCollaboratorsRequestBody

Request body for creating a webinar collaborator.

## Example Usage

```typescript
import { PostWebinarsWebinarIdCollaboratorsRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostWebinarsWebinarIdCollaboratorsRequestBody = {
  email: "jim@wistia.com",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Email address of the contact to invite. Creates a new contact if one doesn't exist. Note that viewers cannot be webinar collaborators. | jim@wistia.com                                                                                                                         |
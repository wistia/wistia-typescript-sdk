# PostWebinarsWebinarIdCollaboratorsRequest

## Example Usage

```typescript
import { PostWebinarsWebinarIdCollaboratorsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostWebinarsWebinarIdCollaboratorsRequest = {
  webinarId: "<id>",
  requestBody: {
    email: "jim@wistia.com",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `webinarId`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Hashed ID of the webinar                                                                                                             |
| `requestBody`                                                                                                                        | [operations.PostWebinarsWebinarIdCollaboratorsRequestBody](../../models/operations/postwebinarswebinaridcollaboratorsrequestbody.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
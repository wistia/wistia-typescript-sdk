# PostWebinarsWebinarIdRegistrationsRequest

## Example Usage

```typescript
import { PostWebinarsWebinarIdRegistrationsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostWebinarsWebinarIdRegistrationsRequest = {
  webinarId: "<id>",
  requestBody: {
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `webinarId`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Hashed ID of the webinar                                                                                                             |
| `requestBody`                                                                                                                        | [operations.PostWebinarsWebinarIdRegistrationsRequestBody](../../models/operations/postwebinarswebinaridregistrationsrequestbody.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
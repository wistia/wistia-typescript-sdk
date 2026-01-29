# PostWebinarsWebinarIdRegistrationsRequestBody

## Example Usage

```typescript
import { PostWebinarsWebinarIdRegistrationsRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostWebinarsWebinarIdRegistrationsRequestBody = {
  email: "john.doe@example.com",
  firstName: "John",
  lastName: "Doe",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `email`                         | *string*                        | :heavy_check_mark:              | Email address of the registrant | john.doe@example.com            |
| `firstName`                     | *string*                        | :heavy_check_mark:              | First name of the registrant    | John                            |
| `lastName`                      | *string*                        | :heavy_check_mark:              | Last name of the registrant     | Doe                             |
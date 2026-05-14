# PostWebinarsWebinarIdRegistrationsResponse

Registration created successfully

## Example Usage

```typescript
import { PostWebinarsWebinarIdRegistrationsResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostWebinarsWebinarIdRegistrationsResponse = {
  visitorKey: "iv_1234567890",
  personalizedEventUrl:
    "https://wistia.com/webinars/registration?vk=iv_1234567890&uid=john.doe@example.com",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `visitorKey`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | Unique visitor key generated for the registrant                                    | iv_1234567890                                                                      |
| `personalizedEventUrl`                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | Personalized URL for the registrant to access the webinar                          | https://wistia.com/webinars/registration?vk=iv_1234567890&uid=john.doe@example.com |
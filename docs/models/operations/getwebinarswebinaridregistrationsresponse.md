# GetWebinarsWebinarIdRegistrationsResponse

Successful response with a paginated list of registrations.

## Example Usage

```typescript
import { GetWebinarsWebinarIdRegistrationsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetWebinarsWebinarIdRegistrationsResponse = {
  registrations: [
    {
      visitorKey: "iv_abc123",
      email: "john@example.com",
      firstName: "John",
      lastName: "Doe",
      registeredAt: new Date("2026-01-15T10:00:00Z"),
      attendedAt: new Date("2026-01-15T11:00:00Z"),
      originMethod: "form",
      engagementRate: 0.85,
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `registrations`                                                                                                              | [operations.Registration](../../models/operations/registration.md)[]                                                         | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `pageInfo`                                                                                                                   | [operations.GetWebinarsWebinarIdRegistrationsPageInfo](../../models/operations/getwebinarswebinaridregistrationspageinfo.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
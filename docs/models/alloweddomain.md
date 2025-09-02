# AllowedDomain

## Example Usage

```typescript
import { AllowedDomain } from "@wistia/wistia-api-client/models";

let value: AllowedDomain = {
  domain: "example.com",
  createdAt: new Date("2010-08-13T18:47:39+00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `domain`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The allowed domain name.                                                                      | example.com                                                                                   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date that the allowed domain was originally created.                                      | 2010-08-13T18:47:39+00:00                                                                     |
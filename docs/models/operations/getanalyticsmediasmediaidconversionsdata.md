# GetAnalyticsMediasMediaIdConversionsData

## Example Usage

```typescript
import { GetAnalyticsMediasMediaIdConversionsData } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsMediasMediaIdConversionsData = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The first name of the form submitter.                                                         |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The last name of the form submitter.                                                          |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The email address of the form submitter.                                                      |
| `convertedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the form was submitted in ISO 8601 format.                                 |
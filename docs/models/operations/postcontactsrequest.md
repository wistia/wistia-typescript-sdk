# PostContactsRequest

## Example Usage

```typescript
import { PostContactsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostContactsRequest = {
  contacts: "alice@example.com, bob@example.com",
};
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   | Example                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contacts`                                                                                                                                                                    | *string*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | A comma-, whitespace-, or newline-separated list of email addresses to<br/>invite to the account. Each entry becomes a new contact if one does not<br/>already exist for that email.<br/> | alice@example.com, bob@example.com                                                                                                                                            |
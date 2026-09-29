# PostTagsRequest

## Example Usage

```typescript
import { PostTagsRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostTagsRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The tag name. Stored lowercased with whitespace squished, 50 characters max, and must not already exist on the account. |
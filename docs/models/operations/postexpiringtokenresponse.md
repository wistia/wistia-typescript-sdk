# PostExpiringTokenResponse

Successful response

## Example Usage

```typescript
import { PostExpiringTokenResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostExpiringTokenResponse = {
  token: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | A token which can be used to authorize requests to Wistia. Currently only for doing transcript embeds. |
# PostAllowedDomainsRequestBody

## Example Usage

```typescript
import { PostAllowedDomainsRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostAllowedDomainsRequestBody = {
  domain: "example.com",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `domain`                                                    | *string*                                                    | :heavy_check_mark:                                          | The domain name to add (www will be automatically stripped) | example.com                                                 |
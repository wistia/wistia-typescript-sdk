# PostAllowedDomainsRequest

## Example Usage

```typescript
import { PostAllowedDomainsRequest } from "wistia/models/operations";

let value: PostAllowedDomainsRequest = {
  domain: "example.com",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `domain`                                                    | *string*                                                    | :heavy_check_mark:                                          | The domain name to add (www will be automatically stripped) | example.com                                                 |
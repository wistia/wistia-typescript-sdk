# GetResourceUrlsResponse

The resource's canonical URLs

## Example Usage

```typescript
import { GetResourceUrlsResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetResourceUrlsResponse = {
  type: "<value>",
  hashedId: "<id>",
  urls: {
    show: "<value>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | *string*                                           | :heavy_check_mark:                                 | The kind of resource that was resolved.            |
| `hashedId`                                         | *string*                                           | :heavy_check_mark:                                 | The hashed ID of the resolved resource.            |
| `urls`                                             | [operations.Urls](../../models/operations/urls.md) | :heavy_check_mark:                                 | The resource's canonical app URLs, keyed by kind.  |
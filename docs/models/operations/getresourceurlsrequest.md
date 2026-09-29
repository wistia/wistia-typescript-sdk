# GetResourceUrlsRequest

## Example Usage

```typescript
import { GetResourceUrlsRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetResourceUrlsRequest = {
  type: "channel_episode",
  hashedId: "4d23503f70",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [operations.GetResourceUrlsType](../../models/operations/getresourceurlstype.md) | :heavy_check_mark:                                                               | The kind of resource the hashed ID refers to.                                    |                                                                                  |
| `hashedId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The hashed ID of the resource.                                                   | 4d23503f70                                                                       |
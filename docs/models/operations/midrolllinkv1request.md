# MidrollLinkV1Request

Timed annotation links that appear over the video at specific times.

## Example Usage

```typescript
import { MidrollLinkV1Request } from "@wistia/wistia-api-client/models/operations";

let value: MidrollLinkV1Request = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `on`                                                               | *boolean*                                                          | :heavy_minus_sign:                                                 | If set to true, the timed annotation links are enabled.            |
| `links`                                                            | [operations.LinkRequest](../../models/operations/linkrequest.md)[] | :heavy_minus_sign:                                                 | The set of annotation links.                                       |
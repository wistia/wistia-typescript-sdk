# PutMediasMediaIdShareLinkRequest

## Example Usage

```typescript
import { PutMediasMediaIdShareLinkRequest } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdShareLinkRequest = {
  mediaId: "<id>",
  requestBody: {
    visibility: "domain_verified",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The hashed ID of the media.                                                                                        |
| `requestBody`                                                                                                      | [operations.PutMediasMediaIdShareLinkRequestBody](../../models/operations/putmediasmediaidsharelinkrequestbody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
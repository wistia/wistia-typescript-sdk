# PutMediasMediaIdCustomizationsEngagementRequestBody

On-video engagement settings for a video: the end/pause Call To Action
(postRoll-v1) and timed annotation links (midrollLink-v1). Every field is
optional; only the fields you send are changed (partial update). Send a field
as null to reset it to its default.


## Example Usage

```typescript
import { PutMediasMediaIdCustomizationsEngagementRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PutMediasMediaIdCustomizationsEngagementRequestBody = {
  plugin: {
    postRollV1: {
      style: {
        backgroundColor: "#303030",
      },
      ctaType: "text",
    },
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `plugin`                                                                                                                                             | [operations.PutMediasMediaIdCustomizationsEngagementPluginRequest](../../models/operations/putmediasmediaidcustomizationsengagementpluginrequest.md) | :heavy_minus_sign:                                                                                                                                   | Container for engagement plugin configurations.                                                                                                      |
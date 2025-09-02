# CreateProjectSharing

## Example Usage

```typescript
import { CreateProjectSharing } from "@wistia/wistia-api-client/models";

let value: CreateProjectSharing = {
  sharing: {
    with: "Orlando.Dietrich-Blick44@yahoo.com",
    requirePassword: false,
    canShare: false,
    canDownload: false,
    canUpload: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `sharing`                                                                      | [models.CreateProjectSharingSharing](../models/createprojectsharingsharing.md) | :heavy_check_mark:                                                             | N/A                                                                            |
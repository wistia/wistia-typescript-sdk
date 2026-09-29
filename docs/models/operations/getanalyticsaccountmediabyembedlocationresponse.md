# GetAnalyticsAccountMediaByEmbedLocationResponse

Success response with the hashed IDs of media embedded at the location.

## Example Usage

```typescript
import { GetAnalyticsAccountMediaByEmbedLocationResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsAccountMediaByEmbedLocationResponse = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `mediaHashedIds`                                               | *string*[]                                                     | :heavy_minus_sign:                                             | Hashed IDs of media embedded at the location, ranked by plays. |
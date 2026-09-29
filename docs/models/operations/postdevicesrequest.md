# PostDevicesRequest

## Example Usage

```typescript
import { PostDevicesRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostDevicesRequest = {
  deviceToken:
    "6a41c6f2e5b1d3f4a7c8e9b0d1f2a3c4e5b6d7f8a9c0b1d2e3f4a5b6c7d8e9f0",
  bundleId: "com.wistia.glass",
  environment: "sandbox",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `deviceToken`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | The APNs device token, hex encoded.                                            | 6a41c6f2e5b1d3f4a7c8e9b0d1f2a3c4e5b6d7f8a9c0b1d2e3f4a5b6c7d8e9f0               |
| `bundleId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | The app bundle identifier the token was issued for.                            | com.wistia.glass                                                               |
| `environment`                                                                  | [operations.EnvironmentRequest](../../models/operations/environmentrequest.md) | :heavy_check_mark:                                                             | The APNs environment the token belongs to.                                     |                                                                                |
# DeleteDevicesDeviceTokenRequest

## Example Usage

```typescript
import { DeleteDevicesDeviceTokenRequest } from "@wistia/wistia-api-client/models/operations";

let value: DeleteDevicesDeviceTokenRequest = {
  deviceToken:
    "6a41c6f2e5b1d3f4a7c8e9b0d1f2a3c4e5b6d7f8a9c0b1d2e3f4a5b6c7d8e9f0",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `deviceToken`                                                    | *string*                                                         | :heavy_check_mark:                                               | The APNs device token to unregister, hex encoded.                | 6a41c6f2e5b1d3f4a7c8e9b0d1f2a3c4e5b6d7f8a9c0b1d2e3f4a5b6c7d8e9f0 |
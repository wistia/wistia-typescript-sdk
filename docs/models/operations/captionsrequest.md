# CaptionsRequest

Modern captions plugin configuration.

## Example Usage

```typescript
import { CaptionsRequest } from "@wistia/wistia-api-client/models/operations";

let value: CaptionsRequest = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `on`                                                                                                                                  | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | If set to true, the captions plugin is enabled and captions controls will be available to viewers.                                    |
| `onByDefault`                                                                                                                         | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | If set to true, captions will be turned on automatically when the video loads. Only takes effect when the captions plugin is enabled. |
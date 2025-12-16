# GetMediasMediaHashedIdLocalizationsRequest

## Example Usage

```typescript
import { GetMediasMediaHashedIdLocalizationsRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdLocalizationsRequest = {
  mediaHashedId: "<id>",
  xWistiaAPIVersion: "2025-11",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `mediaHashedId`                                       | *string*                                              | :heavy_check_mark:                                    | The hashed ID of the media to list localizations for. |                                                       |
| `includeTranscript`                                   | *boolean*                                             | :heavy_minus_sign:                                    | Whether to include the transcript in the response.    |                                                       |
| `xWistiaAPIVersion`                                   | *string*                                              | :heavy_check_mark:                                    | The API version                                       | 2025-11                                               |
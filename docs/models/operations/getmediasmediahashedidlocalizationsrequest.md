# GetMediasMediaHashedIdLocalizationsRequest

## Example Usage

```typescript
import { GetMediasMediaHashedIdLocalizationsRequest } from "wistia/models/operations";

let value: GetMediasMediaHashedIdLocalizationsRequest = {
  mediaHashedId: "<id>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `mediaHashedId`                                       | *string*                                              | :heavy_check_mark:                                    | The hashed ID of the media to list localizations for. |
| `includeTranscript`                                   | *boolean*                                             | :heavy_minus_sign:                                    | Whether to include the transcript in the response.    |
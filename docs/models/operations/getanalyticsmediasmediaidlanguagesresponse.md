# GetAnalyticsMediasMediaIdLanguagesResponse

## Example Usage

```typescript
import { GetAnalyticsMediasMediaIdLanguagesResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsMediasMediaIdLanguagesResponse = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `language`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | The ISO 639-1 language code of the viewer's browser.                |
| `plays`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | The number of video plays from viewers with this language.          |
| `percentOfTotalPlays`                                               | *number*                                                            | :heavy_minus_sign:                                                  | The percentage of total plays from this language (between 0 and 1). |
| `captionsSupport`                                                   | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether captions are available for this language.                   |
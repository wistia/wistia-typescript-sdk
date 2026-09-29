# IetfLanguageTag

IETF language tag for the audio description. Defaults to `eng` (English).
Non-English orders must set `ai_enabled: false` — AI-generated audio
descriptions are only available in English.

Spanish (`es-419`) orders are only accepted when the source media is
tagged as a Spanish-language variant or has no detected language
(e.g. silent videos). Spanish orders against a media in another
language return `400`.


## Example Usage

```typescript
import { IetfLanguageTag } from "@wistia/wistia-api-client/models/operations";

let value: IetfLanguageTag = "eng";
```

## Values

```typescript
"eng" | "es-419"
```
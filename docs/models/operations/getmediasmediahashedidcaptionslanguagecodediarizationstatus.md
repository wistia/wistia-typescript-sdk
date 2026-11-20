# GetMediasMediaHashedIdCaptionsLanguageCodeDiarizationStatus

Speaker-data availability when `include=diarized_segments`. Reading a derivable media
with no speaker data starts generating it and reports `processing`; read again shortly
for `ready`. `disabled` means the account has speaker identification turned off; an
account owner or manager can turn it on in Account Settings.


## Example Usage

```typescript
import { GetMediasMediaHashedIdCaptionsLanguageCodeDiarizationStatus } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdCaptionsLanguageCodeDiarizationStatus =
  "unavailable";
```

## Values

```typescript
"ready" | "processing" | "unavailable" | "disabled"
```
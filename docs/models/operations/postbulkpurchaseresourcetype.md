# PostBulkPurchaseResourceType

What to order for the media.

`captions` orders Wistia-generated English captions -- computer-generated
or human-reviewed. `localization` orders a dubbed, language-specific
version of the media. `extended_audio_description` orders an extended
audio description track. `text_translation` translates the media's
existing transcript into another language, leaving the audio alone.


## Example Usage

```typescript
import { PostBulkPurchaseResourceType } from "@wistia/wistia-api-client/models/operations";

let value: PostBulkPurchaseResourceType = "text_translation";
```

## Values

```typescript
"captions" | "localization" | "extended_audio_description" | "text_translation"
```
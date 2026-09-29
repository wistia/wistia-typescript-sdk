# PostBulkPurchasePayload

Order options. The accepted fields depend on the resource type and match
the corresponding single-media endpoint's request body. Omit it to take
every default.

`captions` accepts `automated` (order computer-generated captions
instead of human-reviewed ones), `rush` (one business day turnaround
instead of four, human-reviewed only, at a higher per-minute rate), and
`automatically_enable` (show the captions on the video as soon as they
are ready). Each is treated as `false` when omitted or unrecognized.
What each option costs depends on the account's plan and billing
settings.

`localization` requires `output_language`, a 3-character IETF language
code, and accepts `auto_enable` (default `true`).

`extended_audio_description` accepts `enabled` (default `true`),
`ai_enabled` (default `true`), `ietf_language_tag` (default `eng`), and
`order_instructions`.

`text_translation` requires `target_language` and accepts
`source_language` (which transcript to translate from, defaulting to the
media's own language). Use the bibliographic ISO 639-2 form or a
supported regional or script IETF tag for either value.


## Example Usage

```typescript
import { PostBulkPurchasePayload } from "@wistia/wistia-api-client/models/operations";

let value: PostBulkPurchasePayload = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |
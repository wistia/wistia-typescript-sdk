# JobResourceType

The type of record to operate on, using the same vocabulary as a single
action. Which parents are valid depends on it -- see `scope`.


## Example Usage

```typescript
import { JobResourceType } from "@wistia/wistia-api-client/models/operations";

let value: JobResourceType = "customization_sharing";
```

## Values

```typescript
"media" | "folder" | "subfolder" | "channel" | "channel_episode" | "captions" | "customization_access" | "customization_accessibility" | "customization_appearance" | "customization_chapters" | "customization_engagement" | "customization_lead_capture" | "customization_playback" | "customization_related_media" | "customization_sharing" | "customization_thumbnail"
```
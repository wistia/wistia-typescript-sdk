# PostBulkResourceType

The type of resource to operate on. `folder` means a top-level folder
(previously called a project); use `subfolder` for a folder nested
inside one. `captions` operates on a single caption track -- one media
in one language.

The `customization_*` types each write one concern of a media's player
customizations and accept `update` only. Their `id` is the media's
hashed ID, and their payload matches the corresponding Update
Customizations endpoint (for example, `customization_appearance` takes
the same fields as Update Appearance Customizations). Sending a field
another concern owns fails that action rather than writing it, so a
batch can never quietly overwrite unrelated player settings.


## Example Usage

```typescript
import { PostBulkResourceType } from "@wistia/wistia-api-client/models/operations";

let value: PostBulkResourceType = "channel";
```

## Values

```typescript
"media" | "folder" | "subfolder" | "channel" | "channel_episode" | "captions" | "customization_access" | "customization_accessibility" | "customization_appearance" | "customization_chapters" | "customization_engagement" | "customization_lead_capture" | "customization_playback" | "customization_related_media" | "customization_sharing" | "customization_thumbnail"
```
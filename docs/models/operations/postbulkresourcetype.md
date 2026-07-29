# PostBulkResourceType

The type of resource to operate on. `folder` means a top-level folder
(previously called a project); use `subfolder` for a folder nested
inside one.


## Example Usage

```typescript
import { PostBulkResourceType } from "@wistia/wistia-api-client/models/operations";

let value: PostBulkResourceType = "folder";
```

## Values

```typescript
"media" | "folder" | "subfolder" | "channel" | "channel_episode"
```
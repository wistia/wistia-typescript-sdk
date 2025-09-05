# MediaWithCursorStatus

Post upload processing status. - `queued`: the file is waiting in the queue to be processed. - `processing`: the file is actively being processed. - `ready`: the file has been fully processed and is ready for embedding and viewing. - `failed`: the file was unable to be processed (usually a format or size error).


## Example Usage

```typescript
import { MediaWithCursorStatus } from "@wistia/wistia-api-client/models";

let value: MediaWithCursorStatus = "queued";
```

## Values

```typescript
"queued" | "processing" | "ready" | "failed"
```
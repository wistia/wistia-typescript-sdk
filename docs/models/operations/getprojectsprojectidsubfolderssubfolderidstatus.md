# GetProjectsProjectIdSubfoldersSubfolderIdStatus

Post upload processing status. - `queued`: the file is waiting in the queue to be processed. - `processing`: the file is actively being processed. - `ready`: the file has been fully processed and is ready for embedding and viewing. - `failed`: the file was unable to be processed (usually a format or size error).


## Example Usage

```typescript
import { GetProjectsProjectIdSubfoldersSubfolderIdStatus } from "@wistia/wistia-api-client/models/operations";

let value: GetProjectsProjectIdSubfoldersSubfolderIdStatus = "queued";
```

## Values

```typescript
"queued" | "processing" | "ready" | "failed"
```
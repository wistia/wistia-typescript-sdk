# PutWebinarsIdLifecycleStatus

The current lifecycle status of the webinar. This is a read-only, system-managed field that Wistia updates as the event moves through its lifecycle; it cannot be set or changed via the API.

## Example Usage

```typescript
import { PutWebinarsIdLifecycleStatus } from "@wistia/wistia-api-client/models/operations";

let value: PutWebinarsIdLifecycleStatus = "ready";
```

## Values

```typescript
"pending" | "ready" | "starting" | "started" | "ended" | "vod_ready" | "failed"
```
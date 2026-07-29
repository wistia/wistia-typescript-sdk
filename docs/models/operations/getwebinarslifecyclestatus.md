# GetWebinarsLifecycleStatus

The current lifecycle status of the webinar. This is a read-only, system-managed field that Wistia updates as the event moves through its lifecycle; it cannot be set or changed via the API.

## Example Usage

```typescript
import { GetWebinarsLifecycleStatus } from "@wistia/wistia-api-client/models/operations";

let value: GetWebinarsLifecycleStatus = "ready";
```

## Values

```typescript
"pending" | "ready" | "starting" | "started" | "ended" | "vod_ready" | "failed"
```
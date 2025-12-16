<!-- Start SDK Example Usage [usage] -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  xWistiaAPIVersion: "2025-11",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.uploadForm({
    requestBody: {
      url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      lowPriority: true,
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
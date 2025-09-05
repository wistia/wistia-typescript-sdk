<!-- Start SDK Example Usage [usage] -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.projects.list();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
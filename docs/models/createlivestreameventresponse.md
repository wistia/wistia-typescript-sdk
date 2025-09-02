# CreateLiveStreamEventResponse

## Example Usage

```typescript
import { CreateLiveStreamEventResponse } from "@wistia/wistia-api-client/models";

let value: CreateLiveStreamEventResponse = {
  id: "abc123def456",
  audienceLink: "https://lumon-industries.wistia.com/live/events/abc123def456",
  hostLink: "https://lumon-industries.wistia.com/live/onair/abc123def456/",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The hashed ID of the created live stream event               | abc123def456                                                 |
| `audienceLink`                                               | *string*                                                     | :heavy_check_mark:                                           | Link for the audience to join the event                      | https://lumon-industries.wistia.com/live/events/abc123def456 |
| `hostLink`                                                   | *string*                                                     | :heavy_check_mark:                                           | Link for the host to manage the event                        | https://lumon-industries.wistia.com/live/onair/abc123def456/ |
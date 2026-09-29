# PostReviewBundlesRequest

## Example Usage

```typescript
import { PostReviewBundlesRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostReviewBundlesRequest = {
  mediaHashedIds: [
    "abc123",
  ],
  name: "My Review Bundle Title",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `mediaHashedIds`                                                           | *string*[]                                                                 | :heavy_check_mark:                                                         | The hashed ids of the media to include in the bundle. Limited to 25 media. | **Example 1:** abc123<br/>**Example 2:** abc124                            |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The bundle display name.                                                   | My Review Bundle Title                                                     |
| `allowDownloads`                                                           | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the videos in the bundle can be downloaded.                        |                                                                            |
# PostRemixesRequest

## Example Usage

```typescript
import { PostRemixesRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostRemixesRequest = {
  mediaHashedIds: [
    "abc123",
    "def456",
  ],
  instructions:
    "Create a 60-second highlight reel focusing on the product demo section",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `mediaHashedIds`                                                                                        | *string*[]                                                                                              | :heavy_check_mark:                                                                                      | Array of source media hashed IDs to remix from.                                                         | [<br/>"abc123",<br/>"def456"<br/>]                                                                      |
| `instructions`                                                                                          | *string*                                                                                                | :heavy_check_mark:                                                                                      | Natural language instructions describing the desired remix (e.g., "create a 60-second highlight reel"). | Create a 60-second highlight reel focusing on the product demo section                                  |
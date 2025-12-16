# GetStatsProjectsProjectIdRequest

## Example Usage

```typescript
import { GetStatsProjectsProjectIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetStatsProjectsProjectIdRequest = {
  projectId: "<id>",
  xWistiaAPIVersion: "2025-11",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | The Hashed ID or ID of the project for which you want to retrieve stats. |                                                                          |
| `xWistiaAPIVersion`                                                      | *string*                                                                 | :heavy_check_mark:                                                       | The API version                                                          | 2025-11                                                                  |
# GetProjectsProjectIdSharingsRequest

## Example Usage

```typescript
import { GetProjectsProjectIdSharingsRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetProjectsProjectIdSharingsRequest = {
  projectId: "<id>",
  xWistiaAPIVersion: "2025-11",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `projectId`                 | *string*                    | :heavy_check_mark:          | Project Hashed ID           |                             |
| `page`                      | *number*                    | :heavy_minus_sign:          | Page number to retrieve     |                             |
| `perPage`                   | *number*                    | :heavy_minus_sign:          | Number of projects per page |                             |
| `xWistiaAPIVersion`         | *string*                    | :heavy_check_mark:          | The API version             | 2025-11                     |
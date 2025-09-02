# GetProjectsProjectIdSharingsRequest

## Example Usage

```typescript
import { GetProjectsProjectIdSharingsRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetProjectsProjectIdSharingsRequest = {
  projectId: "<id>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `projectId`                 | *string*                    | :heavy_check_mark:          | Project Hashed ID           |
| `page`                      | *number*                    | :heavy_minus_sign:          | Page number to retrieve     |
| `perPage`                   | *number*                    | :heavy_minus_sign:          | Number of projects per page |
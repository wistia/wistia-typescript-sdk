# PostProjectsProjectIdSharingsResponse

## Example Usage

```typescript
import { PostProjectsProjectIdSharingsResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostProjectsProjectIdSharingsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  result: {
    project: "http://myaccount.wistia.com/folders/13",
    sharing: {
      id: 14,
      isAdmin: true,
      canShare: true,
      canDownload: true,
      canUpload: true,
      share: {
        id: 3,
        name: "Jim",
        type: "Contact",
        email: "jim@wistia.com",
      },
      project: {
        id: 13,
        name: "My Project",
      },
    },
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `result`                                                                            | [models.CreateProjectSharingResponse](../../models/createprojectsharingresponse.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
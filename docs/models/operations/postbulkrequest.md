# PostBulkRequest

A request containing an array of actions to process in bulk.

## Example Usage

```typescript
import { PostBulkRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostBulkRequest = {
  actions: [],
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actions`                                                                                                                                                                                  | [operations.PostBulkAction](../../models/operations/postbulkaction.md)[]                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | An array of actions to process. Maximum 1000 actions per request.<br/>Each action specifies an operation (create, update, or delete),<br/>a resource type, and the relevant payload or record ID.<br/> |
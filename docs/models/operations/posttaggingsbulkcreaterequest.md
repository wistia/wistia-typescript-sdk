# PostTaggingsBulkCreateRequest

## Example Usage

```typescript
import { PostTaggingsBulkCreateRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostTaggingsBulkCreateRequest = {
  hashedIds: [],
  tagNames: [],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `hashedIds`                                    | *string*[]                                     | :heavy_check_mark:                             | An array of the media hashed IDs to be tagged. |
| `tagNames`                                     | *string*[]                                     | :heavy_check_mark:                             | An array of tag names to add to each media.    |
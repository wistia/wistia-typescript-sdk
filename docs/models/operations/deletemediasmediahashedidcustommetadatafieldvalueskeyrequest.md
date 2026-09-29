# DeleteMediasMediaHashedIdCustomMetadataFieldValuesKeyRequest

## Example Usage

```typescript
import { DeleteMediasMediaHashedIdCustomMetadataFieldValuesKeyRequest } from "@wistia/wistia-api-client/models/operations";

let value: DeleteMediasMediaHashedIdCustomMetadataFieldValuesKeyRequest = {
  mediaHashedId: "<id>",
  key: "client",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `mediaHashedId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | The hashed ID of the media whose custom metadata field value is to be cleared. |                                                                                |
| `key`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | The field definition's immutable key.                                          | client                                                                         |
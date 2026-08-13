# GetMediasMediaHashedIdCustomMetadataFieldValuesKeyRequest

## Example Usage

```typescript
import { GetMediasMediaHashedIdCustomMetadataFieldValuesKeyRequest } from "@wistia/wistia-api-client/models/operations";

let value: GetMediasMediaHashedIdCustomMetadataFieldValuesKeyRequest = {
  mediaHashedId: "<id>",
  key: "client",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mediaHashedId`                                                                  | *string*                                                                         | :heavy_check_mark:                                                               | The hashed ID of the media whose custom metadata field value is to be retrieved. |                                                                                  |
| `key`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | The field definition's immutable key.                                            | client                                                                           |
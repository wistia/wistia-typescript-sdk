# DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest

## Example Usage

```typescript
import { DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest } from "@wistia/wistia-api-client/models/operations";

let value: DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest = {
  mediaHashedId: "<id>",
  localizationHashedId: "<id>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `mediaHashedId`                              | *string*                                     | :heavy_check_mark:                           | The hashed ID of the localization's media.   |                                              |
| `localizationHashedId`                       | *string*                                     | :heavy_check_mark:                           | The hashed ID of the localization to delete. |                                              |
| `xWistiaAPIVersion`                          | *string*                                     | :heavy_minus_sign:                           | The API version                              | 2025-11                                      |
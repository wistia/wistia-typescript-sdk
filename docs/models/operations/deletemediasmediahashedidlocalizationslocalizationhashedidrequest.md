# DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest

## Example Usage

```typescript
import { DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest } from "wistia/models/operations";

let value: DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdRequest = {
  mediaHashedId: "<id>",
  localizationHashedId: "<id>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `mediaHashedId`                              | *string*                                     | :heavy_check_mark:                           | The hashed ID of the localization's media.   |
| `localizationHashedId`                       | *string*                                     | :heavy_check_mark:                           | The hashed ID of the localization to delete. |
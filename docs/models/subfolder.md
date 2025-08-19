# Subfolder

A subfolder within a folder that contains media files.

## Example Usage

```typescript
import { Subfolder } from "wistia/models";

let value: Subfolder = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `hashedId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The hashed ID for this subfolder.                                                             |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name of the subfolder.                                                            |
| `position`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | The position of this subfolder within its project, used for ordering.                         |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | A description for the subfolder.                                                              |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date when the subfolder was created.                                                      |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date when the subfolder was last modified.                                                |
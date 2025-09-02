# Tag

## Example Usage

```typescript
import { Tag } from "@wistia/wistia-api-client/models";

let value: Tag = {
  name: "My tag Title",
  taggingsCount: 2,
  created: new Date("2010-08-13T18:47:39+00:00"),
  updated: new Date("2010-08-19T21:47:00+00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The tag’s display name.                                                                       | My tag Title                                                                                  |
| `taggingsCount`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of different medias that have been associated with this tag.                       | 2                                                                                             |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date that the tag was originally created.                                                 | 2010-08-13T18:47:39+00:00                                                                     |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date that the tag was last updated.                                                       | 2010-08-19T21:47:00+00:00                                                                     |
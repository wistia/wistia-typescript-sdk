# PostMediasMediaHashedIdCaptionsLanguageCodeEditsRequestBody

## Example Usage

```typescript
import { PostMediasMediaHashedIdCaptionsLanguageCodeEditsRequestBody } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdCaptionsLanguageCodeEditsRequestBody = {
  edits: [],
  expectedVersion: 810476,
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `edits`                                                                                                                                                                                                 | [operations.EditRequest](../../models/operations/editrequest.md)[]                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                      | The corrections to apply, all-or-nothing, in one new version.                                                                                                                                           |
| `expectedVersion`                                                                                                                                                                                       | *number*                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                      | The active caption version returned with the caption content used to prepare these edits. The edit applies only if that is still the active version; otherwise it returns 409 so you re-read and retry. |
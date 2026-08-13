# PostMediasMediaHashedIdCaptionsLanguageCodeEditsResponse

The batch was applied and a new caption version was written.

## Example Usage

```typescript
import { PostMediasMediaHashedIdCaptionsLanguageCodeEditsResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostMediasMediaHashedIdCaptionsLanguageCodeEditsResponse = {
  applied: false,
  mediaId: "<id>",
  language: "<value>",
  version: {
    from: 348852,
    to: 989834,
  },
  edits: [
    {
      targetText: "<value>",
      replacementText: "<value>",
      matchedText: "<value>",
      context: "<value>",
      original: {
        startMs: 439679,
        endMs: 515513,
      },
      replacement: {
        startMs: 58397,
        endMs: 32120,
      },
    },
  ],
  warnings: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `applied`                                                                                                                                        | *boolean*                                                                                                                                        | :heavy_check_mark:                                                                                                                               | Always true on a 200; the whole batch was applied.                                                                                               |
| `mediaId`                                                                                                                                        | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The hashed ID of the media whose transcript was edited. Differs from the path media when the transcript is projected from a composite recording. |
| `language`                                                                                                                                       | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The ISO-639-2 language tag of the edited caption track.                                                                                          |
| `version`                                                                                                                                        | [operations.Version](../../models/operations/version.md)                                                                                         | :heavy_check_mark:                                                                                                                               | The caption version before and after the edit.                                                                                                   |
| `edits`                                                                                                                                          | [operations.EditResponse](../../models/operations/editresponse.md)[]                                                                             | :heavy_check_mark:                                                                                                                               | One entry per applied edit, echoing what matched and where it landed.                                                                            |
| `warnings`                                                                                                                                       | *string*[]                                                                                                                                       | :heavy_check_mark:                                                                                                                               | Non-fatal advisories, usually empty. For a Remix output, these may identify source media whose transcripts can be edited.                        |
# Payload

The data for the operation. Required for create, update, and move
operations.
The accepted fields depend on the resource type and match the corresponding
create or update endpoint's request body (for example, a channel_episode
create takes the same fields as the Create Channel Episode endpoint,
including channel_id).

Creating a subfolder requires `folder_id` (the parent folder's hashed ID)
and `name`.

Creating captions requires `media_id` and `caption_file` (the SRT
contents as a string; the multipart file upload the Create Captions
endpoint accepts is not available here) and takes an optional
`language`, detected from the file when omitted. Updating captions
takes `caption_file`; the track's language is fixed by the record.
Creating captions for a language that already has a track replaces it,
matching the Create Captions endpoint.

Moving a media requires `folder_id` (the destination folder's hashed ID)
and accepts an optional `subfolder_id`, which must belong to that
folder. Omit `subfolder_id` to move the media to the folder's root
level.

A `customization_*` payload is a partial update of that concern only:
just the fields you send are changed, and a field naming another
concern's setting fails the action.


## Example Usage

```typescript
import { Payload } from "@wistia/wistia-api-client/models/operations";

let value: Payload = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |
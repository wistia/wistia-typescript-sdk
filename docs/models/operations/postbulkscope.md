# PostBulkScope

The parent whose records the job applies to.

Which parent types are valid depends on the job's `resource_type` and
`operation`:

- `media` and the `customization_*` types: `account`, `folder`, `subfolder`,
  `channel`.
- `captions` with `update` or `delete`, which address a caption track:
  `account`, `media`, `folder`, `channel`.
- `channel_episode`: `account`, `channel`, `media`.
- `subfolder`: `account`, `folder`.
- `folder` and `channel`: `account`.

An invalid combination is rejected with the valid parents listed.


## Example Usage

```typescript
import { PostBulkScope } from "@wistia/wistia-api-client/models/operations";

let value: PostBulkScope = {
  type: "channel",
  id: "abc123",
};
```

## Fields

| Field                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             | Example                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                  | [operations.PostBulkType](../../models/operations/postbulktype.md)                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                      | The kind of parent `id` names. Required, because a hashed ID does not say<br/>what it belongs to -- the same value could name a folder or a channel.<br/>Use `account` to mean every record the job could reach, with no `id`.<br/> |                                                                                                                                                                                                                         |
| `id`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                      | The parent's hashed ID. Required for every scope type except `account`.<br/>                                                                                                                                            | abc123                                                                                                                                                                                                                  |
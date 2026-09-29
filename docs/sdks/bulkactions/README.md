# BulkActions

## Overview

### Available Operations

* [postBulk](#postbulk) - Create Bulk Actions

## postBulk

Submits a batch of up to 1000 create, update, delete, and move actions to be
processed asynchronously. Returns a background job status whose Show
endpoint reports aggregate progress and per-action results, including the
hashed IDs of created records.

Supported resource types are `media`, `folder`, `subfolder`, `channel`,
`channel_episode`, `captions`, and the ten `customization_*` concerns. A
`folder` is a top-level folder (previously called a project); a `subfolder`
is nested inside one and requires `folder_id` and `name` when created. A
`captions` action operates on one caption track -- one media in one
language.

Because caption actions carry SRT contents inline, they are the resource
type most likely to reach the request body limit before the action cap.
Purchasing captions is not available here -- it has its own endpoint.

A `move` action targets one media and accepts a destination `folder_id` and
optional `subfolder_id`. Bulk moves can use different destinations and are
not subject to the Move Media endpoint's 100-item limit or separate throttle.

Player customizations are addressed one concern at a time
(`customization_appearance`, `customization_playback`, and so on), matching
the Update Customizations endpoints; each accepts `update` only, takes the
media's hashed ID as its `id`, and takes the same payload as its
corresponding endpoint. There is no batch equivalent of the broad customize
endpoint, so a batch always states which slice of the player it is changing.

A `media` update payload can also carry a `custom_metadata` object mapping
field keys to the values to set (`null` clears a field; omitted fields are
left untouched). Values are validated against each field's type exactly as
the Set Custom Metadata Field Value endpoint validates them, and each write
is recorded with its actor and source. Requires the custom metadata feature
on the account; without it actions carrying `custom_metadata` fail
individually.

Deleting a folder or subfolder also soft-deletes its media. An account owner
or manager can restore that media from the trash until it purges. To keep the
media when deleting a subfolder, use the Delete Subfolder endpoint; it moves
the media to the folder's root level instead.

Each action in the batch is authorized and processed independently:
failures (including authorization failures) are reported per action and do
not prevent other actions from completing. Media creation is not supported
-- uploads and URL imports have their own endpoints.


## Requires api token with one of the following permissions
```
Read, update & delete anything
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token.



### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/bulk" method="post" path="/bulk" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.bulkActions.postBulk({
    actions: [
      {
        operation: "create",
        resourceType: "customization_access",
        id: "abc123",
      },
    ],
    job: {
      operation: "update",
      resourceType: "channel",
      scope: {
        type: "folder",
        id: "abc123",
      },
      ids: [
        "abc1234567",
        "def8901234",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { bulkActionsPostBulk } from "@wistia/wistia-api-client/funcs/bulkActionsPostBulk.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await bulkActionsPostBulk(wistia, {
    actions: [
      {
        operation: "create",
        resourceType: "customization_access",
        id: "abc123",
      },
    ],
    job: {
      operation: "update",
      resourceType: "channel",
      scope: {
        type: "folder",
        id: "abc123",
      },
      ids: [
        "abc1234567",
        "def8901234",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bulkActionsPostBulk failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostBulkRequest](../../models/operations/postbulkrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostBulkResponse](../../models/operations/postbulkresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.PostBulkBadRequestError     | 400                                | application/json                   |
| errors.PostBulkUnauthorizedError   | 401                                | application/json                   |
| errors.PostBulkInternalServerError | 500                                | application/json                   |
| errors.WistiaDefaultError          | 4XX, 5XX                           | \*/\*                              |
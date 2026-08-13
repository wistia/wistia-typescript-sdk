# ChannelCollaborators

## Overview

### Available Operations

* [list](#list) - List Channel Collaborators
* [create](#create) - Create Channel Collaborator
* [delete](#delete) - Delete Channel Collaborator

## list

Lists the collaborators (contacts and contact groups) that have been granted access to a channel.

Results are scoped to what the authenticated user is allowed to see: account owners and managers see all collaborators, channel admins see all collaborators on their channels, and everyone else sees only the roles that grant them access.

## Requires api token with one of the following permissions
```
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/channels/{channelHashedId}/collaborators" method="get" path="/channels/{channelHashedId}/collaborators" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.channelCollaborators.list({
    channelHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { channelCollaboratorsList } from "@wistia/wistia-api-client/funcs/channelCollaboratorsList.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await channelCollaboratorsList(wistia, {
    channelHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("channelCollaboratorsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetChannelsChannelHashedIdCollaboratorsRequest](../../models/operations/getchannelschannelhashedidcollaboratorsrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetChannelsChannelHashedIdCollaboratorsResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.GetChannelsChannelHashedIdCollaboratorsBadRequestError     | 400                                                               | application/json                                                  |
| errors.GetChannelsChannelHashedIdCollaboratorsUnauthorizedError   | 401                                                               | application/json                                                  |
| errors.GetChannelsChannelHashedIdCollaboratorsNotFoundError       | 404                                                               | application/json                                                  |
| errors.GetChannelsChannelHashedIdCollaboratorsInternalServerError | 500                                                               | application/json                                                  |
| errors.WistiaDefaultError                                         | 4XX, 5XX                                                          | \*/\*                                                             |

## create

Invites a collaborator to a channel by specifying their email address and role. Creates a new contact if one doesn't exist with that email.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/channels/{channelHashedId}/collaborators" method="post" path="/channels/{channelHashedId}/collaborators" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.channelCollaborators.create({
    channelHashedId: "<id>",
    requestBody: {
      email: "jim@wistia.com",
      role: "admin",
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
import { channelCollaboratorsCreate } from "@wistia/wistia-api-client/funcs/channelCollaboratorsCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await channelCollaboratorsCreate(wistia, {
    channelHashedId: "<id>",
    requestBody: {
      email: "jim@wistia.com",
      role: "admin",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("channelCollaboratorsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostChannelsChannelHashedIdCollaboratorsRequest](../../models/operations/postchannelschannelhashedidcollaboratorsrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostChannelsChannelHashedIdCollaboratorsResponse](../../models/operations/postchannelschannelhashedidcollaboratorsresponse.md)\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.PostChannelsChannelHashedIdCollaboratorsBadRequestError     | 400                                                                | application/json                                                   |
| errors.PostChannelsChannelHashedIdCollaboratorsUnauthorizedError   | 401                                                                | application/json                                                   |
| errors.PostChannelsChannelHashedIdCollaboratorsNotFoundError       | 404                                                                | application/json                                                   |
| errors.PostChannelsChannelHashedIdCollaboratorsInternalServerError | 500                                                                | application/json                                                   |
| errors.WistiaDefaultError                                          | 4XX, 5XX                                                           | \*/\*                                                              |

## delete

Removes a collaborator's access to a channel.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/channels/{channelHashedId}/collaborators/{id}" method="delete" path="/channels/{channelHashedId}/collaborators/{id}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.channelCollaborators.delete({
    channelHashedId: "<id>",
    id: 565445,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { channelCollaboratorsDelete } from "@wistia/wistia-api-client/funcs/channelCollaboratorsDelete.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await channelCollaboratorsDelete(wistia, {
    channelHashedId: "<id>",
    id: 565445,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("channelCollaboratorsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteChannelsChannelHashedIdCollaboratorsIdRequest](../../models/operations/deletechannelschannelhashedidcollaboratorsidrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteChannelsChannelHashedIdCollaboratorsIdResponse](../../models/operations/deletechannelschannelhashedidcollaboratorsidresponse.md)\>**

### Errors

| Error Type                                                             | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.DeleteChannelsChannelHashedIdCollaboratorsIdUnauthorizedError   | 401                                                                    | application/json                                                       |
| errors.DeleteChannelsChannelHashedIdCollaboratorsIdNotFoundError       | 404                                                                    | application/json                                                       |
| errors.DeleteChannelsChannelHashedIdCollaboratorsIdInternalServerError | 500                                                                    | application/json                                                       |
| errors.WistiaDefaultError                                              | 4XX, 5XX                                                               | \*/\*                                                                  |
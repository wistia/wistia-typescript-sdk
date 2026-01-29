# ChannelEpisodes

## Overview

### Available Operations

* [get](#get) - Show Channel Episode
* [create](#create) - Create Channel Episode
* [list](#list) - List Channel Episodes
* [putChannelEpisodesChannelEpisodeHashedId](#putchannelepisodeschannelepisodehashedid) - Channel Episode Update
* [deleteChannelEpisodesChannelEpisodeHashedId](#deletechannelepisodeschannelepisodehashedid) - Channel Episode Delete
* [putChannelEpisodesChannelEpisodeHashedIdPublish](#putchannelepisodeschannelepisodehashedidpublish) - Channel Episode Update
* [putChannelEpisodesChannelEpisodeHashedIdUnpublish](#putchannelepisodeschannelepisodehashedidunpublish) - Channel Episode Update

## get

Returns the Channel Episode associated with a channel hashed id
and channel episode hashed id.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all folder and media data
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/channels/{channelHashedId}/channel_episodes/{channelEpisodeId}" method="get" path="/channels/{channelHashedId}/channel_episodes/{channelEpisodeId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.channelEpisodes.get({
    channelHashedId: "<id>",
    channelEpisodeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { channelEpisodesGet } from "@wistia/wistia-api-client/funcs/channelEpisodesGet.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await channelEpisodesGet(wistia, {
    channelHashedId: "<id>",
    channelEpisodeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("channelEpisodesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdRequest](../../models/operations/getchannelschannelhashedidchannelepisodeschannelepisodeidrequest.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdResponse](../../models/operations/getchannelschannelhashedidchannelepisodeschannelepisodeidresponse.md)\>**

### Errors

| Error Type                                                                          | Status Code                                                                         | Content Type                                                                        |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| errors.GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdUnauthorizedError   | 401                                                                                 | application/json                                                                    |
| errors.GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdInternalServerError | 500                                                                                 | application/json                                                                    |
| errors.WistiaDefaultError                                                           | 4XX, 5XX                                                                            | \*/\*                                                                               |

## create

Creates a new channel episode in a channel.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read, update & delete anything
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/channels/{channelHashedId}/channel_episodes" method="post" path="/channels/{channelHashedId}/channel_episodes" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.channelEpisodes.create({
    channelHashedId: "<id>",
    requestBody: {
      title: "My New Episode",
      description: "My Episode Description.",
      summary: "A short description.",
      publishAt: new Date("2024-12-31T23:59:59Z"),
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
import { channelEpisodesCreate } from "@wistia/wistia-api-client/funcs/channelEpisodesCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await channelEpisodesCreate(wistia, {
    channelHashedId: "<id>",
    requestBody: {
      title: "My New Episode",
      description: "My Episode Description.",
      summary: "A short description.",
      publishAt: new Date("2024-12-31T23:59:59Z"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("channelEpisodesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostChannelsChannelHashedIdChannelEpisodesRequest](../../models/operations/postchannelschannelhashedidchannelepisodesrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostChannelsChannelHashedIdChannelEpisodesResponse](../../models/operations/postchannelschannelhashedidchannelepisodesresponse.md)\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.PostChannelsChannelHashedIdChannelEpisodesBadRequestError     | 400                                                                  | application/json                                                     |
| errors.PostChannelsChannelHashedIdChannelEpisodesUnauthorizedError   | 401                                                                  | application/json                                                     |
| errors.PostChannelsChannelHashedIdChannelEpisodesInternalServerError | 500                                                                  | application/json                                                     |
| errors.WistiaDefaultError                                            | 4XX, 5XX                                                             | \*/\*                                                                |

## list

Lists Channel Episodes belonging to an account. This endpoint can also be used to
do a batch fetch based off of the hashed id.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all folder and media data
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/channel_episodes" method="get" path="/channel_episodes" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.channelEpisodes.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { channelEpisodesList } from "@wistia/wistia-api-client/funcs/channelEpisodesList.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await channelEpisodesList(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("channelEpisodesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetChannelEpisodesRequest](../../models/operations/getchannelepisodesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetChannelEpisodesResponse[]](../../models/.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.GetChannelEpisodesBadRequestError     | 400                                          | application/json                             |
| errors.GetChannelEpisodesUnauthorizedError   | 401                                          | application/json                             |
| errors.GetChannelEpisodesInternalServerError | 500                                          | application/json                             |
| errors.WistiaDefaultError                    | 4XX, 5XX                                     | \*/\*                                        |

## putChannelEpisodesChannelEpisodeHashedId

Updates an existing channel episode in a channel.
## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/channel_episodes/{channelEpisodeHashedId}" method="put" path="/channel_episodes/{channelEpisodeHashedId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.channelEpisodes.putChannelEpisodesChannelEpisodeHashedId({
    channelEpisodeHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { channelEpisodesPutChannelEpisodesChannelEpisodeHashedId } from "@wistia/wistia-api-client/funcs/channelEpisodesPutChannelEpisodesChannelEpisodeHashedId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await channelEpisodesPutChannelEpisodesChannelEpisodeHashedId(wistia, {
    channelEpisodeHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("channelEpisodesPutChannelEpisodesChannelEpisodeHashedId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutChannelEpisodesChannelEpisodeHashedIdRequest](../../models/operations/putchannelepisodeschannelepisodehashedidrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutChannelEpisodesChannelEpisodeHashedIdResponse](../../models/operations/putchannelepisodeschannelepisodehashedidresponse.md)\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.PutChannelEpisodesChannelEpisodeHashedIdUnauthorizedError   | 401                                                                | application/json                                                   |
| errors.PutChannelEpisodesChannelEpisodeHashedIdInternalServerError | 500                                                                | application/json                                                   |
| errors.WistiaDefaultError                                          | 4XX, 5XX                                                           | \*/\*                                                              |

## deleteChannelEpisodesChannelEpisodeHashedId

Deletes an existing channel episode in a channel.

## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/channel_episodes/{channelEpisodeHashedId}" method="delete" path="/channel_episodes/{channelEpisodeHashedId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.channelEpisodes.deleteChannelEpisodesChannelEpisodeHashedId({
    channelEpisodeHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { channelEpisodesDeleteChannelEpisodesChannelEpisodeHashedId } from "@wistia/wistia-api-client/funcs/channelEpisodesDeleteChannelEpisodesChannelEpisodeHashedId.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await channelEpisodesDeleteChannelEpisodesChannelEpisodeHashedId(wistia, {
    channelEpisodeHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("channelEpisodesDeleteChannelEpisodesChannelEpisodeHashedId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteChannelEpisodesChannelEpisodeHashedIdRequest](../../models/operations/deletechannelepisodeschannelepisodehashedidrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteChannelEpisodesChannelEpisodeHashedIdResponse](../../models/operations/deletechannelepisodeschannelepisodehashedidresponse.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.DeleteChannelEpisodesChannelEpisodeHashedIdUnauthorizedError   | 401                                                                   | application/json                                                      |
| errors.DeleteChannelEpisodesChannelEpisodeHashedIdInternalServerError | 500                                                                   | application/json                                                      |
| errors.WistiaDefaultError                                             | 4XX, 5XX                                                              | \*/\*                                                                 |

## putChannelEpisodesChannelEpisodeHashedIdPublish

Publishes an existing channel episode in a channel.
## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/channel_episodes/{channelEpisodeHashedId}/publish" method="put" path="/channel_episodes/{channelEpisodeHashedId}/publish" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.channelEpisodes.putChannelEpisodesChannelEpisodeHashedIdPublish({
    channelEpisodeHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { channelEpisodesPutChannelEpisodesChannelEpisodeHashedIdPublish } from "@wistia/wistia-api-client/funcs/channelEpisodesPutChannelEpisodesChannelEpisodeHashedIdPublish.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await channelEpisodesPutChannelEpisodesChannelEpisodeHashedIdPublish(wistia, {
    channelEpisodeHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("channelEpisodesPutChannelEpisodesChannelEpisodeHashedIdPublish failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutChannelEpisodesChannelEpisodeHashedIdPublishRequest](../../models/operations/putchannelepisodeschannelepisodehashedidpublishrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutChannelEpisodesChannelEpisodeHashedIdPublishResponse](../../models/operations/putchannelepisodeschannelepisodehashedidpublishresponse.md)\>**

### Errors

| Error Type                                                                | Status Code                                                               | Content Type                                                              |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| errors.PutChannelEpisodesChannelEpisodeHashedIdPublishUnauthorizedError   | 401                                                                       | application/json                                                          |
| errors.PutChannelEpisodesChannelEpisodeHashedIdPublishInternalServerError | 500                                                                       | application/json                                                          |
| errors.WistiaDefaultError                                                 | 4XX, 5XX                                                                  | \*/\*                                                                     |

## putChannelEpisodesChannelEpisodeHashedIdUnpublish

Unpublishes an existing channel episode in a channel.
## Requires api token with one of the following permissions
```
Read, update & delete anything
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/channel_episodes/{channelEpisodeHashedId}/unpublish" method="put" path="/channel_episodes/{channelEpisodeHashedId}/unpublish" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.channelEpisodes.putChannelEpisodesChannelEpisodeHashedIdUnpublish({
    channelEpisodeHashedId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { channelEpisodesPutChannelEpisodesChannelEpisodeHashedIdUnpublish } from "@wistia/wistia-api-client/funcs/channelEpisodesPutChannelEpisodesChannelEpisodeHashedIdUnpublish.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await channelEpisodesPutChannelEpisodesChannelEpisodeHashedIdUnpublish(wistia, {
    channelEpisodeHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("channelEpisodesPutChannelEpisodesChannelEpisodeHashedIdUnpublish failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutChannelEpisodesChannelEpisodeHashedIdUnpublishRequest](../../models/operations/putchannelepisodeschannelepisodehashedidunpublishrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutChannelEpisodesChannelEpisodeHashedIdUnpublishResponse](../../models/operations/putchannelepisodeschannelepisodehashedidunpublishresponse.md)\>**

### Errors

| Error Type                                                                  | Status Code                                                                 | Content Type                                                                |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| errors.PutChannelEpisodesChannelEpisodeHashedIdUnpublishUnauthorizedError   | 401                                                                         | application/json                                                            |
| errors.PutChannelEpisodesChannelEpisodeHashedIdUnpublishInternalServerError | 500                                                                         | application/json                                                            |
| errors.WistiaDefaultError                                                   | 4XX, 5XX                                                                    | \*/\*                                                                       |
# Channels.ChannelEpisodes

## Overview

### Available Operations

* [list](#list) - List Channel Episodes by Channel

## list

Lists Channel Episodes belonging to the channel passed in the path.

<!-- HIDE-MCP -->
## Requires api token with one of the following permissions
```
Read all folder and media data
```
<!-- /HIDE-MCP -->


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/channels/{channelHashedId}/channel_episodes" method="get" path="/channels/{channelHashedId}/channel_episodes" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.channels.channelEpisodes.list({
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
import { channelsChannelEpisodesList } from "@wistia/wistia-api-client/funcs/channelsChannelEpisodesList.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await channelsChannelEpisodesList(wistia, {
    channelHashedId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("channelsChannelEpisodesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetChannelsChannelHashedIdChannelEpisodesRequest](../../models/operations/getchannelschannelhashedidchannelepisodesrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetChannelsChannelHashedIdChannelEpisodesResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.GetChannelsChannelHashedIdChannelEpisodesBadRequestError     | 400                                                                 | application/json                                                    |
| errors.GetChannelsChannelHashedIdChannelEpisodesUnauthorizedError   | 401                                                                 | application/json                                                    |
| errors.GetChannelsChannelHashedIdChannelEpisodesInternalServerError | 500                                                                 | application/json                                                    |
| errors.WistiaDefaultError                                           | 4XX, 5XX                                                            | \*/\*                                                               |
# Search

## Overview

### Available Operations

* [search](#search) - Search

## search

Searches across folders, subfolders, medias, channels, channel episodes, and webinars.
Also searches through video transcripts, so media results may include transcript matches with
timestamps when the query matches spoken content.

> 🚧 Search results are changing
>
> This search is moving to a new search engine, so an open-ended `q` can return more
> results than it used to. If you depend on `q` finding one record by name, use Show
> Media or Show Folder with the record's hashed ID instead.
>
> Releases after 2026-09 have a newer search that takes `query` in place of `q`, returns
> one relevance-ranked list in `content`, and adds filters, sorting, paging, and an
> `exact_match` option.

## Requires api token with one of the following permissions
```
Read all data
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/search" method="get" path="/search" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.search.search({
    q: "screencast",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { searchSearch } from "@wistia/wistia-api-client/funcs/searchSearch.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await searchSearch(wistia, {
    q: "screencast",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSearchRequest](../../models/operations/getsearchrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSearchResponse](../../models/operations/getsearchresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetSearchBadRequestError     | 400                                 | application/json                    |
| errors.GetSearchUnauthorizedError   | 401                                 | application/json                    |
| errors.GetSearchInternalServerError | 500                                 | application/json                    |
| errors.WistiaDefaultError           | 4XX, 5XX                            | \*/\*                               |
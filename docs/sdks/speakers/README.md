# Speakers

## Overview

### Available Operations

* [assign](#assign) - Assign Speaker to Media
* [remove](#remove) - Remove Speaker from Media
* [list](#list) - List Speakers
* [create](#create) - Create Speaker

## assign

Assigns a reusable speaker profile to a media. With `detected_speaker_id`,
every turn by that detected speaker is attributed to the profile, and
assigning a second detected speaker to the same profile merges them.
Without it, the speaker is credited on the media without naming turns.

Naming a detected speaker requires the current `speaker_data_version` as
`expected_version`, and isn't available while the account has speaker
identification turned off.


## Requires api token with one of the following permissions
```
Read, update & delete anything
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token, who must be able to edit the media's
transcript and view the account's speaker profiles.



### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/medias/{mediaHashedId}/speakers" method="post" path="/medias/{mediaHashedId}/speakers" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.speakers.assign({
    mediaHashedId: "<id>",
    requestBody: {
      speakerProfileId: "abc123def4",
      detectedSpeakerId: "default_speaker_0",
      expectedVersion: 7,
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
import { speakersAssign } from "@wistia/wistia-api-client/funcs/speakersAssign.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await speakersAssign(wistia, {
    mediaHashedId: "<id>",
    requestBody: {
      speakerProfileId: "abc123def4",
      detectedSpeakerId: "default_speaker_0",
      expectedVersion: 7,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("speakersAssign failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostMediasMediaHashedIdSpeakersRequest](../../models/operations/postmediasmediahashedidspeakersrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostMediasMediaHashedIdSpeakersResponse](../../models/operations/postmediasmediahashedidspeakersresponse.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.PostMediasMediaHashedIdSpeakersBadRequestError     | 400                                                       | application/json                                          |
| errors.PostMediasMediaHashedIdSpeakersUnauthorizedError   | 401                                                       | application/json                                          |
| errors.PostMediasMediaHashedIdSpeakersForbiddenError      | 403                                                       | application/json                                          |
| errors.PostMediasMediaHashedIdSpeakersNotFoundError       | 404                                                       | application/json                                          |
| errors.PostMediasMediaHashedIdSpeakersStaleVersionError   | 409                                                       | application/json                                          |
| errors.PostMediasMediaHashedIdSpeakersInternalServerError | 500                                                       | application/json                                          |
| errors.WistiaDefaultError                                 | 4XX, 5XX                                                  | \*/\*                                                     |

## remove

Removes a speaker assignment from a media. Every turn attributed to the
speaker returns to an anonymous detected speaker, which can be named again
by assigning it. The speaker's profile stays in the account's speaker
library.

Pass the media's current `speaker_data_version` as `expected_version` to
reject the removal if the speaker data changed since you read it.


## Requires api token with one of the following permissions
```
Read, update & delete anything
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token, who must be able to edit the media's
transcript and view the account's speaker profiles.



### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/medias/{mediaHashedId}/speakers/{mediaSpeakerId}" method="delete" path="/medias/{mediaHashedId}/speakers/{mediaSpeakerId}" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.speakers.remove({
    mediaHashedId: "<id>",
    mediaSpeakerId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { speakersRemove } from "@wistia/wistia-api-client/funcs/speakersRemove.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await speakersRemove(wistia, {
    mediaHashedId: "<id>",
    mediaSpeakerId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("speakersRemove failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdRequest](../../models/operations/deletemediasmediahashedidspeakersmediaspeakeridrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdResponse](../../models/operations/deletemediasmediahashedidspeakersmediaspeakeridresponse.md)\>**

### Errors

| Error Type                                                                | Status Code                                                               | Content Type                                                              |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| errors.DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdBadRequestError     | 400                                                                       | application/json                                                          |
| errors.DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdUnauthorizedError   | 401                                                                       | application/json                                                          |
| errors.DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdForbiddenError      | 403                                                                       | application/json                                                          |
| errors.DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdNotFoundError       | 404                                                                       | application/json                                                          |
| errors.DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdStaleVersionError   | 409                                                                       | application/json                                                          |
| errors.DeleteMediasMediaHashedIdSpeakersMediaSpeakerIdInternalServerError | 500                                                                       | application/json                                                          |
| errors.WistiaDefaultError                                                 | 4XX, 5XX                                                                  | \*/\*                                                                     |

## list

Lists reusable speaker profiles belonging to the account.


## Requires api token with one of the following permissions
```
Read all data
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token. View-only contacts cannot list speaker
profiles.



### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/speakers" method="get" path="/speakers" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.speakers.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { speakersList } from "@wistia/wistia-api-client/funcs/speakersList.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await speakersList(wistia);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("speakersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpeakersRequest](../../models/operations/getspeakersrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSpeakersResponse[]](../../models/.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GetSpeakersBadRequestError     | 400                                   | application/json                      |
| errors.GetSpeakersUnauthorizedError   | 401                                   | application/json                      |
| errors.GetSpeakersForbiddenError      | 403                                   | application/json                      |
| errors.GetSpeakersInternalServerError | 500                                   | application/json                      |
| errors.WistiaDefaultError             | 4XX, 5XX                              | \*/\*                                 |

## create

Adds a reusable speaker profile to the account's speaker library. The
returned `speaker_profile_id` identifies the profile in speaker filters and
assignments.

Speaker names are not unique, because two different people can share one.
A request whose name matches an existing profile creates a second profile;
use the List Speakers endpoint to look for the person first.

A new profile isn't assigned to any media.


## Requires api token with one of the following permissions
```
All data
```

Tokens with the "Act with a team member's permissions" permission
(`all:delegate_to_contact_permissions` scope) can also be used. Requests
made with such a token are authorized using the permissions of the
contact assigned to the token. Only account owners and managers can
create speaker profiles.



### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/speakers" method="post" path="/speakers" -->
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.speakers.create({
    name: "Alice Example",
    title: "Product Manager",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { WistiaCore } from "@wistia/wistia-api-client/core.js";
import { speakersCreate } from "@wistia/wistia-api-client/funcs/speakersCreate.js";

// Use `WistiaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const wistia = new WistiaCore({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await speakersCreate(wistia, {
    name: "Alice Example",
    title: "Product Manager",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("speakersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostSpeakersRequest](../../models/operations/postspeakersrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostSpeakersResponse](../../models/operations/postspeakersresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.PostSpeakersBadRequestError     | 400                                    | application/json                       |
| errors.PostSpeakersUnauthorizedError   | 401                                    | application/json                       |
| errors.PostSpeakersForbiddenError      | 403                                    | application/json                       |
| errors.PostSpeakersInternalServerError | 500                                    | application/json                       |
| errors.WistiaDefaultError              | 4XX, 5XX                               | \*/\*                                  |
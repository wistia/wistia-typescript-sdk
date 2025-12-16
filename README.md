
<div align="center">
    <img width="500" height="300" alt="image" src="https://github.com/user-attachments/assets/e4169a55-3c50-41a7-a44e-3a2114b530b1" />
    <h1>Wistia TypeScript SDK</h1>
    <p>Developer-friendly TypeScript SDK specifically catered to leverage the <strong>Wistia</strong> API.</p>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>


## Summary

The Wistia TypeScript SDK provides comprehensive programmatic access to the Wistia Data, stats, and upload API, enabling developers to integrate with Wistia's video hosting and marketing platform. The SDK supports core video management operations including media upload, organization within projects and subfolders, caption and localization management, analytics and stats retrieval, live streaming events, and domain security controls. 

## Server-side only

**Important:** Please do not use this library in a client context, as exposing bearer tokens in client-side applications is inherently insecure.

## Official docs

For complete API documentation and platform guides, please visit [docs.wistia.com](https://docs.wistia.com).

## Version note

This SDK wrapper is currently in **beta**; functionality is subject to change. When released, the API will use a date-based versioning system instead of (but compliant with) SemVer.

<!-- No Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
  * [Server-side only](#server-side-only)
  * [Official docs](#official-docs)
  * [Version note](#version-note)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @wistia/wistia-api-client
```

### PNPM

```bash
pnpm add @wistia/wistia-api-client
```

### Bun

```bash
bun add @wistia/wistia-api-client
```

### Yarn

```bash
yarn add @wistia/wistia-api-client
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.uploadForm({
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    lowPriority: true,
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable |
| ------------ | ---- | ----------- | -------------------- |
| `bearerAuth` | http | HTTP Bearer | `WISTIA_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.uploadForm({
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    lowPriority: true,
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [account](docs/sdks/account/README.md)

* [get](docs/sdks/account/README.md#get) - Account Show

### [allowedDomains](docs/sdks/alloweddomains/README.md)

* [list](docs/sdks/alloweddomains/README.md#list) - Allowed Domains List
* [create](docs/sdks/alloweddomains/README.md#create) - Allowed Domain Create
* [get](docs/sdks/alloweddomains/README.md#get) - Allowed Domain Show
* [delete](docs/sdks/alloweddomains/README.md#delete) - Allowed Domain Delete

### [backgroundJobStatus](docs/sdks/backgroundjobstatus/README.md)

* [get](docs/sdks/backgroundjobstatus/README.md#get) - Background Job Status Show

### [captions](docs/sdks/captions/README.md)

* [list](docs/sdks/captions/README.md#list) - Captions List
* [create](docs/sdks/captions/README.md#create) - Captions Create
* [createMultipart](docs/sdks/captions/README.md#createmultipart) - Captions Create
* [purchase](docs/sdks/captions/README.md#purchase) - Captions Purchase
* [get](docs/sdks/captions/README.md#get) - Captions Show
* [update](docs/sdks/captions/README.md#update) - Captions Update
* [updateMultipart](docs/sdks/captions/README.md#updatemultipart) - Captions Update
* [delete](docs/sdks/captions/README.md#delete) - Captions Delete

### [channelEpisodes](docs/sdks/channelepisodes/README.md)

* [get](docs/sdks/channelepisodes/README.md#get) - Channel Episodes Show
* [create](docs/sdks/channelepisodes/README.md#create) - Channel Episode Create
* [list](docs/sdks/channelepisodes/README.md#list) - Channel Episodes List

### [channels](docs/sdks/channels/README.md)

* [list](docs/sdks/channels/README.md#list) - Channels List
* [get](docs/sdks/channels/README.md#get) - Channels Show

#### [channels.channelEpisodes](docs/sdks/channelschannelepisodes/README.md)

* [list](docs/sdks/channelschannelepisodes/README.md#list) - Channel Episodes List filtered by channel

### [customizations](docs/sdks/customizations/README.md)

* [get](docs/sdks/customizations/README.md#get) - Customizations Show
* [create](docs/sdks/customizations/README.md#create) - Customizations Create
* [update](docs/sdks/customizations/README.md#update) - Customizations Update
* [delete](docs/sdks/customizations/README.md#delete) - Customizations Delete

### [expiringAccessTokens](docs/sdks/expiringaccesstokens/README.md)

* [create](docs/sdks/expiringaccesstokens/README.md#create) - Create an expiring access token

### [liveStreamEvents](docs/sdks/livestreamevents/README.md)

* [list](docs/sdks/livestreamevents/README.md#list) - Live Stream Events List
* [create](docs/sdks/livestreamevents/README.md#create) - Live Stream Event Create
* [get](docs/sdks/livestreamevents/README.md#get) - Live Stream Event Show
* [update](docs/sdks/livestreamevents/README.md#update) - Live Stream Event Update
* [delete](docs/sdks/livestreamevents/README.md#delete) - Live Stream Event Delete

### [localizations](docs/sdks/localizations/README.md)

* [list](docs/sdks/localizations/README.md#list) - Localizations List
* [create](docs/sdks/localizations/README.md#create) - Localizations Create
* [get](docs/sdks/localizations/README.md#get) - Localizations Show
* [delete](docs/sdks/localizations/README.md#delete) - Localizations Delete

### [media](docs/sdks/media/README.md)

* [uploadForm](docs/sdks/media/README.md#uploadform) - Upload or Import Media
* [uploadMultipart](docs/sdks/media/README.md#uploadmultipart) - Upload or Import Media
* [list](docs/sdks/media/README.md#list) - Media List
* [get](docs/sdks/media/README.md#get) - Media Show
* [update](docs/sdks/media/README.md#update) - Media Update
* [delete](docs/sdks/media/README.md#delete) - Media Delete
* [copy](docs/sdks/media/README.md#copy) - Media Copy
* [swap](docs/sdks/media/README.md#swap) - Media Swap
* [getStats](docs/sdks/media/README.md#getstats) - Media Stats
* [translate](docs/sdks/media/README.md#translate) - Media Translate
* [archive](docs/sdks/media/README.md#archive) - Medias Archive
* [move](docs/sdks/media/README.md#move) - Media Move
* [restore](docs/sdks/media/README.md#restore) - Media Restore

### [projects](docs/sdks/projects/README.md)

* [list](docs/sdks/projects/README.md#list) - Project List
* [create](docs/sdks/projects/README.md#create) - Project Create
* [get](docs/sdks/projects/README.md#get) - Project Show
* [update](docs/sdks/projects/README.md#update) - Project Update
* [delete](docs/sdks/projects/README.md#delete) - Project Delete
* [copy](docs/sdks/projects/README.md#copy) - Project Copy

### [projectSharings](docs/sdks/projectsharings/README.md)

* [list](docs/sdks/projectsharings/README.md#list) - Project Sharing List
* [create](docs/sdks/projectsharings/README.md#create) - Project Sharing Create
* [get](docs/sdks/projectsharings/README.md#get) - Project Sharing Show
* [update](docs/sdks/projectsharings/README.md#update) - Project Sharing Update
* [delete](docs/sdks/projectsharings/README.md#delete) - Project Sharing Delete

### [search](docs/sdks/search/README.md)

* [search](docs/sdks/search/README.md#search) - Search

### [statsAccount](docs/sdks/statsaccount/README.md)

* [get](docs/sdks/statsaccount/README.md#get) - Stats:Account Show

### [statsEvents](docs/sdks/statsevents/README.md)

* [list](docs/sdks/statsevents/README.md#list) - Stats:Events List
* [get](docs/sdks/statsevents/README.md#get) - Stats:Events Show

### [statsMedia](docs/sdks/statsmedia/README.md)

* [get](docs/sdks/statsmedia/README.md#get) - Stats:Media Show
* [getByDate](docs/sdks/statsmedia/README.md#getbydate) - Stats:Media By Date
* [getEngagement](docs/sdks/statsmedia/README.md#getengagement) - Stats:Media Engagement

### [statsProjects](docs/sdks/statsprojects/README.md)

* [get](docs/sdks/statsprojects/README.md#get) - Stats:Projects Show

### [statsVisitors](docs/sdks/statsvisitors/README.md)

* [list](docs/sdks/statsvisitors/README.md#list) - Stats:Visitors List
* [get](docs/sdks/statsvisitors/README.md#get) - Stats:Visitors Show

### [subfolders](docs/sdks/subfolders/README.md)

* [list](docs/sdks/subfolders/README.md#list) - Subfolder List
* [create](docs/sdks/subfolders/README.md#create) - Create Subfolder
* [get](docs/sdks/subfolders/README.md#get) - Show Subfolder
* [update](docs/sdks/subfolders/README.md#update) - Update Subfolder
* [deleteSubfolder](docs/sdks/subfolders/README.md#deletesubfolder) - Delete Subfolder

### [tags](docs/sdks/tags/README.md)

* [list](docs/sdks/tags/README.md#list) - Tags List
* [create](docs/sdks/tags/README.md#create) - Tags Create
* [delete](docs/sdks/tags/README.md#delete) - Tags Delete

### [trims](docs/sdks/trims/README.md)

* [create](docs/sdks/trims/README.md#create) - Trims Create


</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountGet`](docs/sdks/account/README.md#get) - Account Show
- [`allowedDomainsCreate`](docs/sdks/alloweddomains/README.md#create) - Allowed Domain Create
- [`allowedDomainsDelete`](docs/sdks/alloweddomains/README.md#delete) - Allowed Domain Delete
- [`allowedDomainsGet`](docs/sdks/alloweddomains/README.md#get) - Allowed Domain Show
- [`allowedDomainsList`](docs/sdks/alloweddomains/README.md#list) - Allowed Domains List
- [`backgroundJobStatusGet`](docs/sdks/backgroundjobstatus/README.md#get) - Background Job Status Show
- [`captionsCreate`](docs/sdks/captions/README.md#create) - Captions Create
- [`captionsCreateMultipart`](docs/sdks/captions/README.md#createmultipart) - Captions Create
- [`captionsDelete`](docs/sdks/captions/README.md#delete) - Captions Delete
- [`captionsGet`](docs/sdks/captions/README.md#get) - Captions Show
- [`captionsList`](docs/sdks/captions/README.md#list) - Captions List
- [`captionsPurchase`](docs/sdks/captions/README.md#purchase) - Captions Purchase
- [`captionsUpdate`](docs/sdks/captions/README.md#update) - Captions Update
- [`captionsUpdateMultipart`](docs/sdks/captions/README.md#updatemultipart) - Captions Update
- [`channelEpisodesCreate`](docs/sdks/channelepisodes/README.md#create) - Channel Episode Create
- [`channelEpisodesGet`](docs/sdks/channelepisodes/README.md#get) - Channel Episodes Show
- [`channelEpisodesList`](docs/sdks/channelepisodes/README.md#list) - Channel Episodes List
- [`channelsChannelEpisodesList`](docs/sdks/channelschannelepisodes/README.md#list) - Channel Episodes List filtered by channel
- [`channelsGet`](docs/sdks/channels/README.md#get) - Channels Show
- [`channelsList`](docs/sdks/channels/README.md#list) - Channels List
- [`customizationsCreate`](docs/sdks/customizations/README.md#create) - Customizations Create
- [`customizationsDelete`](docs/sdks/customizations/README.md#delete) - Customizations Delete
- [`customizationsGet`](docs/sdks/customizations/README.md#get) - Customizations Show
- [`customizationsUpdate`](docs/sdks/customizations/README.md#update) - Customizations Update
- [`expiringAccessTokensCreate`](docs/sdks/expiringaccesstokens/README.md#create) - Create an expiring access token
- [`liveStreamEventsCreate`](docs/sdks/livestreamevents/README.md#create) - Live Stream Event Create
- [`liveStreamEventsDelete`](docs/sdks/livestreamevents/README.md#delete) - Live Stream Event Delete
- [`liveStreamEventsGet`](docs/sdks/livestreamevents/README.md#get) - Live Stream Event Show
- [`liveStreamEventsList`](docs/sdks/livestreamevents/README.md#list) - Live Stream Events List
- [`liveStreamEventsUpdate`](docs/sdks/livestreamevents/README.md#update) - Live Stream Event Update
- [`localizationsCreate`](docs/sdks/localizations/README.md#create) - Localizations Create
- [`localizationsDelete`](docs/sdks/localizations/README.md#delete) - Localizations Delete
- [`localizationsGet`](docs/sdks/localizations/README.md#get) - Localizations Show
- [`localizationsList`](docs/sdks/localizations/README.md#list) - Localizations List
- [`mediaArchive`](docs/sdks/media/README.md#archive) - Medias Archive
- [`mediaCopy`](docs/sdks/media/README.md#copy) - Media Copy
- [`mediaDelete`](docs/sdks/media/README.md#delete) - Media Delete
- [`mediaGet`](docs/sdks/media/README.md#get) - Media Show
- [`mediaGetStats`](docs/sdks/media/README.md#getstats) - Media Stats
- [`mediaList`](docs/sdks/media/README.md#list) - Media List
- [`mediaMove`](docs/sdks/media/README.md#move) - Media Move
- [`mediaRestore`](docs/sdks/media/README.md#restore) - Media Restore
- [`mediaSwap`](docs/sdks/media/README.md#swap) - Media Swap
- [`mediaTranslate`](docs/sdks/media/README.md#translate) - Media Translate
- [`mediaUpdate`](docs/sdks/media/README.md#update) - Media Update
- [`mediaUploadForm`](docs/sdks/media/README.md#uploadform) - Upload or Import Media
- [`mediaUploadMultipart`](docs/sdks/media/README.md#uploadmultipart) - Upload or Import Media
- [`projectsCopy`](docs/sdks/projects/README.md#copy) - Project Copy
- [`projectsCreate`](docs/sdks/projects/README.md#create) - Project Create
- [`projectsDelete`](docs/sdks/projects/README.md#delete) - Project Delete
- [`projectsGet`](docs/sdks/projects/README.md#get) - Project Show
- [`projectSharingsCreate`](docs/sdks/projectsharings/README.md#create) - Project Sharing Create
- [`projectSharingsDelete`](docs/sdks/projectsharings/README.md#delete) - Project Sharing Delete
- [`projectSharingsGet`](docs/sdks/projectsharings/README.md#get) - Project Sharing Show
- [`projectSharingsList`](docs/sdks/projectsharings/README.md#list) - Project Sharing List
- [`projectSharingsUpdate`](docs/sdks/projectsharings/README.md#update) - Project Sharing Update
- [`projectsList`](docs/sdks/projects/README.md#list) - Project List
- [`projectsUpdate`](docs/sdks/projects/README.md#update) - Project Update
- [`searchSearch`](docs/sdks/search/README.md#search) - Search
- [`statsAccountGet`](docs/sdks/statsaccount/README.md#get) - Stats:Account Show
- [`statsEventsGet`](docs/sdks/statsevents/README.md#get) - Stats:Events Show
- [`statsEventsList`](docs/sdks/statsevents/README.md#list) - Stats:Events List
- [`statsMediaGet`](docs/sdks/statsmedia/README.md#get) - Stats:Media Show
- [`statsMediaGetByDate`](docs/sdks/statsmedia/README.md#getbydate) - Stats:Media By Date
- [`statsMediaGetEngagement`](docs/sdks/statsmedia/README.md#getengagement) - Stats:Media Engagement
- [`statsProjectsGet`](docs/sdks/statsprojects/README.md#get) - Stats:Projects Show
- [`statsVisitorsGet`](docs/sdks/statsvisitors/README.md#get) - Stats:Visitors Show
- [`statsVisitorsList`](docs/sdks/statsvisitors/README.md#list) - Stats:Visitors List
- [`subfoldersCreate`](docs/sdks/subfolders/README.md#create) - Create Subfolder
- [`subfoldersDeleteSubfolder`](docs/sdks/subfolders/README.md#deletesubfolder) - Delete Subfolder
- [`subfoldersGet`](docs/sdks/subfolders/README.md#get) - Show Subfolder
- [`subfoldersList`](docs/sdks/subfolders/README.md#list) - Subfolder List
- [`subfoldersUpdate`](docs/sdks/subfolders/README.md#update) - Update Subfolder
- [`tagsCreate`](docs/sdks/tags/README.md#create) - Tags Create
- [`tagsDelete`](docs/sdks/tags/README.md#delete) - Tags Delete
- [`tagsList`](docs/sdks/tags/README.md#list) - Tags List
- [`trimsCreate`](docs/sdks/trims/README.md#create) - Trims Create

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { openAsBlob } from "node:fs";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.uploadMultipart({
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.uploadForm({
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    lowPriority: true,
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.uploadForm({
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    lowPriority: true,
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`WistiaError`](./src/models/errors/wistiaerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Wistia } from "@wistia/wistia-api-client";
import * as errors from "@wistia/wistia-api-client/models/errors";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  try {
    const result = await wistia.media.uploadForm({
      url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      lowPriority: true,
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.WistiaError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.PostFormBadRequestError) {
        console.log(error.data$.error); // operations.PostFormError
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`WistiaError`](./src/models/errors/wistiaerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (217)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`WistiaError`](./src/models/errors/wistiaerror.ts)**:
* [`PostFormBadRequestError`](./src/models/errors/postformbadrequesterror.ts): Error due to reaching the video limit of your account or other issues. Status code `400`. Applicable to 1 of 77 methods.*
* [`PostMultipartBadRequestError`](./src/models/errors/postmultipartbadrequesterror.ts): Error due to reaching the video limit of your account or other issues. Status code `400`. Applicable to 1 of 77 methods.*
* [`GetMediasBadRequestError`](./src/models/errors/getmediasbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaHashedIdBadRequestError`](./src/models/errors/putmediasmediahashedidbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdCopyBadRequestError`](./src/models/errors/postmediasmediahashedidcopybadrequesterror.ts): Bad request, e.g. copy failure. Status code `400`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaHashedIdSwapBadRequestError`](./src/models/errors/putmediasmediahashedidswapbadrequesterror.ts): Bad request, e.g. missing replacement_media_id or media type mismatch. Status code `400`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdStatsBadRequestError`](./src/models/errors/getmediasmediahashedidstatsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdTranslateBadRequestError`](./src/models/errors/postmediasmediahashedidtranslatebadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 77 methods.*
* [`PutMediasMoveBadRequestError`](./src/models/errors/putmediasmovebadrequesterror.ts): Invalid request. Status code `400`. Applicable to 1 of 77 methods.*
* [`PostAllowedDomainsBadRequestError`](./src/models/errors/postalloweddomainsbadrequesterror.ts): Bad request - missing or invalid domain. Status code `400`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdLocalizationsBadRequestError`](./src/models/errors/postmediasmediahashedidlocalizationsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 77 methods.*
* [`PostTagsBadRequestError`](./src/models/errors/posttagsbadrequesterror.ts): Bad request - missing or invalid parameters. Status code `400`. Applicable to 1 of 77 methods.*
* [`GetSearchBadRequestError`](./src/models/errors/getsearchbadrequesterror.ts): Bad request - missing query parameter. Status code `400`. Applicable to 1 of 77 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesBadRequestError`](./src/models/errors/postchannelschannelhashedidchannelepisodesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 77 methods.*
* [`GetMediasUnauthorizedError`](./src/models/errors/getmediasunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdUnauthorizedError`](./src/models/errors/getmediasmediahashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaHashedIdUnauthorizedError`](./src/models/errors/putmediasmediahashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`DeleteMediasMediaHashedIdUnauthorizedError`](./src/models/errors/deletemediasmediahashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdCopyUnauthorizedError`](./src/models/errors/postmediasmediahashedidcopyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaHashedIdSwapUnauthorizedError`](./src/models/errors/putmediasmediahashedidswapunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdStatsUnauthorizedError`](./src/models/errors/getmediasmediahashedidstatsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdTranslateUnauthorizedError`](./src/models/errors/postmediasmediahashedidtranslateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutMediasArchiveUnauthorizedError`](./src/models/errors/putmediasarchiveunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutMediasMoveUnauthorizedError`](./src/models/errors/putmediasmoveunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutMediasRestoreUnauthorizedError`](./src/models/errors/putmediasrestoreunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetProjectsUnauthorizedError`](./src/models/errors/getprojectsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostProjectsUnauthorizedError`](./src/models/errors/postprojectsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetProjectsIdUnauthorizedError`](./src/models/errors/getprojectsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutProjectsIdUnauthorizedError`](./src/models/errors/putprojectsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`DeleteProjectsIdUnauthorizedError`](./src/models/errors/deleteprojectsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostProjectsIdCopyUnauthorizedError`](./src/models/errors/postprojectsidcopyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetProjectsProjectIdSubfoldersUnauthorizedError`](./src/models/errors/getprojectsprojectidsubfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostProjectsProjectIdSubfoldersUnauthorizedError`](./src/models/errors/postprojectsprojectidsubfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetProjectsProjectIdSubfoldersSubfolderIdUnauthorizedError`](./src/models/errors/getprojectsprojectidsubfolderssubfolderidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutProjectsProjectIdSubfoldersSubfolderIdUnauthorizedError`](./src/models/errors/putprojectsprojectidsubfolderssubfolderidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`DeleteProjectsProjectIdSubfoldersSubfolderIdUnauthorizedError`](./src/models/errors/deleteprojectsprojectidsubfolderssubfolderidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetProjectsProjectIdSharingsUnauthorizedError`](./src/models/errors/getprojectsprojectidsharingsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostProjectsProjectIdSharingsUnauthorizedError`](./src/models/errors/postprojectsprojectidsharingsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetProjectsProjectIdSharingsSharingIdUnauthorizedError`](./src/models/errors/getprojectsprojectidsharingssharingidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutProjectsProjectIdSharingsSharingIdUnauthorizedError`](./src/models/errors/putprojectsprojectidsharingssharingidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`DeleteProjectsProjectIdSharingsSharingIdUnauthorizedError`](./src/models/errors/deleteprojectsprojectidsharingssharingidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetAccountDetailsUnauthorizedError`](./src/models/errors/getaccountdetailsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetAllowedDomainsUnauthorizedError`](./src/models/errors/getalloweddomainsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostAllowedDomainsUnauthorizedError`](./src/models/errors/postalloweddomainsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetAllowedDomainsDomainUnauthorizedError`](./src/models/errors/getalloweddomainsdomainunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`DeleteAllowedDomainsDomainUnauthorizedError`](./src/models/errors/deletealloweddomainsdomainunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetBackgroundJobStatusBackgroundJobStatusIdUnauthorizedError`](./src/models/errors/getbackgroundjobstatusbackgroundjobstatusidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/postmediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`DeleteMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/deletemediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdCaptionsUnauthorizedError`](./src/models/errors/getmediasmediahashedidcaptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdCaptionsUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdCaptionsMultipartUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionsmultipartunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError`](./src/models/errors/getmediasmediahashedidcaptionslanguagecodeunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodeunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeMultipartUnauthorizedError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodemultipartunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`DeleteMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError`](./src/models/errors/deletemediasmediahashedidcaptionslanguagecodeunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdTrimsUnauthorizedError`](./src/models/errors/postmediasmediahashedidtrimsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdLocalizationsUnauthorizedError`](./src/models/errors/getmediasmediahashedidlocalizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdLocalizationsUnauthorizedError`](./src/models/errors/postmediasmediahashedidlocalizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdLocalizationsLocalizationHashedIdUnauthorizedError`](./src/models/errors/getmediasmediahashedidlocalizationslocalizationhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdUnauthorizedError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetTagsUnauthorizedError`](./src/models/errors/gettagsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostTagsUnauthorizedError`](./src/models/errors/posttagsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`DeleteTagsNameUnauthorizedError`](./src/models/errors/deletetagsnameunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetSearchUnauthorizedError`](./src/models/errors/getsearchunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetChannelsUnauthorizedError`](./src/models/errors/getchannelsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetChannelsChannelHashedIdUnauthorizedError`](./src/models/errors/getchannelschannelhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdUnauthorizedError`](./src/models/errors/getchannelschannelhashedidchannelepisodeschannelepisodeidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesUnauthorizedError`](./src/models/errors/postchannelschannelhashedidchannelepisodesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetChannelEpisodesUnauthorizedError`](./src/models/errors/getchannelepisodesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostExpiringTokenUnauthorizedError`](./src/models/errors/postexpiringtokenunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetLiveStreamEventsUnauthorizedError`](./src/models/errors/getlivestreameventsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PostLiveStreamEventsUnauthorizedError`](./src/models/errors/postlivestreameventsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetLiveStreamEventsIdUnauthorizedError`](./src/models/errors/getlivestreameventsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutLiveStreamEventsIdUnauthorizedError`](./src/models/errors/putlivestreameventsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`DeleteLiveStreamEventsIdUnauthorizedError`](./src/models/errors/deletelivestreameventsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetStatsAccountUnauthorizedError`](./src/models/errors/getstatsaccountunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetStatsProjectsProjectIdUnauthorizedError`](./src/models/errors/getstatsprojectsprojectidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetStatsMediasMediaIdUnauthorizedError`](./src/models/errors/getstatsmediasmediaidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetStatsMediasMediaIdByDateUnauthorizedError`](./src/models/errors/getstatsmediasmediaidbydateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetStatsMediasMediaIdEngagementUnauthorizedError`](./src/models/errors/getstatsmediasmediaidengagementunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetStatsVisitorsUnauthorizedError`](./src/models/errors/getstatsvisitorsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetStatsVisitorsVisitorKeyUnauthorizedError`](./src/models/errors/getstatsvisitorsvisitorkeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetStatsEventsUnauthorizedError`](./src/models/errors/getstatseventsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetStatsEventsEventKeyUnauthorizedError`](./src/models/errors/getstatseventseventkeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesUnauthorizedError`](./src/models/errors/getchannelschannelhashedidchannelepisodesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 77 methods.*
* [`PutMediasArchiveForbiddenError`](./src/models/errors/putmediasarchiveforbiddenerror.ts): Forbidden, e.g. account does not have access to archiving. Status code `403`. Applicable to 1 of 77 methods.*
* [`PutMediasRestoreForbiddenError`](./src/models/errors/putmediasrestoreforbiddenerror.ts): Forbidden, e.g. account does not have access to archiving. Status code `403`. Applicable to 1 of 77 methods.*
* [`GetBackgroundJobStatusBackgroundJobStatusIdForbiddenError`](./src/models/errors/getbackgroundjobstatusbackgroundjobstatusidforbiddenerror.ts): Background Job Status Not Associated with An Authorized Object. Status code `403`. Applicable to 1 of 77 methods.*
* [`PostLiveStreamEventsForbiddenError`](./src/models/errors/postlivestreameventsforbiddenerror.ts): Live streaming feature not available. Status code `403`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdNotFoundError`](./src/models/errors/getmediasmediahashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaHashedIdNotFoundError`](./src/models/errors/putmediasmediahashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`DeleteMediasMediaHashedIdNotFoundError`](./src/models/errors/deletemediasmediahashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdCopyNotFoundError`](./src/models/errors/postmediasmediahashedidcopynotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaHashedIdSwapNotFoundError`](./src/models/errors/putmediasmediahashedidswapnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdStatsNotFoundError`](./src/models/errors/getmediasmediahashedidstatsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdTranslateNotFoundError`](./src/models/errors/postmediasmediahashedidtranslatenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PutMediasMoveNotFoundError`](./src/models/errors/putmediasmovenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PutMediasRestoreNotFoundError`](./src/models/errors/putmediasrestorenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`GetProjectsIdNotFoundError`](./src/models/errors/getprojectsidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PutProjectsIdNotFoundError`](./src/models/errors/putprojectsidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`DeleteProjectsIdNotFoundError`](./src/models/errors/deleteprojectsidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PostProjectsIdCopyNotFoundError`](./src/models/errors/postprojectsidcopynotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`GetProjectsProjectIdSubfoldersNotFoundError`](./src/models/errors/getprojectsprojectidsubfoldersnotfounderror.ts): Project not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PostProjectsProjectIdSubfoldersNotFoundError`](./src/models/errors/postprojectsprojectidsubfoldersnotfounderror.ts): Project not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`GetProjectsProjectIdSubfoldersSubfolderIdNotFoundError`](./src/models/errors/getprojectsprojectidsubfolderssubfolderidnotfounderror.ts): Project or subfolder not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PutProjectsProjectIdSubfoldersSubfolderIdNotFoundError`](./src/models/errors/putprojectsprojectidsubfolderssubfolderidnotfounderror.ts): Project or subfolder not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`DeleteProjectsProjectIdSubfoldersSubfolderIdNotFoundError`](./src/models/errors/deleteprojectsprojectidsubfolderssubfolderidnotfounderror.ts): Project or subfolder not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`GetProjectsProjectIdSharingsSharingIdNotFoundError`](./src/models/errors/getprojectsprojectidsharingssharingidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PutProjectsProjectIdSharingsSharingIdNotFoundError`](./src/models/errors/putprojectsprojectidsharingssharingidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`DeleteProjectsProjectIdSharingsSharingIdNotFoundError`](./src/models/errors/deleteprojectsprojectidsharingssharingidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`GetAllowedDomainsDomainNotFoundError`](./src/models/errors/getalloweddomainsdomainnotfounderror.ts): Domain not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`DeleteAllowedDomainsDomainNotFoundError`](./src/models/errors/deletealloweddomainsdomainnotfounderror.ts): Domain not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaIdCustomizationsNotFoundError`](./src/models/errors/getmediasmediaidcustomizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaIdCustomizationsNotFoundError`](./src/models/errors/putmediasmediaidcustomizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`DeleteMediasMediaIdCustomizationsNotFoundError`](./src/models/errors/deletemediasmediaidcustomizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdLocalizationsNotFoundError`](./src/models/errors/getmediasmediahashedidlocalizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdLocalizationsNotFoundError`](./src/models/errors/postmediasmediahashedidlocalizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdLocalizationsLocalizationHashedIdNotFoundError`](./src/models/errors/getmediasmediahashedidlocalizationslocalizationhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdNotFoundError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`GetChannelsChannelHashedIdNotFoundError`](./src/models/errors/getchannelschannelhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 77 methods.*
* [`MethodNotAllowedError`](./src/models/errors/methodnotallowederror.ts): Method not allowed, e.g. trying to copy archived media. Status code `405`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdTranslateUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidtranslateunprocessableentityerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 1 of 77 methods.*
* [`PutMediasArchiveUnprocessableEntityError`](./src/models/errors/putmediasarchiveunprocessableentityerror.ts): Unprocessable entity, e.g. too many media requested. Status code `422`. Applicable to 1 of 77 methods.*
* [`PutMediasRestoreUnprocessableEntityError`](./src/models/errors/putmediasrestoreunprocessableentityerror.ts): Missing arguments for restoration of media. Status code `422`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseunprocessableentityerror.ts): Unprocessable entity. Account not eligible, captions already purchased, or other validation error. Status code `422`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdTrimsUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidtrimsunprocessableentityerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdLocalizationsUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidlocalizationsunprocessableentityerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 1 of 77 methods.*
* [`PostTagsUnprocessableEntityError`](./src/models/errors/posttagsunprocessableentityerror.ts): Validation error - tag already exists. Status code `422`. Applicable to 1 of 77 methods.*
* [`PostExpiringTokenUnprocessableEntityError`](./src/models/errors/postexpiringtokenunprocessableentityerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 1 of 77 methods.*
* [`PostLiveStreamEventsUnprocessableEntityError`](./src/models/errors/postlivestreameventsunprocessableentityerror.ts): Validation errors. Status code `422`. Applicable to 1 of 77 methods.*
* [`PutLiveStreamEventsIdUnprocessableEntityError`](./src/models/errors/putlivestreameventsidunprocessableentityerror.ts): Validation errors. Status code `422`. Applicable to 1 of 77 methods.*
* [`GetMediasInternalServerError`](./src/models/errors/getmediasinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdInternalServerError`](./src/models/errors/getmediasmediahashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaHashedIdInternalServerError`](./src/models/errors/putmediasmediahashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`DeleteMediasMediaHashedIdInternalServerError`](./src/models/errors/deletemediasmediahashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdCopyInternalServerError`](./src/models/errors/postmediasmediahashedidcopyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaHashedIdSwapInternalServerError`](./src/models/errors/putmediasmediahashedidswapinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdStatsInternalServerError`](./src/models/errors/getmediasmediahashedidstatsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdTranslateInternalServerError`](./src/models/errors/postmediasmediahashedidtranslateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PutMediasArchiveInternalServerError`](./src/models/errors/putmediasarchiveinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PutMediasMoveInternalServerError`](./src/models/errors/putmediasmoveinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PutMediasRestoreInternalServerError`](./src/models/errors/putmediasrestoreinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetProjectsInternalServerError`](./src/models/errors/getprojectsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostProjectsInternalServerError`](./src/models/errors/postprojectsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetProjectsIdInternalServerError`](./src/models/errors/getprojectsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PutProjectsIdInternalServerError`](./src/models/errors/putprojectsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`DeleteProjectsIdInternalServerError`](./src/models/errors/deleteprojectsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostProjectsIdCopyInternalServerError`](./src/models/errors/postprojectsidcopyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetProjectsProjectIdSubfoldersInternalServerError`](./src/models/errors/getprojectsprojectidsubfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostProjectsProjectIdSubfoldersInternalServerError`](./src/models/errors/postprojectsprojectidsubfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetProjectsProjectIdSubfoldersSubfolderIdInternalServerError`](./src/models/errors/getprojectsprojectidsubfolderssubfolderidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PutProjectsProjectIdSubfoldersSubfolderIdInternalServerError`](./src/models/errors/putprojectsprojectidsubfolderssubfolderidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`DeleteProjectsProjectIdSubfoldersSubfolderIdInternalServerError`](./src/models/errors/deleteprojectsprojectidsubfolderssubfolderidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetProjectsProjectIdSharingsInternalServerError`](./src/models/errors/getprojectsprojectidsharingsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostProjectsProjectIdSharingsInternalServerError`](./src/models/errors/postprojectsprojectidsharingsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetProjectsProjectIdSharingsSharingIdInternalServerError`](./src/models/errors/getprojectsprojectidsharingssharingidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PutProjectsProjectIdSharingsSharingIdInternalServerError`](./src/models/errors/putprojectsprojectidsharingssharingidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`DeleteProjectsProjectIdSharingsSharingIdInternalServerError`](./src/models/errors/deleteprojectsprojectidsharingssharingidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetAccountDetailsInternalServerError`](./src/models/errors/getaccountdetailsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetAllowedDomainsInternalServerError`](./src/models/errors/getalloweddomainsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostAllowedDomainsInternalServerError`](./src/models/errors/postalloweddomainsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetAllowedDomainsDomainInternalServerError`](./src/models/errors/getalloweddomainsdomaininternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`DeleteAllowedDomainsDomainInternalServerError`](./src/models/errors/deletealloweddomainsdomaininternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetBackgroundJobStatusBackgroundJobStatusIdInternalServerError`](./src/models/errors/getbackgroundjobstatusbackgroundjobstatusidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/getmediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/postmediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/putmediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`DeleteMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/deletemediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdCaptionsInternalServerError`](./src/models/errors/getmediasmediahashedidcaptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdCaptionsInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdCaptionsMultipartInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionsmultipartinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdCaptionsLanguageCodeInternalServerError`](./src/models/errors/getmediasmediahashedidcaptionslanguagecodeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeInternalServerError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeMultipartInternalServerError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodemultipartinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`DeleteMediasMediaHashedIdCaptionsLanguageCodeInternalServerError`](./src/models/errors/deletemediasmediahashedidcaptionslanguagecodeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdTrimsInternalServerError`](./src/models/errors/postmediasmediahashedidtrimsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdLocalizationsInternalServerError`](./src/models/errors/getmediasmediahashedidlocalizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostMediasMediaHashedIdLocalizationsInternalServerError`](./src/models/errors/postmediasmediahashedidlocalizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetMediasMediaHashedIdLocalizationsLocalizationHashedIdInternalServerError`](./src/models/errors/getmediasmediahashedidlocalizationslocalizationhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdInternalServerError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetTagsInternalServerError`](./src/models/errors/gettagsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostTagsInternalServerError`](./src/models/errors/posttagsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`DeleteTagsNameInternalServerError`](./src/models/errors/deletetagsnameinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetSearchInternalServerError`](./src/models/errors/getsearchinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetChannelsInternalServerError`](./src/models/errors/getchannelsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetChannelsChannelHashedIdInternalServerError`](./src/models/errors/getchannelschannelhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdInternalServerError`](./src/models/errors/getchannelschannelhashedidchannelepisodeschannelepisodeidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesInternalServerError`](./src/models/errors/postchannelschannelhashedidchannelepisodesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetChannelEpisodesInternalServerError`](./src/models/errors/getchannelepisodesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostExpiringTokenInternalServerError`](./src/models/errors/postexpiringtokeninternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetLiveStreamEventsInternalServerError`](./src/models/errors/getlivestreameventsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PostLiveStreamEventsInternalServerError`](./src/models/errors/postlivestreameventsinternalservererror.ts): Internal server error during event creation. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetLiveStreamEventsIdInternalServerError`](./src/models/errors/getlivestreameventsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`PutLiveStreamEventsIdInternalServerError`](./src/models/errors/putlivestreameventsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`DeleteLiveStreamEventsIdInternalServerError`](./src/models/errors/deletelivestreameventsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetStatsAccountInternalServerError`](./src/models/errors/getstatsaccountinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetStatsProjectsProjectIdInternalServerError`](./src/models/errors/getstatsprojectsprojectidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetStatsMediasMediaIdInternalServerError`](./src/models/errors/getstatsmediasmediaidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetStatsMediasMediaIdByDateInternalServerError`](./src/models/errors/getstatsmediasmediaidbydateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetStatsMediasMediaIdEngagementInternalServerError`](./src/models/errors/getstatsmediasmediaidengagementinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetStatsVisitorsInternalServerError`](./src/models/errors/getstatsvisitorsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetStatsVisitorsVisitorKeyInternalServerError`](./src/models/errors/getstatsvisitorsvisitorkeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetStatsEventsInternalServerError`](./src/models/errors/getstatseventsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetStatsEventsEventKeyInternalServerError`](./src/models/errors/getstatseventseventkeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesInternalServerError`](./src/models/errors/getchannelschannelhashedidchannelepisodesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 77 methods.*
* [`NotImplementedError`](./src/models/errors/notimplementederror.ts): Not implemented - expiring tokens cannot be created from other expiring tokens. Status code `501`. Applicable to 1 of 77 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  serverURL: "https://api.wistia.com/modern",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.uploadForm({
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    lowPriority: true,
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Operation

The server URL can also be overridden on a per-operation basis, provided a server list was specified for the operation. For example:
```typescript
import { Wistia } from "@wistia/wistia-api-client";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.media.uploadForm({
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    lowPriority: true,
  }, {
    serverURL: "https://upload.wistia.com",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { HTTPClient } from "@wistia/wistia-api-client/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Wistia({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Wistia } from "@wistia/wistia-api-client";

const sdk = new Wistia({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `WISTIA_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=wistia&utm_campaign=typescript)

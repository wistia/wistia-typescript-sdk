# wistia

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *wistia* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=wistia&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/sheldon-vaughn-test/sandbox). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Data API: Wistia Data API
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [wistia](#wistia)
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

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
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
import { Wistia } from "wistia";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.projects.getProjects();

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
import { Wistia } from "wistia";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.projects.getProjects();

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

* [getAccountDetails](docs/sdks/account/README.md#getaccountdetails) - Account Show

### [allowedDomains](docs/sdks/alloweddomains/README.md)

* [getAllowedDomains](docs/sdks/alloweddomains/README.md#getalloweddomains) - Allowed Domains List
* [postAllowedDomains](docs/sdks/alloweddomains/README.md#postalloweddomains) - Allowed Domain Create
* [getAllowedDomainsDomain](docs/sdks/alloweddomains/README.md#getalloweddomainsdomain) - Allowed Domain Show
* [deleteAllowedDomainsDomain](docs/sdks/alloweddomains/README.md#deletealloweddomainsdomain) - Allowed Domain Delete

### [backgroundJobStatus](docs/sdks/backgroundjobstatus/README.md)

* [getBackgroundJobStatusBackgroundJobStatusId](docs/sdks/backgroundjobstatus/README.md#getbackgroundjobstatusbackgroundjobstatusid) - Background Job Status Show

### [captions](docs/sdks/captions/README.md)

* [getMediasMediaHashedIdCaptions](docs/sdks/captions/README.md#getmediasmediahashedidcaptions) - Captions List
* [postMediasMediaHashedIdCaptionsMultipart](docs/sdks/captions/README.md#postmediasmediahashedidcaptionsmultipart) - Captions Create
* [postMediasMediaHashedIdCaptions](docs/sdks/captions/README.md#postmediasmediahashedidcaptions) - Captions Create
* [postMediasMediaHashedIdCaptionsPurchase](docs/sdks/captions/README.md#postmediasmediahashedidcaptionspurchase) - Captions Purchase
* [getMediasMediaHashedIdCaptionsLanguageCode](docs/sdks/captions/README.md#getmediasmediahashedidcaptionslanguagecode) - Captions Show
* [putMediasMediaHashedIdCaptionsLanguageCode](docs/sdks/captions/README.md#putmediasmediahashedidcaptionslanguagecode) - Captions Update
* [putMediasMediaHashedIdCaptionsLanguageCodeMultipart](docs/sdks/captions/README.md#putmediasmediahashedidcaptionslanguagecodemultipart) - Captions Update
* [deleteMediasMediaHashedIdCaptionsLanguageCode](docs/sdks/captions/README.md#deletemediasmediahashedidcaptionslanguagecode) - Captions Delete

### [channelEpisodes](docs/sdks/channelepisodes/README.md)

* [getChannelsChannelHashedIdChannelEpisodesChannelEpisodeId](docs/sdks/channelepisodes/README.md#getchannelschannelhashedidchannelepisodeschannelepisodeid) - Channel Episodes Show
* [getChannelsChannelHashedIdChannelEpisodes](docs/sdks/channelepisodes/README.md#getchannelschannelhashedidchannelepisodes) - Channel Episodes List filtered by channel
* [postChannelsChannelHashedIdChannelEpisodes](docs/sdks/channelepisodes/README.md#postchannelschannelhashedidchannelepisodes) - Channel Episode Create
* [getChannelEpisodes](docs/sdks/channelepisodes/README.md#getchannelepisodes) - Channel Episodes List

### [channels](docs/sdks/channels/README.md)

* [getChannels](docs/sdks/channels/README.md#getchannels) - Channels List
* [getChannelsChannelHashedId](docs/sdks/channels/README.md#getchannelschannelhashedid) - Channels Show

### [customizations](docs/sdks/customizations/README.md)

* [getMediasMediaIdCustomizations](docs/sdks/customizations/README.md#getmediasmediaidcustomizations) - Customizations Show
* [postMediasMediaIdCustomizations](docs/sdks/customizations/README.md#postmediasmediaidcustomizations) - Customizations Create
* [putMediasMediaIdCustomizations](docs/sdks/customizations/README.md#putmediasmediaidcustomizations) - Customizations Update
* [deleteMediasMediaIdCustomizations](docs/sdks/customizations/README.md#deletemediasmediaidcustomizations) - Customizations Delete

### [expiringAccessTokens](docs/sdks/expiringaccesstokens/README.md)

* [postExpiringToken](docs/sdks/expiringaccesstokens/README.md#postexpiringtoken) - Create an expiring access token

### [liveStreamEvents](docs/sdks/livestreamevents/README.md)

* [getLiveStreamEvents](docs/sdks/livestreamevents/README.md#getlivestreamevents) - Live Stream Events List
* [postLiveStreamEvents](docs/sdks/livestreamevents/README.md#postlivestreamevents) - Live Stream Event Create
* [getLiveStreamEventsId](docs/sdks/livestreamevents/README.md#getlivestreameventsid) - Live Stream Event Show
* [putLiveStreamEventsId](docs/sdks/livestreamevents/README.md#putlivestreameventsid) - Live Stream Event Update
* [deleteLiveStreamEventsId](docs/sdks/livestreamevents/README.md#deletelivestreameventsid) - Live Stream Event Delete

### [localizations](docs/sdks/localizations/README.md)

* [getMediasMediaHashedIdLocalizations](docs/sdks/localizations/README.md#getmediasmediahashedidlocalizations) - Localizations List
* [postMediasMediaHashedIdLocalizations](docs/sdks/localizations/README.md#postmediasmediahashedidlocalizations) - Localizations Create
* [getMediasMediaHashedIdLocalizationsLocalizationHashedId](docs/sdks/localizations/README.md#getmediasmediahashedidlocalizationslocalizationhashedid) - Localizations Show
* [deleteMediasMediaHashedIdLocalizationsLocalizationHashedId](docs/sdks/localizations/README.md#deletemediasmediahashedidlocalizationslocalizationhashedid) - Localizations Delete

### [media](docs/sdks/media/README.md)

* [getMedias](docs/sdks/media/README.md#getmedias) - Media List
* [getMediasMediaHashedId](docs/sdks/media/README.md#getmediasmediahashedid) - Media Show
* [putMediasMediaHashedId](docs/sdks/media/README.md#putmediasmediahashedid) - Media Update
* [deleteMediasMediaHashedId](docs/sdks/media/README.md#deletemediasmediahashedid) - Media Delete
* [postMediasMediaHashedIdCopy](docs/sdks/media/README.md#postmediasmediahashedidcopy) - Media Copy
* [putMediasMediaHashedIdSwap](docs/sdks/media/README.md#putmediasmediahashedidswap) - Media Swap
* [getMediasMediaHashedIdStats](docs/sdks/media/README.md#getmediasmediahashedidstats) - Media Stats
* [postMediasMediaHashedIdTranslate](docs/sdks/media/README.md#postmediasmediahashedidtranslate) - Media Translate
* [putMediasArchive](docs/sdks/media/README.md#putmediasarchive) - Medias Archive
* [putMediasMove](docs/sdks/media/README.md#putmediasmove) - Media Move
* [putMediasRestore](docs/sdks/media/README.md#putmediasrestore) - Media Restore

### [projects](docs/sdks/projects/README.md)

* [getProjects](docs/sdks/projects/README.md#getprojects) - Project List
* [postProjects](docs/sdks/projects/README.md#postprojects) - Project Create
* [getProjectsId](docs/sdks/projects/README.md#getprojectsid) - Project Show
* [putProjectsId](docs/sdks/projects/README.md#putprojectsid) - Project Update
* [deleteProjectsId](docs/sdks/projects/README.md#deleteprojectsid) - Project Delete
* [postProjectsIdCopy](docs/sdks/projects/README.md#postprojectsidcopy) - Project Copy

### [projectSharings](docs/sdks/projectsharings/README.md)

* [getProjectsProjectIdSharings](docs/sdks/projectsharings/README.md#getprojectsprojectidsharings) - Project Sharing List
* [postProjectsProjectIdSharings](docs/sdks/projectsharings/README.md#postprojectsprojectidsharings) - Project Sharing Create
* [getProjectsProjectIdSharingsSharingId](docs/sdks/projectsharings/README.md#getprojectsprojectidsharingssharingid) - Project Sharing Show
* [putProjectsProjectIdSharingsSharingId](docs/sdks/projectsharings/README.md#putprojectsprojectidsharingssharingid) - Project Sharing Update
* [deleteProjectsProjectIdSharingsSharingId](docs/sdks/projectsharings/README.md#deleteprojectsprojectidsharingssharingid) - Project Sharing Delete

### [search](docs/sdks/search/README.md)

* [getSearch](docs/sdks/search/README.md#getsearch) - Search

### [statsAccount](docs/sdks/statsaccount/README.md)

* [getStatsAccount](docs/sdks/statsaccount/README.md#getstatsaccount) - Stats:Account Show

### [statsEvents](docs/sdks/statsevents/README.md)

* [getStatsEvents](docs/sdks/statsevents/README.md#getstatsevents) - Stats:Events List
* [getStatsEventsEventKey](docs/sdks/statsevents/README.md#getstatseventseventkey) - Stats:Events Show

### [statsMedia](docs/sdks/statsmedia/README.md)

* [getStatsMediasMediaIdByDate](docs/sdks/statsmedia/README.md#getstatsmediasmediaidbydate) - Stats:Media By Date

### [statsVisitors](docs/sdks/statsvisitors/README.md)

* [getStatsVisitors](docs/sdks/statsvisitors/README.md#getstatsvisitors) - Stats:Visitors List
* [getStatsVisitorsVisitorKey](docs/sdks/statsvisitors/README.md#getstatsvisitorsvisitorkey) - Stats:Visitors Show

### [tags](docs/sdks/tags/README.md)

* [getTags](docs/sdks/tags/README.md#gettags) - Tags List
* [postTags](docs/sdks/tags/README.md#posttags) - Tags Create
* [deleteTagsName](docs/sdks/tags/README.md#deletetagsname) - Tags Delete

### [trims](docs/sdks/trims/README.md)

* [postMediasMediaHashedIdTrims](docs/sdks/trims/README.md#postmediasmediahashedidtrims) - Trims Create


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

- [`accountGetAccountDetails`](docs/sdks/account/README.md#getaccountdetails) - Account Show
- [`allowedDomainsDeleteAllowedDomainsDomain`](docs/sdks/alloweddomains/README.md#deletealloweddomainsdomain) - Allowed Domain Delete
- [`allowedDomainsGetAllowedDomains`](docs/sdks/alloweddomains/README.md#getalloweddomains) - Allowed Domains List
- [`allowedDomainsGetAllowedDomainsDomain`](docs/sdks/alloweddomains/README.md#getalloweddomainsdomain) - Allowed Domain Show
- [`allowedDomainsPostAllowedDomains`](docs/sdks/alloweddomains/README.md#postalloweddomains) - Allowed Domain Create
- [`backgroundJobStatusGetBackgroundJobStatusBackgroundJobStatusId`](docs/sdks/backgroundjobstatus/README.md#getbackgroundjobstatusbackgroundjobstatusid) - Background Job Status Show
- [`captionsDeleteMediasMediaHashedIdCaptionsLanguageCode`](docs/sdks/captions/README.md#deletemediasmediahashedidcaptionslanguagecode) - Captions Delete
- [`captionsGetMediasMediaHashedIdCaptions`](docs/sdks/captions/README.md#getmediasmediahashedidcaptions) - Captions List
- [`captionsGetMediasMediaHashedIdCaptionsLanguageCode`](docs/sdks/captions/README.md#getmediasmediahashedidcaptionslanguagecode) - Captions Show
- [`captionsPostMediasMediaHashedIdCaptions`](docs/sdks/captions/README.md#postmediasmediahashedidcaptions) - Captions Create
- [`captionsPostMediasMediaHashedIdCaptionsMultipart`](docs/sdks/captions/README.md#postmediasmediahashedidcaptionsmultipart) - Captions Create
- [`captionsPostMediasMediaHashedIdCaptionsPurchase`](docs/sdks/captions/README.md#postmediasmediahashedidcaptionspurchase) - Captions Purchase
- [`captionsPutMediasMediaHashedIdCaptionsLanguageCode`](docs/sdks/captions/README.md#putmediasmediahashedidcaptionslanguagecode) - Captions Update
- [`captionsPutMediasMediaHashedIdCaptionsLanguageCodeMultipart`](docs/sdks/captions/README.md#putmediasmediahashedidcaptionslanguagecodemultipart) - Captions Update
- [`channelEpisodesGetChannelEpisodes`](docs/sdks/channelepisodes/README.md#getchannelepisodes) - Channel Episodes List
- [`channelEpisodesGetChannelsChannelHashedIdChannelEpisodes`](docs/sdks/channelepisodes/README.md#getchannelschannelhashedidchannelepisodes) - Channel Episodes List filtered by channel
- [`channelEpisodesGetChannelsChannelHashedIdChannelEpisodesChannelEpisodeId`](docs/sdks/channelepisodes/README.md#getchannelschannelhashedidchannelepisodeschannelepisodeid) - Channel Episodes Show
- [`channelEpisodesPostChannelsChannelHashedIdChannelEpisodes`](docs/sdks/channelepisodes/README.md#postchannelschannelhashedidchannelepisodes) - Channel Episode Create
- [`channelsGetChannels`](docs/sdks/channels/README.md#getchannels) - Channels List
- [`channelsGetChannelsChannelHashedId`](docs/sdks/channels/README.md#getchannelschannelhashedid) - Channels Show
- [`customizationsDeleteMediasMediaIdCustomizations`](docs/sdks/customizations/README.md#deletemediasmediaidcustomizations) - Customizations Delete
- [`customizationsGetMediasMediaIdCustomizations`](docs/sdks/customizations/README.md#getmediasmediaidcustomizations) - Customizations Show
- [`customizationsPostMediasMediaIdCustomizations`](docs/sdks/customizations/README.md#postmediasmediaidcustomizations) - Customizations Create
- [`customizationsPutMediasMediaIdCustomizations`](docs/sdks/customizations/README.md#putmediasmediaidcustomizations) - Customizations Update
- [`expiringAccessTokensPostExpiringToken`](docs/sdks/expiringaccesstokens/README.md#postexpiringtoken) - Create an expiring access token
- [`liveStreamEventsDeleteLiveStreamEventsId`](docs/sdks/livestreamevents/README.md#deletelivestreameventsid) - Live Stream Event Delete
- [`liveStreamEventsGetLiveStreamEvents`](docs/sdks/livestreamevents/README.md#getlivestreamevents) - Live Stream Events List
- [`liveStreamEventsGetLiveStreamEventsId`](docs/sdks/livestreamevents/README.md#getlivestreameventsid) - Live Stream Event Show
- [`liveStreamEventsPostLiveStreamEvents`](docs/sdks/livestreamevents/README.md#postlivestreamevents) - Live Stream Event Create
- [`liveStreamEventsPutLiveStreamEventsId`](docs/sdks/livestreamevents/README.md#putlivestreameventsid) - Live Stream Event Update
- [`localizationsDeleteMediasMediaHashedIdLocalizationsLocalizationHashedId`](docs/sdks/localizations/README.md#deletemediasmediahashedidlocalizationslocalizationhashedid) - Localizations Delete
- [`localizationsGetMediasMediaHashedIdLocalizations`](docs/sdks/localizations/README.md#getmediasmediahashedidlocalizations) - Localizations List
- [`localizationsGetMediasMediaHashedIdLocalizationsLocalizationHashedId`](docs/sdks/localizations/README.md#getmediasmediahashedidlocalizationslocalizationhashedid) - Localizations Show
- [`localizationsPostMediasMediaHashedIdLocalizations`](docs/sdks/localizations/README.md#postmediasmediahashedidlocalizations) - Localizations Create
- [`mediaDeleteMediasMediaHashedId`](docs/sdks/media/README.md#deletemediasmediahashedid) - Media Delete
- [`mediaGetMedias`](docs/sdks/media/README.md#getmedias) - Media List
- [`mediaGetMediasMediaHashedId`](docs/sdks/media/README.md#getmediasmediahashedid) - Media Show
- [`mediaGetMediasMediaHashedIdStats`](docs/sdks/media/README.md#getmediasmediahashedidstats) - Media Stats
- [`mediaPostMediasMediaHashedIdCopy`](docs/sdks/media/README.md#postmediasmediahashedidcopy) - Media Copy
- [`mediaPostMediasMediaHashedIdTranslate`](docs/sdks/media/README.md#postmediasmediahashedidtranslate) - Media Translate
- [`mediaPutMediasArchive`](docs/sdks/media/README.md#putmediasarchive) - Medias Archive
- [`mediaPutMediasMediaHashedId`](docs/sdks/media/README.md#putmediasmediahashedid) - Media Update
- [`mediaPutMediasMediaHashedIdSwap`](docs/sdks/media/README.md#putmediasmediahashedidswap) - Media Swap
- [`mediaPutMediasMove`](docs/sdks/media/README.md#putmediasmove) - Media Move
- [`mediaPutMediasRestore`](docs/sdks/media/README.md#putmediasrestore) - Media Restore
- [`projectsDeleteProjectsId`](docs/sdks/projects/README.md#deleteprojectsid) - Project Delete
- [`projectsGetProjects`](docs/sdks/projects/README.md#getprojects) - Project List
- [`projectsGetProjectsId`](docs/sdks/projects/README.md#getprojectsid) - Project Show
- [`projectSharingsDeleteProjectsProjectIdSharingsSharingId`](docs/sdks/projectsharings/README.md#deleteprojectsprojectidsharingssharingid) - Project Sharing Delete
- [`projectSharingsGetProjectsProjectIdSharings`](docs/sdks/projectsharings/README.md#getprojectsprojectidsharings) - Project Sharing List
- [`projectSharingsGetProjectsProjectIdSharingsSharingId`](docs/sdks/projectsharings/README.md#getprojectsprojectidsharingssharingid) - Project Sharing Show
- [`projectSharingsPostProjectsProjectIdSharings`](docs/sdks/projectsharings/README.md#postprojectsprojectidsharings) - Project Sharing Create
- [`projectSharingsPutProjectsProjectIdSharingsSharingId`](docs/sdks/projectsharings/README.md#putprojectsprojectidsharingssharingid) - Project Sharing Update
- [`projectsPostProjects`](docs/sdks/projects/README.md#postprojects) - Project Create
- [`projectsPostProjectsIdCopy`](docs/sdks/projects/README.md#postprojectsidcopy) - Project Copy
- [`projectsPutProjectsId`](docs/sdks/projects/README.md#putprojectsid) - Project Update
- [`searchGetSearch`](docs/sdks/search/README.md#getsearch) - Search
- [`statsAccountGetStatsAccount`](docs/sdks/statsaccount/README.md#getstatsaccount) - Stats:Account Show
- [`statsEventsGetStatsEvents`](docs/sdks/statsevents/README.md#getstatsevents) - Stats:Events List
- [`statsEventsGetStatsEventsEventKey`](docs/sdks/statsevents/README.md#getstatseventseventkey) - Stats:Events Show
- [`statsMediaGetStatsMediasMediaIdByDate`](docs/sdks/statsmedia/README.md#getstatsmediasmediaidbydate) - Stats:Media By Date
- [`statsVisitorsGetStatsVisitors`](docs/sdks/statsvisitors/README.md#getstatsvisitors) - Stats:Visitors List
- [`statsVisitorsGetStatsVisitorsVisitorKey`](docs/sdks/statsvisitors/README.md#getstatsvisitorsvisitorkey) - Stats:Visitors Show
- [`tagsDeleteTagsName`](docs/sdks/tags/README.md#deletetagsname) - Tags Delete
- [`tagsGetTags`](docs/sdks/tags/README.md#gettags) - Tags List
- [`tagsPostTags`](docs/sdks/tags/README.md#posttags) - Tags Create
- [`trimsPostMediasMediaHashedIdTrims`](docs/sdks/trims/README.md#postmediasmediahashedidtrims) - Trims Create

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
import { openAsBlob } from "node:fs";
import { Wistia } from "wistia";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  await wistia.captions.postMediasMediaHashedIdCaptionsMultipart({
    mediaHashedId: "<id>",
    requestBody: {
      captionFile: await openAsBlob("example.file"),
    },
  });
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Wistia } from "wistia";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.projects.getProjects({
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
import { Wistia } from "wistia";

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
  const result = await wistia.projects.getProjects();

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
import { Wistia } from "wistia";
import * as errors from "wistia/models/errors";

const wistia = new Wistia({
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  try {
    const result = await wistia.projects.getProjects();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.WistiaError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.FourHundredAndOneError) {
        console.log(error.data$.error); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`WistiaError`](./src/models/errors/wistiaerror.ts): The base class for HTTP error responses.
  * [`FourHundredAndOneError`](./src/models/errors/fourhundredandoneerror.ts): Unauthorized, invalid or missing token. Status code `401`.
  * [`FiveHundredError`](./src/models/errors/fivehundrederror.ts): Internal server error. Status code `500`. *

<details><summary>Less common errors (32)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`WistiaError`](./src/models/errors/wistiaerror.ts)**:
* [`FourHundredAndFourError`](./src/models/errors/fourhundredandfourerror.ts): Resource not found. Status code `404`. Applicable to 24 of 67 methods.*
* [`FourHundredError`](./src/models/errors/fourhundrederror.ts): Bad request. Status code `400`. Applicable to 5 of 67 methods.*
* [`FourHundredAndTwentyTwoError`](./src/models/errors/fourhundredandtwentytwoerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 2 of 67 methods.*
* [`PostMediasMediaHashedIdCopyBadRequestError`](./src/models/errors/postmediasmediahashedidcopybadrequesterror.ts): Bad request, e.g. copy failure. Status code `400`. Applicable to 1 of 67 methods.*
* [`PutMediasMediaHashedIdSwapBadRequestError`](./src/models/errors/putmediasmediahashedidswapbadrequesterror.ts): Bad request, e.g. missing replacement_media_id or media type mismatch. Status code `400`. Applicable to 1 of 67 methods.*
* [`PutMediasMoveBadRequestError`](./src/models/errors/putmediasmovebadrequesterror.ts): Invalid request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostAllowedDomainsBadRequestError`](./src/models/errors/postalloweddomainsbadrequesterror.ts): Bad request - missing or invalid domain. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostTagsBadRequestError`](./src/models/errors/posttagsbadrequesterror.ts): Bad request - missing or invalid parameters. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetSearchBadRequestError`](./src/models/errors/getsearchbadrequesterror.ts): Bad request - missing query parameter. Status code `400`. Applicable to 1 of 67 methods.*
* [`PutMediasArchiveForbiddenError`](./src/models/errors/putmediasarchiveforbiddenerror.ts): Forbidden, e.g. account does not have access to archiving. Status code `403`. Applicable to 1 of 67 methods.*
* [`PutMediasRestoreForbiddenError`](./src/models/errors/putmediasrestoreforbiddenerror.ts): Forbidden, e.g. account does not have access to archiving. Status code `403`. Applicable to 1 of 67 methods.*
* [`GetBackgroundJobStatusBackgroundJobStatusIdForbiddenError`](./src/models/errors/getbackgroundjobstatusbackgroundjobstatusidforbiddenerror.ts): Background Job Status Not Associated with An Authorized Object. Status code `403`. Applicable to 1 of 67 methods.*
* [`PostLiveStreamEventsForbiddenError`](./src/models/errors/postlivestreameventsforbiddenerror.ts): Live streaming feature not available. Status code `403`. Applicable to 1 of 67 methods.*
* [`GetAllowedDomainsDomainNotFoundError`](./src/models/errors/getalloweddomainsdomainnotfounderror.ts): Domain not found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteAllowedDomainsDomainNotFoundError`](./src/models/errors/deletealloweddomainsdomainnotfounderror.ts): Domain not found. Status code `404`. Applicable to 1 of 67 methods.*
* [`MethodNotAllowedError`](./src/models/errors/methodnotallowederror.ts): Method not allowed, e.g. trying to copy archived media. Status code `405`. Applicable to 1 of 67 methods.*
* [`PostMediasMediaHashedIdTranslateUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidtranslateunprocessableentityerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 1 of 67 methods.*
* [`PutMediasArchiveUnprocessableEntityError`](./src/models/errors/putmediasarchiveunprocessableentityerror.ts): Unprocessable entity, e.g. too many media requested. Status code `422`. Applicable to 1 of 67 methods.*
* [`PutMediasRestoreUnprocessableEntityError`](./src/models/errors/putmediasrestoreunprocessableentityerror.ts): Missing arguments for restoration of media. Status code `422`. Applicable to 1 of 67 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseunprocessableentityerror.ts): Unprocessable entity. Account not eligible, captions already purchased, or other validation error. Status code `422`. Applicable to 1 of 67 methods.*
* [`PostMediasMediaHashedIdLocalizationsUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidlocalizationsunprocessableentityerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 1 of 67 methods.*
* [`PostTagsUnprocessableEntityError`](./src/models/errors/posttagsunprocessableentityerror.ts): Validation error - tag already exists. Status code `422`. Applicable to 1 of 67 methods.*
* [`PostLiveStreamEventsUnprocessableEntityError`](./src/models/errors/postlivestreameventsunprocessableentityerror.ts): Validation errors. Status code `422`. Applicable to 1 of 67 methods.*
* [`PutLiveStreamEventsIdUnprocessableEntityError`](./src/models/errors/putlivestreameventsidunprocessableentityerror.ts): Validation errors. Status code `422`. Applicable to 1 of 67 methods.*
* [`InternalServerError`](./src/models/errors/internalservererror.ts): Internal server error during event creation. Status code `500`. Applicable to 1 of 67 methods.*
* [`NotImplementedError`](./src/models/errors/notimplementederror.ts): Not implemented - expiring tokens cannot be created from other expiring tokens. Status code `501`. Applicable to 1 of 67 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Wistia } from "wistia";

const wistia = new Wistia({
  serverURL: "https://api.wistia.com/v1",
  bearerAuth: process.env["WISTIA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await wistia.projects.getProjects();

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
import { Wistia } from "wistia";
import { HTTPClient } from "wistia/lib/http";

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

const sdk = new Wistia({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Wistia } from "wistia";

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

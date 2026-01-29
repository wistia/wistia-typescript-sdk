
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

### [Account](docs/sdks/account/README.md)

* [get](docs/sdks/account/README.md#get) - Get Current Account

### [AllowedDomains](docs/sdks/alloweddomains/README.md)

* [list](docs/sdks/alloweddomains/README.md#list) - List Allowed Domains
* [create](docs/sdks/alloweddomains/README.md#create) - Create Allowed Domain
* [get](docs/sdks/alloweddomains/README.md#get) - Show Allowed Domain
* [delete](docs/sdks/alloweddomains/README.md#delete) - Delete Allowed Domain

### [BackgroundJobStatus](docs/sdks/backgroundjobstatus/README.md)

* [get](docs/sdks/backgroundjobstatus/README.md#get) - Show Background Job Status

### [Captions](docs/sdks/captions/README.md)

* [list](docs/sdks/captions/README.md#list) - List Captions by Media
* [create](docs/sdks/captions/README.md#create) - Create Captions
* [createMultipart](docs/sdks/captions/README.md#createmultipart) - Create Captions
* [getCaptions](docs/sdks/captions/README.md#getcaptions) - List Captions
* [purchase](docs/sdks/captions/README.md#purchase) - Purchase Captions
* [get](docs/sdks/captions/README.md#get) - Show Captions
* [update](docs/sdks/captions/README.md#update) - Update Captions
* [updateMultipart](docs/sdks/captions/README.md#updatemultipart) - Update Captions
* [delete](docs/sdks/captions/README.md#delete) - Delete Captions

### [ChannelEpisodes](docs/sdks/channelepisodes/README.md)

* [get](docs/sdks/channelepisodes/README.md#get) - Show Channel Episode
* [create](docs/sdks/channelepisodes/README.md#create) - Create Channel Episode
* [list](docs/sdks/channelepisodes/README.md#list) - List Channel Episodes
* [putChannelEpisodesChannelEpisodeHashedId](docs/sdks/channelepisodes/README.md#putchannelepisodeschannelepisodehashedid) - Channel Episode Update
* [deleteChannelEpisodesChannelEpisodeHashedId](docs/sdks/channelepisodes/README.md#deletechannelepisodeschannelepisodehashedid) - Channel Episode Delete
* [putChannelEpisodesChannelEpisodeHashedIdPublish](docs/sdks/channelepisodes/README.md#putchannelepisodeschannelepisodehashedidpublish) - Channel Episode Update
* [putChannelEpisodesChannelEpisodeHashedIdUnpublish](docs/sdks/channelepisodes/README.md#putchannelepisodeschannelepisodehashedidunpublish) - Channel Episode Update

### [Channels](docs/sdks/channels/README.md)

* [list](docs/sdks/channels/README.md#list) - List Channels
* [postChannels](docs/sdks/channels/README.md#postchannels) - Create Channel
* [get](docs/sdks/channels/README.md#get) - Show Channel
* [putChannelsChannelHashedId](docs/sdks/channels/README.md#putchannelschannelhashedid) - Update Channel
* [deleteChannelsChannelHashedId](docs/sdks/channels/README.md#deletechannelschannelhashedid) - Delete Channel

### [Channels.ChannelEpisodes](docs/sdks/channelschannelepisodes/README.md)

* [list](docs/sdks/channelschannelepisodes/README.md#list) - List Channel Episodes by Channel

### [Customizations](docs/sdks/customizations/README.md)

* [get](docs/sdks/customizations/README.md#get) - Show Customizations
* [create](docs/sdks/customizations/README.md#create) - Create Customizations
* [update](docs/sdks/customizations/README.md#update) - Update Customizations
* [delete](docs/sdks/customizations/README.md#delete) - Delete Customizations

### [ExpiringAccessTokens](docs/sdks/expiringaccesstokens/README.md)

* [create](docs/sdks/expiringaccesstokens/README.md#create) - Create Expiring Access Token

### [FolderSharings](docs/sdks/foldersharings/README.md)

* [getFoldersFolderIdSharings](docs/sdks/foldersharings/README.md#getfoldersfolderidsharings) - List Folder Sharings
* [postFoldersFolderIdSharings](docs/sdks/foldersharings/README.md#postfoldersfolderidsharings) - Create Folder Sharing
* [getFoldersFolderIdSharingsSharingId](docs/sdks/foldersharings/README.md#getfoldersfolderidsharingssharingid) - Show Folder Sharing
* [putFoldersFolderIdSharingsSharingId](docs/sdks/foldersharings/README.md#putfoldersfolderidsharingssharingid) - Update Folder Sharing
* [deleteFoldersFolderIdSharingsSharingId](docs/sdks/foldersharings/README.md#deletefoldersfolderidsharingssharingid) - Delete Folder Sharing

### [Folders](docs/sdks/folders/README.md)

* [getFolders](docs/sdks/folders/README.md#getfolders) - List Folders
* [postFolders](docs/sdks/folders/README.md#postfolders) - Create Folder
* [getFoldersId](docs/sdks/folders/README.md#getfoldersid) - Show Folder
* [putFoldersId](docs/sdks/folders/README.md#putfoldersid) - Update Folder
* [deleteFoldersId](docs/sdks/folders/README.md#deletefoldersid) - Delete Folder
* [postFoldersIdCopy](docs/sdks/folders/README.md#postfoldersidcopy) - Copy Folder

### [Localizations](docs/sdks/localizations/README.md)

* [list](docs/sdks/localizations/README.md#list) - List Localizations
* [create](docs/sdks/localizations/README.md#create) - Create Localization
* [get](docs/sdks/localizations/README.md#get) - Show Localization
* [delete](docs/sdks/localizations/README.md#delete) - Delete Localization

### [Media](docs/sdks/media/README.md)

* [uploadForm](docs/sdks/media/README.md#uploadform) - Upload or Import Media
* [uploadMultipart](docs/sdks/media/README.md#uploadmultipart) - Upload or Import Media
* [list](docs/sdks/media/README.md#list) - List Media
* [get](docs/sdks/media/README.md#get) - Show Media
* [update](docs/sdks/media/README.md#update) - Update Media
* [delete](docs/sdks/media/README.md#delete) - Delete Media
* [copy](docs/sdks/media/README.md#copy) - Copy Media
* [swap](docs/sdks/media/README.md#swap) - Swap Media
* [getStats](docs/sdks/media/README.md#getstats) - Show Media Aggregated Stats
* [translate](docs/sdks/media/README.md#translate) - Translate Media
* [archive](docs/sdks/media/README.md#archive) - Archive Media
* [move](docs/sdks/media/README.md#move) - Move Media
* [restore](docs/sdks/media/README.md#restore) - Restore Media
* [putMediasCopy](docs/sdks/media/README.md#putmediascopy) - Bulk Copy Media

### [Search](docs/sdks/search/README.md)

* [search](docs/sdks/search/README.md#search) - Search

### [StatsAccount](docs/sdks/statsaccount/README.md)

* [get](docs/sdks/statsaccount/README.md#get) - Show Current Account Stats

### [StatsEvents](docs/sdks/statsevents/README.md)

* [list](docs/sdks/statsevents/README.md#list) - List Events
* [get](docs/sdks/statsevents/README.md#get) - Show Event

### [StatsMedia](docs/sdks/statsmedia/README.md)

* [get](docs/sdks/statsmedia/README.md#get) - Show Media Stats
* [getByDate](docs/sdks/statsmedia/README.md#getbydate) - Show Media Stats by Date
* [getEngagement](docs/sdks/statsmedia/README.md#getengagement) - Show Media Engagement

### [StatsProjects](docs/sdks/statsprojects/README.md)

* [get](docs/sdks/statsprojects/README.md#get) - Show Project Stats

### [StatsVisitors](docs/sdks/statsvisitors/README.md)

* [list](docs/sdks/statsvisitors/README.md#list) - List Visitors
* [get](docs/sdks/statsvisitors/README.md#get) - Show Visitor

### [Subfolders](docs/sdks/subfolders/README.md)

* [getFoldersFolderIdSubfolders](docs/sdks/subfolders/README.md#getfoldersfolderidsubfolders) - List Subfolders
* [postFoldersFolderIdSubfolders](docs/sdks/subfolders/README.md#postfoldersfolderidsubfolders) - Create Subfolder
* [getFoldersFolderIdSubfoldersSubfolderId](docs/sdks/subfolders/README.md#getfoldersfolderidsubfolderssubfolderid) - Show Subfolder
* [putFoldersFolderIdSubfoldersSubfolderId](docs/sdks/subfolders/README.md#putfoldersfolderidsubfolderssubfolderid) - Update Subfolder
* [deleteFoldersFolderIdSubfoldersSubfolderId](docs/sdks/subfolders/README.md#deletefoldersfolderidsubfolderssubfolderid) - Delete Subfolder
* [deleteFoldersFolderIdSubfoldersBulkDelete](docs/sdks/subfolders/README.md#deletefoldersfolderidsubfoldersbulkdelete) - Bulk Delete Subfolders

### [Taggings](docs/sdks/taggings/README.md)

* [postTaggingsBulkCreate](docs/sdks/taggings/README.md#posttaggingsbulkcreate) - Bulk Tag Media

### [Tags](docs/sdks/tags/README.md)

* [list](docs/sdks/tags/README.md#list) - List Tags
* [create](docs/sdks/tags/README.md#create) - Create Tags
* [delete](docs/sdks/tags/README.md#delete) - Delete Tags

### [Trims](docs/sdks/trims/README.md)

* [create](docs/sdks/trims/README.md#create) - Create Media from Trims

### [WebinarRegistrations](docs/sdks/webinarregistrations/README.md)

* [postWebinarsWebinarIdRegistrations](docs/sdks/webinarregistrations/README.md#postwebinarswebinaridregistrations) - Create Webinar Registration

### [Webinars](docs/sdks/webinars/README.md)

* [getWebinars](docs/sdks/webinars/README.md#getwebinars) - List Webinars
* [postWebinars](docs/sdks/webinars/README.md#postwebinars) - Create Webinar
* [getWebinarsId](docs/sdks/webinars/README.md#getwebinarsid) - Show Webinar
* [putWebinarsId](docs/sdks/webinars/README.md#putwebinarsid) - Update Webinar
* [deleteWebinarsId](docs/sdks/webinars/README.md#deletewebinarsid) - Delete Webinar

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

- [`accountGet`](docs/sdks/account/README.md#get) - Get Current Account
- [`allowedDomainsCreate`](docs/sdks/alloweddomains/README.md#create) - Create Allowed Domain
- [`allowedDomainsDelete`](docs/sdks/alloweddomains/README.md#delete) - Delete Allowed Domain
- [`allowedDomainsGet`](docs/sdks/alloweddomains/README.md#get) - Show Allowed Domain
- [`allowedDomainsList`](docs/sdks/alloweddomains/README.md#list) - List Allowed Domains
- [`backgroundJobStatusGet`](docs/sdks/backgroundjobstatus/README.md#get) - Show Background Job Status
- [`captionsCreate`](docs/sdks/captions/README.md#create) - Create Captions
- [`captionsCreateMultipart`](docs/sdks/captions/README.md#createmultipart) - Create Captions
- [`captionsDelete`](docs/sdks/captions/README.md#delete) - Delete Captions
- [`captionsGet`](docs/sdks/captions/README.md#get) - Show Captions
- [`captionsGetCaptions`](docs/sdks/captions/README.md#getcaptions) - List Captions
- [`captionsList`](docs/sdks/captions/README.md#list) - List Captions by Media
- [`captionsPurchase`](docs/sdks/captions/README.md#purchase) - Purchase Captions
- [`captionsUpdate`](docs/sdks/captions/README.md#update) - Update Captions
- [`captionsUpdateMultipart`](docs/sdks/captions/README.md#updatemultipart) - Update Captions
- [`channelEpisodesCreate`](docs/sdks/channelepisodes/README.md#create) - Create Channel Episode
- [`channelEpisodesDeleteChannelEpisodesChannelEpisodeHashedId`](docs/sdks/channelepisodes/README.md#deletechannelepisodeschannelepisodehashedid) - Channel Episode Delete
- [`channelEpisodesGet`](docs/sdks/channelepisodes/README.md#get) - Show Channel Episode
- [`channelEpisodesList`](docs/sdks/channelepisodes/README.md#list) - List Channel Episodes
- [`channelEpisodesPutChannelEpisodesChannelEpisodeHashedId`](docs/sdks/channelepisodes/README.md#putchannelepisodeschannelepisodehashedid) - Channel Episode Update
- [`channelEpisodesPutChannelEpisodesChannelEpisodeHashedIdPublish`](docs/sdks/channelepisodes/README.md#putchannelepisodeschannelepisodehashedidpublish) - Channel Episode Update
- [`channelEpisodesPutChannelEpisodesChannelEpisodeHashedIdUnpublish`](docs/sdks/channelepisodes/README.md#putchannelepisodeschannelepisodehashedidunpublish) - Channel Episode Update
- [`channelsChannelEpisodesList`](docs/sdks/channelschannelepisodes/README.md#list) - List Channel Episodes by Channel
- [`channelsDeleteChannelsChannelHashedId`](docs/sdks/channels/README.md#deletechannelschannelhashedid) - Delete Channel
- [`channelsGet`](docs/sdks/channels/README.md#get) - Show Channel
- [`channelsList`](docs/sdks/channels/README.md#list) - List Channels
- [`channelsPostChannels`](docs/sdks/channels/README.md#postchannels) - Create Channel
- [`channelsPutChannelsChannelHashedId`](docs/sdks/channels/README.md#putchannelschannelhashedid) - Update Channel
- [`customizationsCreate`](docs/sdks/customizations/README.md#create) - Create Customizations
- [`customizationsDelete`](docs/sdks/customizations/README.md#delete) - Delete Customizations
- [`customizationsGet`](docs/sdks/customizations/README.md#get) - Show Customizations
- [`customizationsUpdate`](docs/sdks/customizations/README.md#update) - Update Customizations
- [`expiringAccessTokensCreate`](docs/sdks/expiringaccesstokens/README.md#create) - Create Expiring Access Token
- [`foldersDeleteFoldersId`](docs/sdks/folders/README.md#deletefoldersid) - Delete Folder
- [`foldersGetFolders`](docs/sdks/folders/README.md#getfolders) - List Folders
- [`foldersGetFoldersId`](docs/sdks/folders/README.md#getfoldersid) - Show Folder
- [`folderSharingsDeleteFoldersFolderIdSharingsSharingId`](docs/sdks/foldersharings/README.md#deletefoldersfolderidsharingssharingid) - Delete Folder Sharing
- [`folderSharingsGetFoldersFolderIdSharings`](docs/sdks/foldersharings/README.md#getfoldersfolderidsharings) - List Folder Sharings
- [`folderSharingsGetFoldersFolderIdSharingsSharingId`](docs/sdks/foldersharings/README.md#getfoldersfolderidsharingssharingid) - Show Folder Sharing
- [`folderSharingsPostFoldersFolderIdSharings`](docs/sdks/foldersharings/README.md#postfoldersfolderidsharings) - Create Folder Sharing
- [`folderSharingsPutFoldersFolderIdSharingsSharingId`](docs/sdks/foldersharings/README.md#putfoldersfolderidsharingssharingid) - Update Folder Sharing
- [`foldersPostFolders`](docs/sdks/folders/README.md#postfolders) - Create Folder
- [`foldersPostFoldersIdCopy`](docs/sdks/folders/README.md#postfoldersidcopy) - Copy Folder
- [`foldersPutFoldersId`](docs/sdks/folders/README.md#putfoldersid) - Update Folder
- [`localizationsCreate`](docs/sdks/localizations/README.md#create) - Create Localization
- [`localizationsDelete`](docs/sdks/localizations/README.md#delete) - Delete Localization
- [`localizationsGet`](docs/sdks/localizations/README.md#get) - Show Localization
- [`localizationsList`](docs/sdks/localizations/README.md#list) - List Localizations
- [`mediaArchive`](docs/sdks/media/README.md#archive) - Archive Media
- [`mediaCopy`](docs/sdks/media/README.md#copy) - Copy Media
- [`mediaDelete`](docs/sdks/media/README.md#delete) - Delete Media
- [`mediaGet`](docs/sdks/media/README.md#get) - Show Media
- [`mediaGetStats`](docs/sdks/media/README.md#getstats) - Show Media Aggregated Stats
- [`mediaList`](docs/sdks/media/README.md#list) - List Media
- [`mediaMove`](docs/sdks/media/README.md#move) - Move Media
- [`mediaPutMediasCopy`](docs/sdks/media/README.md#putmediascopy) - Bulk Copy Media
- [`mediaRestore`](docs/sdks/media/README.md#restore) - Restore Media
- [`mediaSwap`](docs/sdks/media/README.md#swap) - Swap Media
- [`mediaTranslate`](docs/sdks/media/README.md#translate) - Translate Media
- [`mediaUpdate`](docs/sdks/media/README.md#update) - Update Media
- [`mediaUploadForm`](docs/sdks/media/README.md#uploadform) - Upload or Import Media
- [`mediaUploadMultipart`](docs/sdks/media/README.md#uploadmultipart) - Upload or Import Media
- [`searchSearch`](docs/sdks/search/README.md#search) - Search
- [`statsAccountGet`](docs/sdks/statsaccount/README.md#get) - Show Current Account Stats
- [`statsEventsGet`](docs/sdks/statsevents/README.md#get) - Show Event
- [`statsEventsList`](docs/sdks/statsevents/README.md#list) - List Events
- [`statsMediaGet`](docs/sdks/statsmedia/README.md#get) - Show Media Stats
- [`statsMediaGetByDate`](docs/sdks/statsmedia/README.md#getbydate) - Show Media Stats by Date
- [`statsMediaGetEngagement`](docs/sdks/statsmedia/README.md#getengagement) - Show Media Engagement
- [`statsProjectsGet`](docs/sdks/statsprojects/README.md#get) - Show Project Stats
- [`statsVisitorsGet`](docs/sdks/statsvisitors/README.md#get) - Show Visitor
- [`statsVisitorsList`](docs/sdks/statsvisitors/README.md#list) - List Visitors
- [`subfoldersDeleteFoldersFolderIdSubfoldersBulkDelete`](docs/sdks/subfolders/README.md#deletefoldersfolderidsubfoldersbulkdelete) - Bulk Delete Subfolders
- [`subfoldersDeleteFoldersFolderIdSubfoldersSubfolderId`](docs/sdks/subfolders/README.md#deletefoldersfolderidsubfolderssubfolderid) - Delete Subfolder
- [`subfoldersGetFoldersFolderIdSubfolders`](docs/sdks/subfolders/README.md#getfoldersfolderidsubfolders) - List Subfolders
- [`subfoldersGetFoldersFolderIdSubfoldersSubfolderId`](docs/sdks/subfolders/README.md#getfoldersfolderidsubfolderssubfolderid) - Show Subfolder
- [`subfoldersPostFoldersFolderIdSubfolders`](docs/sdks/subfolders/README.md#postfoldersfolderidsubfolders) - Create Subfolder
- [`subfoldersPutFoldersFolderIdSubfoldersSubfolderId`](docs/sdks/subfolders/README.md#putfoldersfolderidsubfolderssubfolderid) - Update Subfolder
- [`taggingsPostTaggingsBulkCreate`](docs/sdks/taggings/README.md#posttaggingsbulkcreate) - Bulk Tag Media
- [`tagsCreate`](docs/sdks/tags/README.md#create) - Create Tags
- [`tagsDelete`](docs/sdks/tags/README.md#delete) - Delete Tags
- [`tagsList`](docs/sdks/tags/README.md#list) - List Tags
- [`trimsCreate`](docs/sdks/trims/README.md#create) - Create Media from Trims
- [`webinarRegistrationsPostWebinarsWebinarIdRegistrations`](docs/sdks/webinarregistrations/README.md#postwebinarswebinaridregistrations) - Create Webinar Registration
- [`webinarsDeleteWebinarsId`](docs/sdks/webinars/README.md#deletewebinarsid) - Delete Webinar
- [`webinarsGetWebinars`](docs/sdks/webinars/README.md#getwebinars) - List Webinars
- [`webinarsGetWebinarsId`](docs/sdks/webinars/README.md#getwebinarsid) - Show Webinar
- [`webinarsPostWebinars`](docs/sdks/webinars/README.md#postwebinars) - Create Webinar
- [`webinarsPutWebinarsId`](docs/sdks/webinars/README.md#putwebinarsid) - Update Webinar

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

<details><summary>Less common errors (260)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`WistiaError`](./src/models/errors/wistiaerror.ts)**:
* [`PostFormBadRequestError`](./src/models/errors/postformbadrequesterror.ts): Error due to reaching the video limit of your account or other issues. Status code `400`. Applicable to 1 of 89 methods.*
* [`PostMultipartBadRequestError`](./src/models/errors/postmultipartbadrequesterror.ts): Error due to reaching the video limit of your account or other issues. Status code `400`. Applicable to 1 of 89 methods.*
* [`GetMediasBadRequestError`](./src/models/errors/getmediasbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaHashedIdBadRequestError`](./src/models/errors/putmediasmediahashedidbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdCopyBadRequestError`](./src/models/errors/postmediasmediahashedidcopybadrequesterror.ts): Bad request, e.g. copy failure. Status code `400`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaHashedIdSwapBadRequestError`](./src/models/errors/putmediasmediahashedidswapbadrequesterror.ts): Bad request, e.g. missing replacement_media_id or media type mismatch. Status code `400`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdStatsBadRequestError`](./src/models/errors/getmediasmediahashedidstatsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdTranslateBadRequestError`](./src/models/errors/postmediasmediahashedidtranslatebadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`PutMediasMoveBadRequestError`](./src/models/errors/putmediasmovebadrequesterror.ts): Invalid request. Status code `400`. Applicable to 1 of 89 methods.*
* [`GetFoldersBadRequestError`](./src/models/errors/getfoldersbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`GetFoldersFolderIdSubfoldersBadRequestError`](./src/models/errors/getfoldersfolderidsubfoldersbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`PostAllowedDomainsBadRequestError`](./src/models/errors/postalloweddomainsbadrequesterror.ts): Bad request - missing or invalid domain. Status code `400`. Applicable to 1 of 89 methods.*
* [`GetCaptionsBadRequestError`](./src/models/errors/getcaptionsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdLocalizationsBadRequestError`](./src/models/errors/postmediasmediahashedidlocalizationsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`GetTagsBadRequestError`](./src/models/errors/gettagsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`PostTagsBadRequestError`](./src/models/errors/posttagsbadrequesterror.ts): Bad request - missing or invalid parameters. Status code `400`. Applicable to 1 of 89 methods.*
* [`GetSearchBadRequestError`](./src/models/errors/getsearchbadrequesterror.ts): Bad request - missing query parameter. Status code `400`. Applicable to 1 of 89 methods.*
* [`GetChannelsBadRequestError`](./src/models/errors/getchannelsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesBadRequestError`](./src/models/errors/postchannelschannelhashedidchannelepisodesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`GetChannelEpisodesBadRequestError`](./src/models/errors/getchannelepisodesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesBadRequestError`](./src/models/errors/getchannelschannelhashedidchannelepisodesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 89 methods.*
* [`GetMediasUnauthorizedError`](./src/models/errors/getmediasunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdUnauthorizedError`](./src/models/errors/getmediasmediahashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaHashedIdUnauthorizedError`](./src/models/errors/putmediasmediahashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteMediasMediaHashedIdUnauthorizedError`](./src/models/errors/deletemediasmediahashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdCopyUnauthorizedError`](./src/models/errors/postmediasmediahashedidcopyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaHashedIdSwapUnauthorizedError`](./src/models/errors/putmediasmediahashedidswapunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdStatsUnauthorizedError`](./src/models/errors/getmediasmediahashedidstatsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdTranslateUnauthorizedError`](./src/models/errors/postmediasmediahashedidtranslateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutMediasArchiveUnauthorizedError`](./src/models/errors/putmediasarchiveunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutMediasMoveUnauthorizedError`](./src/models/errors/putmediasmoveunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutMediasRestoreUnauthorizedError`](./src/models/errors/putmediasrestoreunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutMediasCopyUnauthorizedError`](./src/models/errors/putmediascopyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetFoldersUnauthorizedError`](./src/models/errors/getfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostFoldersUnauthorizedError`](./src/models/errors/postfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetFoldersIdUnauthorizedError`](./src/models/errors/getfoldersidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutFoldersIdUnauthorizedError`](./src/models/errors/putfoldersidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersIdUnauthorizedError`](./src/models/errors/deletefoldersidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostFoldersIdCopyUnauthorizedError`](./src/models/errors/postfoldersidcopyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetFoldersFolderIdSubfoldersUnauthorizedError`](./src/models/errors/getfoldersfolderidsubfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostFoldersFolderIdSubfoldersUnauthorizedError`](./src/models/errors/postfoldersfolderidsubfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetFoldersFolderIdSubfoldersSubfolderIdUnauthorizedError`](./src/models/errors/getfoldersfolderidsubfolderssubfolderidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutFoldersFolderIdSubfoldersSubfolderIdUnauthorizedError`](./src/models/errors/putfoldersfolderidsubfolderssubfolderidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersFolderIdSubfoldersSubfolderIdUnauthorizedError`](./src/models/errors/deletefoldersfolderidsubfolderssubfolderidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersFolderIdSubfoldersBulkDeleteUnauthorizedError`](./src/models/errors/deletefoldersfolderidsubfoldersbulkdeleteunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetFoldersFolderIdSharingsUnauthorizedError`](./src/models/errors/getfoldersfolderidsharingsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostFoldersFolderIdSharingsUnauthorizedError`](./src/models/errors/postfoldersfolderidsharingsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetFoldersFolderIdSharingsSharingIdUnauthorizedError`](./src/models/errors/getfoldersfolderidsharingssharingidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutFoldersFolderIdSharingsSharingIdUnauthorizedError`](./src/models/errors/putfoldersfolderidsharingssharingidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersFolderIdSharingsSharingIdUnauthorizedError`](./src/models/errors/deletefoldersfolderidsharingssharingidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostTaggingsBulkCreateUnauthorizedError`](./src/models/errors/posttaggingsbulkcreateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetAccountDetailsUnauthorizedError`](./src/models/errors/getaccountdetailsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetAllowedDomainsUnauthorizedError`](./src/models/errors/getalloweddomainsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostAllowedDomainsUnauthorizedError`](./src/models/errors/postalloweddomainsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetAllowedDomainsDomainUnauthorizedError`](./src/models/errors/getalloweddomainsdomainunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteAllowedDomainsDomainUnauthorizedError`](./src/models/errors/deletealloweddomainsdomainunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetBackgroundJobStatusBackgroundJobStatusIdUnauthorizedError`](./src/models/errors/getbackgroundjobstatusbackgroundjobstatusidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/postmediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/deletemediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdCaptionsUnauthorizedError`](./src/models/errors/getmediasmediahashedidcaptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdCaptionsUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdCaptionsMultipartUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionsmultipartunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetCaptionsUnauthorizedError`](./src/models/errors/getcaptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError`](./src/models/errors/getmediasmediahashedidcaptionslanguagecodeunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodeunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeMultipartUnauthorizedError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodemultipartunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError`](./src/models/errors/deletemediasmediahashedidcaptionslanguagecodeunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdTrimsUnauthorizedError`](./src/models/errors/postmediasmediahashedidtrimsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdLocalizationsUnauthorizedError`](./src/models/errors/getmediasmediahashedidlocalizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdLocalizationsUnauthorizedError`](./src/models/errors/postmediasmediahashedidlocalizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdLocalizationsLocalizationHashedIdUnauthorizedError`](./src/models/errors/getmediasmediahashedidlocalizationslocalizationhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdUnauthorizedError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetTagsUnauthorizedError`](./src/models/errors/gettagsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostTagsUnauthorizedError`](./src/models/errors/posttagsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteTagsNameUnauthorizedError`](./src/models/errors/deletetagsnameunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetSearchUnauthorizedError`](./src/models/errors/getsearchunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetChannelsUnauthorizedError`](./src/models/errors/getchannelsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostChannelsUnauthorizedError`](./src/models/errors/postchannelsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetChannelsChannelHashedIdUnauthorizedError`](./src/models/errors/getchannelschannelhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutChannelsChannelHashedIdUnauthorizedError`](./src/models/errors/putchannelschannelhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteChannelsChannelHashedIdUnauthorizedError`](./src/models/errors/deletechannelschannelhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdUnauthorizedError`](./src/models/errors/getchannelschannelhashedidchannelepisodeschannelepisodeidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesUnauthorizedError`](./src/models/errors/postchannelschannelhashedidchannelepisodesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetChannelEpisodesUnauthorizedError`](./src/models/errors/getchannelepisodesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdUnauthorizedError`](./src/models/errors/putchannelepisodeschannelepisodehashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteChannelEpisodesChannelEpisodeHashedIdUnauthorizedError`](./src/models/errors/deletechannelepisodeschannelepisodehashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdPublishUnauthorizedError`](./src/models/errors/putchannelepisodeschannelepisodehashedidpublishunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdUnpublishUnauthorizedError`](./src/models/errors/putchannelepisodeschannelepisodehashedidunpublishunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostExpiringTokenUnauthorizedError`](./src/models/errors/postexpiringtokenunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetWebinarsUnauthorizedError`](./src/models/errors/getwebinarsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostWebinarsUnauthorizedError`](./src/models/errors/postwebinarsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetWebinarsIdUnauthorizedError`](./src/models/errors/getwebinarsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutWebinarsIdUnauthorizedError`](./src/models/errors/putwebinarsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`DeleteWebinarsIdUnauthorizedError`](./src/models/errors/deletewebinarsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PostWebinarsWebinarIdRegistrationsUnauthorizedError`](./src/models/errors/postwebinarswebinaridregistrationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetStatsAccountUnauthorizedError`](./src/models/errors/getstatsaccountunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetStatsProjectsProjectIdUnauthorizedError`](./src/models/errors/getstatsprojectsprojectidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetStatsMediasMediaIdUnauthorizedError`](./src/models/errors/getstatsmediasmediaidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetStatsMediasMediaIdByDateUnauthorizedError`](./src/models/errors/getstatsmediasmediaidbydateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetStatsMediasMediaIdEngagementUnauthorizedError`](./src/models/errors/getstatsmediasmediaidengagementunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetStatsVisitorsUnauthorizedError`](./src/models/errors/getstatsvisitorsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetStatsVisitorsVisitorKeyUnauthorizedError`](./src/models/errors/getstatsvisitorsvisitorkeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetStatsEventsUnauthorizedError`](./src/models/errors/getstatseventsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetStatsEventsEventKeyUnauthorizedError`](./src/models/errors/getstatseventseventkeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesUnauthorizedError`](./src/models/errors/getchannelschannelhashedidchannelepisodesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 89 methods.*
* [`PutMediasArchiveForbiddenError`](./src/models/errors/putmediasarchiveforbiddenerror.ts): Forbidden, e.g. account does not have access to archiving. Status code `403`. Applicable to 1 of 89 methods.*
* [`PutMediasRestoreForbiddenError`](./src/models/errors/putmediasrestoreforbiddenerror.ts): Forbidden, e.g. account does not have access to archiving. Status code `403`. Applicable to 1 of 89 methods.*
* [`GetBackgroundJobStatusBackgroundJobStatusIdForbiddenError`](./src/models/errors/getbackgroundjobstatusbackgroundjobstatusidforbiddenerror.ts): Background Job Status Not Associated with An Authorized Object. Status code `403`. Applicable to 1 of 89 methods.*
* [`GetWebinarsForbiddenError`](./src/models/errors/getwebinarsforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 89 methods.*
* [`PostWebinarsForbiddenError`](./src/models/errors/postwebinarsforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 89 methods.*
* [`GetWebinarsIdForbiddenError`](./src/models/errors/getwebinarsidforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 89 methods.*
* [`PutWebinarsIdForbiddenError`](./src/models/errors/putwebinarsidforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 89 methods.*
* [`DeleteWebinarsIdForbiddenError`](./src/models/errors/deletewebinarsidforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 89 methods.*
* [`PostWebinarsWebinarIdRegistrationsForbiddenError`](./src/models/errors/postwebinarswebinaridregistrationsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdNotFoundError`](./src/models/errors/getmediasmediahashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaHashedIdNotFoundError`](./src/models/errors/putmediasmediahashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`DeleteMediasMediaHashedIdNotFoundError`](./src/models/errors/deletemediasmediahashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdCopyNotFoundError`](./src/models/errors/postmediasmediahashedidcopynotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaHashedIdSwapNotFoundError`](./src/models/errors/putmediasmediahashedidswapnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdStatsNotFoundError`](./src/models/errors/getmediasmediahashedidstatsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdTranslateNotFoundError`](./src/models/errors/postmediasmediahashedidtranslatenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PutMediasMoveNotFoundError`](./src/models/errors/putmediasmovenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PutMediasRestoreNotFoundError`](./src/models/errors/putmediasrestorenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`GetFoldersIdNotFoundError`](./src/models/errors/getfoldersidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PutFoldersIdNotFoundError`](./src/models/errors/putfoldersidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersIdNotFoundError`](./src/models/errors/deletefoldersidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PostFoldersIdCopyNotFoundError`](./src/models/errors/postfoldersidcopynotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`GetFoldersFolderIdSubfoldersNotFoundError`](./src/models/errors/getfoldersfolderidsubfoldersnotfounderror.ts): Folder not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PostFoldersFolderIdSubfoldersNotFoundError`](./src/models/errors/postfoldersfolderidsubfoldersnotfounderror.ts): Folder not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`GetFoldersFolderIdSubfoldersSubfolderIdNotFoundError`](./src/models/errors/getfoldersfolderidsubfolderssubfolderidnotfounderror.ts): Folder or subfolder not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PutFoldersFolderIdSubfoldersSubfolderIdNotFoundError`](./src/models/errors/putfoldersfolderidsubfolderssubfolderidnotfounderror.ts): Folder or subfolder not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersFolderIdSubfoldersSubfolderIdNotFoundError`](./src/models/errors/deletefoldersfolderidsubfolderssubfolderidnotfounderror.ts): Folder or subfolder not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersFolderIdSubfoldersBulkDeleteNotFoundError`](./src/models/errors/deletefoldersfolderidsubfoldersbulkdeletenotfounderror.ts): Folder not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`GetFoldersFolderIdSharingsSharingIdNotFoundError`](./src/models/errors/getfoldersfolderidsharingssharingidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PutFoldersFolderIdSharingsSharingIdNotFoundError`](./src/models/errors/putfoldersfolderidsharingssharingidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersFolderIdSharingsSharingIdNotFoundError`](./src/models/errors/deletefoldersfolderidsharingssharingidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`GetAllowedDomainsDomainNotFoundError`](./src/models/errors/getalloweddomainsdomainnotfounderror.ts): Domain not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`DeleteAllowedDomainsDomainNotFoundError`](./src/models/errors/deletealloweddomainsdomainnotfounderror.ts): Domain not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaIdCustomizationsNotFoundError`](./src/models/errors/getmediasmediaidcustomizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaIdCustomizationsNotFoundError`](./src/models/errors/putmediasmediaidcustomizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`DeleteMediasMediaIdCustomizationsNotFoundError`](./src/models/errors/deletemediasmediaidcustomizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdLocalizationsNotFoundError`](./src/models/errors/getmediasmediahashedidlocalizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdLocalizationsNotFoundError`](./src/models/errors/postmediasmediahashedidlocalizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdLocalizationsLocalizationHashedIdNotFoundError`](./src/models/errors/getmediasmediahashedidlocalizationslocalizationhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdNotFoundError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`GetChannelsChannelHashedIdNotFoundError`](./src/models/errors/getchannelschannelhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`PostWebinarsWebinarIdRegistrationsNotFoundError`](./src/models/errors/postwebinarswebinaridregistrationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 89 methods.*
* [`MethodNotAllowedError`](./src/models/errors/methodnotallowederror.ts): Method not allowed, e.g. trying to copy archived media. Status code `405`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdTranslateUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidtranslateunprocessableentityerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 1 of 89 methods.*
* [`PutMediasArchiveUnprocessableEntityError`](./src/models/errors/putmediasarchiveunprocessableentityerror.ts): Unprocessable entity, e.g. too many media requested. Status code `422`. Applicable to 1 of 89 methods.*
* [`PutMediasRestoreUnprocessableEntityError`](./src/models/errors/putmediasrestoreunprocessableentityerror.ts): Missing arguments for restoration of media. Status code `422`. Applicable to 1 of 89 methods.*
* [`PutMediasCopyUnprocessableEntityError`](./src/models/errors/putmediascopyunprocessableentityerror.ts): Unprocessable entity, e.g. missing required parameters. Status code `422`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersFolderIdSubfoldersBulkDeleteUnprocessableEntityError`](./src/models/errors/deletefoldersfolderidsubfoldersbulkdeleteunprocessableentityerror.ts): Unprocessable entity, e.g. missing required parameters. Status code `422`. Applicable to 1 of 89 methods.*
* [`PostTaggingsBulkCreateUnprocessableEntityError`](./src/models/errors/posttaggingsbulkcreateunprocessableentityerror.ts): Unprocessable entity, e.g. missing required parameters. Status code `422`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseunprocessableentityerror.ts): Unprocessable entity. Account not eligible, captions already purchased, or other validation error. Status code `422`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdTrimsUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidtrimsunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdLocalizationsUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidlocalizationsunprocessableentityerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 1 of 89 methods.*
* [`PostTagsUnprocessableEntityError`](./src/models/errors/posttagsunprocessableentityerror.ts): Validation error - tag already exists. Status code `422`. Applicable to 1 of 89 methods.*
* [`PostExpiringTokenUnprocessableEntityError`](./src/models/errors/postexpiringtokenunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 89 methods.*
* [`PostWebinarsUnprocessableEntityError`](./src/models/errors/postwebinarsunprocessableentityerror.ts): Validation errors. Status code `422`. Applicable to 1 of 89 methods.*
* [`PutWebinarsIdUnprocessableEntityError`](./src/models/errors/putwebinarsidunprocessableentityerror.ts): Validation errors. Status code `422`. Applicable to 1 of 89 methods.*
* [`PostWebinarsWebinarIdRegistrationsUnprocessableEntityError`](./src/models/errors/postwebinarswebinaridregistrationsunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 89 methods.*
* [`GetStatsEventsUnprocessableEntityError`](./src/models/errors/getstatseventsunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 89 methods.*
* [`GetMediasInternalServerError`](./src/models/errors/getmediasinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdInternalServerError`](./src/models/errors/getmediasmediahashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaHashedIdInternalServerError`](./src/models/errors/putmediasmediahashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteMediasMediaHashedIdInternalServerError`](./src/models/errors/deletemediasmediahashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdCopyInternalServerError`](./src/models/errors/postmediasmediahashedidcopyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaHashedIdSwapInternalServerError`](./src/models/errors/putmediasmediahashedidswapinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdStatsInternalServerError`](./src/models/errors/getmediasmediahashedidstatsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdTranslateInternalServerError`](./src/models/errors/postmediasmediahashedidtranslateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutMediasArchiveInternalServerError`](./src/models/errors/putmediasarchiveinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutMediasMoveInternalServerError`](./src/models/errors/putmediasmoveinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutMediasRestoreInternalServerError`](./src/models/errors/putmediasrestoreinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutMediasCopyInternalServerError`](./src/models/errors/putmediascopyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetFoldersInternalServerError`](./src/models/errors/getfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostFoldersInternalServerError`](./src/models/errors/postfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetFoldersIdInternalServerError`](./src/models/errors/getfoldersidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutFoldersIdInternalServerError`](./src/models/errors/putfoldersidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersIdInternalServerError`](./src/models/errors/deletefoldersidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostFoldersIdCopyInternalServerError`](./src/models/errors/postfoldersidcopyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetFoldersFolderIdSubfoldersInternalServerError`](./src/models/errors/getfoldersfolderidsubfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostFoldersFolderIdSubfoldersInternalServerError`](./src/models/errors/postfoldersfolderidsubfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetFoldersFolderIdSubfoldersSubfolderIdInternalServerError`](./src/models/errors/getfoldersfolderidsubfolderssubfolderidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutFoldersFolderIdSubfoldersSubfolderIdInternalServerError`](./src/models/errors/putfoldersfolderidsubfolderssubfolderidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersFolderIdSubfoldersSubfolderIdInternalServerError`](./src/models/errors/deletefoldersfolderidsubfolderssubfolderidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersFolderIdSubfoldersBulkDeleteInternalServerError`](./src/models/errors/deletefoldersfolderidsubfoldersbulkdeleteinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetFoldersFolderIdSharingsInternalServerError`](./src/models/errors/getfoldersfolderidsharingsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostFoldersFolderIdSharingsInternalServerError`](./src/models/errors/postfoldersfolderidsharingsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetFoldersFolderIdSharingsSharingIdInternalServerError`](./src/models/errors/getfoldersfolderidsharingssharingidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutFoldersFolderIdSharingsSharingIdInternalServerError`](./src/models/errors/putfoldersfolderidsharingssharingidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteFoldersFolderIdSharingsSharingIdInternalServerError`](./src/models/errors/deletefoldersfolderidsharingssharingidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostTaggingsBulkCreateInternalServerError`](./src/models/errors/posttaggingsbulkcreateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetAccountDetailsInternalServerError`](./src/models/errors/getaccountdetailsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetAllowedDomainsInternalServerError`](./src/models/errors/getalloweddomainsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostAllowedDomainsInternalServerError`](./src/models/errors/postalloweddomainsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetAllowedDomainsDomainInternalServerError`](./src/models/errors/getalloweddomainsdomaininternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteAllowedDomainsDomainInternalServerError`](./src/models/errors/deletealloweddomainsdomaininternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetBackgroundJobStatusBackgroundJobStatusIdInternalServerError`](./src/models/errors/getbackgroundjobstatusbackgroundjobstatusidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/getmediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/postmediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/putmediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/deletemediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdCaptionsInternalServerError`](./src/models/errors/getmediasmediahashedidcaptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdCaptionsInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdCaptionsMultipartInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionsmultipartinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetCaptionsInternalServerError`](./src/models/errors/getcaptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdCaptionsLanguageCodeInternalServerError`](./src/models/errors/getmediasmediahashedidcaptionslanguagecodeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeInternalServerError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeMultipartInternalServerError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodemultipartinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteMediasMediaHashedIdCaptionsLanguageCodeInternalServerError`](./src/models/errors/deletemediasmediahashedidcaptionslanguagecodeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdTrimsInternalServerError`](./src/models/errors/postmediasmediahashedidtrimsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdLocalizationsInternalServerError`](./src/models/errors/getmediasmediahashedidlocalizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostMediasMediaHashedIdLocalizationsInternalServerError`](./src/models/errors/postmediasmediahashedidlocalizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetMediasMediaHashedIdLocalizationsLocalizationHashedIdInternalServerError`](./src/models/errors/getmediasmediahashedidlocalizationslocalizationhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdInternalServerError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetTagsInternalServerError`](./src/models/errors/gettagsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostTagsInternalServerError`](./src/models/errors/posttagsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteTagsNameInternalServerError`](./src/models/errors/deletetagsnameinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetSearchInternalServerError`](./src/models/errors/getsearchinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetChannelsInternalServerError`](./src/models/errors/getchannelsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostChannelsInternalServerError`](./src/models/errors/postchannelsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetChannelsChannelHashedIdInternalServerError`](./src/models/errors/getchannelschannelhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutChannelsChannelHashedIdInternalServerError`](./src/models/errors/putchannelschannelhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteChannelsChannelHashedIdInternalServerError`](./src/models/errors/deletechannelschannelhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdInternalServerError`](./src/models/errors/getchannelschannelhashedidchannelepisodeschannelepisodeidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesInternalServerError`](./src/models/errors/postchannelschannelhashedidchannelepisodesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetChannelEpisodesInternalServerError`](./src/models/errors/getchannelepisodesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdInternalServerError`](./src/models/errors/putchannelepisodeschannelepisodehashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteChannelEpisodesChannelEpisodeHashedIdInternalServerError`](./src/models/errors/deletechannelepisodeschannelepisodehashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdPublishInternalServerError`](./src/models/errors/putchannelepisodeschannelepisodehashedidpublishinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdUnpublishInternalServerError`](./src/models/errors/putchannelepisodeschannelepisodehashedidunpublishinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostExpiringTokenInternalServerError`](./src/models/errors/postexpiringtokeninternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetWebinarsInternalServerError`](./src/models/errors/getwebinarsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostWebinarsInternalServerError`](./src/models/errors/postwebinarsinternalservererror.ts): Internal server error during webinar creation. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetWebinarsIdInternalServerError`](./src/models/errors/getwebinarsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PutWebinarsIdInternalServerError`](./src/models/errors/putwebinarsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`DeleteWebinarsIdInternalServerError`](./src/models/errors/deletewebinarsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`PostWebinarsWebinarIdRegistrationsInternalServerError`](./src/models/errors/postwebinarswebinaridregistrationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetStatsAccountInternalServerError`](./src/models/errors/getstatsaccountinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetStatsProjectsProjectIdInternalServerError`](./src/models/errors/getstatsprojectsprojectidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetStatsMediasMediaIdInternalServerError`](./src/models/errors/getstatsmediasmediaidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetStatsMediasMediaIdByDateInternalServerError`](./src/models/errors/getstatsmediasmediaidbydateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetStatsMediasMediaIdEngagementInternalServerError`](./src/models/errors/getstatsmediasmediaidengagementinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetStatsVisitorsInternalServerError`](./src/models/errors/getstatsvisitorsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetStatsVisitorsVisitorKeyInternalServerError`](./src/models/errors/getstatsvisitorsvisitorkeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetStatsEventsInternalServerError`](./src/models/errors/getstatseventsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetStatsEventsEventKeyInternalServerError`](./src/models/errors/getstatseventseventkeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesInternalServerError`](./src/models/errors/getchannelschannelhashedidchannelepisodesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 89 methods.*
* [`NotImplementedError`](./src/models/errors/notimplementederror.ts): Not implemented - expiring tokens cannot be created from other expiring tokens. Status code `501`. Applicable to 1 of 89 methods.*
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


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
* [getTokenDetails](docs/sdks/account/README.md#gettokendetails) - Get Current Token

### [AllowedDomains](docs/sdks/alloweddomains/README.md)

* [list](docs/sdks/alloweddomains/README.md#list) - List Allowed Domains
* [create](docs/sdks/alloweddomains/README.md#create) - Create Allowed Domain
* [get](docs/sdks/alloweddomains/README.md#get) - Show Allowed Domain
* [delete](docs/sdks/alloweddomains/README.md#delete) - Delete Allowed Domain

### [AnalyticsMedia](docs/sdks/analyticsmedia/README.md)

* [getAnalyticsMediasMediaId](docs/sdks/analyticsmedia/README.md#getanalyticsmediasmediaid) - Show Media Analytics
* [getAnalyticsMediasMediaIdTimeseries](docs/sdks/analyticsmedia/README.md#getanalyticsmediasmediaidtimeseries) - Show Media Analytics Timeseries
* [getAnalyticsMediasMediaIdEmbedLocations](docs/sdks/analyticsmedia/README.md#getanalyticsmediasmediaidembedlocations) - Show Media Embed Locations
* [getAnalyticsMediasMediaIdTraffic](docs/sdks/analyticsmedia/README.md#getanalyticsmediasmediaidtraffic) - Show Media Traffic Breakdown
* [getAnalyticsMediasMediaIdConversions](docs/sdks/analyticsmedia/README.md#getanalyticsmediasmediaidconversions) - Show Media Form Conversions
* [getAnalyticsMediasMediaIdLanguages](docs/sdks/analyticsmedia/README.md#getanalyticsmediasmediaidlanguages) - Show Media Languages

### [AnalyticsWebinar](docs/sdks/analyticswebinar/README.md)

* [getAnalyticsWebinarsWebinarId](docs/sdks/analyticswebinar/README.md#getanalyticswebinarswebinarid) - Show Webinar Analytics
* [getAnalyticsWebinarsWebinarIdRegistration](docs/sdks/analyticswebinar/README.md#getanalyticswebinarswebinaridregistration) - Show Webinar Registration Timeseries
* [getAnalyticsWebinarsWebinarIdTraffic](docs/sdks/analyticswebinar/README.md#getanalyticswebinarswebinaridtraffic) - Show Webinar Traffic Breakdown
* [getAnalyticsWebinarsWebinarIdAudience](docs/sdks/analyticswebinar/README.md#getanalyticswebinarswebinaridaudience) - Show Webinar Audience
* [getAnalyticsWebinarsWebinarIdHistograms](docs/sdks/analyticswebinar/README.md#getanalyticswebinarswebinaridhistograms) - Show Webinar Histograms

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
* [putChannelEpisodesChannelEpisodeHashedId](docs/sdks/channelepisodes/README.md#putchannelepisodeschannelepisodehashedid) - Update Channel Episode
* [deleteChannelEpisodesChannelEpisodeHashedId](docs/sdks/channelepisodes/README.md#deletechannelepisodeschannelepisodehashedid) - Delete Channel Episode
* [putChannelEpisodesChannelEpisodeHashedIdPublish](docs/sdks/channelepisodes/README.md#putchannelepisodeschannelepisodehashedidpublish) - Publish Channel Episode
* [putChannelEpisodesChannelEpisodeHashedIdUnpublish](docs/sdks/channelepisodes/README.md#putchannelepisodeschannelepisodehashedidunpublish) - Un-publish Channel Episode

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
* [postMediasImportUrl](docs/sdks/media/README.md#postmediasimporturl) - Import Media from URL
* [archive](docs/sdks/media/README.md#archive) - Archive Media
* [move](docs/sdks/media/README.md#move) - Move Media
* [restore](docs/sdks/media/README.md#restore) - Restore Media
* [putMediasCopy](docs/sdks/media/README.md#putmediascopy) - Bulk Copy Media

### [MediaExtendedAudioDescriptions](docs/sdks/mediaextendedaudiodescriptions/README.md)

* [getMediaExtendedAudioDescriptions](docs/sdks/mediaextendedaudiodescriptions/README.md#getmediaextendedaudiodescriptions) - List Media Extended Audio Descriptions
* [getMediaExtendedAudioDescriptionsId](docs/sdks/mediaextendedaudiodescriptions/README.md#getmediaextendedaudiodescriptionsid) - Show Media Extended Audio Description
* [deleteMediaExtendedAudioDescriptionsId](docs/sdks/mediaextendedaudiodescriptions/README.md#deletemediaextendedaudiodescriptionsid) - Delete Media Extended Audio Description
* [postMediaExtendedAudioDescriptionsOrder](docs/sdks/mediaextendedaudiodescriptions/README.md#postmediaextendedaudiodescriptionsorder) - Order Extended Audio Description
* [getMediaExtendedAudioDescriptionsOrderStatusId](docs/sdks/mediaextendedaudiodescriptions/README.md#getmediaextendedaudiodescriptionsorderstatusid) - Get Order Status

### [Search](docs/sdks/search/README.md)

* [search](docs/sdks/search/README.md#search) - Search

### [StatsAccount](docs/sdks/statsaccount/README.md)

* [get](docs/sdks/statsaccount/README.md#get) - Show Current Account Stats
* [getStatsAccountByDate](docs/sdks/statsaccount/README.md#getstatsaccountbydate) - Show Account Stats by Date

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
* [delete](docs/sdks/tags/README.md#delete) - Delete Tag

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
- [`accountGetTokenDetails`](docs/sdks/account/README.md#gettokendetails) - Get Current Token
- [`allowedDomainsCreate`](docs/sdks/alloweddomains/README.md#create) - Create Allowed Domain
- [`allowedDomainsDelete`](docs/sdks/alloweddomains/README.md#delete) - Delete Allowed Domain
- [`allowedDomainsGet`](docs/sdks/alloweddomains/README.md#get) - Show Allowed Domain
- [`allowedDomainsList`](docs/sdks/alloweddomains/README.md#list) - List Allowed Domains
- [`analyticsMediaGetAnalyticsMediasMediaId`](docs/sdks/analyticsmedia/README.md#getanalyticsmediasmediaid) - Show Media Analytics
- [`analyticsMediaGetAnalyticsMediasMediaIdConversions`](docs/sdks/analyticsmedia/README.md#getanalyticsmediasmediaidconversions) - Show Media Form Conversions
- [`analyticsMediaGetAnalyticsMediasMediaIdEmbedLocations`](docs/sdks/analyticsmedia/README.md#getanalyticsmediasmediaidembedlocations) - Show Media Embed Locations
- [`analyticsMediaGetAnalyticsMediasMediaIdLanguages`](docs/sdks/analyticsmedia/README.md#getanalyticsmediasmediaidlanguages) - Show Media Languages
- [`analyticsMediaGetAnalyticsMediasMediaIdTimeseries`](docs/sdks/analyticsmedia/README.md#getanalyticsmediasmediaidtimeseries) - Show Media Analytics Timeseries
- [`analyticsMediaGetAnalyticsMediasMediaIdTraffic`](docs/sdks/analyticsmedia/README.md#getanalyticsmediasmediaidtraffic) - Show Media Traffic Breakdown
- [`analyticsWebinarGetAnalyticsWebinarsWebinarId`](docs/sdks/analyticswebinar/README.md#getanalyticswebinarswebinarid) - Show Webinar Analytics
- [`analyticsWebinarGetAnalyticsWebinarsWebinarIdAudience`](docs/sdks/analyticswebinar/README.md#getanalyticswebinarswebinaridaudience) - Show Webinar Audience
- [`analyticsWebinarGetAnalyticsWebinarsWebinarIdHistograms`](docs/sdks/analyticswebinar/README.md#getanalyticswebinarswebinaridhistograms) - Show Webinar Histograms
- [`analyticsWebinarGetAnalyticsWebinarsWebinarIdRegistration`](docs/sdks/analyticswebinar/README.md#getanalyticswebinarswebinaridregistration) - Show Webinar Registration Timeseries
- [`analyticsWebinarGetAnalyticsWebinarsWebinarIdTraffic`](docs/sdks/analyticswebinar/README.md#getanalyticswebinarswebinaridtraffic) - Show Webinar Traffic Breakdown
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
- [`channelEpisodesDeleteChannelEpisodesChannelEpisodeHashedId`](docs/sdks/channelepisodes/README.md#deletechannelepisodeschannelepisodehashedid) - Delete Channel Episode
- [`channelEpisodesGet`](docs/sdks/channelepisodes/README.md#get) - Show Channel Episode
- [`channelEpisodesList`](docs/sdks/channelepisodes/README.md#list) - List Channel Episodes
- [`channelEpisodesPutChannelEpisodesChannelEpisodeHashedId`](docs/sdks/channelepisodes/README.md#putchannelepisodeschannelepisodehashedid) - Update Channel Episode
- [`channelEpisodesPutChannelEpisodesChannelEpisodeHashedIdPublish`](docs/sdks/channelepisodes/README.md#putchannelepisodeschannelepisodehashedidpublish) - Publish Channel Episode
- [`channelEpisodesPutChannelEpisodesChannelEpisodeHashedIdUnpublish`](docs/sdks/channelepisodes/README.md#putchannelepisodeschannelepisodehashedidunpublish) - Un-publish Channel Episode
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
- [`mediaExtendedAudioDescriptionsDeleteMediaExtendedAudioDescriptionsId`](docs/sdks/mediaextendedaudiodescriptions/README.md#deletemediaextendedaudiodescriptionsid) - Delete Media Extended Audio Description
- [`mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptions`](docs/sdks/mediaextendedaudiodescriptions/README.md#getmediaextendedaudiodescriptions) - List Media Extended Audio Descriptions
- [`mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptionsId`](docs/sdks/mediaextendedaudiodescriptions/README.md#getmediaextendedaudiodescriptionsid) - Show Media Extended Audio Description
- [`mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptionsOrderStatusId`](docs/sdks/mediaextendedaudiodescriptions/README.md#getmediaextendedaudiodescriptionsorderstatusid) - Get Order Status
- [`mediaExtendedAudioDescriptionsPostMediaExtendedAudioDescriptionsOrder`](docs/sdks/mediaextendedaudiodescriptions/README.md#postmediaextendedaudiodescriptionsorder) - Order Extended Audio Description
- [`mediaGet`](docs/sdks/media/README.md#get) - Show Media
- [`mediaGetStats`](docs/sdks/media/README.md#getstats) - Show Media Aggregated Stats
- [`mediaList`](docs/sdks/media/README.md#list) - List Media
- [`mediaMove`](docs/sdks/media/README.md#move) - Move Media
- [`mediaPostMediasImportUrl`](docs/sdks/media/README.md#postmediasimporturl) - Import Media from URL
- [`mediaPutMediasCopy`](docs/sdks/media/README.md#putmediascopy) - Bulk Copy Media
- [`mediaRestore`](docs/sdks/media/README.md#restore) - Restore Media
- [`mediaSwap`](docs/sdks/media/README.md#swap) - Swap Media
- [`mediaTranslate`](docs/sdks/media/README.md#translate) - Translate Media
- [`mediaUpdate`](docs/sdks/media/README.md#update) - Update Media
- [`mediaUploadForm`](docs/sdks/media/README.md#uploadform) - Upload or Import Media
- [`mediaUploadMultipart`](docs/sdks/media/README.md#uploadmultipart) - Upload or Import Media
- [`searchSearch`](docs/sdks/search/README.md#search) - Search
- [`statsAccountGet`](docs/sdks/statsaccount/README.md#get) - Show Current Account Stats
- [`statsAccountGetStatsAccountByDate`](docs/sdks/statsaccount/README.md#getstatsaccountbydate) - Show Account Stats by Date
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
- [`tagsDelete`](docs/sdks/tags/README.md#delete) - Delete Tag
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

<details><summary>Less common errors (383)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`WistiaError`](./src/models/errors/wistiaerror.ts)**:
* [`PostFormBadRequestError`](./src/models/errors/postformbadrequesterror.ts): Error due to reaching the video limit of your account or other issues. Status code `400`. Applicable to 1 of 108 methods.*
* [`PostMultipartBadRequestError`](./src/models/errors/postmultipartbadrequesterror.ts): Error due to reaching the video limit of your account or other issues. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetMediasBadRequestError`](./src/models/errors/getmediasbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdBadRequestError`](./src/models/errors/putmediasmediahashedidbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCopyBadRequestError`](./src/models/errors/postmediasmediahashedidcopybadrequesterror.ts): Bad request, e.g. copy failure. Status code `400`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdSwapBadRequestError`](./src/models/errors/putmediasmediahashedidswapbadrequesterror.ts): Bad request, e.g. missing replacement_media_id or media type mismatch. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdStatsBadRequestError`](./src/models/errors/getmediasmediahashedidstatsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdTranslateBadRequestError`](./src/models/errors/postmediasmediahashedidtranslatebadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`PostMediasImportUrlBadRequestError`](./src/models/errors/postmediasimporturlbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`PutMediasMoveBadRequestError`](./src/models/errors/putmediasmovebadrequesterror.ts): Invalid request. Status code `400`. Applicable to 1 of 108 methods.*
* [`PostMediaExtendedAudioDescriptionsOrderBadRequestError`](./src/models/errors/postmediaextendedaudiodescriptionsorderbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetFoldersBadRequestError`](./src/models/errors/getfoldersbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetFoldersFolderIdSubfoldersBadRequestError`](./src/models/errors/getfoldersfolderidsubfoldersbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`PostAllowedDomainsBadRequestError`](./src/models/errors/postalloweddomainsbadrequesterror.ts): Bad request - missing or invalid domain. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetCaptionsBadRequestError`](./src/models/errors/getcaptionsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdLocalizationsBadRequestError`](./src/models/errors/postmediasmediahashedidlocalizationsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetTagsBadRequestError`](./src/models/errors/gettagsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`PostTagsBadRequestError`](./src/models/errors/posttagsbadrequesterror.ts): Bad request - missing or invalid parameters. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetSearchBadRequestError`](./src/models/errors/getsearchbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetChannelsBadRequestError`](./src/models/errors/getchannelsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesBadRequestError`](./src/models/errors/postchannelschannelhashedidchannelepisodesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetChannelEpisodesBadRequestError`](./src/models/errors/getchannelepisodesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdBadRequestError`](./src/models/errors/getanalyticsmediasmediaidbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdTimeseriesBadRequestError`](./src/models/errors/getanalyticsmediasmediaidtimeseriesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsBadRequestError`](./src/models/errors/getanalyticsmediasmediaidembedlocationsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdTrafficBadRequestError`](./src/models/errors/getanalyticsmediasmediaidtrafficbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdConversionsBadRequestError`](./src/models/errors/getanalyticsmediasmediaidconversionsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdLanguagesBadRequestError`](./src/models/errors/getanalyticsmediasmediaidlanguagesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdRegistrationBadRequestError`](./src/models/errors/getanalyticswebinarswebinaridregistrationbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdTrafficBadRequestError`](./src/models/errors/getanalyticswebinarswebinaridtrafficbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesBadRequestError`](./src/models/errors/getchannelschannelhashedidchannelepisodesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 108 methods.*
* [`GetMediasUnauthorizedError`](./src/models/errors/getmediasunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdUnauthorizedError`](./src/models/errors/getmediasmediahashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdUnauthorizedError`](./src/models/errors/putmediasmediahashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaHashedIdUnauthorizedError`](./src/models/errors/deletemediasmediahashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCopyUnauthorizedError`](./src/models/errors/postmediasmediahashedidcopyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdSwapUnauthorizedError`](./src/models/errors/putmediasmediahashedidswapunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdStatsUnauthorizedError`](./src/models/errors/getmediasmediahashedidstatsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdTranslateUnauthorizedError`](./src/models/errors/postmediasmediahashedidtranslateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostMediasImportUrlUnauthorizedError`](./src/models/errors/postmediasimporturlunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutMediasArchiveUnauthorizedError`](./src/models/errors/putmediasarchiveunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutMediasMoveUnauthorizedError`](./src/models/errors/putmediasmoveunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutMediasRestoreUnauthorizedError`](./src/models/errors/putmediasrestoreunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutMediasCopyUnauthorizedError`](./src/models/errors/putmediascopyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetMediaExtendedAudioDescriptionsUnauthorizedError`](./src/models/errors/getmediaextendedaudiodescriptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetMediaExtendedAudioDescriptionsIdUnauthorizedError`](./src/models/errors/getmediaextendedaudiodescriptionsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteMediaExtendedAudioDescriptionsIdUnauthorizedError`](./src/models/errors/deletemediaextendedaudiodescriptionsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostMediaExtendedAudioDescriptionsOrderUnauthorizedError`](./src/models/errors/postmediaextendedaudiodescriptionsorderunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetMediaExtendedAudioDescriptionsOrderStatusIdUnauthorizedError`](./src/models/errors/getmediaextendedaudiodescriptionsorderstatusidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetFoldersUnauthorizedError`](./src/models/errors/getfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostFoldersUnauthorizedError`](./src/models/errors/postfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetFoldersIdUnauthorizedError`](./src/models/errors/getfoldersidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutFoldersIdUnauthorizedError`](./src/models/errors/putfoldersidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersIdUnauthorizedError`](./src/models/errors/deletefoldersidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostFoldersIdCopyUnauthorizedError`](./src/models/errors/postfoldersidcopyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetFoldersFolderIdSubfoldersUnauthorizedError`](./src/models/errors/getfoldersfolderidsubfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostFoldersFolderIdSubfoldersUnauthorizedError`](./src/models/errors/postfoldersfolderidsubfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetFoldersFolderIdSubfoldersSubfolderIdUnauthorizedError`](./src/models/errors/getfoldersfolderidsubfolderssubfolderidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutFoldersFolderIdSubfoldersSubfolderIdUnauthorizedError`](./src/models/errors/putfoldersfolderidsubfolderssubfolderidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersFolderIdSubfoldersSubfolderIdUnauthorizedError`](./src/models/errors/deletefoldersfolderidsubfolderssubfolderidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersFolderIdSubfoldersBulkDeleteUnauthorizedError`](./src/models/errors/deletefoldersfolderidsubfoldersbulkdeleteunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetFoldersFolderIdSharingsUnauthorizedError`](./src/models/errors/getfoldersfolderidsharingsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostFoldersFolderIdSharingsUnauthorizedError`](./src/models/errors/postfoldersfolderidsharingsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetFoldersFolderIdSharingsSharingIdUnauthorizedError`](./src/models/errors/getfoldersfolderidsharingssharingidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutFoldersFolderIdSharingsSharingIdUnauthorizedError`](./src/models/errors/putfoldersfolderidsharingssharingidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersFolderIdSharingsSharingIdUnauthorizedError`](./src/models/errors/deletefoldersfolderidsharingssharingidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostTaggingsBulkCreateUnauthorizedError`](./src/models/errors/posttaggingsbulkcreateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAccountDetailsUnauthorizedError`](./src/models/errors/getaccountdetailsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetTokenDetailsUnauthorizedError`](./src/models/errors/gettokendetailsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAllowedDomainsUnauthorizedError`](./src/models/errors/getalloweddomainsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostAllowedDomainsUnauthorizedError`](./src/models/errors/postalloweddomainsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAllowedDomainsDomainUnauthorizedError`](./src/models/errors/getalloweddomainsdomainunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteAllowedDomainsDomainUnauthorizedError`](./src/models/errors/deletealloweddomainsdomainunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetBackgroundJobStatusBackgroundJobStatusIdUnauthorizedError`](./src/models/errors/getbackgroundjobstatusbackgroundjobstatusidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/postmediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/deletemediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdCaptionsUnauthorizedError`](./src/models/errors/getmediasmediahashedidcaptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCaptionsUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCaptionsMultipartUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionsmultipartunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetCaptionsUnauthorizedError`](./src/models/errors/getcaptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError`](./src/models/errors/getmediasmediahashedidcaptionslanguagecodeunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodeunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeMultipartUnauthorizedError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodemultipartunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError`](./src/models/errors/deletemediasmediahashedidcaptionslanguagecodeunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdTrimsUnauthorizedError`](./src/models/errors/postmediasmediahashedidtrimsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdLocalizationsUnauthorizedError`](./src/models/errors/getmediasmediahashedidlocalizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdLocalizationsUnauthorizedError`](./src/models/errors/postmediasmediahashedidlocalizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdLocalizationsLocalizationHashedIdUnauthorizedError`](./src/models/errors/getmediasmediahashedidlocalizationslocalizationhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdUnauthorizedError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetTagsUnauthorizedError`](./src/models/errors/gettagsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostTagsUnauthorizedError`](./src/models/errors/posttagsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteTagsNameUnauthorizedError`](./src/models/errors/deletetagsnameunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetSearchUnauthorizedError`](./src/models/errors/getsearchunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetChannelsUnauthorizedError`](./src/models/errors/getchannelsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostChannelsUnauthorizedError`](./src/models/errors/postchannelsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetChannelsChannelHashedIdUnauthorizedError`](./src/models/errors/getchannelschannelhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutChannelsChannelHashedIdUnauthorizedError`](./src/models/errors/putchannelschannelhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteChannelsChannelHashedIdUnauthorizedError`](./src/models/errors/deletechannelschannelhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdUnauthorizedError`](./src/models/errors/getchannelschannelhashedidchannelepisodeschannelepisodeidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesUnauthorizedError`](./src/models/errors/postchannelschannelhashedidchannelepisodesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetChannelEpisodesUnauthorizedError`](./src/models/errors/getchannelepisodesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdUnauthorizedError`](./src/models/errors/putchannelepisodeschannelepisodehashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteChannelEpisodesChannelEpisodeHashedIdUnauthorizedError`](./src/models/errors/deletechannelepisodeschannelepisodehashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdPublishUnauthorizedError`](./src/models/errors/putchannelepisodeschannelepisodehashedidpublishunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdUnpublishUnauthorizedError`](./src/models/errors/putchannelepisodeschannelepisodehashedidunpublishunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostExpiringTokenUnauthorizedError`](./src/models/errors/postexpiringtokenunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetWebinarsUnauthorizedError`](./src/models/errors/getwebinarsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostWebinarsUnauthorizedError`](./src/models/errors/postwebinarsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetWebinarsIdUnauthorizedError`](./src/models/errors/getwebinarsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutWebinarsIdUnauthorizedError`](./src/models/errors/putwebinarsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`DeleteWebinarsIdUnauthorizedError`](./src/models/errors/deletewebinarsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PostWebinarsWebinarIdRegistrationsUnauthorizedError`](./src/models/errors/postwebinarswebinaridregistrationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetStatsAccountUnauthorizedError`](./src/models/errors/getstatsaccountunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetStatsAccountByDateUnauthorizedError`](./src/models/errors/getstatsaccountbydateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetStatsProjectsProjectIdUnauthorizedError`](./src/models/errors/getstatsprojectsprojectidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetStatsMediasMediaIdUnauthorizedError`](./src/models/errors/getstatsmediasmediaidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetStatsMediasMediaIdByDateUnauthorizedError`](./src/models/errors/getstatsmediasmediaidbydateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetStatsMediasMediaIdEngagementUnauthorizedError`](./src/models/errors/getstatsmediasmediaidengagementunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetStatsVisitorsUnauthorizedError`](./src/models/errors/getstatsvisitorsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetStatsVisitorsVisitorKeyUnauthorizedError`](./src/models/errors/getstatsvisitorsvisitorkeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetStatsEventsUnauthorizedError`](./src/models/errors/getstatseventsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetStatsEventsEventKeyUnauthorizedError`](./src/models/errors/getstatseventseventkeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdTimeseriesUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidtimeseriesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidembedlocationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdTrafficUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidtrafficunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdConversionsUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidconversionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdLanguagesUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidlanguagesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdUnauthorizedError`](./src/models/errors/getanalyticswebinarswebinaridunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdRegistrationUnauthorizedError`](./src/models/errors/getanalyticswebinarswebinaridregistrationunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdTrafficUnauthorizedError`](./src/models/errors/getanalyticswebinarswebinaridtrafficunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdAudienceUnauthorizedError`](./src/models/errors/getanalyticswebinarswebinaridaudienceunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdHistogramsUnauthorizedError`](./src/models/errors/getanalyticswebinarswebinaridhistogramsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesUnauthorizedError`](./src/models/errors/getchannelschannelhashedidchannelepisodesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdForbiddenError`](./src/models/errors/putmediasmediahashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaHashedIdForbiddenError`](./src/models/errors/deletemediasmediahashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCopyForbiddenError`](./src/models/errors/postmediasmediahashedidcopyforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdSwapForbiddenError`](./src/models/errors/putmediasmediahashedidswapforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdStatsForbiddenError`](./src/models/errors/getmediasmediahashedidstatsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdTranslateForbiddenError`](./src/models/errors/postmediasmediahashedidtranslateforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostMediasImportUrlForbiddenError`](./src/models/errors/postmediasimporturlforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PutMediasArchiveForbiddenError`](./src/models/errors/putmediasarchiveforbiddenerror.ts): Forbidden, e.g. account does not have access to archiving. Status code `403`. Applicable to 1 of 108 methods.*
* [`PutMediasMoveForbiddenError`](./src/models/errors/putmediasmoveforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PutMediasRestoreForbiddenError`](./src/models/errors/putmediasrestoreforbiddenerror.ts): Forbidden, e.g. account does not have access to archiving. Status code `403`. Applicable to 1 of 108 methods.*
* [`PutMediasCopyForbiddenError`](./src/models/errors/putmediascopyforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`DeleteMediaExtendedAudioDescriptionsIdForbiddenError`](./src/models/errors/deletemediaextendedaudiodescriptionsidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostMediaExtendedAudioDescriptionsOrderForbiddenError`](./src/models/errors/postmediaextendedaudiodescriptionsorderforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetMediaExtendedAudioDescriptionsOrderStatusIdForbiddenError`](./src/models/errors/getmediaextendedaudiodescriptionsorderstatusidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PutFoldersIdForbiddenError`](./src/models/errors/putfoldersidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersIdForbiddenError`](./src/models/errors/deletefoldersidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostFoldersFolderIdSubfoldersForbiddenError`](./src/models/errors/postfoldersfolderidsubfoldersforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostFoldersFolderIdSharingsForbiddenError`](./src/models/errors/postfoldersfolderidsharingsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostTaggingsBulkCreateForbiddenError`](./src/models/errors/posttaggingsbulkcreateforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostAllowedDomainsForbiddenError`](./src/models/errors/postalloweddomainsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`DeleteAllowedDomainsDomainForbiddenError`](./src/models/errors/deletealloweddomainsdomainforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaIdCustomizationsForbiddenError`](./src/models/errors/postmediasmediaidcustomizationsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCaptionsForbiddenError`](./src/models/errors/postmediasmediahashedidcaptionsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCaptionsMultipartForbiddenError`](./src/models/errors/postmediasmediahashedidcaptionsmultipartforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdTrimsForbiddenError`](./src/models/errors/postmediasmediahashedidtrimsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdLocalizationsForbiddenError`](./src/models/errors/postmediasmediahashedidlocalizationsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdForbiddenError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostTagsForbiddenError`](./src/models/errors/posttagsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`DeleteTagsNameForbiddenError`](./src/models/errors/deletetagsnameforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostChannelsForbiddenError`](./src/models/errors/postchannelsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PutChannelsChannelHashedIdForbiddenError`](./src/models/errors/putchannelschannelhashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`DeleteChannelsChannelHashedIdForbiddenError`](./src/models/errors/deletechannelschannelhashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesForbiddenError`](./src/models/errors/postchannelschannelhashedidchannelepisodesforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdForbiddenError`](./src/models/errors/putchannelepisodeschannelepisodehashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`DeleteChannelEpisodesChannelEpisodeHashedIdForbiddenError`](./src/models/errors/deletechannelepisodeschannelepisodehashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdPublishForbiddenError`](./src/models/errors/putchannelepisodeschannelepisodehashedidpublishforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdUnpublishForbiddenError`](./src/models/errors/putchannelepisodeschannelepisodehashedidunpublishforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetWebinarsForbiddenError`](./src/models/errors/getwebinarsforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostWebinarsForbiddenError`](./src/models/errors/postwebinarsforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetWebinarsIdForbiddenError`](./src/models/errors/getwebinarsidforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 108 methods.*
* [`PutWebinarsIdForbiddenError`](./src/models/errors/putwebinarsidforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 108 methods.*
* [`DeleteWebinarsIdForbiddenError`](./src/models/errors/deletewebinarsidforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 108 methods.*
* [`PostWebinarsWebinarIdRegistrationsForbiddenError`](./src/models/errors/postwebinarswebinaridregistrationsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetStatsAccountForbiddenError`](./src/models/errors/getstatsaccountforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetStatsAccountByDateForbiddenError`](./src/models/errors/getstatsaccountbydateforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetStatsProjectsProjectIdForbiddenError`](./src/models/errors/getstatsprojectsprojectidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetStatsMediasMediaIdForbiddenError`](./src/models/errors/getstatsmediasmediaidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetStatsMediasMediaIdByDateForbiddenError`](./src/models/errors/getstatsmediasmediaidbydateforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetStatsMediasMediaIdEngagementForbiddenError`](./src/models/errors/getstatsmediasmediaidengagementforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetStatsVisitorsForbiddenError`](./src/models/errors/getstatsvisitorsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetStatsVisitorsVisitorKeyForbiddenError`](./src/models/errors/getstatsvisitorsvisitorkeyforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetStatsEventsForbiddenError`](./src/models/errors/getstatseventsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetStatsEventsEventKeyForbiddenError`](./src/models/errors/getstatseventseventkeyforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdForbiddenError`](./src/models/errors/getanalyticsmediasmediaidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdTimeseriesForbiddenError`](./src/models/errors/getanalyticsmediasmediaidtimeseriesforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsForbiddenError`](./src/models/errors/getanalyticsmediasmediaidembedlocationsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdTrafficForbiddenError`](./src/models/errors/getanalyticsmediasmediaidtrafficforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdConversionsForbiddenError`](./src/models/errors/getanalyticsmediasmediaidconversionsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdLanguagesForbiddenError`](./src/models/errors/getanalyticsmediasmediaidlanguagesforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdForbiddenError`](./src/models/errors/getanalyticswebinarswebinaridforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdRegistrationForbiddenError`](./src/models/errors/getanalyticswebinarswebinaridregistrationforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdTrafficForbiddenError`](./src/models/errors/getanalyticswebinarswebinaridtrafficforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdAudienceForbiddenError`](./src/models/errors/getanalyticswebinarswebinaridaudienceforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdHistogramsForbiddenError`](./src/models/errors/getanalyticswebinarswebinaridhistogramsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdNotFoundError`](./src/models/errors/getmediasmediahashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdNotFoundError`](./src/models/errors/putmediasmediahashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaHashedIdNotFoundError`](./src/models/errors/deletemediasmediahashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCopyNotFoundError`](./src/models/errors/postmediasmediahashedidcopynotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdSwapNotFoundError`](./src/models/errors/putmediasmediahashedidswapnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdStatsNotFoundError`](./src/models/errors/getmediasmediahashedidstatsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdTranslateNotFoundError`](./src/models/errors/postmediasmediahashedidtranslatenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PostMediasImportUrlNotFoundError`](./src/models/errors/postmediasimporturlnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PutMediasMoveNotFoundError`](./src/models/errors/putmediasmovenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PutMediasRestoreNotFoundError`](./src/models/errors/putmediasrestorenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`GetMediaExtendedAudioDescriptionsIdNotFoundError`](./src/models/errors/getmediaextendedaudiodescriptionsidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`DeleteMediaExtendedAudioDescriptionsIdNotFoundError`](./src/models/errors/deletemediaextendedaudiodescriptionsidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PostMediaExtendedAudioDescriptionsOrderNotFoundError`](./src/models/errors/postmediaextendedaudiodescriptionsordernotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`GetMediaExtendedAudioDescriptionsOrderStatusIdNotFoundError`](./src/models/errors/getmediaextendedaudiodescriptionsorderstatusidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`GetFoldersIdNotFoundError`](./src/models/errors/getfoldersidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PutFoldersIdNotFoundError`](./src/models/errors/putfoldersidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersIdNotFoundError`](./src/models/errors/deletefoldersidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PostFoldersIdCopyNotFoundError`](./src/models/errors/postfoldersidcopynotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`GetFoldersFolderIdSubfoldersNotFoundError`](./src/models/errors/getfoldersfolderidsubfoldersnotfounderror.ts): Folder not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PostFoldersFolderIdSubfoldersNotFoundError`](./src/models/errors/postfoldersfolderidsubfoldersnotfounderror.ts): Folder not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`GetFoldersFolderIdSubfoldersSubfolderIdNotFoundError`](./src/models/errors/getfoldersfolderidsubfolderssubfolderidnotfounderror.ts): Folder or subfolder not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PutFoldersFolderIdSubfoldersSubfolderIdNotFoundError`](./src/models/errors/putfoldersfolderidsubfolderssubfolderidnotfounderror.ts): Folder or subfolder not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersFolderIdSubfoldersSubfolderIdNotFoundError`](./src/models/errors/deletefoldersfolderidsubfolderssubfolderidnotfounderror.ts): Folder or subfolder not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersFolderIdSubfoldersBulkDeleteNotFoundError`](./src/models/errors/deletefoldersfolderidsubfoldersbulkdeletenotfounderror.ts): Folder not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`GetFoldersFolderIdSharingsSharingIdNotFoundError`](./src/models/errors/getfoldersfolderidsharingssharingidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PutFoldersFolderIdSharingsSharingIdNotFoundError`](./src/models/errors/putfoldersfolderidsharingssharingidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersFolderIdSharingsSharingIdNotFoundError`](./src/models/errors/deletefoldersfolderidsharingssharingidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`GetAllowedDomainsDomainNotFoundError`](./src/models/errors/getalloweddomainsdomainnotfounderror.ts): Domain not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`DeleteAllowedDomainsDomainNotFoundError`](./src/models/errors/deletealloweddomainsdomainnotfounderror.ts): Domain not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaIdCustomizationsNotFoundError`](./src/models/errors/getmediasmediaidcustomizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaIdCustomizationsNotFoundError`](./src/models/errors/putmediasmediaidcustomizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaIdCustomizationsNotFoundError`](./src/models/errors/deletemediasmediaidcustomizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdLocalizationsNotFoundError`](./src/models/errors/getmediasmediahashedidlocalizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdLocalizationsNotFoundError`](./src/models/errors/postmediasmediahashedidlocalizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdLocalizationsLocalizationHashedIdNotFoundError`](./src/models/errors/getmediasmediahashedidlocalizationslocalizationhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdNotFoundError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`GetChannelsChannelHashedIdNotFoundError`](./src/models/errors/getchannelschannelhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`PostWebinarsWebinarIdRegistrationsNotFoundError`](./src/models/errors/postwebinarswebinaridregistrationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 108 methods.*
* [`MethodNotAllowedError`](./src/models/errors/methodnotallowederror.ts): Method not allowed, e.g. trying to copy archived media. Status code `405`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdConflictError`](./src/models/errors/getanalyticswebinarswebinaridconflicterror.ts): The event has not yet reached a terminal state. Analytics are only available after the event has ended. Status code `409`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdHistogramsConflictError`](./src/models/errors/getanalyticswebinarswebinaridhistogramsconflicterror.ts): The event has not yet reached a terminal state. Analytics are only available after the event has ended. Status code `409`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdTranslateUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidtranslateunprocessableentityerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 1 of 108 methods.*
* [`PostMediasImportUrlUnprocessableEntityError`](./src/models/errors/postmediasimporturlunprocessableentityerror.ts): Unprocessable entity, the URL domain is not permitted for import. Status code `422`. Applicable to 1 of 108 methods.*
* [`PutMediasArchiveUnprocessableEntityError`](./src/models/errors/putmediasarchiveunprocessableentityerror.ts): Unprocessable entity, e.g. too many media requested. Status code `422`. Applicable to 1 of 108 methods.*
* [`PutMediasRestoreUnprocessableEntityError`](./src/models/errors/putmediasrestoreunprocessableentityerror.ts): Missing arguments for restoration of media. Status code `422`. Applicable to 1 of 108 methods.*
* [`PutMediasCopyUnprocessableEntityError`](./src/models/errors/putmediascopyunprocessableentityerror.ts): Unprocessable entity, e.g. missing required parameters. Status code `422`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersFolderIdSubfoldersBulkDeleteUnprocessableEntityError`](./src/models/errors/deletefoldersfolderidsubfoldersbulkdeleteunprocessableentityerror.ts): Unprocessable entity, e.g. missing required parameters. Status code `422`. Applicable to 1 of 108 methods.*
* [`PostTaggingsBulkCreateUnprocessableEntityError`](./src/models/errors/posttaggingsbulkcreateunprocessableentityerror.ts): Unprocessable entity, e.g. missing required parameters. Status code `422`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseunprocessableentityerror.ts): Unprocessable entity. Account not eligible, captions already purchased, or other validation error. Status code `422`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdTrimsUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidtrimsunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdLocalizationsUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidlocalizationsunprocessableentityerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 1 of 108 methods.*
* [`PostTagsUnprocessableEntityError`](./src/models/errors/posttagsunprocessableentityerror.ts): Validation error - tag already exists. Status code `422`. Applicable to 1 of 108 methods.*
* [`PostExpiringTokenUnprocessableEntityError`](./src/models/errors/postexpiringtokenunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 108 methods.*
* [`PostWebinarsUnprocessableEntityError`](./src/models/errors/postwebinarsunprocessableentityerror.ts): Validation errors. Status code `422`. Applicable to 1 of 108 methods.*
* [`PutWebinarsIdUnprocessableEntityError`](./src/models/errors/putwebinarsidunprocessableentityerror.ts): Validation errors. Status code `422`. Applicable to 1 of 108 methods.*
* [`PostWebinarsWebinarIdRegistrationsUnprocessableEntityError`](./src/models/errors/postwebinarswebinaridregistrationsunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 108 methods.*
* [`GetStatsEventsUnprocessableEntityError`](./src/models/errors/getstatseventsunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdUnprocessableEntityError`](./src/models/errors/getanalyticswebinarswebinaridunprocessableentityerror.ts): Unprocessable entity. Status code `422`. Applicable to 1 of 108 methods.*
* [`GetMediasInternalServerError`](./src/models/errors/getmediasinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdInternalServerError`](./src/models/errors/getmediasmediahashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdInternalServerError`](./src/models/errors/putmediasmediahashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaHashedIdInternalServerError`](./src/models/errors/deletemediasmediahashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCopyInternalServerError`](./src/models/errors/postmediasmediahashedidcopyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdSwapInternalServerError`](./src/models/errors/putmediasmediahashedidswapinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdStatsInternalServerError`](./src/models/errors/getmediasmediahashedidstatsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdTranslateInternalServerError`](./src/models/errors/postmediasmediahashedidtranslateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostMediasImportUrlInternalServerError`](./src/models/errors/postmediasimporturlinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutMediasArchiveInternalServerError`](./src/models/errors/putmediasarchiveinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutMediasMoveInternalServerError`](./src/models/errors/putmediasmoveinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutMediasRestoreInternalServerError`](./src/models/errors/putmediasrestoreinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutMediasCopyInternalServerError`](./src/models/errors/putmediascopyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetMediaExtendedAudioDescriptionsInternalServerError`](./src/models/errors/getmediaextendedaudiodescriptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetMediaExtendedAudioDescriptionsIdInternalServerError`](./src/models/errors/getmediaextendedaudiodescriptionsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteMediaExtendedAudioDescriptionsIdInternalServerError`](./src/models/errors/deletemediaextendedaudiodescriptionsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostMediaExtendedAudioDescriptionsOrderInternalServerError`](./src/models/errors/postmediaextendedaudiodescriptionsorderinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetMediaExtendedAudioDescriptionsOrderStatusIdInternalServerError`](./src/models/errors/getmediaextendedaudiodescriptionsorderstatusidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetFoldersInternalServerError`](./src/models/errors/getfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostFoldersInternalServerError`](./src/models/errors/postfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetFoldersIdInternalServerError`](./src/models/errors/getfoldersidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutFoldersIdInternalServerError`](./src/models/errors/putfoldersidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersIdInternalServerError`](./src/models/errors/deletefoldersidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostFoldersIdCopyInternalServerError`](./src/models/errors/postfoldersidcopyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetFoldersFolderIdSubfoldersInternalServerError`](./src/models/errors/getfoldersfolderidsubfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostFoldersFolderIdSubfoldersInternalServerError`](./src/models/errors/postfoldersfolderidsubfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetFoldersFolderIdSubfoldersSubfolderIdInternalServerError`](./src/models/errors/getfoldersfolderidsubfolderssubfolderidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutFoldersFolderIdSubfoldersSubfolderIdInternalServerError`](./src/models/errors/putfoldersfolderidsubfolderssubfolderidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersFolderIdSubfoldersSubfolderIdInternalServerError`](./src/models/errors/deletefoldersfolderidsubfolderssubfolderidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersFolderIdSubfoldersBulkDeleteInternalServerError`](./src/models/errors/deletefoldersfolderidsubfoldersbulkdeleteinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetFoldersFolderIdSharingsInternalServerError`](./src/models/errors/getfoldersfolderidsharingsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostFoldersFolderIdSharingsInternalServerError`](./src/models/errors/postfoldersfolderidsharingsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetFoldersFolderIdSharingsSharingIdInternalServerError`](./src/models/errors/getfoldersfolderidsharingssharingidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutFoldersFolderIdSharingsSharingIdInternalServerError`](./src/models/errors/putfoldersfolderidsharingssharingidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteFoldersFolderIdSharingsSharingIdInternalServerError`](./src/models/errors/deletefoldersfolderidsharingssharingidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostTaggingsBulkCreateInternalServerError`](./src/models/errors/posttaggingsbulkcreateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAccountDetailsInternalServerError`](./src/models/errors/getaccountdetailsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetTokenDetailsInternalServerError`](./src/models/errors/gettokendetailsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAllowedDomainsInternalServerError`](./src/models/errors/getalloweddomainsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostAllowedDomainsInternalServerError`](./src/models/errors/postalloweddomainsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAllowedDomainsDomainInternalServerError`](./src/models/errors/getalloweddomainsdomaininternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteAllowedDomainsDomainInternalServerError`](./src/models/errors/deletealloweddomainsdomaininternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetBackgroundJobStatusBackgroundJobStatusIdInternalServerError`](./src/models/errors/getbackgroundjobstatusbackgroundjobstatusidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/getmediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/postmediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/putmediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/deletemediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdCaptionsInternalServerError`](./src/models/errors/getmediasmediahashedidcaptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCaptionsInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCaptionsMultipartInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionsmultipartinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetCaptionsInternalServerError`](./src/models/errors/getcaptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdCaptionsLanguageCodeInternalServerError`](./src/models/errors/getmediasmediahashedidcaptionslanguagecodeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeInternalServerError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeMultipartInternalServerError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodemultipartinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaHashedIdCaptionsLanguageCodeInternalServerError`](./src/models/errors/deletemediasmediahashedidcaptionslanguagecodeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdTrimsInternalServerError`](./src/models/errors/postmediasmediahashedidtrimsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdLocalizationsInternalServerError`](./src/models/errors/getmediasmediahashedidlocalizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostMediasMediaHashedIdLocalizationsInternalServerError`](./src/models/errors/postmediasmediahashedidlocalizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetMediasMediaHashedIdLocalizationsLocalizationHashedIdInternalServerError`](./src/models/errors/getmediasmediahashedidlocalizationslocalizationhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdInternalServerError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetTagsInternalServerError`](./src/models/errors/gettagsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostTagsInternalServerError`](./src/models/errors/posttagsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteTagsNameInternalServerError`](./src/models/errors/deletetagsnameinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetSearchInternalServerError`](./src/models/errors/getsearchinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetChannelsInternalServerError`](./src/models/errors/getchannelsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostChannelsInternalServerError`](./src/models/errors/postchannelsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetChannelsChannelHashedIdInternalServerError`](./src/models/errors/getchannelschannelhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutChannelsChannelHashedIdInternalServerError`](./src/models/errors/putchannelschannelhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteChannelsChannelHashedIdInternalServerError`](./src/models/errors/deletechannelschannelhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdInternalServerError`](./src/models/errors/getchannelschannelhashedidchannelepisodeschannelepisodeidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesInternalServerError`](./src/models/errors/postchannelschannelhashedidchannelepisodesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetChannelEpisodesInternalServerError`](./src/models/errors/getchannelepisodesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdInternalServerError`](./src/models/errors/putchannelepisodeschannelepisodehashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteChannelEpisodesChannelEpisodeHashedIdInternalServerError`](./src/models/errors/deletechannelepisodeschannelepisodehashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdPublishInternalServerError`](./src/models/errors/putchannelepisodeschannelepisodehashedidpublishinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdUnpublishInternalServerError`](./src/models/errors/putchannelepisodeschannelepisodehashedidunpublishinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostExpiringTokenInternalServerError`](./src/models/errors/postexpiringtokeninternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetWebinarsInternalServerError`](./src/models/errors/getwebinarsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostWebinarsInternalServerError`](./src/models/errors/postwebinarsinternalservererror.ts): Internal server error during webinar creation. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetWebinarsIdInternalServerError`](./src/models/errors/getwebinarsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PutWebinarsIdInternalServerError`](./src/models/errors/putwebinarsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`DeleteWebinarsIdInternalServerError`](./src/models/errors/deletewebinarsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`PostWebinarsWebinarIdRegistrationsInternalServerError`](./src/models/errors/postwebinarswebinaridregistrationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetStatsAccountInternalServerError`](./src/models/errors/getstatsaccountinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetStatsAccountByDateInternalServerError`](./src/models/errors/getstatsaccountbydateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetStatsProjectsProjectIdInternalServerError`](./src/models/errors/getstatsprojectsprojectidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetStatsMediasMediaIdInternalServerError`](./src/models/errors/getstatsmediasmediaidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetStatsMediasMediaIdByDateInternalServerError`](./src/models/errors/getstatsmediasmediaidbydateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetStatsMediasMediaIdEngagementInternalServerError`](./src/models/errors/getstatsmediasmediaidengagementinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetStatsVisitorsInternalServerError`](./src/models/errors/getstatsvisitorsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetStatsVisitorsVisitorKeyInternalServerError`](./src/models/errors/getstatsvisitorsvisitorkeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetStatsEventsInternalServerError`](./src/models/errors/getstatseventsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetStatsEventsEventKeyInternalServerError`](./src/models/errors/getstatseventseventkeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdInternalServerError`](./src/models/errors/getanalyticsmediasmediaidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdTimeseriesInternalServerError`](./src/models/errors/getanalyticsmediasmediaidtimeseriesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsInternalServerError`](./src/models/errors/getanalyticsmediasmediaidembedlocationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdTrafficInternalServerError`](./src/models/errors/getanalyticsmediasmediaidtrafficinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdConversionsInternalServerError`](./src/models/errors/getanalyticsmediasmediaidconversionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdLanguagesInternalServerError`](./src/models/errors/getanalyticsmediasmediaidlanguagesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdInternalServerError`](./src/models/errors/getanalyticswebinarswebinaridinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdRegistrationInternalServerError`](./src/models/errors/getanalyticswebinarswebinaridregistrationinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdTrafficInternalServerError`](./src/models/errors/getanalyticswebinarswebinaridtrafficinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdAudienceInternalServerError`](./src/models/errors/getanalyticswebinarswebinaridaudienceinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdHistogramsInternalServerError`](./src/models/errors/getanalyticswebinarswebinaridhistogramsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesInternalServerError`](./src/models/errors/getchannelschannelhashedidchannelepisodesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 108 methods.*
* [`NotImplementedError`](./src/models/errors/notimplementederror.ts): Not implemented - expiring tokens cannot be created from other expiring tokens. Status code `501`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdTimeseriesServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidtimeseriesserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidembedlocationsserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdTrafficServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidtrafficserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdConversionsServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidconversionsserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsMediasMediaIdLanguagesServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidlanguagesserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdServiceUnavailableError`](./src/models/errors/getanalyticswebinarswebinaridserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdRegistrationServiceUnavailableError`](./src/models/errors/getanalyticswebinarswebinaridregistrationserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdTrafficServiceUnavailableError`](./src/models/errors/getanalyticswebinarswebinaridtrafficserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdAudienceServiceUnavailableError`](./src/models/errors/getanalyticswebinarswebinaridaudienceserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 108 methods.*
* [`GetAnalyticsWebinarsWebinarIdHistogramsServiceUnavailableError`](./src/models/errors/getanalyticswebinarswebinaridhistogramsserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 108 methods.*
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
  const result = await wistia.media.list({});

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

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Wistia } from "@wistia/wistia-api-client";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@wistia/wistia-api-client/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
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


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
  const result = await wistia.uploadOrImportMedia.postForm({
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
  const result = await wistia.uploadOrImportMedia.postForm({
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
* [getUsage](docs/sdks/account/README.md#getusage) - Get Account Usage
* [getTokenDetails](docs/sdks/account/README.md#gettokendetails) - Get Current Token

### [AllowedDomains](docs/sdks/alloweddomains/README.md)

* [list](docs/sdks/alloweddomains/README.md#list) - List Allowed Domains
* [create](docs/sdks/alloweddomains/README.md#create) - Create Allowed Domain
* [get](docs/sdks/alloweddomains/README.md#get) - Show Allowed Domain
* [delete](docs/sdks/alloweddomains/README.md#delete) - Delete Allowed Domain

### [AnalyticsAccount](docs/sdks/analyticsaccount/README.md)

* [get](docs/sdks/analyticsaccount/README.md#get) - Show Account Analytics
* [getTimeseries](docs/sdks/analyticsaccount/README.md#gettimeseries) - Show Account Analytics Timeseries
* [getTopContent](docs/sdks/analyticsaccount/README.md#gettopcontent) - Show Account Top Content
* [getEmbedLocations](docs/sdks/analyticsaccount/README.md#getembedlocations) - Show Account Embed Locations

### [AnalyticsMedia](docs/sdks/analyticsmedia/README.md)

* [get](docs/sdks/analyticsmedia/README.md#get) - Show Media Analytics
* [getTimeseries](docs/sdks/analyticsmedia/README.md#gettimeseries) - Show Media Analytics Timeseries
* [getEmbedLocations](docs/sdks/analyticsmedia/README.md#getembedlocations) - Show Media Embed Locations
* [getEmbedLocationsTimeseries](docs/sdks/analyticsmedia/README.md#getembedlocationstimeseries) - Show Media Embed Locations Timeseries
* [getTraffic](docs/sdks/analyticsmedia/README.md#gettraffic) - Show Media Traffic Breakdown
* [getConversions](docs/sdks/analyticsmedia/README.md#getconversions) - Show Media Form Conversions
* [getLanguages](docs/sdks/analyticsmedia/README.md#getlanguages) - Show Media Languages

### [AnalyticsWebinar](docs/sdks/analyticswebinar/README.md)

* [get](docs/sdks/analyticswebinar/README.md#get) - Show Webinar Analytics
* [getRegistration](docs/sdks/analyticswebinar/README.md#getregistration) - Show Webinar Registration Timeseries
* [getTraffic](docs/sdks/analyticswebinar/README.md#gettraffic) - Show Webinar Traffic Breakdown
* [getAudience](docs/sdks/analyticswebinar/README.md#getaudience) - Show Webinar Audience
* [getHistograms](docs/sdks/analyticswebinar/README.md#gethistograms) - Show Webinar Histograms

### [BackgroundJobStatus](docs/sdks/backgroundjobstatus/README.md)

* [get](docs/sdks/backgroundjobstatus/README.md#get) - Show Background Job Status

### [Brands](docs/sdks/brands/README.md)

* [list](docs/sdks/brands/README.md#list) - List Brands

### [BulkActions](docs/sdks/bulkactions/README.md)

* [postBulk](docs/sdks/bulkactions/README.md#postbulk) - Create Bulk Actions

### [Captions](docs/sdks/captions/README.md)

* [list](docs/sdks/captions/README.md#list) - List Captions by Media
* [create](docs/sdks/captions/README.md#create) - Create Captions
* [createMultipart](docs/sdks/captions/README.md#createmultipart) - Create Captions
* [listAll](docs/sdks/captions/README.md#listall) - List Captions
* [purchase](docs/sdks/captions/README.md#purchase) - Purchase Captions
* [get](docs/sdks/captions/README.md#get) - Show Captions
* [update](docs/sdks/captions/README.md#update) - Update Captions
* [updateMultipart](docs/sdks/captions/README.md#updatemultipart) - Update Captions
* [delete](docs/sdks/captions/README.md#delete) - Delete Captions
* [edit](docs/sdks/captions/README.md#edit) - Edit Captions Text

### [ChannelCollaborators](docs/sdks/channelcollaborators/README.md)

* [list](docs/sdks/channelcollaborators/README.md#list) - List Channel Collaborators
* [create](docs/sdks/channelcollaborators/README.md#create) - Create Channel Collaborator
* [delete](docs/sdks/channelcollaborators/README.md#delete) - Delete Channel Collaborator

### [ChannelEpisodes](docs/sdks/channelepisodes/README.md)

* [get](docs/sdks/channelepisodes/README.md#get) - Show Channel Episode
* [create](docs/sdks/channelepisodes/README.md#create) - Create Channel Episode
* [list](docs/sdks/channelepisodes/README.md#list) - List Channel Episodes
* [update](docs/sdks/channelepisodes/README.md#update) - Update Channel Episode
* [delete](docs/sdks/channelepisodes/README.md#delete) - Delete Channel Episode
* [publish](docs/sdks/channelepisodes/README.md#publish) - Publish Channel Episode
* [unpublish](docs/sdks/channelepisodes/README.md#unpublish) - Un-publish Channel Episode

### [Channels](docs/sdks/channels/README.md)

* [list](docs/sdks/channels/README.md#list) - List Channels
* [create](docs/sdks/channels/README.md#create) - Create Channel
* [get](docs/sdks/channels/README.md#get) - Show Channel
* [update](docs/sdks/channels/README.md#update) - Update Channel
* [delete](docs/sdks/channels/README.md#delete) - Delete Channel

#### [Channels.ChannelEpisodes](docs/sdks/channelschannelepisodes/README.md)

* [list](docs/sdks/channelschannelepisodes/README.md#list) - List Channel Episodes by Channel

### [CustomMetadataFieldDefinitions](docs/sdks/custommetadatafielddefinitions/README.md)

* [getCustomMetadataFieldDefinitions](docs/sdks/custommetadatafielddefinitions/README.md#getcustommetadatafielddefinitions) - List Custom Metadata Field Definitions
* [postCustomMetadataFieldDefinitions](docs/sdks/custommetadatafielddefinitions/README.md#postcustommetadatafielddefinitions) - Create Custom Metadata Field Definition
* [getCustomMetadataFieldDefinitionsKey](docs/sdks/custommetadatafielddefinitions/README.md#getcustommetadatafielddefinitionskey) - Show Custom Metadata Field Definition
* [putCustomMetadataFieldDefinitionsKey](docs/sdks/custommetadatafielddefinitions/README.md#putcustommetadatafielddefinitionskey) - Update Custom Metadata Field Definition
* [deleteCustomMetadataFieldDefinitionsKey](docs/sdks/custommetadatafielddefinitions/README.md#deletecustommetadatafielddefinitionskey) - Archive Custom Metadata Field Definition
* [postCustomMetadataFieldDefinitionsKeyRestore](docs/sdks/custommetadatafielddefinitions/README.md#postcustommetadatafielddefinitionskeyrestore) - Restore Custom Metadata Field Definition

### [CustomMetadataFieldValues](docs/sdks/custommetadatafieldvalues/README.md)

* [getMediasMediaHashedIdCustomMetadataFieldValues](docs/sdks/custommetadatafieldvalues/README.md#getmediasmediahashedidcustommetadatafieldvalues) - List Custom Metadata Field Values
* [putMediasMediaHashedIdCustomMetadataFieldValuesKey](docs/sdks/custommetadatafieldvalues/README.md#putmediasmediahashedidcustommetadatafieldvalueskey) - Set Custom Metadata Field Value
* [deleteMediasMediaHashedIdCustomMetadataFieldValuesKey](docs/sdks/custommetadatafieldvalues/README.md#deletemediasmediahashedidcustommetadatafieldvalueskey) - Clear Custom Metadata Field Value
* [getMediasMediaHashedIdCustomMetadataFieldValuesKey](docs/sdks/custommetadatafieldvalues/README.md#getmediasmediahashedidcustommetadatafieldvalueskey) - Show Custom Metadata Field Value

### [Customizations](docs/sdks/customizations/README.md)

* [get](docs/sdks/customizations/README.md#get) - Show Customizations
* [create](docs/sdks/customizations/README.md#create) - Create Customizations
* [update](docs/sdks/customizations/README.md#update) - Update Customizations
* [delete](docs/sdks/customizations/README.md#delete) - Delete Customizations
* [getAppearance](docs/sdks/customizations/README.md#getappearance) - Show Appearance Customizations
* [updateAppearance](docs/sdks/customizations/README.md#updateappearance) - Update Appearance Customizations
* [getPlayback](docs/sdks/customizations/README.md#getplayback) - Show Playback Customizations
* [updatePlayback](docs/sdks/customizations/README.md#updateplayback) - Update Playback Customizations
* [getThumbnail](docs/sdks/customizations/README.md#getthumbnail) - Show Thumbnail Customizations
* [updateThumbnail](docs/sdks/customizations/README.md#updatethumbnail) - Update Thumbnail Customizations
* [getAccessibility](docs/sdks/customizations/README.md#getaccessibility) - Show Accessibility Customizations
* [updateAccessibility](docs/sdks/customizations/README.md#updateaccessibility) - Update Accessibility Customizations
* [getChapters](docs/sdks/customizations/README.md#getchapters) - Show Chapters Customizations
* [updateChapters](docs/sdks/customizations/README.md#updatechapters) - Update Chapters Customizations
* [getEngagement](docs/sdks/customizations/README.md#getengagement) - Show Engagement Customizations
* [updateEngagement](docs/sdks/customizations/README.md#updateengagement) - Update Engagement Customizations
* [getRelatedMedia](docs/sdks/customizations/README.md#getrelatedmedia) - Show Related Media Customizations
* [updateRelatedMedia](docs/sdks/customizations/README.md#updaterelatedmedia) - Update Related Media Customizations
* [getSharing](docs/sdks/customizations/README.md#getsharing) - Show Sharing Customizations
* [updateSharing](docs/sdks/customizations/README.md#updatesharing) - Update Sharing Customizations
* [getLeadCapture](docs/sdks/customizations/README.md#getleadcapture) - Show Lead Capture Customizations
* [updateLeadCapture](docs/sdks/customizations/README.md#updateleadcapture) - Update Lead Capture Customizations
* [getAccess](docs/sdks/customizations/README.md#getaccess) - Show Access Customizations
* [updateAccess](docs/sdks/customizations/README.md#updateaccess) - Update Access Customizations

### [DeletedMedia](docs/sdks/deletedmedia/README.md)

* [getDeletedMedia](docs/sdks/deletedmedia/README.md#getdeletedmedia) - List Deleted Media
* [postDeletedMediaRestore](docs/sdks/deletedmedia/README.md#postdeletedmediarestore) - Restore Deleted Media

### [ExpiringAccessTokens](docs/sdks/expiringaccesstokens/README.md)

* [create](docs/sdks/expiringaccesstokens/README.md#create) - Create Expiring Access Token

### [Folders](docs/sdks/folders/README.md)

* [list](docs/sdks/folders/README.md#list) - List Folders
* [create](docs/sdks/folders/README.md#create) - Create Folder
* [get](docs/sdks/folders/README.md#get) - Show Folder
* [update](docs/sdks/folders/README.md#update) - Update Folder
* [delete](docs/sdks/folders/README.md#delete) - Delete Folder
* [copy](docs/sdks/folders/README.md#copy) - Copy Folder

### [FolderSharings](docs/sdks/foldersharings/README.md)

* [list](docs/sdks/foldersharings/README.md#list) - List Folder Sharings
* [create](docs/sdks/foldersharings/README.md#create) - Create Folder Sharing
* [get](docs/sdks/foldersharings/README.md#get) - Show Folder Sharing
* [update](docs/sdks/foldersharings/README.md#update) - Update Folder Sharing
* [delete](docs/sdks/foldersharings/README.md#delete) - Delete Folder Sharing

### [Localizations](docs/sdks/localizations/README.md)

* [list](docs/sdks/localizations/README.md#list) - List Localizations
* [create](docs/sdks/localizations/README.md#create) - Create Localization
* [get](docs/sdks/localizations/README.md#get) - Show Localization
* [delete](docs/sdks/localizations/README.md#delete) - Delete Localization

### [Media](docs/sdks/media/README.md)

* [list](docs/sdks/media/README.md#list) - List Media
* [get](docs/sdks/media/README.md#get) - Show Media
* [update](docs/sdks/media/README.md#update) - Update Media
* [delete](docs/sdks/media/README.md#delete) - Delete Media
* [copy](docs/sdks/media/README.md#copy) - Copy Media
* [swap](docs/sdks/media/README.md#swap) - Swap Media
* [getStats](docs/sdks/media/README.md#getstats) - Show Media Aggregated Stats
* [translate](docs/sdks/media/README.md#translate) - Translate Media
* [importUrl](docs/sdks/media/README.md#importurl) - Import Media from URL
* [archive](docs/sdks/media/README.md#archive) - Archive Media
* [move](docs/sdks/media/README.md#move) - Move Media
* [restore](docs/sdks/media/README.md#restore) - Restore Media
* [bulkCopy](docs/sdks/media/README.md#bulkcopy) - Bulk Copy Media

### [MediaExtendedAudioDescriptions](docs/sdks/mediaextendedaudiodescriptions/README.md)

* [getMediaExtendedAudioDescriptions](docs/sdks/mediaextendedaudiodescriptions/README.md#getmediaextendedaudiodescriptions) - List Media Extended Audio Descriptions
* [getMediaExtendedAudioDescriptionsId](docs/sdks/mediaextendedaudiodescriptions/README.md#getmediaextendedaudiodescriptionsid) - Show Media Extended Audio Description
* [deleteMediaExtendedAudioDescriptionsId](docs/sdks/mediaextendedaudiodescriptions/README.md#deletemediaextendedaudiodescriptionsid) - Delete Media Extended Audio Description
* [postMediaExtendedAudioDescriptionsOrder](docs/sdks/mediaextendedaudiodescriptions/README.md#postmediaextendedaudiodescriptionsorder) - Order Extended Audio Description
* [getMediaExtendedAudioDescriptionsOrderStatusId](docs/sdks/mediaextendedaudiodescriptions/README.md#getmediaextendedaudiodescriptionsorderstatusid) - Get Order Status

### [PushDevices](docs/sdks/pushdevices/README.md)

* [create](docs/sdks/pushdevices/README.md#create) - Register Push Device
* [delete](docs/sdks/pushdevices/README.md#delete) - Unregister Push Device

### [Remix](docs/sdks/remix/README.md)

* [postRemixes](docs/sdks/remix/README.md#postremixes) - Create Remix
* [getRemixesRemixHashedId](docs/sdks/remix/README.md#getremixesremixhashedid) - Get Remix
* [postRemixesRemixHashedIdContinue](docs/sdks/remix/README.md#postremixesremixhashedidcontinue) - Continue Remix
* [postRemixesRemixHashedIdExport](docs/sdks/remix/README.md#postremixesremixhashedidexport) - Export Remix
* [getRemixAccountStatus](docs/sdks/remix/README.md#getremixaccountstatus) - Get Remix Account Status

### [ResourceUrls](docs/sdks/resourceurls/README.md)

* [resolve](docs/sdks/resourceurls/README.md#resolve) - Resolve Resource URLs

### [ReviewBundles](docs/sdks/reviewbundles/README.md)

* [getReviewBundles](docs/sdks/reviewbundles/README.md#getreviewbundles) - List Review Bundles
* [postReviewBundles](docs/sdks/reviewbundles/README.md#postreviewbundles) - Create Review Bundle
* [deleteReviewBundlesReviewBundleHashedId](docs/sdks/reviewbundles/README.md#deletereviewbundlesreviewbundlehashedid) - Delete Review Bundle

### [Search](docs/sdks/search/README.md)

* [search](docs/sdks/search/README.md#search) - Search

### [ShareLinks](docs/sdks/sharelinks/README.md)

* [resolve](docs/sdks/sharelinks/README.md#resolve) - Resolve share link
* [get](docs/sdks/sharelinks/README.md#get) - Show share link
* [update](docs/sdks/sharelinks/README.md#update) - Update share link
* [delete](docs/sdks/sharelinks/README.md#delete) - Delete share link

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

* [list](docs/sdks/subfolders/README.md#list) - List Subfolders
* [create](docs/sdks/subfolders/README.md#create) - Create Subfolder
* [get](docs/sdks/subfolders/README.md#get) - Show Subfolder
* [update](docs/sdks/subfolders/README.md#update) - Update Subfolder
* [delete](docs/sdks/subfolders/README.md#delete) - Delete Subfolder
* [bulkDelete](docs/sdks/subfolders/README.md#bulkdelete) - Bulk Delete Subfolders

### [Taggings](docs/sdks/taggings/README.md)

* [bulkCreate](docs/sdks/taggings/README.md#bulkcreate) - Bulk Tag Media

### [Tags](docs/sdks/tags/README.md)

* [list](docs/sdks/tags/README.md#list) - List Tags
* [create](docs/sdks/tags/README.md#create) - Create Tags
* [delete](docs/sdks/tags/README.md#delete) - Delete Tag

### [Trims](docs/sdks/trims/README.md)

* [create](docs/sdks/trims/README.md#create) - Create Media from Trims

### [UploadOrImportMedia](docs/sdks/uploadorimportmedia/README.md)

* [postForm](docs/sdks/uploadorimportmedia/README.md#postform) - Upload or Import Media
* [postMultipart](docs/sdks/uploadorimportmedia/README.md#postmultipart) - Upload or Import Media

### [WebinarRegistrations](docs/sdks/webinarregistrations/README.md)

* [getWebinarsWebinarIdRegistrations](docs/sdks/webinarregistrations/README.md#getwebinarswebinaridregistrations) - List Webinar Registrations
* [create](docs/sdks/webinarregistrations/README.md#create) - Create Webinar Registration

### [WebinarCollaborators](docs/sdks/webinarcollaborators/README.md)

* [list](docs/sdks/webinarcollaborators/README.md#list) - List Webinar Collaborators
* [create](docs/sdks/webinarcollaborators/README.md#create) - Create Webinar Collaborator
* [delete](docs/sdks/webinarcollaborators/README.md#delete) - Delete Webinar Collaborator

### [Webinars](docs/sdks/webinars/README.md)

* [list](docs/sdks/webinars/README.md#list) - List Webinars
* [create](docs/sdks/webinars/README.md#create) - Create Webinar
* [get](docs/sdks/webinars/README.md#get) - Show Webinar
* [update](docs/sdks/webinars/README.md#update) - Update Webinar
* [delete](docs/sdks/webinars/README.md#delete) - Delete Webinar

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
- [`accountGetUsage`](docs/sdks/account/README.md#getusage) - Get Account Usage
- [`allowedDomainsCreate`](docs/sdks/alloweddomains/README.md#create) - Create Allowed Domain
- [`allowedDomainsDelete`](docs/sdks/alloweddomains/README.md#delete) - Delete Allowed Domain
- [`allowedDomainsGet`](docs/sdks/alloweddomains/README.md#get) - Show Allowed Domain
- [`allowedDomainsList`](docs/sdks/alloweddomains/README.md#list) - List Allowed Domains
- [`analyticsAccountGet`](docs/sdks/analyticsaccount/README.md#get) - Show Account Analytics
- [`analyticsAccountGetEmbedLocations`](docs/sdks/analyticsaccount/README.md#getembedlocations) - Show Account Embed Locations
- [`analyticsAccountGetTimeseries`](docs/sdks/analyticsaccount/README.md#gettimeseries) - Show Account Analytics Timeseries
- [`analyticsAccountGetTopContent`](docs/sdks/analyticsaccount/README.md#gettopcontent) - Show Account Top Content
- [`analyticsMediaGet`](docs/sdks/analyticsmedia/README.md#get) - Show Media Analytics
- [`analyticsMediaGetConversions`](docs/sdks/analyticsmedia/README.md#getconversions) - Show Media Form Conversions
- [`analyticsMediaGetEmbedLocations`](docs/sdks/analyticsmedia/README.md#getembedlocations) - Show Media Embed Locations
- [`analyticsMediaGetEmbedLocationsTimeseries`](docs/sdks/analyticsmedia/README.md#getembedlocationstimeseries) - Show Media Embed Locations Timeseries
- [`analyticsMediaGetLanguages`](docs/sdks/analyticsmedia/README.md#getlanguages) - Show Media Languages
- [`analyticsMediaGetTimeseries`](docs/sdks/analyticsmedia/README.md#gettimeseries) - Show Media Analytics Timeseries
- [`analyticsMediaGetTraffic`](docs/sdks/analyticsmedia/README.md#gettraffic) - Show Media Traffic Breakdown
- [`analyticsWebinarGet`](docs/sdks/analyticswebinar/README.md#get) - Show Webinar Analytics
- [`analyticsWebinarGetAudience`](docs/sdks/analyticswebinar/README.md#getaudience) - Show Webinar Audience
- [`analyticsWebinarGetHistograms`](docs/sdks/analyticswebinar/README.md#gethistograms) - Show Webinar Histograms
- [`analyticsWebinarGetRegistration`](docs/sdks/analyticswebinar/README.md#getregistration) - Show Webinar Registration Timeseries
- [`analyticsWebinarGetTraffic`](docs/sdks/analyticswebinar/README.md#gettraffic) - Show Webinar Traffic Breakdown
- [`backgroundJobStatusGet`](docs/sdks/backgroundjobstatus/README.md#get) - Show Background Job Status
- [`brandsList`](docs/sdks/brands/README.md#list) - List Brands
- [`bulkActionsPostBulk`](docs/sdks/bulkactions/README.md#postbulk) - Create Bulk Actions
- [`captionsCreate`](docs/sdks/captions/README.md#create) - Create Captions
- [`captionsCreateMultipart`](docs/sdks/captions/README.md#createmultipart) - Create Captions
- [`captionsDelete`](docs/sdks/captions/README.md#delete) - Delete Captions
- [`captionsEdit`](docs/sdks/captions/README.md#edit) - Edit Captions Text
- [`captionsGet`](docs/sdks/captions/README.md#get) - Show Captions
- [`captionsList`](docs/sdks/captions/README.md#list) - List Captions by Media
- [`captionsListAll`](docs/sdks/captions/README.md#listall) - List Captions
- [`captionsPurchase`](docs/sdks/captions/README.md#purchase) - Purchase Captions
- [`captionsUpdate`](docs/sdks/captions/README.md#update) - Update Captions
- [`captionsUpdateMultipart`](docs/sdks/captions/README.md#updatemultipart) - Update Captions
- [`channelCollaboratorsCreate`](docs/sdks/channelcollaborators/README.md#create) - Create Channel Collaborator
- [`channelCollaboratorsDelete`](docs/sdks/channelcollaborators/README.md#delete) - Delete Channel Collaborator
- [`channelCollaboratorsList`](docs/sdks/channelcollaborators/README.md#list) - List Channel Collaborators
- [`channelEpisodesCreate`](docs/sdks/channelepisodes/README.md#create) - Create Channel Episode
- [`channelEpisodesDelete`](docs/sdks/channelepisodes/README.md#delete) - Delete Channel Episode
- [`channelEpisodesGet`](docs/sdks/channelepisodes/README.md#get) - Show Channel Episode
- [`channelEpisodesList`](docs/sdks/channelepisodes/README.md#list) - List Channel Episodes
- [`channelEpisodesPublish`](docs/sdks/channelepisodes/README.md#publish) - Publish Channel Episode
- [`channelEpisodesUnpublish`](docs/sdks/channelepisodes/README.md#unpublish) - Un-publish Channel Episode
- [`channelEpisodesUpdate`](docs/sdks/channelepisodes/README.md#update) - Update Channel Episode
- [`channelsChannelEpisodesList`](docs/sdks/channelschannelepisodes/README.md#list) - List Channel Episodes by Channel
- [`channelsCreate`](docs/sdks/channels/README.md#create) - Create Channel
- [`channelsDelete`](docs/sdks/channels/README.md#delete) - Delete Channel
- [`channelsGet`](docs/sdks/channels/README.md#get) - Show Channel
- [`channelsList`](docs/sdks/channels/README.md#list) - List Channels
- [`channelsUpdate`](docs/sdks/channels/README.md#update) - Update Channel
- [`customizationsCreate`](docs/sdks/customizations/README.md#create) - Create Customizations
- [`customizationsDelete`](docs/sdks/customizations/README.md#delete) - Delete Customizations
- [`customizationsGet`](docs/sdks/customizations/README.md#get) - Show Customizations
- [`customizationsGetAccess`](docs/sdks/customizations/README.md#getaccess) - Show Access Customizations
- [`customizationsGetAccessibility`](docs/sdks/customizations/README.md#getaccessibility) - Show Accessibility Customizations
- [`customizationsGetAppearance`](docs/sdks/customizations/README.md#getappearance) - Show Appearance Customizations
- [`customizationsGetChapters`](docs/sdks/customizations/README.md#getchapters) - Show Chapters Customizations
- [`customizationsGetEngagement`](docs/sdks/customizations/README.md#getengagement) - Show Engagement Customizations
- [`customizationsGetLeadCapture`](docs/sdks/customizations/README.md#getleadcapture) - Show Lead Capture Customizations
- [`customizationsGetPlayback`](docs/sdks/customizations/README.md#getplayback) - Show Playback Customizations
- [`customizationsGetRelatedMedia`](docs/sdks/customizations/README.md#getrelatedmedia) - Show Related Media Customizations
- [`customizationsGetSharing`](docs/sdks/customizations/README.md#getsharing) - Show Sharing Customizations
- [`customizationsGetThumbnail`](docs/sdks/customizations/README.md#getthumbnail) - Show Thumbnail Customizations
- [`customizationsUpdate`](docs/sdks/customizations/README.md#update) - Update Customizations
- [`customizationsUpdateAccess`](docs/sdks/customizations/README.md#updateaccess) - Update Access Customizations
- [`customizationsUpdateAccessibility`](docs/sdks/customizations/README.md#updateaccessibility) - Update Accessibility Customizations
- [`customizationsUpdateAppearance`](docs/sdks/customizations/README.md#updateappearance) - Update Appearance Customizations
- [`customizationsUpdateChapters`](docs/sdks/customizations/README.md#updatechapters) - Update Chapters Customizations
- [`customizationsUpdateEngagement`](docs/sdks/customizations/README.md#updateengagement) - Update Engagement Customizations
- [`customizationsUpdateLeadCapture`](docs/sdks/customizations/README.md#updateleadcapture) - Update Lead Capture Customizations
- [`customizationsUpdatePlayback`](docs/sdks/customizations/README.md#updateplayback) - Update Playback Customizations
- [`customizationsUpdateRelatedMedia`](docs/sdks/customizations/README.md#updaterelatedmedia) - Update Related Media Customizations
- [`customizationsUpdateSharing`](docs/sdks/customizations/README.md#updatesharing) - Update Sharing Customizations
- [`customizationsUpdateThumbnail`](docs/sdks/customizations/README.md#updatethumbnail) - Update Thumbnail Customizations
- [`customMetadataFieldDefinitionsDeleteCustomMetadataFieldDefinitionsKey`](docs/sdks/custommetadatafielddefinitions/README.md#deletecustommetadatafielddefinitionskey) - Archive Custom Metadata Field Definition
- [`customMetadataFieldDefinitionsGetCustomMetadataFieldDefinitions`](docs/sdks/custommetadatafielddefinitions/README.md#getcustommetadatafielddefinitions) - List Custom Metadata Field Definitions
- [`customMetadataFieldDefinitionsGetCustomMetadataFieldDefinitionsKey`](docs/sdks/custommetadatafielddefinitions/README.md#getcustommetadatafielddefinitionskey) - Show Custom Metadata Field Definition
- [`customMetadataFieldDefinitionsPostCustomMetadataFieldDefinitions`](docs/sdks/custommetadatafielddefinitions/README.md#postcustommetadatafielddefinitions) - Create Custom Metadata Field Definition
- [`customMetadataFieldDefinitionsPostCustomMetadataFieldDefinitionsKeyRestore`](docs/sdks/custommetadatafielddefinitions/README.md#postcustommetadatafielddefinitionskeyrestore) - Restore Custom Metadata Field Definition
- [`customMetadataFieldDefinitionsPutCustomMetadataFieldDefinitionsKey`](docs/sdks/custommetadatafielddefinitions/README.md#putcustommetadatafielddefinitionskey) - Update Custom Metadata Field Definition
- [`customMetadataFieldValuesDeleteMediasMediaHashedIdCustomMetadataFieldValuesKey`](docs/sdks/custommetadatafieldvalues/README.md#deletemediasmediahashedidcustommetadatafieldvalueskey) - Clear Custom Metadata Field Value
- [`customMetadataFieldValuesGetMediasMediaHashedIdCustomMetadataFieldValues`](docs/sdks/custommetadatafieldvalues/README.md#getmediasmediahashedidcustommetadatafieldvalues) - List Custom Metadata Field Values
- [`customMetadataFieldValuesGetMediasMediaHashedIdCustomMetadataFieldValuesKey`](docs/sdks/custommetadatafieldvalues/README.md#getmediasmediahashedidcustommetadatafieldvalueskey) - Show Custom Metadata Field Value
- [`customMetadataFieldValuesPutMediasMediaHashedIdCustomMetadataFieldValuesKey`](docs/sdks/custommetadatafieldvalues/README.md#putmediasmediahashedidcustommetadatafieldvalueskey) - Set Custom Metadata Field Value
- [`deletedMediaGetDeletedMedia`](docs/sdks/deletedmedia/README.md#getdeletedmedia) - List Deleted Media
- [`deletedMediaPostDeletedMediaRestore`](docs/sdks/deletedmedia/README.md#postdeletedmediarestore) - Restore Deleted Media
- [`expiringAccessTokensCreate`](docs/sdks/expiringaccesstokens/README.md#create) - Create Expiring Access Token
- [`foldersCopy`](docs/sdks/folders/README.md#copy) - Copy Folder
- [`foldersCreate`](docs/sdks/folders/README.md#create) - Create Folder
- [`foldersDelete`](docs/sdks/folders/README.md#delete) - Delete Folder
- [`foldersGet`](docs/sdks/folders/README.md#get) - Show Folder
- [`folderSharingsCreate`](docs/sdks/foldersharings/README.md#create) - Create Folder Sharing
- [`folderSharingsDelete`](docs/sdks/foldersharings/README.md#delete) - Delete Folder Sharing
- [`folderSharingsGet`](docs/sdks/foldersharings/README.md#get) - Show Folder Sharing
- [`folderSharingsList`](docs/sdks/foldersharings/README.md#list) - List Folder Sharings
- [`folderSharingsUpdate`](docs/sdks/foldersharings/README.md#update) - Update Folder Sharing
- [`foldersList`](docs/sdks/folders/README.md#list) - List Folders
- [`foldersUpdate`](docs/sdks/folders/README.md#update) - Update Folder
- [`localizationsCreate`](docs/sdks/localizations/README.md#create) - Create Localization
- [`localizationsDelete`](docs/sdks/localizations/README.md#delete) - Delete Localization
- [`localizationsGet`](docs/sdks/localizations/README.md#get) - Show Localization
- [`localizationsList`](docs/sdks/localizations/README.md#list) - List Localizations
- [`mediaArchive`](docs/sdks/media/README.md#archive) - Archive Media
- [`mediaBulkCopy`](docs/sdks/media/README.md#bulkcopy) - Bulk Copy Media
- [`mediaCopy`](docs/sdks/media/README.md#copy) - Copy Media
- [`mediaDelete`](docs/sdks/media/README.md#delete) - Delete Media
- [`mediaExtendedAudioDescriptionsDeleteMediaExtendedAudioDescriptionsId`](docs/sdks/mediaextendedaudiodescriptions/README.md#deletemediaextendedaudiodescriptionsid) - Delete Media Extended Audio Description
- [`mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptions`](docs/sdks/mediaextendedaudiodescriptions/README.md#getmediaextendedaudiodescriptions) - List Media Extended Audio Descriptions
- [`mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptionsId`](docs/sdks/mediaextendedaudiodescriptions/README.md#getmediaextendedaudiodescriptionsid) - Show Media Extended Audio Description
- [`mediaExtendedAudioDescriptionsGetMediaExtendedAudioDescriptionsOrderStatusId`](docs/sdks/mediaextendedaudiodescriptions/README.md#getmediaextendedaudiodescriptionsorderstatusid) - Get Order Status
- [`mediaExtendedAudioDescriptionsPostMediaExtendedAudioDescriptionsOrder`](docs/sdks/mediaextendedaudiodescriptions/README.md#postmediaextendedaudiodescriptionsorder) - Order Extended Audio Description
- [`mediaGet`](docs/sdks/media/README.md#get) - Show Media
- [`mediaGetStats`](docs/sdks/media/README.md#getstats) - Show Media Aggregated Stats
- [`mediaImportUrl`](docs/sdks/media/README.md#importurl) - Import Media from URL
- [`mediaList`](docs/sdks/media/README.md#list) - List Media
- [`mediaMove`](docs/sdks/media/README.md#move) - Move Media
- [`mediaRestore`](docs/sdks/media/README.md#restore) - Restore Media
- [`mediaSwap`](docs/sdks/media/README.md#swap) - Swap Media
- [`mediaTranslate`](docs/sdks/media/README.md#translate) - Translate Media
- [`mediaUpdate`](docs/sdks/media/README.md#update) - Update Media
- [`pushDevicesCreate`](docs/sdks/pushdevices/README.md#create) - Register Push Device
- [`pushDevicesDelete`](docs/sdks/pushdevices/README.md#delete) - Unregister Push Device
- [`remixGetRemixAccountStatus`](docs/sdks/remix/README.md#getremixaccountstatus) - Get Remix Account Status
- [`remixGetRemixesRemixHashedId`](docs/sdks/remix/README.md#getremixesremixhashedid) - Get Remix
- [`remixPostRemixes`](docs/sdks/remix/README.md#postremixes) - Create Remix
- [`remixPostRemixesRemixHashedIdContinue`](docs/sdks/remix/README.md#postremixesremixhashedidcontinue) - Continue Remix
- [`remixPostRemixesRemixHashedIdExport`](docs/sdks/remix/README.md#postremixesremixhashedidexport) - Export Remix
- [`resourceUrlsResolve`](docs/sdks/resourceurls/README.md#resolve) - Resolve Resource URLs
- [`reviewBundlesDeleteReviewBundlesReviewBundleHashedId`](docs/sdks/reviewbundles/README.md#deletereviewbundlesreviewbundlehashedid) - Delete Review Bundle
- [`reviewBundlesGetReviewBundles`](docs/sdks/reviewbundles/README.md#getreviewbundles) - List Review Bundles
- [`reviewBundlesPostReviewBundles`](docs/sdks/reviewbundles/README.md#postreviewbundles) - Create Review Bundle
- [`searchSearch`](docs/sdks/search/README.md#search) - Search
- [`shareLinksDelete`](docs/sdks/sharelinks/README.md#delete) - Delete share link
- [`shareLinksGet`](docs/sdks/sharelinks/README.md#get) - Show share link
- [`shareLinksResolve`](docs/sdks/sharelinks/README.md#resolve) - Resolve share link
- [`shareLinksUpdate`](docs/sdks/sharelinks/README.md#update) - Update share link
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
- [`subfoldersBulkDelete`](docs/sdks/subfolders/README.md#bulkdelete) - Bulk Delete Subfolders
- [`subfoldersCreate`](docs/sdks/subfolders/README.md#create) - Create Subfolder
- [`subfoldersDelete`](docs/sdks/subfolders/README.md#delete) - Delete Subfolder
- [`subfoldersGet`](docs/sdks/subfolders/README.md#get) - Show Subfolder
- [`subfoldersList`](docs/sdks/subfolders/README.md#list) - List Subfolders
- [`subfoldersUpdate`](docs/sdks/subfolders/README.md#update) - Update Subfolder
- [`taggingsBulkCreate`](docs/sdks/taggings/README.md#bulkcreate) - Bulk Tag Media
- [`tagsCreate`](docs/sdks/tags/README.md#create) - Create Tags
- [`tagsDelete`](docs/sdks/tags/README.md#delete) - Delete Tag
- [`tagsList`](docs/sdks/tags/README.md#list) - List Tags
- [`trimsCreate`](docs/sdks/trims/README.md#create) - Create Media from Trims
- [`uploadOrImportMediaPostForm`](docs/sdks/uploadorimportmedia/README.md#postform) - Upload or Import Media
- [`uploadOrImportMediaPostMultipart`](docs/sdks/uploadorimportmedia/README.md#postmultipart) - Upload or Import Media
- [`webinarCollaboratorsCreate`](docs/sdks/webinarcollaborators/README.md#create) - Create Webinar Collaborator
- [`webinarCollaboratorsDelete`](docs/sdks/webinarcollaborators/README.md#delete) - Delete Webinar Collaborator
- [`webinarCollaboratorsList`](docs/sdks/webinarcollaborators/README.md#list) - List Webinar Collaborators
- [`webinarRegistrationsCreate`](docs/sdks/webinarregistrations/README.md#create) - Create Webinar Registration
- [`webinarRegistrationsGetWebinarsWebinarIdRegistrations`](docs/sdks/webinarregistrations/README.md#getwebinarswebinaridregistrations) - List Webinar Registrations
- [`webinarsCreate`](docs/sdks/webinars/README.md#create) - Create Webinar
- [`webinarsDelete`](docs/sdks/webinars/README.md#delete) - Delete Webinar
- [`webinarsGet`](docs/sdks/webinars/README.md#get) - Show Webinar
- [`webinarsList`](docs/sdks/webinars/README.md#list) - List Webinars
- [`webinarsUpdate`](docs/sdks/webinars/README.md#update) - Update Webinar

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
  const result = await wistia.uploadOrImportMedia.postMultipart({
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
  const result = await wistia.uploadOrImportMedia.postForm({
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
  const result = await wistia.uploadOrImportMedia.postForm({
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
    const result = await wistia.uploadOrImportMedia.postForm({
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

<details><summary>Less common errors (633)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`WistiaError`](./src/models/errors/wistiaerror.ts)**:
* [`PostFormBadRequestError`](./src/models/errors/postformbadrequesterror.ts): Error due to reaching the video limit of your account or other issues. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostMultipartBadRequestError`](./src/models/errors/postmultipartbadrequesterror.ts): Error due to reaching the video limit of your account or other issues. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostDevicesBadRequestError`](./src/models/errors/postdevicesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetReviewBundlesBadRequestError`](./src/models/errors/getreviewbundlesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostCustomMetadataFieldDefinitionsBadRequestError`](./src/models/errors/postcustommetadatafielddefinitionsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetDeletedMediaBadRequestError`](./src/models/errors/getdeletedmediabadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostDeletedMediaRestoreBadRequestError`](./src/models/errors/postdeletedmediarestorebadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetMediasBadRequestError`](./src/models/errors/getmediasbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdBadRequestError`](./src/models/errors/putmediasmediahashedidbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCopyBadRequestError`](./src/models/errors/postmediasmediahashedidcopybadrequesterror.ts): Bad request, e.g. copy failure. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdSwapBadRequestError`](./src/models/errors/putmediasmediahashedidswapbadrequesterror.ts): Bad request, e.g. missing replacement_media_id or media type mismatch. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdStatsBadRequestError`](./src/models/errors/getmediasmediahashedidstatsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdTranslateBadRequestError`](./src/models/errors/postmediasmediahashedidtranslatebadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostMediasImportUrlBadRequestError`](./src/models/errors/postmediasimporturlbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMoveBadRequestError`](./src/models/errors/putmediasmovebadrequesterror.ts): Invalid request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAppearanceBadRequestError`](./src/models/errors/putmediasmediaidcustomizationsappearancebadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsPlaybackBadRequestError`](./src/models/errors/putmediasmediaidcustomizationsplaybackbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsThumbnailBadRequestError`](./src/models/errors/putmediasmediaidcustomizationsthumbnailbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAccessibilityBadRequestError`](./src/models/errors/putmediasmediaidcustomizationsaccessibilitybadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsChaptersBadRequestError`](./src/models/errors/putmediasmediaidcustomizationschaptersbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsEngagementBadRequestError`](./src/models/errors/putmediasmediaidcustomizationsengagementbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsRelatedMediaBadRequestError`](./src/models/errors/putmediasmediaidcustomizationsrelatedmediabadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsSharingBadRequestError`](./src/models/errors/putmediasmediaidcustomizationssharingbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsLeadCaptureBadRequestError`](./src/models/errors/putmediasmediaidcustomizationsleadcapturebadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAccessBadRequestError`](./src/models/errors/putmediasmediaidcustomizationsaccessbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdShareLinkBadRequestError`](./src/models/errors/putmediasmediaidsharelinkbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetCaptionsBadRequestError`](./src/models/errors/getcaptionsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsLanguageCodeEditsBadRequestError`](./src/models/errors/postmediasmediahashedidcaptionslanguagecodeeditsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdLocalizationsBadRequestError`](./src/models/errors/postmediasmediahashedidlocalizationsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetMediaExtendedAudioDescriptionsBadRequestError`](./src/models/errors/getmediaextendedaudiodescriptionsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostMediaExtendedAudioDescriptionsOrderBadRequestError`](./src/models/errors/postmediaextendedaudiodescriptionsorderbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetBrandsBadRequestError`](./src/models/errors/getbrandsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetTagsBadRequestError`](./src/models/errors/gettagsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostTagsBadRequestError`](./src/models/errors/posttagsbadrequesterror.ts): Bad request - missing or invalid parameters. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostBulkBadRequestError`](./src/models/errors/postbulkbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetFoldersBadRequestError`](./src/models/errors/getfoldersbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSharingsBadRequestError`](./src/models/errors/getfoldersfolderidsharingsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSubfoldersBadRequestError`](./src/models/errors/getfoldersfolderidsubfoldersbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostFoldersFolderIdSubfoldersBadRequestError`](./src/models/errors/postfoldersfolderidsubfoldersbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetChannelsBadRequestError`](./src/models/errors/getchannelsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesBadRequestError`](./src/models/errors/postchannelschannelhashedidchannelepisodesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetChannelEpisodesBadRequestError`](./src/models/errors/getchannelepisodesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetChannelsChannelHashedIdCollaboratorsBadRequestError`](./src/models/errors/getchannelschannelhashedidcollaboratorsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostChannelsChannelHashedIdCollaboratorsBadRequestError`](./src/models/errors/postchannelschannelhashedidcollaboratorsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetWebinarsBadRequestError`](./src/models/errors/getwebinarsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetWebinarsWebinarIdCollaboratorsBadRequestError`](./src/models/errors/getwebinarswebinaridcollaboratorsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostWebinarsWebinarIdCollaboratorsBadRequestError`](./src/models/errors/postwebinarswebinaridcollaboratorsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetSearchBadRequestError`](./src/models/errors/getsearchbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetResourceUrlsBadRequestError`](./src/models/errors/getresourceurlsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAllowedDomainsBadRequestError`](./src/models/errors/getalloweddomainsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostAllowedDomainsBadRequestError`](./src/models/errors/postalloweddomainsbadrequesterror.ts): Bad request - missing or invalid domain. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountBadRequestError`](./src/models/errors/getanalyticsaccountbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountTimeseriesBadRequestError`](./src/models/errors/getanalyticsaccounttimeseriesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountTopContentBadRequestError`](./src/models/errors/getanalyticsaccounttopcontentbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountEmbedLocationsBadRequestError`](./src/models/errors/getanalyticsaccountembedlocationsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdBadRequestError`](./src/models/errors/getanalyticsmediasmediaidbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdTimeseriesBadRequestError`](./src/models/errors/getanalyticsmediasmediaidtimeseriesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsBadRequestError`](./src/models/errors/getanalyticsmediasmediaidembedlocationsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsTimeseriesBadRequestError`](./src/models/errors/getanalyticsmediasmediaidembedlocationstimeseriesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdTrafficBadRequestError`](./src/models/errors/getanalyticsmediasmediaidtrafficbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdConversionsBadRequestError`](./src/models/errors/getanalyticsmediasmediaidconversionsbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdLanguagesBadRequestError`](./src/models/errors/getanalyticsmediasmediaidlanguagesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdRegistrationBadRequestError`](./src/models/errors/getanalyticswebinarswebinaridregistrationbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdTrafficBadRequestError`](./src/models/errors/getanalyticswebinarswebinaridtrafficbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesBadRequestError`](./src/models/errors/getchannelschannelhashedidchannelepisodesbadrequesterror.ts): Bad request. Status code `400`. Applicable to 1 of 171 methods.*
* [`PostDevicesUnauthorizedError`](./src/models/errors/postdevicesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteDevicesDeviceTokenUnauthorizedError`](./src/models/errors/deletedevicesdevicetokenunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetReviewBundlesUnauthorizedError`](./src/models/errors/getreviewbundlesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostReviewBundlesUnauthorizedError`](./src/models/errors/postreviewbundlesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteReviewBundlesReviewBundleHashedIdUnauthorizedError`](./src/models/errors/deletereviewbundlesreviewbundlehashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetCustomMetadataFieldDefinitionsUnauthorizedError`](./src/models/errors/getcustommetadatafielddefinitionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostCustomMetadataFieldDefinitionsUnauthorizedError`](./src/models/errors/postcustommetadatafielddefinitionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetCustomMetadataFieldDefinitionsKeyUnauthorizedError`](./src/models/errors/getcustommetadatafielddefinitionskeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutCustomMetadataFieldDefinitionsKeyUnauthorizedError`](./src/models/errors/putcustommetadatafielddefinitionskeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteCustomMetadataFieldDefinitionsKeyUnauthorizedError`](./src/models/errors/deletecustommetadatafielddefinitionskeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostCustomMetadataFieldDefinitionsKeyRestoreUnauthorizedError`](./src/models/errors/postcustommetadatafielddefinitionskeyrestoreunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetDeletedMediaUnauthorizedError`](./src/models/errors/getdeletedmediaunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostDeletedMediaRestoreUnauthorizedError`](./src/models/errors/postdeletedmediarestoreunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasUnauthorizedError`](./src/models/errors/getmediasunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdUnauthorizedError`](./src/models/errors/getmediasmediahashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdUnauthorizedError`](./src/models/errors/putmediasmediahashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdUnauthorizedError`](./src/models/errors/deletemediasmediahashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCopyUnauthorizedError`](./src/models/errors/postmediasmediahashedidcopyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdSwapUnauthorizedError`](./src/models/errors/putmediasmediahashedidswapunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdStatsUnauthorizedError`](./src/models/errors/getmediasmediahashedidstatsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdTranslateUnauthorizedError`](./src/models/errors/postmediasmediahashedidtranslateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostMediasImportUrlUnauthorizedError`](./src/models/errors/postmediasimporturlunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasArchiveUnauthorizedError`](./src/models/errors/putmediasarchiveunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMoveUnauthorizedError`](./src/models/errors/putmediasmoveunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasRestoreUnauthorizedError`](./src/models/errors/putmediasrestoreunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasCopyUnauthorizedError`](./src/models/errors/putmediascopyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/postmediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaIdCustomizationsUnauthorizedError`](./src/models/errors/deletemediasmediaidcustomizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsAppearanceUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationsappearanceunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAppearanceUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationsappearanceunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsPlaybackUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationsplaybackunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsPlaybackUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationsplaybackunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsThumbnailUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationsthumbnailunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsThumbnailUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationsthumbnailunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsAccessibilityUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationsaccessibilityunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAccessibilityUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationsaccessibilityunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsChaptersUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationschaptersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsChaptersUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationschaptersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsEngagementUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationsengagementunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsEngagementUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationsengagementunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsRelatedMediaUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationsrelatedmediaunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsRelatedMediaUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationsrelatedmediaunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsSharingUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationssharingunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsSharingUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationssharingunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsLeadCaptureUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationsleadcaptureunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsLeadCaptureUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationsleadcaptureunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsAccessUnauthorizedError`](./src/models/errors/getmediasmediaidcustomizationsaccessunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAccessUnauthorizedError`](./src/models/errors/putmediasmediaidcustomizationsaccessunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetShareLinksIdentifierUnauthorizedError`](./src/models/errors/getsharelinksidentifierunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdShareLinkUnauthorizedError`](./src/models/errors/getmediasmediaidsharelinkunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdShareLinkUnauthorizedError`](./src/models/errors/putmediasmediaidsharelinkunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaIdShareLinkUnauthorizedError`](./src/models/errors/deletemediasmediaidsharelinkunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdCaptionsUnauthorizedError`](./src/models/errors/getmediasmediahashedidcaptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsMultipartUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionsmultipartunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetCaptionsUnauthorizedError`](./src/models/errors/getcaptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError`](./src/models/errors/getmediasmediahashedidcaptionslanguagecodeunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodeunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeMultipartUnauthorizedError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodemultipartunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdCaptionsLanguageCodeUnauthorizedError`](./src/models/errors/deletemediasmediahashedidcaptionslanguagecodeunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsLanguageCodeEditsUnauthorizedError`](./src/models/errors/postmediasmediahashedidcaptionslanguagecodeeditsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdLocalizationsUnauthorizedError`](./src/models/errors/getmediasmediahashedidlocalizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdLocalizationsUnauthorizedError`](./src/models/errors/postmediasmediahashedidlocalizationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdLocalizationsLocalizationHashedIdUnauthorizedError`](./src/models/errors/getmediasmediahashedidlocalizationslocalizationhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdUnauthorizedError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdCustomMetadataFieldValuesUnauthorizedError`](./src/models/errors/getmediasmediahashedidcustommetadatafieldvaluesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdCustomMetadataFieldValuesKeyUnauthorizedError`](./src/models/errors/putmediasmediahashedidcustommetadatafieldvalueskeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdCustomMetadataFieldValuesKeyUnauthorizedError`](./src/models/errors/deletemediasmediahashedidcustommetadatafieldvalueskeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdCustomMetadataFieldValuesKeyUnauthorizedError`](./src/models/errors/getmediasmediahashedidcustommetadatafieldvalueskeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdTrimsUnauthorizedError`](./src/models/errors/postmediasmediahashedidtrimsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediaExtendedAudioDescriptionsUnauthorizedError`](./src/models/errors/getmediaextendedaudiodescriptionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediaExtendedAudioDescriptionsIdUnauthorizedError`](./src/models/errors/getmediaextendedaudiodescriptionsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteMediaExtendedAudioDescriptionsIdUnauthorizedError`](./src/models/errors/deletemediaextendedaudiodescriptionsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostMediaExtendedAudioDescriptionsOrderUnauthorizedError`](./src/models/errors/postmediaextendedaudiodescriptionsorderunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetMediaExtendedAudioDescriptionsOrderStatusIdUnauthorizedError`](./src/models/errors/getmediaextendedaudiodescriptionsorderstatusidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetBrandsUnauthorizedError`](./src/models/errors/getbrandsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetTagsUnauthorizedError`](./src/models/errors/gettagsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostTagsUnauthorizedError`](./src/models/errors/posttagsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteTagsNameUnauthorizedError`](./src/models/errors/deletetagsnameunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostBulkUnauthorizedError`](./src/models/errors/postbulkunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostTaggingsBulkCreateUnauthorizedError`](./src/models/errors/posttaggingsbulkcreateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetFoldersUnauthorizedError`](./src/models/errors/getfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostFoldersUnauthorizedError`](./src/models/errors/postfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetFoldersIdUnauthorizedError`](./src/models/errors/getfoldersidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutFoldersIdUnauthorizedError`](./src/models/errors/putfoldersidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersIdUnauthorizedError`](./src/models/errors/deletefoldersidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostFoldersIdCopyUnauthorizedError`](./src/models/errors/postfoldersidcopyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSharingsUnauthorizedError`](./src/models/errors/getfoldersfolderidsharingsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostFoldersFolderIdSharingsUnauthorizedError`](./src/models/errors/postfoldersfolderidsharingsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSharingsSharingIdUnauthorizedError`](./src/models/errors/getfoldersfolderidsharingssharingidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutFoldersFolderIdSharingsSharingIdUnauthorizedError`](./src/models/errors/putfoldersfolderidsharingssharingidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersFolderIdSharingsSharingIdUnauthorizedError`](./src/models/errors/deletefoldersfolderidsharingssharingidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSubfoldersUnauthorizedError`](./src/models/errors/getfoldersfolderidsubfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostFoldersFolderIdSubfoldersUnauthorizedError`](./src/models/errors/postfoldersfolderidsubfoldersunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSubfoldersSubfolderIdUnauthorizedError`](./src/models/errors/getfoldersfolderidsubfolderssubfolderidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutFoldersFolderIdSubfoldersSubfolderIdUnauthorizedError`](./src/models/errors/putfoldersfolderidsubfolderssubfolderidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersFolderIdSubfoldersSubfolderIdUnauthorizedError`](./src/models/errors/deletefoldersfolderidsubfolderssubfolderidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersFolderIdSubfoldersBulkDeleteUnauthorizedError`](./src/models/errors/deletefoldersfolderidsubfoldersbulkdeleteunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetChannelsUnauthorizedError`](./src/models/errors/getchannelsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostChannelsUnauthorizedError`](./src/models/errors/postchannelsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetChannelsChannelHashedIdUnauthorizedError`](./src/models/errors/getchannelschannelhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutChannelsChannelHashedIdUnauthorizedError`](./src/models/errors/putchannelschannelhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteChannelsChannelHashedIdUnauthorizedError`](./src/models/errors/deletechannelschannelhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdUnauthorizedError`](./src/models/errors/getchannelschannelhashedidchannelepisodeschannelepisodeidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesUnauthorizedError`](./src/models/errors/postchannelschannelhashedidchannelepisodesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetChannelEpisodesUnauthorizedError`](./src/models/errors/getchannelepisodesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdUnauthorizedError`](./src/models/errors/putchannelepisodeschannelepisodehashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteChannelEpisodesChannelEpisodeHashedIdUnauthorizedError`](./src/models/errors/deletechannelepisodeschannelepisodehashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdPublishUnauthorizedError`](./src/models/errors/putchannelepisodeschannelepisodehashedidpublishunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdUnpublishUnauthorizedError`](./src/models/errors/putchannelepisodeschannelepisodehashedidunpublishunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetChannelsChannelHashedIdCollaboratorsUnauthorizedError`](./src/models/errors/getchannelschannelhashedidcollaboratorsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostChannelsChannelHashedIdCollaboratorsUnauthorizedError`](./src/models/errors/postchannelschannelhashedidcollaboratorsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteChannelsChannelHashedIdCollaboratorsIdUnauthorizedError`](./src/models/errors/deletechannelschannelhashedidcollaboratorsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetWebinarsUnauthorizedError`](./src/models/errors/getwebinarsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostWebinarsUnauthorizedError`](./src/models/errors/postwebinarsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetWebinarsIdUnauthorizedError`](./src/models/errors/getwebinarsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PutWebinarsIdUnauthorizedError`](./src/models/errors/putwebinarsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteWebinarsIdUnauthorizedError`](./src/models/errors/deletewebinarsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetWebinarsWebinarIdRegistrationsUnauthorizedError`](./src/models/errors/getwebinarswebinaridregistrationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostWebinarsWebinarIdRegistrationsUnauthorizedError`](./src/models/errors/postwebinarswebinaridregistrationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetWebinarsWebinarIdCollaboratorsUnauthorizedError`](./src/models/errors/getwebinarswebinaridcollaboratorsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostWebinarsWebinarIdCollaboratorsUnauthorizedError`](./src/models/errors/postwebinarswebinaridcollaboratorsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteWebinarsWebinarIdCollaboratorsIdUnauthorizedError`](./src/models/errors/deletewebinarswebinaridcollaboratorsidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAccountDetailsUnauthorizedError`](./src/models/errors/getaccountdetailsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAccountUsageUnauthorizedError`](./src/models/errors/getaccountusageunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetTokenDetailsUnauthorizedError`](./src/models/errors/gettokendetailsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetSearchUnauthorizedError`](./src/models/errors/getsearchunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetResourceUrlsUnauthorizedError`](./src/models/errors/getresourceurlsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostExpiringTokenUnauthorizedError`](./src/models/errors/postexpiringtokenunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetBackgroundJobStatusBackgroundJobStatusIdUnauthorizedError`](./src/models/errors/getbackgroundjobstatusbackgroundjobstatusidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAllowedDomainsUnauthorizedError`](./src/models/errors/getalloweddomainsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostAllowedDomainsUnauthorizedError`](./src/models/errors/postalloweddomainsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAllowedDomainsDomainUnauthorizedError`](./src/models/errors/getalloweddomainsdomainunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`DeleteAllowedDomainsDomainUnauthorizedError`](./src/models/errors/deletealloweddomainsdomainunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostRemixesUnauthorizedError`](./src/models/errors/postremixesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetRemixesRemixHashedIdUnauthorizedError`](./src/models/errors/getremixesremixhashedidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostRemixesRemixHashedIdContinueUnauthorizedError`](./src/models/errors/postremixesremixhashedidcontinueunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostRemixesRemixHashedIdExportUnauthorizedError`](./src/models/errors/postremixesremixhashedidexportunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetRemixAccountStatusUnauthorizedError`](./src/models/errors/getremixaccountstatusunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetStatsAccountUnauthorizedError`](./src/models/errors/getstatsaccountunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetStatsAccountByDateUnauthorizedError`](./src/models/errors/getstatsaccountbydateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetStatsProjectsProjectIdUnauthorizedError`](./src/models/errors/getstatsprojectsprojectidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetStatsMediasMediaIdUnauthorizedError`](./src/models/errors/getstatsmediasmediaidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetStatsMediasMediaIdByDateUnauthorizedError`](./src/models/errors/getstatsmediasmediaidbydateunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetStatsMediasMediaIdEngagementUnauthorizedError`](./src/models/errors/getstatsmediasmediaidengagementunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetStatsVisitorsUnauthorizedError`](./src/models/errors/getstatsvisitorsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetStatsVisitorsVisitorKeyUnauthorizedError`](./src/models/errors/getstatsvisitorsvisitorkeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetStatsEventsUnauthorizedError`](./src/models/errors/getstatseventsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetStatsEventsEventKeyUnauthorizedError`](./src/models/errors/getstatseventseventkeyunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountUnauthorizedError`](./src/models/errors/getanalyticsaccountunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountTimeseriesUnauthorizedError`](./src/models/errors/getanalyticsaccounttimeseriesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountTopContentUnauthorizedError`](./src/models/errors/getanalyticsaccounttopcontentunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountEmbedLocationsUnauthorizedError`](./src/models/errors/getanalyticsaccountembedlocationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdTimeseriesUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidtimeseriesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidembedlocationsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsTimeseriesUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidembedlocationstimeseriesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdTrafficUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidtrafficunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdConversionsUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidconversionsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdLanguagesUnauthorizedError`](./src/models/errors/getanalyticsmediasmediaidlanguagesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdUnauthorizedError`](./src/models/errors/getanalyticswebinarswebinaridunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdRegistrationUnauthorizedError`](./src/models/errors/getanalyticswebinarswebinaridregistrationunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdTrafficUnauthorizedError`](./src/models/errors/getanalyticswebinarswebinaridtrafficunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdAudienceUnauthorizedError`](./src/models/errors/getanalyticswebinarswebinaridaudienceunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdHistogramsUnauthorizedError`](./src/models/errors/getanalyticswebinarswebinaridhistogramsunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesUnauthorizedError`](./src/models/errors/getchannelschannelhashedidchannelepisodesunauthorizederror.ts): Unauthorized, invalid or missing token. Status code `401`. Applicable to 1 of 171 methods.*
* [`PostDevicesForbiddenError`](./src/models/errors/postdevicesforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteDevicesDeviceTokenForbiddenError`](./src/models/errors/deletedevicesdevicetokenforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetReviewBundlesForbiddenError`](./src/models/errors/getreviewbundlesforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostReviewBundlesForbiddenError`](./src/models/errors/postreviewbundlesforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteReviewBundlesReviewBundleHashedIdForbiddenError`](./src/models/errors/deletereviewbundlesreviewbundlehashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostCustomMetadataFieldDefinitionsForbiddenError`](./src/models/errors/postcustommetadatafielddefinitionsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutCustomMetadataFieldDefinitionsKeyForbiddenError`](./src/models/errors/putcustommetadatafielddefinitionskeyforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteCustomMetadataFieldDefinitionsKeyForbiddenError`](./src/models/errors/deletecustommetadatafielddefinitionskeyforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostCustomMetadataFieldDefinitionsKeyRestoreForbiddenError`](./src/models/errors/postcustommetadatafielddefinitionskeyrestoreforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetDeletedMediaForbiddenError`](./src/models/errors/getdeletedmediaforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostDeletedMediaRestoreForbiddenError`](./src/models/errors/postdeletedmediarestoreforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdForbiddenError`](./src/models/errors/putmediasmediahashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdForbiddenError`](./src/models/errors/deletemediasmediahashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCopyForbiddenError`](./src/models/errors/postmediasmediahashedidcopyforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdSwapForbiddenError`](./src/models/errors/putmediasmediahashedidswapforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdStatsForbiddenError`](./src/models/errors/getmediasmediahashedidstatsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdTranslateForbiddenError`](./src/models/errors/postmediasmediahashedidtranslateforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostMediasImportUrlForbiddenError`](./src/models/errors/postmediasimporturlforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasArchiveForbiddenError`](./src/models/errors/putmediasarchiveforbiddenerror.ts): Forbidden, e.g. account does not have access to archiving. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMoveForbiddenError`](./src/models/errors/putmediasmoveforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasRestoreForbiddenError`](./src/models/errors/putmediasrestoreforbiddenerror.ts): Forbidden, e.g. account does not have access to archiving. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasCopyForbiddenError`](./src/models/errors/putmediascopyforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaIdCustomizationsForbiddenError`](./src/models/errors/postmediasmediaidcustomizationsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAppearanceForbiddenError`](./src/models/errors/putmediasmediaidcustomizationsappearanceforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsPlaybackForbiddenError`](./src/models/errors/putmediasmediaidcustomizationsplaybackforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsThumbnailForbiddenError`](./src/models/errors/putmediasmediaidcustomizationsthumbnailforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAccessibilityForbiddenError`](./src/models/errors/putmediasmediaidcustomizationsaccessibilityforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsChaptersForbiddenError`](./src/models/errors/putmediasmediaidcustomizationschaptersforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsEngagementForbiddenError`](./src/models/errors/putmediasmediaidcustomizationsengagementforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsRelatedMediaForbiddenError`](./src/models/errors/putmediasmediaidcustomizationsrelatedmediaforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsSharingForbiddenError`](./src/models/errors/putmediasmediaidcustomizationssharingforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsLeadCaptureForbiddenError`](./src/models/errors/putmediasmediaidcustomizationsleadcaptureforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAccessForbiddenError`](./src/models/errors/putmediasmediaidcustomizationsaccessforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetShareLinksIdentifierForbiddenError`](./src/models/errors/getsharelinksidentifierforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdShareLinkForbiddenError`](./src/models/errors/getmediasmediaidsharelinkforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdShareLinkForbiddenError`](./src/models/errors/putmediasmediaidsharelinkforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaIdShareLinkForbiddenError`](./src/models/errors/deletemediasmediaidsharelinkforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsForbiddenError`](./src/models/errors/postmediasmediahashedidcaptionsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsMultipartForbiddenError`](./src/models/errors/postmediasmediahashedidcaptionsmultipartforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsLanguageCodeEditsForbiddenError`](./src/models/errors/postmediasmediahashedidcaptionslanguagecodeeditsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdLocalizationsForbiddenError`](./src/models/errors/postmediasmediahashedidlocalizationsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdForbiddenError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdCustomMetadataFieldValuesKeyForbiddenError`](./src/models/errors/putmediasmediahashedidcustommetadatafieldvalueskeyforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdCustomMetadataFieldValuesKeyForbiddenError`](./src/models/errors/deletemediasmediahashedidcustommetadatafieldvalueskeyforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdTrimsForbiddenError`](./src/models/errors/postmediasmediahashedidtrimsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteMediaExtendedAudioDescriptionsIdForbiddenError`](./src/models/errors/deletemediaextendedaudiodescriptionsidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostMediaExtendedAudioDescriptionsOrderForbiddenError`](./src/models/errors/postmediaextendedaudiodescriptionsorderforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetMediaExtendedAudioDescriptionsOrderStatusIdForbiddenError`](./src/models/errors/getmediaextendedaudiodescriptionsorderstatusidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostTagsForbiddenError`](./src/models/errors/posttagsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteTagsNameForbiddenError`](./src/models/errors/deletetagsnameforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostTaggingsBulkCreateForbiddenError`](./src/models/errors/posttaggingsbulkcreateforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostFoldersForbiddenError`](./src/models/errors/postfoldersforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutFoldersIdForbiddenError`](./src/models/errors/putfoldersidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersIdForbiddenError`](./src/models/errors/deletefoldersidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostFoldersFolderIdSharingsForbiddenError`](./src/models/errors/postfoldersfolderidsharingsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostFoldersFolderIdSubfoldersForbiddenError`](./src/models/errors/postfoldersfolderidsubfoldersforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostChannelsForbiddenError`](./src/models/errors/postchannelsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutChannelsChannelHashedIdForbiddenError`](./src/models/errors/putchannelschannelhashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteChannelsChannelHashedIdForbiddenError`](./src/models/errors/deletechannelschannelhashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesForbiddenError`](./src/models/errors/postchannelschannelhashedidchannelepisodesforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdForbiddenError`](./src/models/errors/putchannelepisodeschannelepisodehashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteChannelEpisodesChannelEpisodeHashedIdForbiddenError`](./src/models/errors/deletechannelepisodeschannelepisodehashedidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdPublishForbiddenError`](./src/models/errors/putchannelepisodeschannelepisodehashedidpublishforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdUnpublishForbiddenError`](./src/models/errors/putchannelepisodeschannelepisodehashedidunpublishforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetWebinarsForbiddenError`](./src/models/errors/getwebinarsforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostWebinarsForbiddenError`](./src/models/errors/postwebinarsforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetWebinarsIdForbiddenError`](./src/models/errors/getwebinarsidforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 171 methods.*
* [`PutWebinarsIdForbiddenError`](./src/models/errors/putwebinarsidforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteWebinarsIdForbiddenError`](./src/models/errors/deletewebinarsidforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetWebinarsWebinarIdRegistrationsForbiddenError`](./src/models/errors/getwebinarswebinaridregistrationsforbiddenerror.ts): Webinar feature not available. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostWebinarsWebinarIdRegistrationsForbiddenError`](./src/models/errors/postwebinarswebinaridregistrationsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostAllowedDomainsForbiddenError`](./src/models/errors/postalloweddomainsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteAllowedDomainsDomainForbiddenError`](./src/models/errors/deletealloweddomainsdomainforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostRemixesForbiddenError`](./src/models/errors/postremixesforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostRemixesRemixHashedIdContinueForbiddenError`](./src/models/errors/postremixesremixhashedidcontinueforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`PostRemixesRemixHashedIdExportForbiddenError`](./src/models/errors/postremixesremixhashedidexportforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetStatsAccountForbiddenError`](./src/models/errors/getstatsaccountforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetStatsAccountByDateForbiddenError`](./src/models/errors/getstatsaccountbydateforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetStatsProjectsProjectIdForbiddenError`](./src/models/errors/getstatsprojectsprojectidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetStatsMediasMediaIdForbiddenError`](./src/models/errors/getstatsmediasmediaidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetStatsMediasMediaIdByDateForbiddenError`](./src/models/errors/getstatsmediasmediaidbydateforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetStatsMediasMediaIdEngagementForbiddenError`](./src/models/errors/getstatsmediasmediaidengagementforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetStatsVisitorsForbiddenError`](./src/models/errors/getstatsvisitorsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetStatsVisitorsVisitorKeyForbiddenError`](./src/models/errors/getstatsvisitorsvisitorkeyforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetStatsEventsForbiddenError`](./src/models/errors/getstatseventsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetStatsEventsEventKeyForbiddenError`](./src/models/errors/getstatseventseventkeyforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountForbiddenError`](./src/models/errors/getanalyticsaccountforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountTimeseriesForbiddenError`](./src/models/errors/getanalyticsaccounttimeseriesforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountTopContentForbiddenError`](./src/models/errors/getanalyticsaccounttopcontentforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountEmbedLocationsForbiddenError`](./src/models/errors/getanalyticsaccountembedlocationsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdForbiddenError`](./src/models/errors/getanalyticsmediasmediaidforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdTimeseriesForbiddenError`](./src/models/errors/getanalyticsmediasmediaidtimeseriesforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsForbiddenError`](./src/models/errors/getanalyticsmediasmediaidembedlocationsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsTimeseriesForbiddenError`](./src/models/errors/getanalyticsmediasmediaidembedlocationstimeseriesforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdTrafficForbiddenError`](./src/models/errors/getanalyticsmediasmediaidtrafficforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdConversionsForbiddenError`](./src/models/errors/getanalyticsmediasmediaidconversionsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdLanguagesForbiddenError`](./src/models/errors/getanalyticsmediasmediaidlanguagesforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdForbiddenError`](./src/models/errors/getanalyticswebinarswebinaridforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdRegistrationForbiddenError`](./src/models/errors/getanalyticswebinarswebinaridregistrationforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdTrafficForbiddenError`](./src/models/errors/getanalyticswebinarswebinaridtrafficforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdAudienceForbiddenError`](./src/models/errors/getanalyticswebinarswebinaridaudienceforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdHistogramsForbiddenError`](./src/models/errors/getanalyticswebinarswebinaridhistogramsforbiddenerror.ts): Forbidden, token is valid but account does not have access to feature. Status code `403`. Applicable to 1 of 171 methods.*
* [`DeleteDevicesDeviceTokenNotFoundError`](./src/models/errors/deletedevicesdevicetokennotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteReviewBundlesReviewBundleHashedIdNotFoundError`](./src/models/errors/deletereviewbundlesreviewbundlehashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdNotFoundError`](./src/models/errors/getmediasmediahashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdNotFoundError`](./src/models/errors/putmediasmediahashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdNotFoundError`](./src/models/errors/deletemediasmediahashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCopyNotFoundError`](./src/models/errors/postmediasmediahashedidcopynotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdSwapNotFoundError`](./src/models/errors/putmediasmediahashedidswapnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdStatsNotFoundError`](./src/models/errors/getmediasmediahashedidstatsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdTranslateNotFoundError`](./src/models/errors/postmediasmediahashedidtranslatenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostMediasImportUrlNotFoundError`](./src/models/errors/postmediasimporturlnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMoveNotFoundError`](./src/models/errors/putmediasmovenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasRestoreNotFoundError`](./src/models/errors/putmediasrestorenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsNotFoundError`](./src/models/errors/getmediasmediaidcustomizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsNotFoundError`](./src/models/errors/putmediasmediaidcustomizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaIdCustomizationsNotFoundError`](./src/models/errors/deletemediasmediaidcustomizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsAppearanceNotFoundError`](./src/models/errors/getmediasmediaidcustomizationsappearancenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAppearanceNotFoundError`](./src/models/errors/putmediasmediaidcustomizationsappearancenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsPlaybackNotFoundError`](./src/models/errors/getmediasmediaidcustomizationsplaybacknotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsPlaybackNotFoundError`](./src/models/errors/putmediasmediaidcustomizationsplaybacknotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsThumbnailNotFoundError`](./src/models/errors/getmediasmediaidcustomizationsthumbnailnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsThumbnailNotFoundError`](./src/models/errors/putmediasmediaidcustomizationsthumbnailnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsAccessibilityNotFoundError`](./src/models/errors/getmediasmediaidcustomizationsaccessibilitynotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAccessibilityNotFoundError`](./src/models/errors/putmediasmediaidcustomizationsaccessibilitynotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsChaptersNotFoundError`](./src/models/errors/getmediasmediaidcustomizationschaptersnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsChaptersNotFoundError`](./src/models/errors/putmediasmediaidcustomizationschaptersnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsEngagementNotFoundError`](./src/models/errors/getmediasmediaidcustomizationsengagementnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsEngagementNotFoundError`](./src/models/errors/putmediasmediaidcustomizationsengagementnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsRelatedMediaNotFoundError`](./src/models/errors/getmediasmediaidcustomizationsrelatedmedianotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsRelatedMediaNotFoundError`](./src/models/errors/putmediasmediaidcustomizationsrelatedmedianotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsSharingNotFoundError`](./src/models/errors/getmediasmediaidcustomizationssharingnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsSharingNotFoundError`](./src/models/errors/putmediasmediaidcustomizationssharingnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsLeadCaptureNotFoundError`](./src/models/errors/getmediasmediaidcustomizationsleadcapturenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsLeadCaptureNotFoundError`](./src/models/errors/putmediasmediaidcustomizationsleadcapturenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsAccessNotFoundError`](./src/models/errors/getmediasmediaidcustomizationsaccessnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAccessNotFoundError`](./src/models/errors/putmediasmediaidcustomizationsaccessnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetShareLinksIdentifierNotFoundError`](./src/models/errors/getsharelinksidentifiernotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdShareLinkNotFoundError`](./src/models/errors/getmediasmediaidsharelinknotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdShareLinkNotFoundError`](./src/models/errors/putmediasmediaidsharelinknotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaIdShareLinkNotFoundError`](./src/models/errors/deletemediasmediaidsharelinknotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsLanguageCodeEditsNotFoundError`](./src/models/errors/postmediasmediahashedidcaptionslanguagecodeeditsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdLocalizationsNotFoundError`](./src/models/errors/getmediasmediahashedidlocalizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdLocalizationsNotFoundError`](./src/models/errors/postmediasmediahashedidlocalizationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdLocalizationsLocalizationHashedIdNotFoundError`](./src/models/errors/getmediasmediahashedidlocalizationslocalizationhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdNotFoundError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediaExtendedAudioDescriptionsIdNotFoundError`](./src/models/errors/getmediaextendedaudiodescriptionsidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteMediaExtendedAudioDescriptionsIdNotFoundError`](./src/models/errors/deletemediaextendedaudiodescriptionsidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostMediaExtendedAudioDescriptionsOrderNotFoundError`](./src/models/errors/postmediaextendedaudiodescriptionsordernotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetMediaExtendedAudioDescriptionsOrderStatusIdNotFoundError`](./src/models/errors/getmediaextendedaudiodescriptionsorderstatusidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetFoldersIdNotFoundError`](./src/models/errors/getfoldersidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutFoldersIdNotFoundError`](./src/models/errors/putfoldersidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersIdNotFoundError`](./src/models/errors/deletefoldersidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostFoldersIdCopyNotFoundError`](./src/models/errors/postfoldersidcopynotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSharingsSharingIdNotFoundError`](./src/models/errors/getfoldersfolderidsharingssharingidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutFoldersFolderIdSharingsSharingIdNotFoundError`](./src/models/errors/putfoldersfolderidsharingssharingidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersFolderIdSharingsSharingIdNotFoundError`](./src/models/errors/deletefoldersfolderidsharingssharingidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSubfoldersNotFoundError`](./src/models/errors/getfoldersfolderidsubfoldersnotfounderror.ts): Folder not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostFoldersFolderIdSubfoldersNotFoundError`](./src/models/errors/postfoldersfolderidsubfoldersnotfounderror.ts): Folder not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSubfoldersSubfolderIdNotFoundError`](./src/models/errors/getfoldersfolderidsubfolderssubfolderidnotfounderror.ts): Folder or subfolder not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PutFoldersFolderIdSubfoldersSubfolderIdNotFoundError`](./src/models/errors/putfoldersfolderidsubfolderssubfolderidnotfounderror.ts): Folder or subfolder not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersFolderIdSubfoldersSubfolderIdNotFoundError`](./src/models/errors/deletefoldersfolderidsubfolderssubfolderidnotfounderror.ts): Folder or subfolder not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersFolderIdSubfoldersBulkDeleteNotFoundError`](./src/models/errors/deletefoldersfolderidsubfoldersbulkdeletenotfounderror.ts): Folder not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetChannelsChannelHashedIdNotFoundError`](./src/models/errors/getchannelschannelhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetChannelsChannelHashedIdCollaboratorsNotFoundError`](./src/models/errors/getchannelschannelhashedidcollaboratorsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostChannelsChannelHashedIdCollaboratorsNotFoundError`](./src/models/errors/postchannelschannelhashedidcollaboratorsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteChannelsChannelHashedIdCollaboratorsIdNotFoundError`](./src/models/errors/deletechannelschannelhashedidcollaboratorsidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetWebinarsWebinarIdRegistrationsNotFoundError`](./src/models/errors/getwebinarswebinaridregistrationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostWebinarsWebinarIdRegistrationsNotFoundError`](./src/models/errors/postwebinarswebinaridregistrationsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetWebinarsWebinarIdCollaboratorsNotFoundError`](./src/models/errors/getwebinarswebinaridcollaboratorsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostWebinarsWebinarIdCollaboratorsNotFoundError`](./src/models/errors/postwebinarswebinaridcollaboratorsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteWebinarsWebinarIdCollaboratorsIdNotFoundError`](./src/models/errors/deletewebinarswebinaridcollaboratorsidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetResourceUrlsNotFoundError`](./src/models/errors/getresourceurlsnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetAllowedDomainsDomainNotFoundError`](./src/models/errors/getalloweddomainsdomainnotfounderror.ts): Domain not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`DeleteAllowedDomainsDomainNotFoundError`](./src/models/errors/deletealloweddomainsdomainnotfounderror.ts): Domain not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`GetRemixesRemixHashedIdNotFoundError`](./src/models/errors/getremixesremixhashedidnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostRemixesRemixHashedIdContinueNotFoundError`](./src/models/errors/postremixesremixhashedidcontinuenotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`PostRemixesRemixHashedIdExportNotFoundError`](./src/models/errors/postremixesremixhashedidexportnotfounderror.ts): Resource not found. Status code `404`. Applicable to 1 of 171 methods.*
* [`MethodNotAllowedError`](./src/models/errors/methodnotallowederror.ts): Method not allowed, e.g. trying to copy archived media. Status code `405`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsLanguageCodeEditsConflictError`](./src/models/errors/postmediasmediahashedidcaptionslanguagecodeeditsconflicterror.ts): The version guard failed. For `stale_version`, re-read and retry with the active version. For `diverged`, newer inactive versions exist, so re-reading will not help; wait and retry, then escalate if it persists. Status code `409`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdConflictError`](./src/models/errors/getanalyticswebinarswebinaridconflicterror.ts): The event has not yet reached a terminal state. Analytics are only available after the event has ended. Status code `409`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdHistogramsConflictError`](./src/models/errors/getanalyticswebinarswebinaridhistogramsconflicterror.ts): The event has not yet reached a terminal state. Analytics are only available after the event has ended. Status code `409`. Applicable to 1 of 171 methods.*
* [`PostReviewBundlesUnprocessableEntityError`](./src/models/errors/postreviewbundlesunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostCustomMetadataFieldDefinitionsUnprocessableEntityError`](./src/models/errors/postcustommetadatafielddefinitionsunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 171 methods.*
* [`PutCustomMetadataFieldDefinitionsKeyUnprocessableEntityError`](./src/models/errors/putcustommetadatafielddefinitionskeyunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdTranslateUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidtranslateunprocessableentityerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostMediasImportUrlUnprocessableEntityError`](./src/models/errors/postmediasimporturlunprocessableentityerror.ts): Unprocessable entity, the URL domain is not permitted for import. Status code `422`. Applicable to 1 of 171 methods.*
* [`PutMediasArchiveUnprocessableEntityError`](./src/models/errors/putmediasarchiveunprocessableentityerror.ts): Unprocessable entity, e.g. too many media requested. Status code `422`. Applicable to 1 of 171 methods.*
* [`PutMediasRestoreUnprocessableEntityError`](./src/models/errors/putmediasrestoreunprocessableentityerror.ts): Missing arguments for restoration of media. Status code `422`. Applicable to 1 of 171 methods.*
* [`PutMediasCopyUnprocessableEntityError`](./src/models/errors/putmediascopyunprocessableentityerror.ts): Unprocessable entity, e.g. missing required parameters. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseunprocessableentityerror.ts): Unprocessable entity. Account not eligible, captions already purchased, or other validation error. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsLanguageCodeEditsUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidcaptionslanguagecodeeditsunprocessableentityerror.ts): One or more edits could not be resolved, so nothing was written. Fix the listed failures and retry the whole batch. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdLocalizationsUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidlocalizationsunprocessableentityerror.ts): Unprocessible entity, parameters provided were invalid. Status code `422`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdCustomMetadataFieldValuesKeyUnprocessableEntityError`](./src/models/errors/putmediasmediahashedidcustommetadatafieldvalueskeyunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdTrimsUnprocessableEntityError`](./src/models/errors/postmediasmediahashedidtrimsunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostTagsUnprocessableEntityError`](./src/models/errors/posttagsunprocessableentityerror.ts): Validation error - tag already exists. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostTaggingsBulkCreateUnprocessableEntityError`](./src/models/errors/posttaggingsbulkcreateunprocessableentityerror.ts): Unprocessable entity, e.g. missing required parameters. Status code `422`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersFolderIdSubfoldersBulkDeleteUnprocessableEntityError`](./src/models/errors/deletefoldersfolderidsubfoldersbulkdeleteunprocessableentityerror.ts): Unprocessable entity, e.g. missing required parameters. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostWebinarsUnprocessableEntityError`](./src/models/errors/postwebinarsunprocessableentityerror.ts): Validation errors. Status code `422`. Applicable to 1 of 171 methods.*
* [`PutWebinarsIdUnprocessableEntityError`](./src/models/errors/putwebinarsidunprocessableentityerror.ts): Validation errors. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostWebinarsWebinarIdRegistrationsUnprocessableEntityError`](./src/models/errors/postwebinarswebinaridregistrationsunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostExpiringTokenUnprocessableEntityError`](./src/models/errors/postexpiringtokenunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostRemixesUnprocessableEntityError`](./src/models/errors/postremixesunprocessableentityerror.ts): Unprocessable entity (e.g., credit limit reached, media not found). Status code `422`. Applicable to 1 of 171 methods.*
* [`PostRemixesRemixHashedIdContinueUnprocessableEntityError`](./src/models/errors/postremixesremixhashedidcontinueunprocessableentityerror.ts): Unprocessable entity (e.g., conversation not found). Status code `422`. Applicable to 1 of 171 methods.*
* [`PostRemixesRemixHashedIdExportUnprocessableEntityError`](./src/models/errors/postremixesremixhashedidexportunprocessableentityerror.ts): Unprocessable entity (e.g., remix not ready for export). Status code `422`. Applicable to 1 of 171 methods.*
* [`GetStatsEventsUnprocessableEntityError`](./src/models/errors/getstatseventsunprocessableentityerror.ts): Unprocessable entity, the request parameters were invalid. Status code `422`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdUnprocessableEntityError`](./src/models/errors/getanalyticswebinarswebinaridunprocessableentityerror.ts): Unprocessable entity. Status code `422`. Applicable to 1 of 171 methods.*
* [`PostDevicesInternalServerError`](./src/models/errors/postdevicesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteDevicesDeviceTokenInternalServerError`](./src/models/errors/deletedevicesdevicetokeninternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetReviewBundlesInternalServerError`](./src/models/errors/getreviewbundlesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostReviewBundlesInternalServerError`](./src/models/errors/postreviewbundlesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteReviewBundlesReviewBundleHashedIdInternalServerError`](./src/models/errors/deletereviewbundlesreviewbundlehashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetCustomMetadataFieldDefinitionsInternalServerError`](./src/models/errors/getcustommetadatafielddefinitionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostCustomMetadataFieldDefinitionsInternalServerError`](./src/models/errors/postcustommetadatafielddefinitionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetCustomMetadataFieldDefinitionsKeyInternalServerError`](./src/models/errors/getcustommetadatafielddefinitionskeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutCustomMetadataFieldDefinitionsKeyInternalServerError`](./src/models/errors/putcustommetadatafielddefinitionskeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteCustomMetadataFieldDefinitionsKeyInternalServerError`](./src/models/errors/deletecustommetadatafielddefinitionskeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostCustomMetadataFieldDefinitionsKeyRestoreInternalServerError`](./src/models/errors/postcustommetadatafielddefinitionskeyrestoreinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetDeletedMediaInternalServerError`](./src/models/errors/getdeletedmediainternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostDeletedMediaRestoreInternalServerError`](./src/models/errors/postdeletedmediarestoreinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasInternalServerError`](./src/models/errors/getmediasinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdInternalServerError`](./src/models/errors/getmediasmediahashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdInternalServerError`](./src/models/errors/putmediasmediahashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdInternalServerError`](./src/models/errors/deletemediasmediahashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCopyInternalServerError`](./src/models/errors/postmediasmediahashedidcopyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdSwapInternalServerError`](./src/models/errors/putmediasmediahashedidswapinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdStatsInternalServerError`](./src/models/errors/getmediasmediahashedidstatsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdTranslateInternalServerError`](./src/models/errors/postmediasmediahashedidtranslateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostMediasImportUrlInternalServerError`](./src/models/errors/postmediasimporturlinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasArchiveInternalServerError`](./src/models/errors/putmediasarchiveinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMoveInternalServerError`](./src/models/errors/putmediasmoveinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasRestoreInternalServerError`](./src/models/errors/putmediasrestoreinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasCopyInternalServerError`](./src/models/errors/putmediascopyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/getmediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/postmediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/putmediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaIdCustomizationsInternalServerError`](./src/models/errors/deletemediasmediaidcustomizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsAppearanceInternalServerError`](./src/models/errors/getmediasmediaidcustomizationsappearanceinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAppearanceInternalServerError`](./src/models/errors/putmediasmediaidcustomizationsappearanceinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsPlaybackInternalServerError`](./src/models/errors/getmediasmediaidcustomizationsplaybackinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsPlaybackInternalServerError`](./src/models/errors/putmediasmediaidcustomizationsplaybackinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsThumbnailInternalServerError`](./src/models/errors/getmediasmediaidcustomizationsthumbnailinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsThumbnailInternalServerError`](./src/models/errors/putmediasmediaidcustomizationsthumbnailinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsAccessibilityInternalServerError`](./src/models/errors/getmediasmediaidcustomizationsaccessibilityinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAccessibilityInternalServerError`](./src/models/errors/putmediasmediaidcustomizationsaccessibilityinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsChaptersInternalServerError`](./src/models/errors/getmediasmediaidcustomizationschaptersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsChaptersInternalServerError`](./src/models/errors/putmediasmediaidcustomizationschaptersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsEngagementInternalServerError`](./src/models/errors/getmediasmediaidcustomizationsengagementinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsEngagementInternalServerError`](./src/models/errors/putmediasmediaidcustomizationsengagementinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsRelatedMediaInternalServerError`](./src/models/errors/getmediasmediaidcustomizationsrelatedmediainternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsRelatedMediaInternalServerError`](./src/models/errors/putmediasmediaidcustomizationsrelatedmediainternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsSharingInternalServerError`](./src/models/errors/getmediasmediaidcustomizationssharinginternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsSharingInternalServerError`](./src/models/errors/putmediasmediaidcustomizationssharinginternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsLeadCaptureInternalServerError`](./src/models/errors/getmediasmediaidcustomizationsleadcaptureinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsLeadCaptureInternalServerError`](./src/models/errors/putmediasmediaidcustomizationsleadcaptureinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdCustomizationsAccessInternalServerError`](./src/models/errors/getmediasmediaidcustomizationsaccessinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdCustomizationsAccessInternalServerError`](./src/models/errors/putmediasmediaidcustomizationsaccessinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetShareLinksIdentifierInternalServerError`](./src/models/errors/getsharelinksidentifierinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaIdShareLinkInternalServerError`](./src/models/errors/getmediasmediaidsharelinkinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaIdShareLinkInternalServerError`](./src/models/errors/putmediasmediaidsharelinkinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaIdShareLinkInternalServerError`](./src/models/errors/deletemediasmediaidsharelinkinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdCaptionsInternalServerError`](./src/models/errors/getmediasmediahashedidcaptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsMultipartInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionsmultipartinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetCaptionsInternalServerError`](./src/models/errors/getcaptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsPurchaseInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionspurchaseinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdCaptionsLanguageCodeInternalServerError`](./src/models/errors/getmediasmediahashedidcaptionslanguagecodeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeInternalServerError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdCaptionsLanguageCodeMultipartInternalServerError`](./src/models/errors/putmediasmediahashedidcaptionslanguagecodemultipartinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdCaptionsLanguageCodeInternalServerError`](./src/models/errors/deletemediasmediahashedidcaptionslanguagecodeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdCaptionsLanguageCodeEditsInternalServerError`](./src/models/errors/postmediasmediahashedidcaptionslanguagecodeeditsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdLocalizationsInternalServerError`](./src/models/errors/getmediasmediahashedidlocalizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdLocalizationsInternalServerError`](./src/models/errors/postmediasmediahashedidlocalizationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdLocalizationsLocalizationHashedIdInternalServerError`](./src/models/errors/getmediasmediahashedidlocalizationslocalizationhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdLocalizationsLocalizationHashedIdInternalServerError`](./src/models/errors/deletemediasmediahashedidlocalizationslocalizationhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdCustomMetadataFieldValuesInternalServerError`](./src/models/errors/getmediasmediahashedidcustommetadatafieldvaluesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutMediasMediaHashedIdCustomMetadataFieldValuesKeyInternalServerError`](./src/models/errors/putmediasmediahashedidcustommetadatafieldvalueskeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteMediasMediaHashedIdCustomMetadataFieldValuesKeyInternalServerError`](./src/models/errors/deletemediasmediahashedidcustommetadatafieldvalueskeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediasMediaHashedIdCustomMetadataFieldValuesKeyInternalServerError`](./src/models/errors/getmediasmediahashedidcustommetadatafieldvalueskeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostMediasMediaHashedIdTrimsInternalServerError`](./src/models/errors/postmediasmediahashedidtrimsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediaExtendedAudioDescriptionsInternalServerError`](./src/models/errors/getmediaextendedaudiodescriptionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediaExtendedAudioDescriptionsIdInternalServerError`](./src/models/errors/getmediaextendedaudiodescriptionsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteMediaExtendedAudioDescriptionsIdInternalServerError`](./src/models/errors/deletemediaextendedaudiodescriptionsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostMediaExtendedAudioDescriptionsOrderInternalServerError`](./src/models/errors/postmediaextendedaudiodescriptionsorderinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetMediaExtendedAudioDescriptionsOrderStatusIdInternalServerError`](./src/models/errors/getmediaextendedaudiodescriptionsorderstatusidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetBrandsInternalServerError`](./src/models/errors/getbrandsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetTagsInternalServerError`](./src/models/errors/gettagsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostTagsInternalServerError`](./src/models/errors/posttagsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteTagsNameInternalServerError`](./src/models/errors/deletetagsnameinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostBulkInternalServerError`](./src/models/errors/postbulkinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostTaggingsBulkCreateInternalServerError`](./src/models/errors/posttaggingsbulkcreateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetFoldersInternalServerError`](./src/models/errors/getfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostFoldersInternalServerError`](./src/models/errors/postfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetFoldersIdInternalServerError`](./src/models/errors/getfoldersidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutFoldersIdInternalServerError`](./src/models/errors/putfoldersidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersIdInternalServerError`](./src/models/errors/deletefoldersidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostFoldersIdCopyInternalServerError`](./src/models/errors/postfoldersidcopyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSharingsInternalServerError`](./src/models/errors/getfoldersfolderidsharingsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostFoldersFolderIdSharingsInternalServerError`](./src/models/errors/postfoldersfolderidsharingsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSharingsSharingIdInternalServerError`](./src/models/errors/getfoldersfolderidsharingssharingidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutFoldersFolderIdSharingsSharingIdInternalServerError`](./src/models/errors/putfoldersfolderidsharingssharingidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersFolderIdSharingsSharingIdInternalServerError`](./src/models/errors/deletefoldersfolderidsharingssharingidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSubfoldersInternalServerError`](./src/models/errors/getfoldersfolderidsubfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostFoldersFolderIdSubfoldersInternalServerError`](./src/models/errors/postfoldersfolderidsubfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetFoldersFolderIdSubfoldersSubfolderIdInternalServerError`](./src/models/errors/getfoldersfolderidsubfolderssubfolderidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutFoldersFolderIdSubfoldersSubfolderIdInternalServerError`](./src/models/errors/putfoldersfolderidsubfolderssubfolderidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersFolderIdSubfoldersSubfolderIdInternalServerError`](./src/models/errors/deletefoldersfolderidsubfolderssubfolderidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteFoldersFolderIdSubfoldersBulkDeleteInternalServerError`](./src/models/errors/deletefoldersfolderidsubfoldersbulkdeleteinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetChannelsInternalServerError`](./src/models/errors/getchannelsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostChannelsInternalServerError`](./src/models/errors/postchannelsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetChannelsChannelHashedIdInternalServerError`](./src/models/errors/getchannelschannelhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutChannelsChannelHashedIdInternalServerError`](./src/models/errors/putchannelschannelhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteChannelsChannelHashedIdInternalServerError`](./src/models/errors/deletechannelschannelhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesChannelEpisodeIdInternalServerError`](./src/models/errors/getchannelschannelhashedidchannelepisodeschannelepisodeidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostChannelsChannelHashedIdChannelEpisodesInternalServerError`](./src/models/errors/postchannelschannelhashedidchannelepisodesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetChannelEpisodesInternalServerError`](./src/models/errors/getchannelepisodesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdInternalServerError`](./src/models/errors/putchannelepisodeschannelepisodehashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteChannelEpisodesChannelEpisodeHashedIdInternalServerError`](./src/models/errors/deletechannelepisodeschannelepisodehashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdPublishInternalServerError`](./src/models/errors/putchannelepisodeschannelepisodehashedidpublishinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutChannelEpisodesChannelEpisodeHashedIdUnpublishInternalServerError`](./src/models/errors/putchannelepisodeschannelepisodehashedidunpublishinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetChannelsChannelHashedIdCollaboratorsInternalServerError`](./src/models/errors/getchannelschannelhashedidcollaboratorsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostChannelsChannelHashedIdCollaboratorsInternalServerError`](./src/models/errors/postchannelschannelhashedidcollaboratorsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteChannelsChannelHashedIdCollaboratorsIdInternalServerError`](./src/models/errors/deletechannelschannelhashedidcollaboratorsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetWebinarsInternalServerError`](./src/models/errors/getwebinarsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostWebinarsInternalServerError`](./src/models/errors/postwebinarsinternalservererror.ts): Internal server error during webinar creation. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetWebinarsIdInternalServerError`](./src/models/errors/getwebinarsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PutWebinarsIdInternalServerError`](./src/models/errors/putwebinarsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteWebinarsIdInternalServerError`](./src/models/errors/deletewebinarsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetWebinarsWebinarIdRegistrationsInternalServerError`](./src/models/errors/getwebinarswebinaridregistrationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostWebinarsWebinarIdRegistrationsInternalServerError`](./src/models/errors/postwebinarswebinaridregistrationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetWebinarsWebinarIdCollaboratorsInternalServerError`](./src/models/errors/getwebinarswebinaridcollaboratorsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostWebinarsWebinarIdCollaboratorsInternalServerError`](./src/models/errors/postwebinarswebinaridcollaboratorsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteWebinarsWebinarIdCollaboratorsIdInternalServerError`](./src/models/errors/deletewebinarswebinaridcollaboratorsidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAccountDetailsInternalServerError`](./src/models/errors/getaccountdetailsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAccountUsageInternalServerError`](./src/models/errors/getaccountusageinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetTokenDetailsInternalServerError`](./src/models/errors/gettokendetailsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetSearchInternalServerError`](./src/models/errors/getsearchinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetResourceUrlsInternalServerError`](./src/models/errors/getresourceurlsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostExpiringTokenInternalServerError`](./src/models/errors/postexpiringtokeninternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetBackgroundJobStatusBackgroundJobStatusIdInternalServerError`](./src/models/errors/getbackgroundjobstatusbackgroundjobstatusidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAllowedDomainsInternalServerError`](./src/models/errors/getalloweddomainsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostAllowedDomainsInternalServerError`](./src/models/errors/postalloweddomainsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAllowedDomainsDomainInternalServerError`](./src/models/errors/getalloweddomainsdomaininternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`DeleteAllowedDomainsDomainInternalServerError`](./src/models/errors/deletealloweddomainsdomaininternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostRemixesInternalServerError`](./src/models/errors/postremixesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetRemixesRemixHashedIdInternalServerError`](./src/models/errors/getremixesremixhashedidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostRemixesRemixHashedIdContinueInternalServerError`](./src/models/errors/postremixesremixhashedidcontinueinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`PostRemixesRemixHashedIdExportInternalServerError`](./src/models/errors/postremixesremixhashedidexportinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetRemixAccountStatusInternalServerError`](./src/models/errors/getremixaccountstatusinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetStatsAccountInternalServerError`](./src/models/errors/getstatsaccountinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetStatsAccountByDateInternalServerError`](./src/models/errors/getstatsaccountbydateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetStatsProjectsProjectIdInternalServerError`](./src/models/errors/getstatsprojectsprojectidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetStatsMediasMediaIdInternalServerError`](./src/models/errors/getstatsmediasmediaidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetStatsMediasMediaIdByDateInternalServerError`](./src/models/errors/getstatsmediasmediaidbydateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetStatsMediasMediaIdEngagementInternalServerError`](./src/models/errors/getstatsmediasmediaidengagementinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetStatsVisitorsInternalServerError`](./src/models/errors/getstatsvisitorsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetStatsVisitorsVisitorKeyInternalServerError`](./src/models/errors/getstatsvisitorsvisitorkeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetStatsEventsInternalServerError`](./src/models/errors/getstatseventsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetStatsEventsEventKeyInternalServerError`](./src/models/errors/getstatseventseventkeyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountInternalServerError`](./src/models/errors/getanalyticsaccountinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountTimeseriesInternalServerError`](./src/models/errors/getanalyticsaccounttimeseriesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountTopContentInternalServerError`](./src/models/errors/getanalyticsaccounttopcontentinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountEmbedLocationsInternalServerError`](./src/models/errors/getanalyticsaccountembedlocationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdInternalServerError`](./src/models/errors/getanalyticsmediasmediaidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdTimeseriesInternalServerError`](./src/models/errors/getanalyticsmediasmediaidtimeseriesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsInternalServerError`](./src/models/errors/getanalyticsmediasmediaidembedlocationsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsTimeseriesInternalServerError`](./src/models/errors/getanalyticsmediasmediaidembedlocationstimeseriesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdTrafficInternalServerError`](./src/models/errors/getanalyticsmediasmediaidtrafficinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdConversionsInternalServerError`](./src/models/errors/getanalyticsmediasmediaidconversionsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdLanguagesInternalServerError`](./src/models/errors/getanalyticsmediasmediaidlanguagesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdInternalServerError`](./src/models/errors/getanalyticswebinarswebinaridinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdRegistrationInternalServerError`](./src/models/errors/getanalyticswebinarswebinaridregistrationinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdTrafficInternalServerError`](./src/models/errors/getanalyticswebinarswebinaridtrafficinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdAudienceInternalServerError`](./src/models/errors/getanalyticswebinarswebinaridaudienceinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdHistogramsInternalServerError`](./src/models/errors/getanalyticswebinarswebinaridhistogramsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`GetChannelsChannelHashedIdChannelEpisodesInternalServerError`](./src/models/errors/getchannelschannelhashedidchannelepisodesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 171 methods.*
* [`NotImplementedError`](./src/models/errors/notimplementederror.ts): Not implemented - expiring tokens cannot be created from other expiring tokens. Status code `501`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountServiceUnavailableError`](./src/models/errors/getanalyticsaccountserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountTimeseriesServiceUnavailableError`](./src/models/errors/getanalyticsaccounttimeseriesserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountTopContentServiceUnavailableError`](./src/models/errors/getanalyticsaccounttopcontentserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsAccountEmbedLocationsServiceUnavailableError`](./src/models/errors/getanalyticsaccountembedlocationsserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdTimeseriesServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidtimeseriesserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidembedlocationsserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdEmbedLocationsTimeseriesServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidembedlocationstimeseriesserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdTrafficServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidtrafficserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdConversionsServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidconversionsserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsMediasMediaIdLanguagesServiceUnavailableError`](./src/models/errors/getanalyticsmediasmediaidlanguagesserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdServiceUnavailableError`](./src/models/errors/getanalyticswebinarswebinaridserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdRegistrationServiceUnavailableError`](./src/models/errors/getanalyticswebinarswebinaridregistrationserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdTrafficServiceUnavailableError`](./src/models/errors/getanalyticswebinarswebinaridtrafficserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdAudienceServiceUnavailableError`](./src/models/errors/getanalyticswebinarswebinaridaudienceserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
* [`GetAnalyticsWebinarsWebinarIdHistogramsServiceUnavailableError`](./src/models/errors/getanalyticswebinarswebinaridhistogramsserviceunavailableerror.ts): Analytics service is temporarily unavailable. Status code `503`. Applicable to 1 of 171 methods.*
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
  const result = await wistia.pushDevices.create({
    deviceToken:
      "6a41c6f2e5b1d3f4a7c8e9b0d1f2a3c4e5b6d7f8a9c0b1d2e3f4a5b6c7d8e9f0",
    bundleId: "com.wistia.glass",
    environment: "production",
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
  const result = await wistia.uploadOrImportMedia.postForm({
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

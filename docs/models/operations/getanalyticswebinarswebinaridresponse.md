# GetAnalyticsWebinarsWebinarIdResponse

Success response with aggregate analytics for the webinar.

## Example Usage

```typescript
import { GetAnalyticsWebinarsWebinarIdResponse } from "@wistia/wistia-api-client/models/operations";

let value: GetAnalyticsWebinarsWebinarIdResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `registrations`                                                       | *number*                                                              | :heavy_minus_sign:                                                    | The total number of registrations for the webinar.                    |
| `importedRegistrations`                                               | *number*                                                              | :heavy_minus_sign:                                                    | The number of registrations imported from external sources.           |
| `onDemandRegistrations`                                               | *number*                                                              | :heavy_minus_sign:                                                    | The number of registrations for on-demand viewing.                    |
| `importedOnDemandRegistrations`                                       | *number*                                                              | :heavy_minus_sign:                                                    | The number of on-demand registrations imported from external sources. |
| `totalWatchTime`                                                      | *number*                                                              | :heavy_minus_sign:                                                    | Total watch time across all attendees in seconds.                     |
| `averageWatchTime`                                                    | *number*                                                              | :heavy_minus_sign:                                                    | Average watch time per attendee in seconds.                           |
| `attendance`                                                          | *number*                                                              | :heavy_minus_sign:                                                    | The total number of attendees who joined the live event.              |
| `chattedAttendees`                                                    | *number*                                                              | :heavy_minus_sign:                                                    | The number of attendees who sent at least one chat message.           |
| `engagementRate`                                                      | *number*                                                              | :heavy_minus_sign:                                                    | The average engagement rate for attendees (between 0 and 1).          |
| `chats`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | The total number of chat messages sent during the event.              |
| `currentlyWatching`                                                   | *number*                                                              | :heavy_minus_sign:                                                    | The number of viewers currently watching (0 for completed events).    |
| `engagedAttendees`                                                    | *number*                                                              | :heavy_minus_sign:                                                    | The number of attendees who were actively engaged.                    |
| `impressions`                                                         | *number*                                                              | :heavy_minus_sign:                                                    | The total number of registration page impressions.                    |
| `onDemandImpressions`                                                 | *number*                                                              | :heavy_minus_sign:                                                    | The number of on-demand page impressions.                             |
| `onDemandPlays`                                                       | *number*                                                              | :heavy_minus_sign:                                                    | The number of on-demand video plays.                                  |
| `onDemandEngagementRate`                                              | *number*                                                              | :heavy_minus_sign:                                                    | The engagement rate for on-demand viewers (between 0 and 1).          |
| `eventTime`                                                           | *number*                                                              | :heavy_minus_sign:                                                    | The duration of the live event in seconds.                            |
| `qaQuestions`                                                         | *number*                                                              | :heavy_minus_sign:                                                    | The total number of Q&A questions asked during the event.             |
| `pollQuestions`                                                       | [operations.PollQuestion](../../models/operations/pollquestion.md)[]  | :heavy_minus_sign:                                                    | Poll questions and their response data.                               |
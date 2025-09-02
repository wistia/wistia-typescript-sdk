# Visitor

## Example Usage

```typescript
import { Visitor } from "@wistia/wistia-api-client/models";

let value: Visitor = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `visitorKey`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | A unique identifier for the visitor.                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the visitor was created.                                                                 |
| `lastActiveAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The last time the visitor played a video.                                                     |
| `lastEventKey`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The event key for the last video play action.                                                 |
| `loadCount`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | The total number of videos loaded by the visitor.                                             |
| `playCount`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | The total number of videos played by the visitor.                                             |
| `visitorIdentity`                                                                             | [models.VisitorIdentity](../models/visitoridentity.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userAgentDetails`                                                                            | [models.VisitorUserAgentDetails](../models/visitoruseragentdetails.md)                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
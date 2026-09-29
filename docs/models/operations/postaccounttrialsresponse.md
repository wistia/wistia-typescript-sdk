# PostAccountTrialsResponse

Trial started

## Example Usage

```typescript
import { PostAccountTrialsResponse } from "@wistia/wistia-api-client/models/operations";

let value: PostAccountTrialsResponse = {
  trialExpiresAt: new Date("2025-06-22T01:03:02.139Z"),
  planTier: "<value>",
  isTrial: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `trialExpiresAt`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | ISO 8601 timestamp when the trial expires. Null if the trial has no end date.                 |
| `planTier`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The plan tier now active on the account.                                                      |
| `isTrial`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Always true on success.                                                                       |
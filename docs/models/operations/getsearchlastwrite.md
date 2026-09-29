# GetSearchLastWrite

The most recent recorded write to this value on this media, with who made it and through which surface. Null when no write has been recorded; system-initiated writes (e.g. default-value backfills) are not recorded.


## Example Usage

```typescript
import { GetSearchLastWrite } from "@wistia/wistia-api-client/models/operations";

let value: GetSearchLastWrite = {
  at: new Date("2026-08-25T17:55:00Z"),
  source: "api",
  actor: null,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the write happened.                                                                      | 2026-08-25T17:55:00Z                                                                          |
| `source`                                                                                      | [operations.GetSearchSource](../../models/operations/getsearchsource.md)                      | :heavy_check_mark:                                                                            | The surface the write came through.                                                           | api                                                                                           |
| `actor`                                                                                       | [operations.GetSearchActor](../../models/operations/getsearchactor.md)                        | :heavy_check_mark:                                                                            | The contact who made the write, or null when the write had no acting contact.                 |                                                                                               |
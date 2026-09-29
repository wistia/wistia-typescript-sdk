# LastWrite

The most recent recorded write to this value on this media, with who made it and through which surface. Null when no write has been recorded; system-initiated writes (e.g. default-value backfills) are not recorded.


## Example Usage

```typescript
import { LastWrite } from "@wistia/wistia-api-client/models/operations";

let value: LastWrite = {
  at: new Date("2026-08-25T17:55:00Z"),
  source: "api",
  actor: {
    type: "contact",
    id: "abc123de",
    name: "Jane Doe",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the write happened.                                                                      | 2026-08-25T17:55:00Z                                                                          |
| `source`                                                                                      | [operations.Source](../../models/operations/source.md)                                        | :heavy_check_mark:                                                                            | The surface the write came through.                                                           | api                                                                                           |
| `actor`                                                                                       | [operations.Actor](../../models/operations/actor.md)                                          | :heavy_check_mark:                                                                            | The contact who made the write, or null when the write had no acting contact.                 |                                                                                               |
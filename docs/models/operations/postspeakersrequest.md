# PostSpeakersRequest

The reusable speaker profile to add to the account's speaker library.
Names are not unique: a name that matches an existing profile creates a
second profile, so look up existing profiles first when the person may
already be in the library.


## Example Usage

```typescript
import { PostSpeakersRequest } from "@wistia/wistia-api-client/models/operations";

let value: PostSpeakersRequest = {
  name: "Alice Example",
  title: "Product Manager",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The speaker's display name. Leading and trailing whitespace is removed.                                                       | Alice Example                                                                                                                 |
| `title`                                                                                                                       | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The speaker's title. Leading and trailing whitespace is removed. Omit it, or send null or an empty string, to leave it unset. | Product Manager                                                                                                               |
# PostMediaExtendedAudioDescriptionsOrderMedia

## Example Usage

```typescript
import { PostMediaExtendedAudioDescriptionsOrderMedia } from "@wistia/wistia-api-client/models/operations";

let value: PostMediaExtendedAudioDescriptionsOrderMedia = {
  id: "<id>",
  indexUrl: "https://general-clavicle.org/",
  url: "https://another-drive.org",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                             | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | A unique alphanumeric identifier for the record.                                                                                                                 |
| `indexUrl`                                                                                                                                                       | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | A URL for fetching all the records of the given record type. You can pass hashed_ids as a param with multiple values<br/>to do a batch fetch for this records type.<br/> |
| `url`                                                                                                                                                            | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | A URL that can be used to fetch this record.                                                                                                                     |
# GetSearchInclude

Pass `custom_metadata` to include each media result's custom metadata field values (same shape as the Get Custom Metadata Field Values endpoint). Only available on accounts with access to custom metadata (other accounts receive a 403 when this parameter is passed).

## Example Usage

```typescript
import { GetSearchInclude } from "@wistia/wistia-api-client/models/operations";

let value: GetSearchInclude = "custom_metadata";
```

## Values

```typescript
"custom_metadata"
```
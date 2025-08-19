# Container

## Example Usage

```typescript
import { Container } from "wistia/models/operations";

let value: Container = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The type of container the medias will be restored to, either Project or Channel. |
| `name`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The display name of the container the medias will be restored to.                |
| `hashedId`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | The hashed ID of the container the medias will be restored to.                   |
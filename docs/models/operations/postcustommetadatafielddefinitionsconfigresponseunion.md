# PostCustomMetadataFieldDefinitionsConfigResponseUnion

Type-specific configuration. Present only for field types that have any: an object with `options` for single_select and multi_select fields, an object with `used_currencies` for money fields, and an object with `allows_group_refs` for contact_ref and contact_multi_ref fields.



## Supported Types

### `operations.PostCustomMetadataFieldDefinitionsConfigResponse1`

```typescript
const value: operations.PostCustomMetadataFieldDefinitionsConfigResponse1 = {
  options: [],
};
```

### `operations.PostCustomMetadataFieldDefinitionsConfigResponse2`

```typescript
const value: operations.PostCustomMetadataFieldDefinitionsConfigResponse2 = {
  usedCurrencies: [
    "EUR",
    "USD",
  ],
};
```

### `operations.PostCustomMetadataFieldDefinitionsConfigResponse3`

```typescript
const value: operations.PostCustomMetadataFieldDefinitionsConfigResponse3 = {
  allowsGroupRefs: false,
};
```


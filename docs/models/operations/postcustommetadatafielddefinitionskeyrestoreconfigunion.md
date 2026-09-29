# PostCustomMetadataFieldDefinitionsKeyRestoreConfigUnion

Type-specific configuration. Present only for field types that have any: an object with `options` for single_select and multi_select fields, an object with `used_currencies` for money fields, and an object with `allows_group_refs` for contact_ref and contact_multi_ref fields.



## Supported Types

### `operations.PostCustomMetadataFieldDefinitionsKeyRestoreConfig1`

```typescript
const value: operations.PostCustomMetadataFieldDefinitionsKeyRestoreConfig1 = {
  options: [
    {
      key: "high",
      label: "High",
      position: 0,
    },
  ],
};
```

### `operations.PostCustomMetadataFieldDefinitionsKeyRestoreConfig2`

```typescript
const value: operations.PostCustomMetadataFieldDefinitionsKeyRestoreConfig2 = {
  usedCurrencies: [
    "EUR",
    "USD",
  ],
};
```

### `operations.PostCustomMetadataFieldDefinitionsKeyRestoreConfig3`

```typescript
const value: operations.PostCustomMetadataFieldDefinitionsKeyRestoreConfig3 = {
  allowsGroupRefs: false,
};
```


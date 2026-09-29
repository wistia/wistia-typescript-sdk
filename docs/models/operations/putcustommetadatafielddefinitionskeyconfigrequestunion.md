# PutCustomMetadataFieldDefinitionsKeyConfigRequestUnion

Type-specific configuration changes. Only valid for field types that have any: option add, edit, or remove operations for a single_select or multi_select field, or `allows_group_refs` for a contact_ref or contact_multi_ref field.



## Supported Types

### `operations.PutCustomMetadataFieldDefinitionsKeyConfigRequest1`

```typescript
const value: operations.PutCustomMetadataFieldDefinitionsKeyConfigRequest1 = {
  options: [
    {
      key: "high",
      label: "High",
      position: 0,
      destroy: false,
      force: false,
    },
  ],
};
```

### `operations.PutCustomMetadataFieldDefinitionsKeyConfigRequest2`

```typescript
const value: operations.PutCustomMetadataFieldDefinitionsKeyConfigRequest2 = {
  allowsGroupRefs: false,
};
```


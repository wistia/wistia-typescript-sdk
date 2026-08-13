# GetMediasMediaHashedIdCustomMetadataFieldValuesKeyValueUnion

The resolved, typed value for this field on this media. The type follows `field_type`:
a string for text-like types (text, short_text, url, email, money, time, datetime),
a number for `number`, an ISO 8601 date string for `date`, a boolean for `boolean`,
the selected option's key (a string) for `single_select`, an array of the
selected options' keys for `multi_select`, a contact reference object
`{"type": "contact" | "contact_group", "id": "<hashed_id>"}` for `contact_ref`,
and an array of contact reference objects for `contact_multi_ref`. References to
deleted contacts or contact groups are omitted. Null when unset.



## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `number`

```typescript
const value: number = 1284.03;
```

### `boolean`

```typescript
const value: boolean = true;
```

### `any[]`

```typescript
const value: any[] = [
  "<value 1>",
  "<value 2>",
  "<value 3>",
];
```

### `operations.GetMediasMediaHashedIdCustomMetadataFieldValuesKeyValue`

```typescript
const value:
  operations.GetMediasMediaHashedIdCustomMetadataFieldValuesKeyValue = {};
```


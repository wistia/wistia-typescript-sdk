# ValueRequestUnion

The new value for this field, typed to match the definition's `field_type`:
a string for text-like types (text, short_text, url, email, money, time, datetime),
a number for `number`, an ISO 8601 date string like "2026-07-10" for `date`,
a boolean for `boolean`, the chosen option's key (a string) for `single_select`,
an array of the chosen options' keys for `multi_select`, a contact reference
object `{"type": "contact" | "contact_group", "id": "<hashed_id>"}` for
`contact_ref`, and an array of contact reference objects for `contact_multi_ref`.
Contact group references require the field to allow groups.
Null (or omitting the property) clears the field; for `multi_select` and
`contact_multi_ref`, an empty array also clears it.



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

### `operations.ValueRequest`

```typescript
const value: operations.ValueRequest = {};
```


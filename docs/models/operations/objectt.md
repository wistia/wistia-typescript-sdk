# ObjectT

The wrapped resource, present only when the job type carries typed
poll content. Use `type` to discriminate which shape this is.



## Supported Types

### `operations.ObjectBulkOperation`

```typescript
const value: operations.ObjectBulkOperation = {
  type: "bulk_operation",
  summary: {
    total: 150632,
    succeeded: 386476,
    failed: 532936,
  },
  results: [
    {
      position: 193506,
      status: "succeeded",
    },
  ],
};
```


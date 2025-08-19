# CreateProject

## Example Usage

```typescript
import { CreateProject } from "wistia/models";

let value: CreateProject = {
  name: "My New Project",
  adminEmail: "admin@example.com",
  public: false,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                              | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The name of the project you want to create.                                                                         | My New Project                                                                                                      |
| `adminEmail`                                                                                                        | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The email address of the person you want to set as the owner of this project. Defaults to the Wistia Account Owner. | admin@example.com                                                                                                   |
| `public`                                                                                                            | *models.CreateProjectPublicUnion*                                                                                   | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |
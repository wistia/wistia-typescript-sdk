# UpdateProject

## Example Usage

```typescript
import { UpdateProject } from "wistia/models";

let value: UpdateProject = {
  name: "My New Project Name",
  description: "My New Project Description",
  public: false,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_minus_sign:                                           | The project’s new name.                                      | My New Project Name                                          |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | The project’s new description.                               | My New Project Description                                   |
| `anonymousCanUpload`                                         | *boolean*                                                    | :heavy_minus_sign:                                           | Whether anonymous users can upload media to the project.     |                                                              |
| `anonymousCanDownload`                                       | *boolean*                                                    | :heavy_minus_sign:                                           | Whether anonymous users can download media from the project. |                                                              |
| `public`                                                     | *models.UpdateProjectPublicUnion*                            | :heavy_minus_sign:                                           | N/A                                                          |                                                              |


import { Wistia } from "../src/index.js";

const wistia = new Wistia({
  bearerAuth: "bd37ee8ec671f20f79120f0d786e771fcc09c7c43a93ab1e5e7104bbda359b9d",
  debugLogger: console
});

async function main() {
  const result = await wistia.projects.getProjects();

  console.log(result);
}

main().catch(console.error);

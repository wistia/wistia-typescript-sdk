

import { Wistia } from "../src/index.js";

const wistia = new Wistia({
  bearerAuth: "",
  debugLogger: console
});

async function main() {
  const result = await wistia.projects.getProjects();

  console.log(result);
}

main().catch(console.error);

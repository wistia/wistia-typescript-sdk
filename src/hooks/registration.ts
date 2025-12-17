import { Hooks } from "./types.js";
import { AddVersionHeaderHook } from "./AddVersionHeaderHook.js";

/* This file is safe to edit, it was previously generated but should be safe to edit */

export function initHooks(hooks: Hooks) {
  const addVersionHeaderHook = new AddVersionHeaderHook();
  hooks.registerBeforeRequestHook(addVersionHeaderHook);
}

import { writable, derived } from "svelte/store";
import type { Level } from "../../types";

export const storedFile = writable<Omit<Level, "children"> | null>(null);

export const filePath = derived(
  storedFile,
  ({ path }) => process.env.BASE_URL + "/" + path
);

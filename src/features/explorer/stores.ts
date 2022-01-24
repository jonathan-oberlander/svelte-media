import { writable } from "svelte/store";

export type Level = {
  parent: string;
  path: string;
  name: string;
  type: "file" | "directory";
  children?: Level[];
};

export const treeStore = writable([{ name: "", files: [] }]);

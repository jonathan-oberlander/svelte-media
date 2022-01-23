import { writable } from "svelte/store";

export const store = writable({
  name: "something.gif",
});

export const fileStore = writable({} as FileList);

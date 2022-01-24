import { writable } from "svelte/store";
import type { Level } from "../explorer/stores";

export const storedFile = writable<Omit<Level, "children"> | null>(null);

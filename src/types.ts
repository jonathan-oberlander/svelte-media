export type Level = {
  parent: string;
  path: string;
  name: string;
  type: "file" | "directory";
  children?: Level[];
};

const arr = [
  "root/.DS_Store",
  "root/the-simpsons-mr-burns.gif",
  "root/pdfs/.DS_Store",
  "root/pdfs/3BandRat.pdf",
  "root/pdfs/Ampegulator.pdf",
  "root/pdfs/MorningWood.pdf",
  "root/pdfs/186282Mps.pdf",
  "root/pdfs/AngryAndy.pdf",
];

type Level = { name: string; files: Level[] };

export const treeify = (arr: string[]) =>
  arr.reduce((prev, cur) => {
    cur.split("/").reduce((acc, name) => {
      let temp = acc.find((o) => o.name === name);

      if (!temp) {
        temp = { name, files: [] };
        if (name[0] !== ".") {
          acc.push(temp);
        }
      }

      return temp.files;
    }, prev);

    return prev;
  }, [] as Level[]);

export const foo = treeify(arr);

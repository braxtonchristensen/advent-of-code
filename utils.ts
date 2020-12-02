import { promises as fs } from "fs";

export const fileToInput = async () => {
  if (process.argv.length < 3) {
    console.log("Usage: node " + process.argv[1] + " FILENAME");
    process.exit(1);
  }

  const filename = process.argv[2];
  const data = await fs.readFile(filename, "utf8");
  return data.split("\n");
};

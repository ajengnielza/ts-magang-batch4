import * as fs from "fs";
import * as path from "path";

export function tulisFile(
  namaFile: string,
  isi: string
): void {
  const filePath = path.join(__dirname, namaFile);

  fs.writeFileSync(filePath, isi, "utf-8");
}

export function bacaFile(
  namaFile: string
): string {
  const filePath = path.join(__dirname, namaFile);

  return fs.readFileSync(filePath, "utf-8");
}
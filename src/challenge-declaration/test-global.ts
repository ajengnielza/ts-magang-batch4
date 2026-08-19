const pesertaId: ID = "P001";

const waktu: Timestamp = "2026-08-19";

const config: AppConfig = {
  appName: "SiTrack",
  version: "1.0.0",
  maxPeserta: 100
};

console.log(pesertaId);
console.log(waktu);
console.log(config);

import {
  tulisFile,
  bacaFile
} from "./utils/FileHelper";

tulisFile(
  "data-test.txt",
  "Saya sedang belajar Declaration File dan @types"
);

const hasil = bacaFile("data-test.txt");

console.log(hasil);
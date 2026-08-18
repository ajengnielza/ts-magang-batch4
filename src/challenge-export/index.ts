import {Peserta, JurnalHarian} from "./models";
import { formatTanggal, isEmailValid } from "./utils";
import {StatusPeserta} from "./types";

const peserta1 = new Peserta(
    "Ajeng",
    "SMKN 6 Malang"
);

const peserta2 = new Peserta(
    "saida",
    "SMKN 6 Malang"
);

console.log(peserta1.info());
console.log(peserta2.info());

const jurnal = new JurnalHarian(
  formatTanggal(new Date()),
  "Mempelajari export dan import TypeScript"
);

console.log(jurnal.tampilkan());

const status: StatusPeserta = "aktif";

console.log("Status:", status);
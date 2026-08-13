"use strict";
// SOAL 1 — Mapped type dasar
Object.defineProperty(exports, "__esModule", { value: true });
const jurnal = {
    kegiatan: "Belajar Mapped Type",
    tanggal: "13-08-2026"
};
console.log("Soal 1:", jurnal);
const peserta = {
    nama: null,
    fase: 1
};
console.log("Soal 2:", peserta);
const pesertaSetter = {
    setNama: (value) => {
        console.log("Nama diubah menjadi:", value);
    },
    setFase: (value) => {
        console.log("Fase diubah menjadi:", value);
    }
};
pesertaSetter.setNama("Budi");
pesertaSetter.setFase(2);
const hasilTipe = {
    number: "angka",
    string: "teks",
    boolean: "boolean",
    array: "lainnya"
};
console.log("Soal 4:", hasilTipe);
const hasilUnwrap = {
    promiseString: "Belajar TypeScript",
    promiseNumber: 100,
    bukanPromise: 200
};
console.log("Soal 5:", hasilUnwrap);
//# sourceMappingURL=mapped-conditional.js.map
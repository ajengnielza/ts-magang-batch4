"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validasi_1 = require("./utils/validasi");
const peserta1 = {
    nama: "Ajeng",
    sekolah: "SMKN 6 Malang",
    nilai: 90,
};
const peserta2 = {
    nama: "Al",
    sekolah: "SMKN 6 Malang",
    nilai: 75
};
const peserta3 = {
    nama: "Saida",
    sekolah: "SMKN 6 Malang",
    nilai: 110
};
const daftarPeserta = [peserta1, peserta2, peserta3];
for (const peserta of daftarPeserta) {
    console.log("Nama :", peserta.nama);
    console.log("Sekolah :", peserta.sekolah);
    console.log("Nama valid :", (0, validasi_1.isNamaValid)(peserta.nama));
    console.log("Nilai valid :", (0, validasi_1.isNilaiValid)(peserta.nilai));
    console.log("----------------------");
}
//Generic function
function getLast(arr) {
    return arr[arr.length - 1];
}
console.log("\n Get Last ");
console.log(getLast(["ajeng", "saida", "lala"]));
console.log(getLast([1, 2, 3, 4, 5]));
const responSatu = {
    success: true,
    data: peserta1,
    message: "Berhasil mengambil daftar peserta"
};
const responList = {
    success: true,
    data: [peserta1, peserta2, peserta3],
    message: "Berhasil mengambil daftar peserta"
};
console.log(responSatu);
console.log(responList);
//# sourceMappingURL=index.js.map
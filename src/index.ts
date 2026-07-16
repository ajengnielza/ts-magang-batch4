
import { Peserta } from "./types/peserta";
import { isNamaValid, isNilaiValid } from "./utils/validasi";

const peserta1: Peserta = {
    nama: "Ajeng",
    sekolah: "SMKN 6 Malang",
    nilai: 90,
};

const peserta2: Peserta = {
    nama: "Al",
    sekolah: "SMKN 6 Malang",
    nilai: 75
};

const peserta3: Peserta = {
    nama: "Saida",
    sekolah: "SMKN 6 Malang",
    nilai: 110
};

const daftarPeserta = [peserta1, peserta2, peserta3];

for (const peserta of daftarPeserta) {
    console.log("Nama :", peserta.nama);
    console.log("Sekolah :", peserta.sekolah);
    console.log("Nama valid :", isNamaValid(peserta.nama));
    console.log("Nilai valid :", isNilaiValid(peserta.nilai));
    console.log("----------------------");
}

function getLast<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

console.log("\n Get Last ");
console.log(getLast(["ajeng","saida","lala"]));
console.log(getLast([1,2,3,4,5]));

interface Respon<T> {
        success: boolean;
        data: T;
        message: string;
        
}

const responSatu: Respon<Peserta> = {
    success: true,
    data: peserta1,
    message: "Berhasil mengambil daftar peserta"
};

const responList: Respon<Peserta[]> = {
    success: true,
    data: [peserta1, peserta2, peserta3],
    message: "Berhasil mengambil daftar peserta"
};

console.log(responSatu);
console.log(responList);
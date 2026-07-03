"use strict";
// SOAL 1
Object.defineProperty(exports, "__esModule", { value: true });
let nama = "Ajeng Nielza Itsna Mufida";
let kelas = "XIII SIJA 1";
let nilaiTS = 60.5;
let nilaiJS = 55;
//menghitung rata-rata nilai
let rataRata = (nilaiTS + nilaiJS) / 2;
let lulus = rataRata >= 75;
console.log("===== Data Raport Siswa =====");
console.log("Nama               :", nama);
console.log("Kelas              :", kelas);
console.log("Nilai Ts           :", nilaiTS);
console.log("Nilai Js           :", nilaiJS);
console.log("Rata-rata Nilai    :", rataRata);
console.log("Status Kelulusan   :", lulus ? "Lulus" : "Tidak Lulus");
// SOAL 2
var Prioritas;
(function (Prioritas) {
    Prioritas[Prioritas["Rendah"] = 0] = "Rendah";
    Prioritas[Prioritas["Sedang"] = 1] = "Sedang";
    Prioritas[Prioritas["Tinggi"] = 2] = "Tinggi";
})(Prioritas || (Prioritas = {}));
// Membuat array of tuple
let daftarTugas = [
    ["Membuat Repository", Prioritas.Sedang],
    ["Mempelajari Basic Typescript", Prioritas.Rendah],
    ["Mengerjakan Latihan Soal", Prioritas.Tinggi]
];
console.log("===== DAFTAR TUGAS =====");
for (let tugas of daftarTugas) {
    console.log("Tugas :", tugas[0], "| Prioritas :", Prioritas[tugas[1]]);
}
// SOAL 3 
function hitungDiskon(harga, diskon) {
    let persenDiskon = 0;
    // Jika diskon berupa angka
    if (typeof diskon === "number") {
        persenDiskon = diskon;
    }
    // Jika diskon berupa kode kupon
    else if (diskon === "MAGANG10") {
        persenDiskon = 10;
    }
    else if (diskon === "NAWASENA20") {
        persenDiskon = 20;
    }
    else {
        persenDiskon = 0;
    }
    const potongan = (harga * persenDiskon) / 100;
    const hargaAkhir = harga - potongan;
    // Menampilkan hasil
    console.log("Harga Awal      : Rp", harga);
    console.log("Diskon          :", persenDiskon + "%");
    console.log("Potongan Harga  : Rp", potongan);
    console.log("Harga Akhir     : Rp", hargaAkhir);
    console.log("-----------------------------");
    return hargaAkhir;
}
// Contoh penggunaan
hitungDiskon(100000, 10);
hitungDiskon(500000, "MAGANG10");
hitungDiskon(300000, "NAWASENA20");
hitungDiskon(800000, "KODESALAH");
//# sourceMappingURL=latihan-jumat.js.map
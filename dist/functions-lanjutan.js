"use strict";
// =========================================
// FUNCTIONS LANJUTAN
// =========================================
Object.defineProperty(exports, "__esModule", { value: true });
const daftarPeserta = [
    { id: 1, nama: "Ajeng", nilai: 90 },
    { id: 2, nama: "Lili", nilai: 75 },
    { id: 3, nama: "Saidatul", nilai: 85 },
    { id: 4, nama: "Dedi", nilai: 70 },
];
function cariPeserta(data) {
    if (typeof data === "number") {
        return daftarPeserta.find((peserta) => peserta.id === data);
    }
    return daftarPeserta.find((peserta) => peserta.nama === data);
}
console.log("===== SOAL 1 =====");
console.log("Cari berdasarkan ID:");
console.log(cariPeserta(2));
console.log("\nCari berdasarkan Nama:");
console.log(cariPeserta("Ajeng"));
// Rest Parameter
function hitungRataRata(...nilai) {
    const total = nilai.reduce((jumlah, n) => jumlah + n, 0);
    return total / nilai.length;
}
console.log("\n===== SOAL 2 =====");
console.log("Rata-rata:", hitungRataRata(80, 90, 100));
console.log("Rata-rata:", hitungRataRata(70, 75, 80, 85));
// Callback Function
function urutkanPeserta(peserta, comparator) {
    return [...peserta].sort(comparator);
}
console.log("\n===== SOAL 3 =====");
console.log("Urut Nilai Ascending");
console.log(urutkanPeserta(daftarPeserta, (a, b) => a.nilai - b.nilai));
console.log("\nUrut Nilai Descending");
console.log(urutkanPeserta(daftarPeserta, (a, b) => b.nilai - a.nilai));
// Higher-Order Function
function buatFilterNilai(minimal) {
    return (peserta) => peserta.nilai >= minimal;
}
const filter80 = buatFilterNilai(80);
const hasilFilter = daftarPeserta.filter(filter80);
console.log("\n===== SOAL 4 =====");
console.log("Peserta dengan nilai >= 80");
console.log(hasilFilter);
//# sourceMappingURL=functions-lanjutan.js.map
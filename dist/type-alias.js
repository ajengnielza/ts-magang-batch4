"use strict";
//Soal 1
Object.defineProperty(exports, "__esModule", { value: true });
const penilaianAjeng = {
    kehadiran: 10,
    materi: 9,
    kode: 8,
    problemSolving: 9,
    komunikasi: 10,
};
const faseAjeng = "fase 2";
const penilaianAzalyn = {
    kehadiran: 8,
    materi: 7,
    kode: 6,
    problemSolving: 7,
    komunikasi: 8,
};
const faseAzalyn = "fase 5";
console.log("\n=== HASIL PENILAIAN ===");
console.log("FaseAjeng:", faseAjeng);
console.log("Hasil Penilaian:", penilaianAjeng);
console.log("Fase:", faseAzalyn);
console.log("Hasil Penilaian:", penilaianAzalyn);
const jurnal1 = {
    tanggal: "07-07-2026",
    checkIn: "08:00",
    checkOut: "17:00",
    kegiatan: "Belajar Type Alias dan Interface",
    hambatan: "Masih memahami perbedaan interface dan type",
    rencanaBesok: "Mengerjakan challenge berikutnya",
    linkCommit: "https://github.com/username/challenge1",
};
const jurnal2 = {
    tanggal: "08-07-2026",
    checkIn: "08:05",
    checkOut: "17:00",
    kegiatan: "Belajar Extend Interface",
    hambatan: "Belum ada hambatan",
    rencanaBesok: "Belajar Generic",
};
console.log("\n=== JURNAL HARIAN ===");
console.log("\nJurnal 1");
console.log(jurnal1);
console.log("\nJurnal 2");
console.log(jurnal2);
const pesertaList = [
    {
        id: 1,
        nama: "Ajeng",
        kelas: "13 Sija 1",
        status: "aktif",
    },
    {
        id: 2,
        nama: "Kiki",
        kelas: "13 SIJA 1",
        status: "lulus",
    },
    {
        id: 3,
        nama: "Andi",
        kelas: "13 SIJA 2",
        status: "berhenti",
    },
    {
        id: 4,
        nama: "Saida",
        kelas: "13 SIJA 2",
        status: "aktif",
    },
];
//filter peserta
function filterPeserta(list, status) {
    return list.filter((peserta) => peserta.status === status);
}
console.log("\n=== STATUS PESERTA ===");
console.log("Peserta Aktif:");
console.log(filterPeserta(pesertaList, "aktif"));
console.log("\nPeserta Lulus:");
console.log(filterPeserta(pesertaList, "lulus"));
console.log("\nPeserta Berhenti:");
console.log(filterPeserta(pesertaList, "berhenti"));
//# sourceMappingURL=type-alias.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateJurnal(id, data) {
    console.log(`Update jurnal ${id}:`, data);
}
updateJurnal(1, {
    kegiatan: "Belajar TypeScript",
    statusReview: "sudah",
});
console.log("Jurnal berhasil diperbarui.");
function buatJurnal(data) {
    const jurnal = {
        ...data,
        id: Math.floor(Math.random() * 1000),
        statusReview: "belum"
    };
    return jurnal;
}
// Membuat jurnal baru
const jurnalBaru = buatJurnal({
    pesertaId: 1,
    tanggal: "2026-08-12",
    kegiatan: "Belajar Utility Types",
    hambatan: "Masih perlu memahami Record",
    rencanaBesok: "Belajar Generic Repository",
    linkCommit: "https://github.com/ajeng/commit/123"
});
console.log("Jurnal baru berhasil dibuat:", jurnalBaru);
function getRingkasan(jurnal) {
    return {
        id: jurnal.id,
        tanggal: jurnal.tanggal,
        kegiatan: jurnal.kegiatan
    };
}
const ringkasan = getRingkasan(jurnalBaru);
console.log("Ringkasan jurnal:", ringkasan);
const durasiFase = {
    fase1: 2,
    fase2: 4,
    fase3: 6,
    fase4: 9,
    fase5: 11
};
const namaFase = {
    fase1: "Fase 1 - Pengenalan",
    fase2: "Fase 2 - Dasar-dasar",
    fase3: "Fase 3 - Lanjutan",
    fase4: "Fase 4 - Proyek",
    fase5: "Fase 5 - Penyelesaian"
};
console.log("Fase 1:");
console.log("Nama:", namaFase.fase1);
console.log("Durasi:", durasiFase.fase1, "minggu");
console.log("\nFase 2:");
console.log("Nama:", namaFase.fase2);
console.log("Durasi:", durasiFase.fase2, "minggu");
console.log("\nFase 3:");
console.log("Nama:", namaFase.fase3);
console.log("Durasi:", durasiFase.fase3, "minggu");
console.log("\nFase 4:");
console.log("Nama:", namaFase.fase4);
console.log("Durasi:", durasiFase.fase4, "minggu");
console.log("\nFase 5:");
console.log("Nama:", namaFase.fase5);
console.log("Durasi:", durasiFase.fase5, "minggu");
const updateAman1 = {
    kegiatan: "Mempelajari Partial dan Omit"
};
// Hanya mengubah status review
const updateAman2 = {
    rencanaBesok: "tidak ada"
};
console.log("Update aman 1:", updateAman1);
console.log("Update aman 2:", updateAman2);
//# sourceMappingURL=utility-types.js.map
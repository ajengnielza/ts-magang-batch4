"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const namaSaya = "Ajeng Nielza itsna Mufida";
const asalSekolah = "SMKN 06 MALANG";
const kota = "Malang";
const sudahBelajarJavaScript = true;
const targetSelesaiMagang = 2026; // tahun targe
// Buat fungsi perkenalan
function perkenalan(nama, sekolah, sudahJS) {
    const statusJS = sudahJS ? "sudah" : "belum";
    return `Nama saya ${nama} dari ${sekolah}. Saya ${statusJS} belajar JavaScript sebelumnya.`;
}
console.log(perkenalan(namaSaya, asalSekolah, sudahBelajarJavaScript));
//# sourceMappingURL=perkenalan.js.map
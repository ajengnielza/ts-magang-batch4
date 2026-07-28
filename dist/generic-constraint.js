"use strict";
// Generic Constraint
Object.defineProperty(exports, "__esModule", { value: true });
function hitungTotal(items) {
    return items.reduce((total, item) => total + item.harga, 0);
}
const daftarKue = [
    { nama: "Donat", harga: 5000 },
    { nama: "Brownies", harga: 25000 },
    { nama: "Croissant", harga: 18000 },
];
console.log("Total Harga:", hitungTotal(daftarKue));
function urutkanBerdasarkanTanggal(items) {
    return [...items].sort((a, b) => new Date(a.tanggal).getTime() -
        new Date(b.tanggal).getTime());
}
const jurnal = [
    {
        kegiatan: "Belajar Generic",
        tanggal: "2026-07-30",
    },
    {
        kegiatan: "Belajar OOP",
        tanggal: "2026-07-28",
    },
    {
        kegiatan: "Belajar Interface",
        tanggal: "2026-07-29",
    },
];
console.log("Urutan Tanggal:");
console.log(urutkanBerdasarkanTanggal(jurnal));
// keyof Constraint
function updateProperty(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}
const peserta = {
    nama: "Ajeng",
    umur: 18,
    sekolah: "SMKN 6 Malang",
};
const pesertaBaru = updateProperty(peserta, "umur", 19);
console.log("Data Lama:");
console.log(peserta);
console.log("Data Baru:");
console.log(pesertaBaru);
function prosesJikaValid(item, aksi) {
    if (item.verifikasi()) {
        aksi(item);
    }
    else {
        console.log("Data tidak lolos verifikasi.");
    }
}
class SprintTask {
    constructor(judul, selesai) {
        this.judul = judul;
        this.selesai = selesai;
    }
    verifikasi() {
        return this.selesai;
    }
}
const tugas1 = new SprintTask("Mengerjakan Generic Constraint", true);
const tugas2 = new SprintTask("Belajar keyof", false);
prosesJikaValid(tugas1, (task) => {
    console.log(`${task.judul} berhasil diproses.`);
});
prosesJikaValid(tugas2, (task) => {
    console.log(`${task.judul} berhasil diproses.`);
});
//# sourceMappingURL=generic-constraint.js.map
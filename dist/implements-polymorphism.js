"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TugasHarian {
    constructor(nilai, laporan) {
        this.nilai = nilai;
        this.laporan = laporan;
    }
    hitungNilai() {
        return this.nilai;
    }
    buatLaporan() {
        return this.laporan;
    }
}
const ajeng = new TugasHarian(100, "Laporan Kue");
console.log("Nilai :", ajeng.hitungNilai());
console.log("Laporan :", ajeng.buatLaporan());
class NotifikasiDasar {
    constructor(pesan) {
        this.pesan = pesan;
    }
}
class NotifikasiUrgent extends NotifikasiDasar {
    kirim() {
        return ` Notifikasi Urgent: ${this.pesan}`;
    }
    isValid() {
        return this.pesan.length > 0;
    }
}
class NotifikasiBiasa extends NotifikasiDasar {
    kirim() {
        return ` Notifikasi Biasa: ${this.pesan}`;
    }
    isValid() {
        return this.pesan.length > 0;
    }
}
const urgent = new NotifikasiUrgent("Server mengalami gangguan");
console.log(urgent.kirim());
console.log("Valid :", urgent.isValid());
class Laporan {
    constructor(judul) {
        this.judul = judul;
    }
}
class LaporanHarian extends Laporan {
    generate() {
        return ` Laporan Harian : ${this.judul}`;
    }
}
class LaporanMingguan extends Laporan {
    generate() {
        return `Laporan Mingguan : ${this.judul}`;
    }
}
class LaporanBulanan extends Laporan {
    generate() {
        return `📆 Laporan Bulanan : ${this.judul}`;
    }
}
const daftarLaporan = [
    new LaporanHarian("Aktivitas Hari Senin"),
    new LaporanMingguan("Progress Minggu Ke-2"),
    new LaporanBulanan("Rekap Bulan Juli")
];
for (const laporan of daftarLaporan) {
    console.log(laporan.generate());
}
//# sourceMappingURL=implements-polymorphism.js.map
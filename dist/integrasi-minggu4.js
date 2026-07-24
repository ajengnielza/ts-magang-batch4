"use strict";
// STUDI KASUS: Sistem Penilaian Peserta Magang (versi OOP lengkap)
Object.defineProperty(exports, "__esModule", { value: true });
class PesertaDasar {
    constructor(nama, sekolah) {
        this.nama = nama;
        this.sekolah = sekolah;
        this._nilaiList = [];
        PesertaDasar.totalPeserta++;
        this.id = PesertaDasar.totalPeserta;
    }
    static getTotalPeserta() {
        return PesertaDasar.totalPeserta;
    }
    tambahNilai(nilai) {
        if (nilai < 0 || nilai > 100) {
            console.log(`Nilai harus antara 0-100 - ${this.nama}`);
            return;
        }
        this._nilaiList.push(nilai);
    }
    get rataRata() {
        if (this._nilaiList.length === 0)
            return 0;
        return this._nilaiList.reduce((a, b) => a + b, 0) / this._nilaiList.length;
    }
    getGrade() {
        const nilai = this.hitungNilaiAkhir();
        if (nilai >= 90)
            return "A";
        if (nilai >= 75)
            return "B";
        if (nilai >= 60)
            return "C";
        return "D";
    }
}
PesertaDasar.totalPeserta = 0;
class PesertaSMK5 extends PesertaDasar {
    hitungNilaiAkhir() {
        return this.rataRata; // sederhana, langsung rata-rata
    }
    getFaseMaksimal() {
        return 3;
    }
}
class PesertaSMK6 extends PesertaDasar {
    constructor(nama, sekolah) {
        super(nama, sekolah);
        this.bobotProject = 0.3;
    }
    hitungNilaiAkhir() {
        // Bobot lebih kompleks: rata-rata + bonus dari project
        return this.rataRata * (1 - this.bobotProject) + (this.rataRata * this.bobotProject * 1.1);
    }
    getFaseMaksimal() {
        return 5;
    }
}
// Implementasi
const peserta = [
    new PesertaSMK5("Linda", "SMK 5 Malang"),
    new PesertaSMK5("Ajeng", "SMK 6 Malang"),
    new PesertaSMK6("Saidatul", "SMK 6 Malang"),
    new PesertaSMK5("Zidan", "SMK 5 MALANG"),
];
peserta[0].tambahNilai(120);
peserta[0].tambahNilai(88);
peserta[1].tambahNilai(92);
peserta[1].tambahNilai(95);
peserta[2].tambahNilai(80);
peserta[2].tambahNilai(85);
peserta[3].tambahNilai(70);
peserta[3].tambahNilai(75);
peserta.forEach((p) => {
    console.log(`${p.nama} (${p.sekolah}) - Grade: ${p.getGrade()} - Nilai: ${p.hitungNilaiAkhir().toFixed(2)} - Rata - rata: ${p.rataRata}`);
});
console.log(`Total peserta terdaftar: ${PesertaDasar.getTotalPeserta()}`);
//# sourceMappingURL=integrasi-minggu4.js.map
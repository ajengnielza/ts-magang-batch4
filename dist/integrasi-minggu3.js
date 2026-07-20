"use strict";
// STUDI KASUS: Sistem Pengelolaan Peserta Magang
Object.defineProperty(exports, "__esModule", { value: true });
class Pengguna {
    constructor(nama, email, createdAt = new Date().toISOString()) {
        this.nama = nama;
        this.email = email;
        this.createdAt = createdAt;
    }
    info() {
        return `${this.nama} (${this.email})`;
    }
}
class PesertaMagang extends Pengguna {
    constructor(nama, email, sekolah, fase = 1) {
        super(nama, email);
        this.sekolah = sekolah;
        this.fase = fase;
        this.nilaiList = [];
    }
    tambahNilai(nilai) {
        this.nilaiList.push(nilai);
    }
    getRataRata() {
        if (this.nilaiList.length === 0)
            return 0;
        return this.nilaiList.reduce((a, b) => a + b, 0) / this.nilaiList.length;
    }
    info() {
        return `${super.info()} - ${this.sekolah}, Fase ${this.fase},`;
    }
}
function buatResponse(data, message = "OK") {
    return {
        success: true,
        data,
        message,
    };
}
function urutkanBerdasarkanNilai(peserta, urutan = "desc") {
    return [...peserta].sort((a, b) => {
        const diff = a.getRataRata() - b.getRataRata();
        return urutan === "asc" ? diff : -diff;
    });
}
const budi = new PesertaMagang("Budi", "budi@email.com", "SMK 5 Malang", 1);
budi.tambahNilai(85);
budi.tambahNilai(90);
const ajeng = new PesertaMagang("Ajeng", "ajeng@email.com", "SMK 5 Malang", 1);
ajeng.tambahNilai(92);
ajeng.tambahNilai(95);
const saida = new PesertaMagang("Saida", "saida@email.com", "smk 6 malang", 1);
saida.tambahNilai(60);
saida.tambahNilai(98);
const semuaPeserta = [budi, ajeng, saida];
const terurut = urutkanBerdasarkanNilai(semuaPeserta, "desc");
terurut.forEach((p) => {
    console.log(`${p.info()} - Rata-rata: ${p.getRataRata()}`);
});
const response = buatResponse(terurut, "Data peserta berhasil dimuat");
console.log(response);
//# sourceMappingURL=integrasi-minggu3.js.map
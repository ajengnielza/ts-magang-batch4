"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//class dasar dan constructor shorthand - Soal 1
class Mentor {
    constructor(nama, keahlian) {
        this.nama = nama;
        this.keahlian = keahlian;
    }
    tambahKeahlian(skill) {
        this.keahlian.push(skill);
    }
    getInfo() {
        return `${this.nama} - keahlian: ${this.keahlian.join(", ")}`;
    }
}
const mentor1 = new Mentor("Pak Fajar", ["TypeScript", "Laravel"]);
mentor1.tambahKeahlian("Git");
console.log(mentor1.getInfo());
//Access modifier - Soal 2
class Nilai {
    constructor() {
        this.list = [];
    }
    tambah(n) {
        this.list.push(n);
    }
    rataRata() {
        if (this.list.length === 0) {
            return 0;
        }
        const total = this.list.reduce((sum, nilai) => sum + nilai, 0);
        return total / this.list.length;
    }
    tertinggi() {
        if (this.list.length === 0) {
            return 0;
        }
        return Math.max(...this.list);
    }
}
const nilai = new Nilai();
nilai.tambah(80);
nilai.tambah(90);
nilai.tambah(85);
console.log(nilai.rataRata());
console.log(nilai.tertinggi());
//Inheritance - Soal 3
class Kegiatan {
    constructor(nama, tanggal) {
        this.nama = nama;
        this.tanggal = tanggal;
    }
    deskripsi() {
        return `${this.nama} pada tanggal ${this.tanggal}`;
    }
}
class JurnalHarian extends Kegiatan {
    constructor(nama, tanggal, hambatan) {
        super(nama, tanggal);
        this.hambatan = hambatan;
    }
    deskripsi() {
        return `${this.nama} pada tanggal ${this.tanggal}. Hambatan: ${this.hambatan}`;
    }
}
class SprintTask extends Kegiatan {
    constructor(nama, tanggal, prioritas) {
        super(nama, tanggal);
        this.prioritas = prioritas;
    }
    deskripsi() {
        return `${this.nama} pada tanggal ${this.tanggal}. Prioritas: ${this.prioritas}`;
    }
}
const kegiatan = new Kegiatan("Belajar TypeScript", "16 Juli 2026");
const jurnal = new JurnalHarian("Belajar TypeScript", "16 Juli 2026", "Masih bingung class");
const task = new SprintTask("Mengerjakan Challenge", "16 Juli 2026", "high");
console.log(kegiatan.deskripsi());
console.log(jurnal.deskripsi());
console.log(task.deskripsi());
//# sourceMappingURL=classes-inheritance.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// generic fucntion
function getLast(arr) {
    return arr[arr.length - 1];
}
const angka = getLast([10, 20, 30]);
console.log(angka);
const nama = getLast(["Ajeng", "Saida", "Sinta"]);
console.log(nama);
const kosong = getLast([]);
console.log(kosong);
//generic function (dua parameter)
function gabungkan(a, b) {
    return {
        ...a,
        ...b
    };
}
const peserta = gabungkan({ umur: 16 }, { nama: "vivi" });
console.log(peserta);
const wadahAngka = {
    nilai: 100,
    label: "Nilai Ujian"
};
const wadahString = {
    nilai: "Halo TypeScript",
    label: "Nilai "
};
const wadahPeserta = {
    nilai: {
        nama: "Ajeng",
        sekolah: "SMKN 6 Malang"
    },
    label: "Data Peserta"
};
console.log(wadahAngka);
console.log(wadahString);
console.log(wadahPeserta);
//generic class
class Riwayat {
    constructor() {
        this.data = [];
    }
    tambah(item) {
        this.data.push(item);
    }
    getSemua() {
        return this.data;
    }
    getTerakhir() {
        return this.data[this.data.length - 1];
    }
    get jumlah() {
        return this.data.length;
    }
}
const logAktivitas = new Riwayat();
logAktivitas.tambah("Login");
logAktivitas.tambah("Belajar Generic");
logAktivitas.tambah("Logout");
console.log(logAktivitas.getSemua());
console.log(logAktivitas.getTerakhir());
console.log(logAktivitas.jumlah);
//# sourceMappingURL=generics-dasar.js.map
"use strict";
// Multiple Type Parameter
Object.defineProperty(exports, "__esModule", { value: true });
function konversiData(data, transform) {
    return data.map(transform);
}
const angka = [1, 2, 3, 4];
const hasil = konversiData(angka, (item) => `Angka ${item}`);
console.log("Hasil Konversi:", hasil);
// Multiple Type Parameter
class PasanganKunci {
    constructor() {
        this.items = [];
    }
    tambah(kunci, nilai) {
        this.items.push({ kunci, nilai });
    }
    cari(kunci) {
        const item = this.items.find((i) => i.kunci === kunci);
        return item?.nilai;
    }
    getSemuaKunci() {
        return this.items.map((i) => i.kunci);
    }
}
const data = new PasanganKunci();
data.tambah("Ajeng", 95);
data.tambah("Jenasi", 88);
data.tambah("Saida", 90);
console.log("Nilai Ajeng:", data.cari("Ajeng"));
console.log("Semua Kunci:", data.getSemuaKunci());
// Menggunakan default
const respon1 = {
    status: 200,
    result: {
        message: "Berhasil"
    }
};
// Menggunakan generic custom
const respon2 = {
    status: 200,
    result: [
        {
            id: 1,
            nama: "Ajeng",
            sekolah: "SMKN 6 Malang"
        },
        {
            id: 2,
            nama: "Jenasi",
            sekolah: "SMKN 6 Malang"
        },
        {
            id: 3,
            nama: "Saida",
            sekolah: "SMKN 6 Malang"
        }
    ]
};
console.log("Response Default:", respon1);
console.log("Response Custom:", respon2);
// Menggunakan default
const daftar1 = {
    total: 2,
    items: [
        {
            id: 1,
            nama: "Ajeng"
        },
        {
            id: 2,
            nama: "Jenasi"
        }
    ]
};
// Menggunakan generic custom
const daftar2 = {
    total: 3,
    items: [
        {
            id: 1,
            nama: "Ajeng",
            sekolah: "SMKN 6 Malang"
        },
        {
            id: 2,
            nama: "Jenasi",
            sekolah: "SMKN 6 Malang"
        },
        {
            id: 3,
            nama: "Saida",
            sekolah: "SMKN 6 Malang"
        }
    ]
};
console.log("List Default:", daftar1);
console.log("List Custom:", daftar2);
//# sourceMappingURL=multiple-default-params.js.map
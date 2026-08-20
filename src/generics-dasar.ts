
// generic fucntion
function getLast<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}

const angka = getLast([10, 20, 30]);
console.log(angka);

const nama = getLast(["Ajeng", "Saida", "Sinta"]);
console.log(nama);

const kosong = getLast([]);
console.log(kosong);

//generic function (dua parameter)
function gabungkan<T, U>(a: T, b: U): T & U {
    return{
        ...a,
        ...b
    };
}

const peserta = gabungkan(
    {umur: 16},
    {nama: "vivi"}
);
console.log(peserta)

//generic interface
interface Wadah<T> {
    nilai: T;
    label: string;
}

interface Peserta {
    nama: string;
    sekolah: string;
}

const wadahAngka: Wadah<number> = {
    nilai: 100,
    label: "Nilai Ujian"
};

const wadahString: Wadah<string> = {
    nilai: "Halo TypeScript",
    label: "Nilai "
};

const wadahPeserta: Wadah<Peserta> = {
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
class Riwayat<T> {
    private data: T[] = [];

    tambah(item: T): void {
        this.data.push(item);
    }

    getSemua(): T[] {
        return this.data;
    }

    getTerakhir(): T | undefined {
        return this.data[this.data.length - 1];
    }

    get jumlah(): number {
        return this.data.length;
    }
}

const logAktivitas = new Riwayat<string>();

logAktivitas.tambah("Login");
logAktivitas.tambah("Belajar Generic");
logAktivitas.tambah("Logout");

console.log(logAktivitas.getSemua());
console.log(logAktivitas.getTerakhir());
console.log(logAktivitas.jumlah);

console.log("...");

export {};
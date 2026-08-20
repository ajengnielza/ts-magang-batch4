// Multiple Type Parameter

function konversiData<T, U>(
  data: T[],
  transform: (item: T) => U
    ): U[] {
        return data.map(transform);
    }

const angka = [1, 2, 3, 4];

const hasil = konversiData(angka, (item) => `Angka ${item}`);

console.log("Hasil Konversi:", hasil);


// Multiple Type Parameter

class PasanganKunci<K, V> {
  private items: Array<{ kunci: K; nilai: V }> = [];

  tambah(kunci: K, nilai: V): void {
    this.items.push({ kunci, nilai });
  }

  cari(kunci: K): V | undefined {
    const item = this.items.find((i) => i.kunci === kunci);
    return item?.nilai;
  }

  getSemuaKunci(): K[] {
    return this.items.map((i) => i.kunci);
  }
}

const data = new PasanganKunci<string, number>();

data.tambah("Ajeng", 95);
data.tambah("Jenasi", 88);
data.tambah("Saida", 90);

console.log("Nilai Ajeng:", data.cari("Ajeng"));
console.log("Semua Kunci:", data.getSemuaKunci());


// Default Type Parameter


interface ApiResult<T = { message: string }> {
  status: number;
  result: T;
}

interface Peserta {
    id: number;
    nama: string;
    sekolah: string;
}

// Menggunakan default
const respon1: ApiResult = {
  status: 200,
  result: {
    message: "Berhasil"
  }
};

// Menggunakan generic custom
const respon2: ApiResult<Peserta[]> = {
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

//  Kombinasi Constraint + Default

interface ListResponse<
  T extends { id: number } = { id: number; nama: string }
> {
  items: T[];
  total: number;
}

// Menggunakan default
const daftar1: ListResponse = {
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
const daftar2: ListResponse<Peserta> = {
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

console.log("...");

export {};
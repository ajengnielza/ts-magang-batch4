// SOAL 1

let nama: string = "Ajeng Nielza Itsna Mufida";
let kelas: string = "XIII SIJA 1";
let nilaiTS: number = 60.5;
let nilaiJS: number = 55;

//menghitung rata-rata nilai
let rataRata: number = (nilaiTS + nilaiJS) / 2;
let lulus: boolean = rataRata >= 75;

console.log("===== Data Raport Siswa =====");
console.log("Nama               :", nama);
console.log("Kelas              :", kelas);
console.log("Nilai Ts           :", nilaiTS);
console.log("Nilai Js           :", nilaiJS);
console.log("Rata-rata Nilai    :", rataRata);
console.log("Status Kelulusan   :", lulus ? "Lulus" : "Tidak Lulus");

// SOAL 2

enum Prioritas {
    Rendah,
    Sedang,
    Tinggi
}

// Membuat array of tuple
let daftarTugas: [string, Prioritas][] = [
    ["Membuat Repository", Prioritas.Sedang],
    ["Mempelajari Basic Typescript", Prioritas.Rendah],
    ["Mengerjakan Latihan Soal", Prioritas.Tinggi]
];

console.log("===== DAFTAR TUGAS =====");
for (let tugas of daftarTugas) {
    console.log(
        "Tugas :", tugas[0],
        "| Prioritas :", Prioritas[tugas[1]]
    );
}


// SOAL 3 

function hitungDiskon(harga: number, diskon: number | string): number {
  let persenDiskon: number = 0;

  // Jika diskon berupa angka
  if (typeof diskon === "number") {
    persenDiskon = diskon;
  }
  // Jika diskon berupa kode kupon
  else if (diskon === "MAGANG10") {
    persenDiskon = 10;
  } else if (diskon === "NAWASENA20") {
    persenDiskon = 20;
  } else {
    persenDiskon = 0;
  }

  const potongan = (harga * persenDiskon) / 100;
  const hargaAkhir = harga - potongan;

  // Menampilkan hasil
  console.log("Harga Awal      : Rp", harga);
  console.log("Diskon          :", persenDiskon + "%");
  console.log("Potongan Harga  : Rp", potongan);
  console.log("Harga Akhir     : Rp", hargaAkhir);
  console.log("-----------------------------");

  return hargaAkhir;
}

// Contoh penggunaan
hitungDiskon(100000, 10);
hitungDiskon(500000, "MAGANG10");
hitungDiskon(300000, "NAWASENA20");
hitungDiskon(800000, "KODESALAH");
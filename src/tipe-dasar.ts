// src/tipe-dasar.ts

// ─── 1. TIPE PRIMITIF ────────────────────────────────────────────
let namaLengkap: string = "Nama Lengkap";
let usia: number = 30;
let aktif: boolean = true;

// Type inference — TypeScript bisa tebak sendiri
let kota = "Malang";      // TypeScript tahu ini string
let nilai = 95.5;          // TypeScript tahu ini number

// Coba uncomment baris di bawah dan lihat error-nya:
// kota = 100;   // Error: Type 'number' is not assignable to type 'string'

console.log(`
Nama Lengkap : ${namaLengkap}
Usia         : ${usia}
Aktif        : ${aktif}
Kota         : ${kota}
Nilai        : ${nilai}
`);

// ─── 2. ANY vs UNKNOWN ───────────────────────────────────────────
let dataAny: any = "hello";
dataAny = 42;           // OK — any mematikan semua pengecekan
dataAny = true;         // OK — tapi berbahaya!

let dataUnknown: unknown = "test";
// dataUnknown.toUpperCase(); // Error! Harus cek tipe dulu

if (typeof dataUnknown === "string") {
  console.log(dataUnknown.toUpperCase()); // OK — sudah dicek
}


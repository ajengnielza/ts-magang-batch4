// SOAL 1 - Interface Peserta

interface Peserta {
  readonly id: number;
  nama: string;
  sekolah: string;
  fase: number;
  nilaiAkhir?: number;
  github?: string;
}

// Data Peserta
const peserta1: Peserta = {
  id: 1,
  nama: "Ajeng",
  sekolah: "SMKN Negeri 5",
  fase: 1,
  nilaiAkhir: 90,
  github: "https://github.com/ajeng"
};

const peserta2: Peserta = {
  id: 2,
  nama: "Saida",
  sekolah: "SMKN Negeri 6",
  fase: 1
};

console.log("\n=== Data Peserta ===");

console.log("\nPeserta 1");
console.log("ID          :", peserta1.id);
console.log("Nama        :", peserta1.nama);
console.log("Sekolah     :", peserta1.sekolah);
console.log("Fase        :", peserta1.fase);
console.log("Nilai Akhir :", peserta1.nilaiAkhir);
console.log("GitHub      :", peserta1.github);

console.log("\nPeserta 2");
console.log("ID          :", peserta2.id);
console.log("Nama        :", peserta2.nama);
console.log("Sekolah     :", peserta2.sekolah);
console.log("Fase        :", peserta2.fase);
console.log("Nilai Akhir :", peserta2.nilaiAkhir);
console.log("GitHub      :", peserta2.github);


// SOAL 2 - Interface Mentor

interface Mentor {
  nama: string;
  readonly email: string;
  keahlian: string[];

  review(peserta: Peserta, catatan: string): string;
}

const mentor1: Mentor = {
  nama: "Pak Fajar",
  email: "fajar@email.com",
  keahlian: ["TypeScript", "JavaScript", "Laravel"],

  review(peserta: Peserta, catatan: string): string {
    return `Feedback untuk ${peserta.nama}: ${catatan}`;
  }
};

console.log("\n=== Data Mentor ===");

console.log("Nama      :", mentor1.nama);
console.log("Email     :", mentor1.email);
console.log("Keahlian  :", mentor1.keahlian.join(", "));

console.log("\nReview:");
console.log(
  mentor1.review(
    peserta1,
    "Nilai sudah bagus, terus tingkatkan kemampuan TypeScript."
  )
);


// SOAL 3 - Interface Kelas

interface Kelas {
  nama: string;
  peserta: Peserta[];
  mentor: Mentor;

  tambahPeserta(p: Peserta): void;
  cariPeserta(nama: string): Peserta | undefined;
}

const kelasTS: Kelas = {
  nama: "TypeScript Dasar",
  peserta: [],
  mentor: mentor1,

  tambahPeserta(p: Peserta): void {
    this.peserta.push(p);
  },

  cariPeserta(nama: string): Peserta | undefined {
    return this.peserta.find(
      peserta => peserta.nama.toLowerCase() === nama.toLowerCase()
    );
  }
};

// Menambahkan peserta
kelasTS.tambahPeserta(peserta1);
kelasTS.tambahPeserta(peserta2);

console.log("\n=== Data Kelas ===");

console.log("Nama Kelas :", kelasTS.nama);
console.log("Mentor     :", kelasTS.mentor.nama);

console.log("\nDaftar Peserta");

kelasTS.peserta.forEach((peserta, index) => {
  console.log(`${index + 1}. ${peserta.nama}`);
  console.log("   Sekolah :", peserta.sekolah);
  console.log("   Fase    :", peserta.fase);
  console.log("   Nilai   :", peserta.nilaiAkhir);
});


// HASIL PENCARIAN

console.log("\n=== Hasil Pencarian ===");

function tampilkanPeserta(nama: string) {
  const hasil = kelasTS.cariPeserta(nama);

  if (hasil) {
    console.log(`\nData ${nama}`);
    console.log("ID       :", hasil.id);
    console.log("Nama     :", hasil.nama);
    console.log("Sekolah  :", hasil.sekolah);
    console.log("Fase     :", hasil.fase);
    console.log("Nilai    :", hasil.nilaiAkhir ?? "-");
  } else {
    console.log(`\nPeserta dengan nama "${nama}" tidak ditemukan.`);
  }
}

tampilkanPeserta("Ajeng");
tampilkanPeserta("Azaa");
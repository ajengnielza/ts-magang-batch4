interface Peserta {
  id: number;
  nama: string;
  sekolah: string;
  fase: number;
  email: string;
}

interface JurnalHarian {
  id: number;
  pesertaId: number;
  tanggal: string;
  kegiatan: string;
  statusReview: "belum" | "sudah";
}

// =========================
// UTILITY TYPES
// =========================

type PesertaBaru = Omit<Peserta, "id">;

type PesertaUpdate = Partial<Omit<Peserta, "id">>;

type PesertaPublik = Pick<
  Peserta,
  "id" | "nama" | "sekolah"
>;

type JurnalBaru = Omit<
  JurnalHarian,
  "id" | "statusReview"
>;

type JurnalUpdate = Partial<
  Omit<JurnalHarian, "id" | "pesertaId">
>;

// =========================
// CONTOH PENGGUNAAN
// =========================

// PesertaBaru
const pesertaBaru: PesertaBaru = {
  nama: "Budi",
  sekolah: "SMK 6 Malang",
  fase: 1,
  email: "budi@mail.com"
};

// PesertaUpdate
const pesertaUpdate: PesertaUpdate = {
  fase: 2
};

// PesertaPublik
const pesertaPublik: PesertaPublik = {
  id: 1,
  nama: "Ajeng",
  sekolah: "SMK 6 Malang"
};

// JurnalBaru
const jurnalBaru: JurnalBaru = {
  pesertaId: 1,
  tanggal: "2026-08-20",
  kegiatan: "Mempelajari Advanced Types"
};

// JurnalUpdate
const jurnalUpdate: JurnalUpdate = {
  statusReview: "sudah"
};

console.log("Peserta Baru:", pesertaBaru);
console.log("Peserta Update:", pesertaUpdate);
console.log("Peserta Publik:", pesertaPublik);
console.log("Jurnal Baru:", jurnalBaru);
console.log("Jurnal Update:", jurnalUpdate);

export {};
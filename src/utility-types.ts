interface JurnalHarian {
  id: number;
  pesertaId: number;
  tanggal: string;
  kegiatan: string;
  hambatan: string;
  rencanaBesok: string;
  linkCommit: string;
  statusReview: "belum" | "sudah";
}

// Utility Types - Partial
type JurnalUpdate = Partial<JurnalHarian>;

function updateJurnal(
  id: number,
  data: JurnalUpdate
): void {
  console.log(`Update jurnal ${id}:`, data);
}

updateJurnal(1, {
  kegiatan: "Belajar TypeScript",
  statusReview: "sudah",
});
console.log("Jurnal berhasil diperbarui.");

// Utility Types - Omit
type JurnalBaru = Omit<
  JurnalHarian,
  "id" | "statusReview"
>;

function buatJurnal(
  data: JurnalBaru
): JurnalHarian {

  const jurnal: JurnalHarian = {
    ...data,
    id: Math.floor(Math.random() * 1000),
    statusReview: "belum"
  };

  return jurnal;
}


// Membuat jurnal baru
const jurnalBaru = buatJurnal({
  pesertaId: 1,
  tanggal: "2026-08-12",
  kegiatan: "Belajar Utility Types",
  hambatan: "Masih perlu memahami Record",
  rencanaBesok: "Belajar Generic Repository",
  linkCommit: "https://github.com/ajeng/commit/123"
});

console.log("Jurnal baru berhasil dibuat:", jurnalBaru);

// Utility Types - Pick
type JurnalRingkas = Pick<
  JurnalHarian,
  "id" | "tanggal" | "kegiatan"
>;

function getRingkasan(
  jurnal: JurnalHarian
): JurnalRingkas {

  return {
    id: jurnal.id,
    tanggal: jurnal.tanggal,
    kegiatan: jurnal.kegiatan
  };
}

const ringkasan = getRingkasan(jurnalBaru);
console.log("Ringkasan jurnal:", ringkasan);


// Utility Types - Record
type fase = "fase1" | "fase2" | "fase3" | "fase4" | "fase5";

const durasiFase: Record<fase, number> = {
    fase1: 2,
    fase2: 4,
    fase3: 6,
    fase4: 9,
    fase5: 11
}

const namaFase: Record<fase, string> = {
    fase1: "Fase 1 - Pengenalan",
    fase2: "Fase 2 - Dasar-dasar",
    fase3: "Fase 3 - Lanjutan",
    fase4: "Fase 4 - Proyek",
    fase5: "Fase 5 - Penyelesaian"
}

console.log("Fase 1:");
console.log("Nama:", namaFase.fase1);
console.log("Durasi:", durasiFase.fase1, "minggu");

console.log("\nFase 2:");
console.log("Nama:", namaFase.fase2);
console.log("Durasi:", durasiFase.fase2, "minggu");

console.log("\nFase 3:");
console.log("Nama:", namaFase.fase3);
console.log("Durasi:", durasiFase.fase3, "minggu");

console.log("\nFase 4:");
console.log("Nama:", namaFase.fase4);
console.log("Durasi:", durasiFase.fase4, "minggu");

console.log("\nFase 5:");
console.log("Nama:", namaFase.fase5);
console.log("Durasi:", durasiFase.fase5, "minggu");


// Utility Types - Partial dan Omit
type JurnalAman = Partial<Omit<JurnalHarian, "id">>;

const updateAman1: JurnalAman = {
  kegiatan: "Mempelajari Partial dan Omit"
};


// Hanya mengubah status review
const updateAman2: JurnalAman = {
  rencanaBesok: "tidak ada"
};

console.log("Update aman 1:", updateAman1);
console.log("Update aman 2:", updateAman2);
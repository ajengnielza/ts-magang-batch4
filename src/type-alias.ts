//Soal 1

type FaseProgram ="fase 1" | "fase 2" | "fase 3" | "fase 4" | "fase 5";
type NilaiAspek = number;
type HasilPenilaian = {
    kehadiran: NilaiAspek;
    materi: NilaiAspek;
    kode: NilaiAspek;
    problemSolving: NilaiAspek;
    komunikasi: NilaiAspek;
}

const penilaianAjeng: HasilPenilaian = {
  kehadiran: 10,
  materi: 9,
  kode: 8,
  problemSolving: 9,
  komunikasi: 10,
};
const faseAjeng: FaseProgram = "fase 2";

const penilaianAzalyn: HasilPenilaian = {
    kehadiran: 8,
    materi: 7,
    kode: 6,
    problemSolving: 7,
    komunikasi: 8,
};
const faseAzalyn: FaseProgram = "fase 5";

console.log("\n=== HASIL PENILAIAN ===");
console.log("Fase:", faseAjeng);
console.log("Hasil Penilaian:", penilaianAjeng);
console.log("Fase:", faseAzalyn);
console.log("Hasil Penilaian:", penilaianAzalyn);


//Soal 2

interface Absensi{
    tanggal: string;
    checkIn: string;
    checkOut: string;
}

interface JurnalHarian extends Absensi{
    kegiatan: string;
    hambatan: string;
    rencanaBesok: string;
    linkCommit?: string;
}

const jurnal1: JurnalHarian = {
  tanggal: "07-07-2026",
  checkIn: "08:00",
  checkOut: "17:00",
  kegiatan: "Belajar Type Alias dan Interface",
  hambatan: "Masih memahami perbedaan interface dan type",
  rencanaBesok: "Mengerjakan challenge berikutnya",
  linkCommit: "https://github.com/username/challenge1",
};

const jurnal2: JurnalHarian = {
  tanggal: "08-07-2026",
  checkIn: "08:05",
  checkOut: "17:00",
  kegiatan: "Belajar Extend Interface",
  hambatan: "Belum ada hambatan",
  rencanaBesok: "Belajar Generic",
};

console.log("\n=== JURNAL HARIAN ===");
console.log("\nJurnal 1");
console.log(jurnal1);
console.log("\nJurnal 2");
console.log(jurnal2);

// Soal 3

type PesertaStatus = "aktif" | "lulus" | "berhenti";

interface Peserta {
    id: number;
    nama: string;
    kelas: string;
    status: PesertaStatus;
}

const pesertaList: Peserta[] = [
    {
        id: 1,
        nama: "Ajeng",
        kelas: "13 Sija 1",
        status: "aktif",
    },
    {
        id: 2,
        nama: "Kiki",
        kelas: "13 SIJA 1",
        status: "lulus", 
    },
    {
        id: 3,
        nama: "Andi",
        kelas: "13 SIJA 2",
        status: "berhenti",
    },
    {
        id: 4,
        nama: "Saida",
        kelas: "13 SIJA 2",
        status: "aktif",
    },
];

//filter peserta
function filterPeserta(
  list: Peserta[],
  status: PesertaStatus
): Peserta[] {
  return list.filter((peserta) => peserta.status === status);
}

console.log("\n=== STATUS PESERTA ===");
console.log("Peserta Aktif:");
console.log(filterPeserta(pesertaList, "aktif"));

console.log("\nPeserta Lulus:");
console.log(filterPeserta(pesertaList, "lulus"));

console.log("\nPeserta Berhenti:");
console.log(filterPeserta(pesertaList, "berhenti"));


function hitungNilaiAkhir(tugas: number, uts: number, uas: number): number {
    return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}
console.log("===== HITUNG NILAI AKHIR =====");
console.log("Nilai Akhir:", hitungNilaiAkhir(80, 90, 85));

function buatPengumuman(judul:string, isi?:string, penting:boolean = false): string {
     if (penting) {
        judul = "[PENTING] " + judul;
    }

    if (isi) {
        return `${judul}: ${isi}`;
    }

    return judul;
}

console.log("\n===== BUAT PENGUMUMAN =====");
console.log(buatPengumuman("Ujian Akhir Semester", "ujian akan dilaksanakan pada tanggal 20 Desember 2024."));
console.log(buatPengumuman("Rapat Walikelas", "silakan datang ke kelas pada pukul 08.00 WIB.", true));
console.log(buatPengumuman("Libur Nasional", undefined, true));
console.log(buatPengumuman("Kegiatan Ekstrakurikuler"));

function logCheckIn(nama:string, waktu:string): void{
 console.log(`[CHECK-IN] ${nama} - ${waktu}`)
}
console.log("\n===== LOG CHECK-IN =====");
logCheckIn("Ajeng", "08:05");
logCheckIn("Saida", "09:10");
logCheckIn("Kiki", "12:15");

function formatDurasi(menit:number, tampilkanDetik:boolean = false): string {
    const jam = Math.floor(menit / 60);
    const sisaMenit = menit % 60;
if (tampilkanDetik) {
    return `${jam} jam ${sisaMenit} menit 0 detik`;
} return `${jam} jam ${sisaMenit} menit`; }

console.log("\n===== FORMAT DURASI =====");
console.log(formatDurasi(125));
console.log(formatDurasi(90, true));
console.log(formatDurasi(45));
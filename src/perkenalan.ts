
const namaSaya: string = "Ajeng Nielza itsna Mufida"; 
const asalSekolah: string = "SMKN 06 MALANG"; 
const kota: string = "Malang";
const sudahBelajarJavaScript: boolean = true; 
const targetSelesaiMagang: number = 2026; // tahun targe

// Buat fungsi perkenalan
function perkenalan(
  nama: string,
  sekolah: string,
  sudahJS: boolean

): string {
  const statusJS = sudahJS ? "sudah" : "belum";
  return `Nama saya ${nama} dari ${sekolah} kota ${kota}. Saya ${statusJS} belajar JavaScript sebelumnya. selesei pkl tahun ${targetSelesaiMagang}`;
}

console.log(perkenalan(namaSaya, asalSekolah, sudahBelajarJavaScript, ));
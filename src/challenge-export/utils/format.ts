export function formatTanggal(tanggal: Date): string {
  return tanggal.toLocaleDateString("id-ID");
}

export function formatNama(nama: string): string {
  return nama.toUpperCase();
}
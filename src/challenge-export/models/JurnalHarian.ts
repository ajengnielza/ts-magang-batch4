export default class JurnalHarian {
  constructor(
    public tanggal: string,
    public kegiatan: string
  ) {}

  tampilkan(): string {
    return `${this.tanggal}: ${this.kegiatan}`;
  }
}
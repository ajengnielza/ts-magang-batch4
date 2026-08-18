export default class Peserta {
  constructor(
    public nama: string,
    public sekolah: string
  ) {}

  info(): string {
    return `${this.nama} - ${this.sekolah}`;
  }
}
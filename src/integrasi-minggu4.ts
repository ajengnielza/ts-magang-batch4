// STUDI KASUS: Sistem Penilaian Peserta Magang (versi OOP lengkap)

interface DapatDinilai {
  hitungNilaiAkhir(): number;
  getGrade(): string;
}

abstract class PesertaDasar implements DapatDinilai {
  private static totalPeserta: number = 0;
  protected _nilaiList: number[] = [];
  public readonly id: number;

  constructor(
    public nama: string,
    public sekolah: string
  ) {
    PesertaDasar.totalPeserta++;
    this.id = PesertaDasar.totalPeserta;
  }

  static getTotalPeserta(): number {
    return PesertaDasar.totalPeserta;
  }

  tambahNilai(nilai: number): void {
    if (nilai < 0 || nilai > 100) {
      console.log(`Nilai harus antara 0-100 - ${this.nama}`);
      return;
    }
    this._nilaiList.push(nilai);
  }

  get rataRata(): number {
    if (this._nilaiList.length === 0) return 0;
    return this._nilaiList.reduce((a, b) => a + b, 0) / this._nilaiList.length;
  }

  // Abstract — beda cara hitung untuk tiap jenis peserta
  abstract hitungNilaiAkhir(): number;

  getGrade(): string {
    const nilai = this.hitungNilaiAkhir();
    if (nilai >= 90) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    return "D";
  }

  abstract getFaseMaksimal(): number;
}

class PesertaSMK5 extends PesertaDasar {
  hitungNilaiAkhir(): number {
    return this.rataRata; // sederhana, langsung rata-rata
  }

  getFaseMaksimal(): number {
    return 3;
  }
}

class PesertaSMK6 extends PesertaDasar {
  private bobotProject: number = 0.3;

  constructor(nama: string, sekolah: string) {
    super(nama, sekolah);
  }

  hitungNilaiAkhir(): number {
    // Bobot lebih kompleks: rata-rata + bonus dari project
    return this.rataRata * (1 - this.bobotProject) + (this.rataRata * this.bobotProject * 1.1);
  }

  getFaseMaksimal(): number {
    return 5;
  }
}

// Implementasi
const peserta: PesertaDasar[] = [
  new PesertaSMK5("Linda", "SMK 5 Malang"),
  new PesertaSMK5("Ajeng", "SMK 6 Malang"),
  new PesertaSMK6("Saidatul", "SMK 6 Malang"),
  new PesertaSMK5("Zidan", "SMK 5 MALANG"),
];

peserta[0].tambahNilai(120);
peserta[0].tambahNilai(88);
peserta[1].tambahNilai(92);
peserta[1].tambahNilai(95);
peserta[2].tambahNilai(80);
peserta[2].tambahNilai(85);
peserta[3].tambahNilai(70);
peserta[3].tambahNilai(75);

peserta.forEach((p) => {
  console.log(`${p.nama} (${p.sekolah}) - Grade: ${p.getGrade()} - Nilai: ${p.hitungNilaiAkhir().toFixed(2)} - Rata - rata: ${p.rataRata}`);
});

console.log(`Total peserta terdaftar: ${PesertaDasar.getTotalPeserta()}`);
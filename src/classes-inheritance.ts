
//class dasar dan constructor shorthand - Soal 1
class Mentor {
     constructor(
    public nama: string,
    public keahlian: string []
) {}

     tambahKeahlian(skill: string): void {
    this.keahlian.push(skill);
  }

    getInfo(): string{
        return `${this.nama} - keahlian: ${this.keahlian.join(", ")}`;
    }
}

const mentor1 = new Mentor("Pak Fajar", ["TypeScript", "Laravel"]);

mentor1.tambahKeahlian("Git");

console.log(mentor1.getInfo());

//Access modifier - Soal 2
class Nilai {
  private list: number[] = [];

  tambah(n: number): void {
    this.list.push(n);
  }

  rataRata(): number {
    if (this.list.length === 0) {
      return 0;
    }

    const total = this.list.reduce((sum, nilai) => sum + nilai, 0);

    return total / this.list.length;
  }

  tertinggi(): number {
    if (this.list.length === 0) {
      return 0;
    }

    return Math.max(...this.list);
  }
}

const nilai = new Nilai();

nilai.tambah(80);
nilai.tambah(90);
nilai.tambah(85);

console.log(nilai.rataRata());
console.log(nilai.tertinggi());

//Inheritance - Soal 3
class Kegiatan {
  constructor(
    public nama: string,
    public tanggal: string
  ) {}

  deskripsi(): string {
    return `${this.nama} pada tanggal ${this.tanggal}`;
  }
}

class JurnalHarian extends Kegiatan {
  constructor(
    nama: string,
    tanggal: string,
    public hambatan: string
  ) {
    super(nama, tanggal);
  }

  deskripsi(): string {
    return `${this.nama} pada tanggal ${this.tanggal}. Hambatan: ${this.hambatan}`;
  }
}

class SprintTask extends Kegiatan {
  constructor(
    nama: string,
    tanggal: string,
    public prioritas: "low" | "medium" | "high"
  ) {
    super(nama, tanggal);
  }

  deskripsi(): string {
    return `${this.nama} pada tanggal ${this.tanggal}. Prioritas: ${this.prioritas}`;
  }
}

const kegiatan = new Kegiatan(
    "Belajar TypeScript", "16 Juli 2026");

const jurnal = new JurnalHarian(
  "Belajar TypeScript",
  "16 Juli 2026",
  "Masih bingung class"
);

const task = new SprintTask(
  "Mengerjakan Challenge",
  "16 Juli 2026",
  "high"
);

console.log(kegiatan.deskripsi());
console.log(jurnal.deskripsi());
console.log(task.deskripsi());
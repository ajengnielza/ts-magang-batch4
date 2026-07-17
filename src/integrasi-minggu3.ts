// STUDI KASUS: Sistem Pengelolaan Peserta Magang

class Pengguna {
  constructor(
    public nama: string,
    public email: string,
    protected createdAt: string = new Date().toISOString()
  ) {}

  info(): string {
    return `${this.nama} (${this.email})`;
  }
}

class PesertaMagang extends Pengguna {
  private nilaiList: number[] = [];

  constructor(
    nama: string,
    email: string,
    public sekolah: string,
    public fase: number = 1
  ) {
    super(nama, email);
  }
  
  tambahNilai(nilai: number): void {
    this.nilaiList.push(nilai);
  }

  getRataRata(): number {
    if (this.nilaiList.length === 0) return 0;
    return this.nilaiList.reduce((a, b) => a + b, 0) / this.nilaiList.length;
  }

  info(): string {
    return `${super.info()} - ${this.sekolah}, Fase ${this.fase},`;
  }
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

function buatResponse<T>(
  data: T,
  message: string = "OK"
): ApiResponse<T> {
  return {
    success: true,
    data,
    message,
  };
}

function urutkanBerdasarkanNilai(
  peserta: PesertaMagang[],
  urutan: "asc" | "desc" = "desc"
): PesertaMagang[] {
  return [...peserta].sort((a, b) => {
    const diff = a.getRataRata() - b.getRataRata();
    return urutan === "asc" ? diff : -diff;
  });
}

const budi = new PesertaMagang(
  "Budi",
  "budi@email.com",
  "SMK 5 Malang",
  1
);

budi.tambahNilai(85);
budi.tambahNilai(90);

const ajeng = new PesertaMagang(
  "Ajeng",
  "ajeng@email.com",
  "SMK 5 Malang",
  1
);

ajeng.tambahNilai(92);
ajeng.tambahNilai(95);

const saida = new PesertaMagang(
    "Saida",
    "saida@email.com",
    "smk 6 malang",
    1
);

saida.tambahNilai(60);
saida.tambahNilai(98);
const semuaPeserta = [budi, ajeng, saida];

const terurut = urutkanBerdasarkanNilai(
  semuaPeserta,
  "desc"
);

terurut.forEach((p) => {
  console.log(
    `${p.info()} - Rata-rata: ${p.getRataRata()}`
  );
});

const response = buatResponse(
  terurut,
  "Data peserta berhasil dimuat"
);

console.log(response);
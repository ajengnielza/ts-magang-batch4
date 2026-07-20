abstract class Notifikasi {
    constructor(
        protected pesan: string,
    ){}

     abstract kirim(): string;

    log(): void {
    console.log("[LOG] Notifikasi dikirim");
  }
     
}

class NotifikasiEmail extends Notifikasi {
    kirim(): string {
        return`Email terkirim: ${this.pesan}`;
    }
}

class NotifikasiWhatsApp extends Notifikasi {
    kirim(): string {
        return`WhatsApp terkirim: ${this.pesan}`;
    }
}

class NotifikasiPush extends Notifikasi {
    kirim(): string {
        return`Push terkirim: ${this.pesan}`;
    }
}

const email = new NotifikasiEmail("Selamat datang!");
console.log(email.kirim());
email.log();

const WhatsApp = new NotifikasiWhatsApp("Pesanan Anda akan dikirim!");
console.log(WhatsApp.kirim());
WhatsApp.log();

const push = new NotifikasiPush("Ada diskon 10%!");
console.log(push.kirim());
push.log();

//Bentuk Geometri
abstract class BentukGeometri{
    abstract hitungLuas(): number

    abstract hitungKeliling(): number

    deskripsi(): string {
    return `
    Luas      : ${this.hitungLuas()}
    Keliling  : ${this.hitungKeliling()}`;
  }
}

class Lingkaran extends BentukGeometri {

  constructor(private jariJari: number) {
    super();
  }

  hitungLuas(): number {
    return Math.PI * this.jariJari * this.jariJari;
  }

  hitungKeliling(): number {
    return 2 * Math.PI * this.jariJari;
  }
}

class Persegi extends BentukGeometri {

  constructor(private sisi: number) {
    super();
  }

  hitungLuas(): number {
    return this.sisi * this.sisi;
  }

  hitungKeliling(): number {
    return 4 * this.sisi;
  }
}

class Segitiga extends BentukGeometri {

  constructor(
    private alas: number,
    private tinggi: number,
    private sisi: number
  ) {
    super();
  }

  hitungLuas(): number {
    return 0.5 * this.alas * this.tinggi;
  }

  hitungKeliling(): number {
    return this.sisi * 3;
  }
}

const lingkaran = new Lingkaran(14);
console.log("\n Lingkaran");
console.log(lingkaran.deskripsi());

const persegi = new Persegi(8);
console.log("\n Persegi");
console.log(persegi.deskripsi());

const segitiga = new Segitiga(6, 6, 6);
console.log("\n Segitiga");
console.log(segitiga.deskripsi());

abstract class TugasMagang{
    constructor(
        protected judul: string, 
        protected deadline: string
    ) {}
    abstract statusPengerjaan(): string;

    info(): string{
        return`Judul: ${this.judul}, Deadline: ${this.deadline}, Status: ${this.statusPengerjaan()}`
    }
}


class TugasHarian extends TugasMagang {
  statusPengerjaan(): string {
    const sekarang = new Date();
    const deadline = new Date(this.deadline);

    const selisihHari =
      (sekarang.getTime() - deadline.getTime()) /
      (1000 * 60 * 60 * 24);

    if (selisihHari >= 1) {
      return "Terlambat";
    }

    return "Masih dalam batas waktu";
  }
}



class TugasMingguan extends TugasMagang {
  statusPengerjaan(): string {
    const sekarang = new Date();
    const deadline = new Date(this.deadline);

    const selisihHari =
      (sekarang.getTime() - deadline.getTime()) /
      (1000 * 60 * 60 * 24);

    if (selisihHari >= 7) {
      return "Terlambat";
    }

    return "Masih dalam batas waktu";
  }
}

const tugasHarian = new TugasHarian(
  "Mengerjakan Latihan Abstract Class",
  "2026-07-19"
);

const tugasMingguan = new TugasMingguan(
  "Membuat Sistem Pengelolaan Magang",
  "2026-07-12"
);

console.log("===== TUGAS HARIAN =====");
console.log(tugasHarian.info());

console.log("===== TUGAS MINGGUAN =====");
console.log(tugasMingguan.info());
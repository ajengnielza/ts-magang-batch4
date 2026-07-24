interface BisaDinilai {
    hitungNilai(): number;
}

interface BisaDilaporkan {
    buatLaporan(): string;
}

class TugasHarian implements BisaDinilai, BisaDilaporkan {

    constructor(
        private nilai: number,
        private laporan: string
    ) {}

    hitungNilai(): number {
        return this.nilai;
    }

    buatLaporan(): string {
        return this.laporan;
    }
}

const ajeng = new TugasHarian(100, "Laporan Kue");

console.log("Nilai :", ajeng.hitungNilai());
console.log("Laporan :", ajeng.buatLaporan());


interface DapatDiverifikasi {
    isValid(): boolean;
}

abstract class NotifikasiDasar implements DapatDiverifikasi {

    constructor(protected pesan: string) {}

    abstract kirim(): string;

    abstract isValid(): boolean;
}


class NotifikasiUrgent extends NotifikasiDasar {

    kirim(): string {
        return `Notifikasi Urgent: ${this.pesan}`;
    }

    isValid(): boolean {
        return this.pesan.length > 0;
    }
}


class NotifikasiBiasa extends NotifikasiDasar {

    kirim(): string {
        return ` Notifikasi Biasa: ${this.pesan}`;
    }

    isValid(): boolean {
        return this.pesan.length > 0;
    }
}

const urgent = new NotifikasiUrgent("Server mengalami gangguan");
console.log(urgent.kirim());
console.log("Valid :", urgent.isValid());

abstract class Laporan {

    constructor(protected judul: string) {}

    abstract generate(): string;
}


class LaporanHarian extends Laporan {

    generate(): string {
        return `Laporan Harian : ${this.judul}`;
    }
}


class LaporanMingguan extends Laporan {

    generate(): string {
        return `Laporan Mingguan : ${this.judul}`;
    }
}


class LaporanBulanan extends Laporan {

    generate(): string {
        return `Laporan Bulanan : ${this.judul}`;
    }
}


const daftarLaporan: Laporan[] = [
    new LaporanHarian("Aktivitas Hari Senin"),
    new LaporanMingguan("Progress Minggu Ke-2"),
    new LaporanBulanan("Rekap Bulan Juli")
];

for (const laporan of daftarLaporan) {
    console.log(laporan.generate());
}


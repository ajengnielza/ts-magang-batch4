interface Entity {
  id: number;
}

// Generic Repository
class Repository<T extends Entity & {nama: string}> {
  protected items: T[] = [];
  private nextId = 1;

   create(data: Omit<T, "id">): T {
    if (data.nama.trim() === "") {
      throw new Error("Nama tidak boleh kosong.");
    }

    const newItem = {
      ...data,
      id: this.nextId++,
    } as T;

    this.items.push(newItem);

    return newItem;
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  findAll(): T[] {
    return [...this.items];
  }

  update(id: number, data: Partial<T>): T | undefined {
    const index = this.items.findIndex((item) => item.id === id);

    if (index === -1) return undefined;

    this.items[index] = {
      ...this.items[index],
      ...data,
    };

    return this.items[index];
  }

  delete(id: number): boolean {
    const index = this.items.findIndex((item) => item.id === id);

    if (index === -1) return false;

    this.items.splice(index, 1);
    return true;
  }

  count(): number {
    return this.items.length;
  }
}

// Entity Mentor
interface Mentor extends Entity {
  nama: string;
  keahlian: string[];
}

const mentorRepo = new Repository<Mentor>();

console.log("=== Demo Repository Pattern ===");
mentorRepo.create({ nama: "Pak Kaivan", keahlian: ["laravel", "php"] });
mentorRepo.create({ nama: "Bu Gege", keahlian: ["desain", "typescript"] });
mentorRepo.create({ nama: "Pak reza", keahlian: ["figma", "JavaScript"] });

console.log("Semua mentor setelah create:");
console.log(mentorRepo.findAll());

console.log("Mentor dengan id 1:");
console.log(mentorRepo.findById(1));

mentorRepo.update(1, { keahlian: ["laravel", "MySQL"] });
console.log("Setelah di update");
console.log(mentorRepo.findById(1));

mentorRepo.delete(2);
console.log("Semua mentor setelah delete id 2:");
console.log(mentorRepo.findAll());

// peserta
interface Peserta extends Entity{
    nama: string;
    sekolah: string;
    fase: number;
}

class PesertaRepository extends Repository<Peserta> {
    findBySekolah(sekolah: string): Peserta[] {
    return this.items.filter((peserta) => peserta.sekolah === sekolah);
  }

  findByFase(fase: number): Peserta[] {
    return this.items.filter((peserta) => peserta.fase === fase);
  }
}

const pesertaRepo = new PesertaRepository()
pesertaRepo.create({
    nama: "Ajeng",
    sekolah: "SMKN 6 Malang",
    fase: 1,
})

pesertaRepo.create({
    nama: "Aza",
    sekolah: "SMKN 5 Malang",
    fase: 1,
})

pesertaRepo.create({
    nama: "Kiki",
    sekolah: "SMKN 6 Malang",
    fase: 2,
})

console.log("Semua Peserta");
console.log(pesertaRepo.findAll());

console.log("Sekolah SMKN 5");
console.log(pesertaRepo.findBySekolah("SMKN 5 Malang"));

console.log("Fase 1");
console.log(pesertaRepo.findByFase(1));

try {
  pesertaRepo.create({
    nama: "",
    sekolah: "SMKN 5 Malang",
    fase: 1,
  });
} catch (error) {
  if (error instanceof Error) {
    console.log("Terjadi error:", error.message);
  }
}

export {};
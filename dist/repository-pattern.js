"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic Repository
class Repository {
    constructor() {
        this.items = [];
        this.nextId = 1;
    }
    create(data) {
        if (data.nama.trim() === "") {
            throw new Error("Nama tidak boleh kosong.");
        }
        const newItem = {
            ...data,
            id: this.nextId++,
        };
        this.items.push(newItem);
        return newItem;
    }
    findById(id) {
        return this.items.find((item) => item.id === id);
    }
    findAll() {
        return [...this.items];
    }
    update(id, data) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1)
            return undefined;
        this.items[index] = {
            ...this.items[index],
            ...data,
        };
        return this.items[index];
    }
    delete(id) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1)
            return false;
        this.items.splice(index, 1);
        return true;
    }
    count() {
        return this.items.length;
    }
}
const mentorRepo = new Repository();
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
class PesertaRepository extends Repository {
    findBySekolah(sekolah) {
        return this.items.filter((peserta) => peserta.sekolah === sekolah);
    }
    findByFase(fase) {
        return this.items.filter((peserta) => peserta.fase === fase);
    }
}
const pesertaRepo = new PesertaRepository();
pesertaRepo.create({
    nama: "Ajeng",
    sekolah: "SMKN 6 Malang",
    fase: 1,
});
pesertaRepo.create({
    nama: "Aza",
    sekolah: "SMKN 5 Malang",
    fase: 1,
});
pesertaRepo.create({
    nama: "Kiki",
    sekolah: "SMKN 6 Malang",
    fase: 2,
});
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
}
catch (error) {
    if (error instanceof Error) {
        console.log("Terjadi error:", error.message);
    }
}
//# sourceMappingURL=repository-pattern.js.map
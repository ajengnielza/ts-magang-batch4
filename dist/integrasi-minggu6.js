"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventBus {
    constructor() {
        this.handlers = {};
    }
    on(event, handler) {
        if (!this.handlers[event]) {
            this.handlers[event] = [];
        }
        this.handlers[event].push(handler);
    }
    emit(event, payload) {
        const eventHandlers = this.handlers[event];
        if (!eventHandlers) {
            return;
        }
        eventHandlers.forEach((handler) => {
            handler(payload);
        });
    }
}
const bus = new EventBus();
bus.on("peserta:created", (peserta) => {
    console.log(`Peserta baru: ${peserta.nama} dari ${peserta.sekolah}`);
});
bus.on("peserta:updated", (data) => {
    console.log(`Peserta dengan ID ${data.id} diupdate:`, data.changes);
});
bus.on("peserta:deleted", (data) => {
    console.log(`Peserta dengan ID ${data.id} dihapus`);
});
bus.on("jurnal:created", (jurnal) => {
    console.log(`Jurnal baru untuk peserta ${jurnal.pesertaId}: ${jurnal.kegiatan}`);
});
bus.on("jurnal:updated", (data) => {
    console.log(`Jurnal ${data.id} diupdate:`, data.changes);
});
bus.on("jurnal:deleted", (data) => {
    console.log(`Jurnal dengan ID ${data.id} dihapus`);
});
bus.emit("peserta:created", {
    id: 1,
    nama: "Ajeng",
    sekolah: "SMK 6 Malang",
    fase: 1,
    email: "ajeng@mail.com"
});
bus.emit("peserta:updated", {
    id: 1,
    changes: {
        fase: 2
    }
});
bus.emit("peserta:deleted", {
    id: 1
});
bus.emit("jurnal:created", {
    id: 10,
    pesertaId: 1,
    tanggal: "2026-08-14",
    kegiatan: "Mempelajari Template Literal Types",
    statusReview: "belum"
});
bus.emit("jurnal:updated", {
    id: 10,
    changes: {
        statusReview: "sudah"
    }
});
bus.emit("jurnal:deleted", {
    id: 10
});
const daftarPeserta = {
    items: [
        {
            id: 1,
            nama: "Ajeng",
            sekolah: "SMK 6 Malang",
            fase: 1,
            email: "ajeng@mail.com"
        },
        {
            id: 2,
            nama: "saida",
            sekolah: "SMK 6 Malang",
            fase: 2,
            email: "saida@mail.com"
        }
    ],
    total: 2
};
const satuPeserta = {
    item: {
        id: 1,
        nama: "Ajeng",
        sekolah: "SMK 6 Malang",
        fase: 1,
        email: "ajeng@mail.com"
    }
};
const pesertaGetters = {
    getId: () => 1,
    getNama: () => "Ajeng",
    getSekolah: () => "SMK 6 Malang",
    getFase: () => 1,
    getEmail: () => "ajeng@mail.com"
};
console.log("Daftar peserta:", daftarPeserta);
console.log("Satu peserta:", satuPeserta);
console.log("Getter nama:", pesertaGetters.getNama());
//# sourceMappingURL=integrasi-minggu6.js.map
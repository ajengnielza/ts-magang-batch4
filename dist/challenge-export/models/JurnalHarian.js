"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JurnalHarian {
    constructor(tanggal, kegiatan) {
        this.tanggal = tanggal;
        this.kegiatan = kegiatan;
    }
    tampilkan() {
        return `${this.tanggal}: ${this.kegiatan}`;
    }
}
exports.default = JurnalHarian;
//# sourceMappingURL=JurnalHarian.js.map
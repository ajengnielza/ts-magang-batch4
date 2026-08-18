"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTanggal = formatTanggal;
exports.formatNama = formatNama;
function formatTanggal(tanggal) {
    return tanggal.toLocaleDateString("id-ID");
}
function formatNama(nama) {
    return nama.toUpperCase();
}
//# sourceMappingURL=format.js.map
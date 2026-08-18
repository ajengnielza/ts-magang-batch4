"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmailValid = isEmailValid;
exports.isNilaiValid = isNilaiValid;
function isEmailValid(email) {
    return email.includes("@");
}
function isNilaiValid(nilai) {
    return nilai >= 0 && nilai <= 100;
}
//# sourceMappingURL=validasi.js.map
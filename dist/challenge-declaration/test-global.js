"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pesertaId = "P001";
const waktu = "2026-08-19";
const config = {
    appName: "SiTrack",
    version: "1.0.0",
    maxPeserta: 100
};
console.log(pesertaId);
console.log(waktu);
console.log(config);
const helper_1 = require("./utils/helper");
(0, helper_1.tulisFile)("data-test.txt", "Saya sedang belajar Declaration File dan @types");
const hasil = (0, helper_1.bacaFile)("data-test.txt");
console.log(hasil);
//# sourceMappingURL=test-global.js.map
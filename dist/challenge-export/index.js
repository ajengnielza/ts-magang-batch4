"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const utils_1 = require("./utils");
const peserta1 = new models_1.Peserta("Ajeng", "SMKN 6 Malang");
const peserta2 = new models_1.Peserta("saida", "SMKN 6 Malang");
console.log(peserta1.info());
console.log(peserta2.info());
const jurnal = new models_1.JurnalHarian((0, utils_1.formatTanggal)(new Date()), "Mempelajari export dan import TypeScript");
console.log(jurnal.tampilkan());
const status = "aktif";
console.log("Status:", status);
const validate = {
    email(email) {
        return (0, utils_1.isEmailValid)(email);
    }
};
console.log(validate.email("ajeng@gmail.com"));
console.log(validate.email("ajenggmail.com"));
//# sourceMappingURL=index.js.map
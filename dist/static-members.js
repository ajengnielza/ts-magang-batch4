"use strict";
//Static property
Object.defineProperty(exports, "__esModule", { value: true });
class SprintTask {
    constructor(namaTask) {
        this.namaTask = namaTask;
        SprintTask.totalTask++;
    }
    static getTotalTask() {
        return SprintTask.totalTask;
    }
}
SprintTask.totalTask = 0;
const task1 = new SprintTask("Login");
const task2 = new SprintTask("Register");
const task3 = new SprintTask("Dashboard");
const task4 = new SprintTask("Profile");
const task5 = new SprintTask("Logout");
console.log("Total Task :", SprintTask.getTotalTask());
// Static Readonly
class AppConfig {
    static getInfo() {
        return `
    APP NAME: ${AppConfig.APP_NAME}
    VERSION : ${AppConfig.VERSION}
    MAX PESERTA: ${AppConfig.MAX_PESERTA}; `;
    }
}
AppConfig.APP_NAME = "https://api.nawasena.com";
AppConfig.VERSION = "1.0.0";
AppConfig.MAX_PESERTA = 4;
console.log("Info :", AppConfig.getInfo());
// Static factory
class Nilai {
    constructor(nilai) {
        this.nilai = nilai;
    }
    static buat(nilai) {
        if (nilai < 0 || nilai > 100) {
            return null;
        }
        return new Nilai(nilai);
    }
    getNilai() {
        return this.nilai;
    }
}
const nilai1 = Nilai.buat(98);
const nilai2 = Nilai.buat(120);
if (nilai1) {
    console.log("Nilai 1:", nilai1.getNilai());
}
else {
    console.log("Nilai 1 gagal dibuat");
}
if (nilai2) {
    console.log("Nilai 2:", nilai2.getNilai());
}
else {
    console.log("Nilai 2 gagal dibuat");
}
;
// Static utility
class StringHelper {
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static slugify(str) {
        return str.toLowerCase().replace(/\s+/g, "-");
    }
    static truncate(str, maxLength) {
        if (str.length <= maxLength) {
            return str;
        }
        return str.slice(0, maxLength) + "...";
    }
}
console.log(StringHelper.capitalize("ajeng"));
console.log(StringHelper.slugify("Belajar Static Typescript"));
console.log(StringHelper.truncate("Belajar Materi Typescript Static", 15));
//# sourceMappingURL=static-members.js.map
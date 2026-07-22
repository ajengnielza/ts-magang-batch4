"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// getter - setter pada saldo 
class Akun {
    constructor(saldoAwal) {
        this._saldo = saldoAwal;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(nilai) {
        if (nilai < 0) {
            console.log("Saldo tidak boleh negatif!");
            return;
        }
        this._saldo = nilai;
    }
    tambahSaldo(jumlah) {
        this._saldo += jumlah;
    }
    tarikSaldo(jumlah) {
        if (jumlah > this._saldo) {
            return false;
        }
        this._saldo -= jumlah;
        return true;
    }
}
const akun = new Akun(100000);
akun.tambahSaldo(50000);
console.log(akun.saldo);
console.log(akun.tarikSaldo(120000));
console.log(akun.saldo);
console.log(akun.tarikSaldo(50000));
console.log(akun.saldo);
//get computed value
class PesertaMagang {
    constructor() {
        this.nilaiList = [];
    }
    tambahNilai(nilai) {
        this.nilaiList.push(nilai);
    }
    get rataRata() {
        if (this.nilaiList.length === 0)
            return 0;
        return (this.nilaiList.reduce((a, b) => a + b, 0) /
            this.nilaiList.length);
    }
    get nilaiTertinggi() {
        if (this.nilaiList.length === 0)
            return 0;
        return Math.max(...this.nilaiList);
    }
    get grade() {
        if (this.rataRata >= 90)
            return "A";
        if (this.rataRata >= 75)
            return "B";
        if (this.rataRata >= 60)
            return "C";
        return "D";
    }
}
const peserta = new PesertaMagang();
peserta.tambahNilai(90);
peserta.tambahNilai(95);
peserta.tambahNilai(80);
console.log(peserta.rataRata);
console.log(peserta.nilaiTertinggi);
console.log(peserta.grade);
// implementasi getter-setter pada login
class Password {
    constructor() {
        this._value = "";
    }
    set value(input) {
        if (input.length < 8) {
            throw new Error("Password minimal 8 karakter");
        }
        if (!/\d/.test(input)) {
            throw new Error("Password harus mengandung angka");
        }
        this._value = input;
    }
    get value() {
        return "********";
    }
    verifikasi(input) {
        return input === this._value;
    }
}
const password = new Password();
try {
    password.value = "abc";
}
catch (e) {
    console.log(e.message);
}
password.value = "abc12345";
console.log(password.value);
console.log(password.verifikasi("abc12345"));
console.log(password.verifikasi("password"));
//# sourceMappingURL=getter-setter.js.map
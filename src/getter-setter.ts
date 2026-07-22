
// getter - setter pada saldo 
class Akun {
  private _saldo: number;

  constructor(saldoAwal: number) {
    this._saldo = saldoAwal;
  }

  get saldo(): number {
    return this._saldo;
  }

  set saldo(nilai: number) {
    if (nilai < 0) {
      console.log("Saldo tidak boleh negatif!");
      return;
    }

    this._saldo = nilai;
  }

  tambahSaldo(jumlah: number): void {
    this._saldo += jumlah;
  }

  tarikSaldo(jumlah: number): boolean {
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
  private nilaiList: number[] = [];

  tambahNilai(nilai: number): void {
    this.nilaiList.push(nilai);
  }

  get rataRata(): number {
    if (this.nilaiList.length === 0) return 0;

    return (
      this.nilaiList.reduce((a, b) => a + b, 0) /
      this.nilaiList.length
    );
  }

  get nilaiTertinggi(): number {
    if (this.nilaiList.length === 0) return 0;

    return Math.max(...this.nilaiList);
  }

  get grade(): string {
    if (this.rataRata >= 90) return "A";
    if (this.rataRata >= 75) return "B";
    if (this.rataRata >= 60) return "C";

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
  private _value: string = "";

  set value(input: string) {
    if (input.length < 8) {
      throw new Error("Password minimal 8 karakter");
    }

    if (!/\d/.test(input)) {
      throw new Error("Password harus mengandung angka");
    }

    this._value = input;
  }

  get value(): string {
    return "********";
  }

  verifikasi(input: string): boolean {
    return input === this._value;
  }
}

const password = new Password();

try {
  password.value = "abc";
} catch (e) {
  console.log((e as Error).message);
}

password.value = "abc12345";

console.log(password.value);

console.log(password.verifikasi("abc12345"));
console.log(password.verifikasi("password"));